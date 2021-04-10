import { Entity, schema } from '@rest-hooks/normalizr';
import type { AbstractInstanceType, Schema } from '@rest-hooks/normalizr';
import { Endpoint } from '@rest-hooks/endpoint';
import type {
  EndpointExtraOptions,
  SchemaDetail,
  SchemaList,
} from '@rest-hooks/endpoint';

import { ReadShape, MutateShape, DeleteShape } from './legacy';
import { NotImplementedError } from './errors';
import paramsToString from './paramsToString';
import { RestEndpoint } from './types';

/** Represents an entity to be retrieved from a server.
 * Typically 1:1 with a url endpoint.
 *
 * This can be a useful organization for many REST-like API patterns.
 */
export default abstract class SimpleResource extends Entity {
  // typescript todo: require subclasses to implement
  /** Used as base of url construction */
  static readonly urlRoot: string;

  static toString() {
    return `${this.name}::${this.urlRoot}`;
  }

  /** Returns the globally unique identifier for this SimpleResource */
  static get key(): string {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      if (this.urlRoot === undefined) {
        throw new Error(`urlRoot is not defined for Resource "${this.name}"

  Resources require a 'static urlRoot' or 'static get key()' defined.
  (See https://resthooks.io/docs/api/resource#static-urlroot-string)
`);
      }
    }
    return this.urlRoot;
  }

  /** URL to find this SimpleResource */
  declare readonly url: string;

  private declare __url?: string;

  /** Get the url for a SimpleResource
   *
   * Default implementation conforms to common REST patterns
   */
  static url(urlParams: Readonly<Record<string, any>>): string {
    if (
      Object.prototype.hasOwnProperty.call(urlParams, 'url') &&
      urlParams.url &&
      typeof urlParams.url === 'string'
    ) {
      return urlParams.url;
    }
    if (this.pk(urlParams as any) !== undefined) {
      if (this.urlRoot.endsWith('/')) {
        return `${this.urlRoot}${this.pk(urlParams as any)}`;
      }
      return `${this.urlRoot}/${this.pk(urlParams as any)}`;
    }
    return this.urlRoot;
  }

  /** Get the url for many SimpleResources
   *
   * Default implementation conforms to common REST patterns
   */
  static listUrl(
    searchParams: Readonly<Record<string, string | number | boolean>> = {},
  ): string {
    if (Object.keys(searchParams).length) {
      return `${this.urlRoot}?${paramsToString(searchParams)}`;
    }
    return this.urlRoot;
  }

  /** Perform network request and resolve with json body */
  static fetch(input: RequestInfo, init: RequestInit): Promise<any> {
    // typescript currently doesn't allow abstract static methods
    throw new NotImplementedError();
  }

  /** Perform network request and resolve with HTTP Response */
  static fetchResponse(
    input: RequestInfo,
    init: RequestInit,
  ): Promise<Response> {
    // typescript currently doesn't allow abstract static methods
    throw new NotImplementedError();
  }

  /** Init options for fetch - run at fetch */
  static getFetchInit(init: Readonly<RequestInit>): RequestInit {
    return init;
  }

  /** Init options for fetch - run at render */
  static useFetchInit(init: Readonly<RequestInit>): RequestInit {
    return init;
  }

  /** Get the request options for this SimpleResource */
  static getEndpointExtra(): EndpointExtraOptions | undefined {
    return;
  }

  /** Field where endpoint cache is stored */
  protected static readonly cacheSymbol = Symbol('memo');

  /** Used to memoize endpoint methods
   *
   * Relies on existance of runInit() member.
   */
  protected static memo<T>(name: string, construct: () => T): T {
    if (!Object.hasOwnProperty.call(this, this.cacheSymbol)) {
      (this as any)[this.cacheSymbol] = {};
    }
    const cache = (this as any)[this.cacheSymbol];
    if (!(name in cache)) {
      cache[name] = construct();
    }
    return cache[name].useFetchInit() as T;
  }

  /** Base endpoint that uses all the hooks provided by Resource  */
  protected static endpoint(): RestEndpoint<
    (this: RestEndpoint, params: any) => Promise<any>,
    Schema | undefined,
    undefined
  > {
    return this.memo('#endpoint', () => {
      // eslint-disable-next-line
      const resource = this;
      const instanceFetch = this.fetch.bind(this);
      const url = this.url.bind(this);

      return new Endpoint(
        function (params: any) {
          return instanceFetch(this.url(params), this.getFetchInit());
        },
        {
          ...this.getEndpointExtra(),
          key: function (this: any, params: any) {
            return `${this.method} ${this.url(params)}`;
          },
          url,
          fetchInit: {} as RequestInit,
          useFetchInit(this: any) {
            this.fetchInit = resource.useFetchInit(this.fetchInit);
            return this;
          },
          getFetchInit(this: any, body?: any) {
            if (isPojo(body)) {
              body = JSON.stringify(body);
            }
            return resource.getFetchInit({
              ...this.fetchInit,
              method: this.method,
              signal: this.signal,
              body,
            });
          },
          method: 'GET',
          signal: undefined as AbortSignal | undefined,
        },
      );
    });
  }

  /** Base endpoint but for sideEffects */
  protected static endpointMutate(): RestEndpoint<
    (this: RestEndpoint, params: any, body?: any) => Promise<any>,
    Schema | undefined,
    true
  > {
    const instanceFetch = this.fetch.bind(this);
    return this.memo('#endpointMutate', () =>
      this.endpoint().extend({
        fetch(this: RestEndpoint, params: any, body: any) {
          return instanceFetch(this.url(params), this.getFetchInit(body));
        },
        sideEffect: true,
        method: 'POST',
      }),
    );
  }

  /** Endpoint to get a single entity */
  static detail<T extends typeof SimpleResource>(
    this: T,
  ): RestEndpoint<
    (this: RestEndpoint, params: any) => Promise<any>,
    SchemaDetail<AbstractInstanceType<T>>,
    undefined
  > {
    return this.memo('#detail', () =>
      this.endpoint().extend({
        schema: this,
      }),
    );
  }

  /** Endpoint to get a list of entities */
  static list<T extends typeof SimpleResource>(
    this: T,
  ): RestEndpoint<
    (this: RestEndpoint, params: any) => Promise<any>,
    SchemaList<AbstractInstanceType<T>>,
    undefined
  > {
    return this.memo('#list', () =>
      this.endpoint().extend({
        schema: [this],
        url: this.listUrl.bind(this),
      }),
    );
  }

  /** Endpoint to create a new entity (post) */
  static create<T extends typeof SimpleResource>(
    this: T,
  ): RestEndpoint<
    (this: RestEndpoint, params: any, body: any) => Promise<any>,
    SchemaDetail<AbstractInstanceType<T>>,
    true
  > {
    //Partial<AbstractInstanceType<T>>
    return this.memo('#create', () =>
      this.endpointMutate().extend({
        schema: this,
        url: this.listUrl.bind(this),
      }),
    );
  }

  /** Endpoint to update an existing entity (put) */
  static update<T extends typeof SimpleResource>(
    this: T,
  ): RestEndpoint<
    (this: RestEndpoint, params: any, body: any) => Promise<any>,
    SchemaDetail<AbstractInstanceType<T>>,
    true
  > {
    return this.memo('#update', () =>
      this.endpointMutate().extend({
        method: 'PUT',
        schema: this,
      }),
    );
  }

  /** Endpoint to update a subset of fields of an existing entity (patch) */
  static partialUpdate<T extends typeof SimpleResource>(
    this: T,
  ): RestEndpoint<
    (this: RestEndpoint, params: any, body: any) => Promise<any>,
    SchemaDetail<AbstractInstanceType<T>>,
    true
  > {
    return this.memo('#partialUpdate', () =>
      this.endpointMutate().extend({
        method: 'PATCH',
        schema: this,
      }),
    );
  }

  /** Endpoint to delete an entity (delete) */
  static delete<T extends typeof SimpleResource>(
    this: T,
  ): RestEndpoint<
    (this: RestEndpoint, params: any) => Promise<any>,
    schema.Delete<T>,
    true
  > {
    const endpoint = this.endpointMutate();
    return this.memo('#delete', () =>
      endpoint.extend({
        fetch(this: RestEndpoint, params: any) {
          return endpoint.fetch.call(this, params).then(() => params);
        },
        method: 'DELETE',
        schema: new schema.Delete(this),
      }),
    );
  }

  /** @deprecated */
  static fetchOptionsPlugin(options: RequestInit): RequestInit {
    /* istanbul ignore next */
    return this.getFetchInit(options);
  }

  /** @deprecated */
  static getFetchOptions() {
    /* istanbul ignore next */
    return this.getEndpointExtra();
  }

  /** @deprecated */
  static detailShape<T extends typeof SimpleResource>(
    this: T,
  ): ReadShape<SchemaDetail<Readonly<AbstractInstanceType<T>>>> {
    const endpoint = this.detail();
    const fetch = endpoint.fetch.bind(endpoint as any);
    return { ...endpoint, fetch };
  }

  /** @deprecated */
  static listShape<T extends typeof SimpleResource>(
    this: T,
  ): ReadShape<SchemaList<Readonly<AbstractInstanceType<T>>>> {
    const endpoint = this.list();
    const fetch = endpoint.fetch.bind(endpoint as any);
    return { ...endpoint, fetch };
  }

  /** @deprecated */
  static createShape<T extends typeof SimpleResource>(
    this: T,
  ): MutateShape<
    SchemaDetail<Readonly<AbstractInstanceType<T>>>,
    Readonly<object>,
    Partial<AbstractInstanceType<T>>
  > {
    const endpoint = this.create();
    const fetch = endpoint.fetch.bind(endpoint as any);
    return { ...endpoint, fetch };
  }

  /** @deprecated */
  static updateShape<T extends typeof SimpleResource>(
    this: T,
  ): MutateShape<
    SchemaDetail<Readonly<AbstractInstanceType<T>>>,
    Readonly<object>,
    Partial<AbstractInstanceType<T>>
  > {
    const endpoint = this.update();
    const fetch = endpoint.fetch.bind(endpoint as any);
    return { ...endpoint, fetch };
  }

  /** @deprecated */
  static partialUpdateShape<T extends typeof SimpleResource>(
    this: T,
  ): MutateShape<
    SchemaDetail<Readonly<AbstractInstanceType<T>>>,
    Readonly<object>,
    Partial<AbstractInstanceType<T>>
  > {
    const endpoint = this.partialUpdate();
    const fetch = endpoint.fetch.bind(endpoint as any);
    return { ...endpoint, fetch };
  }

  /** @deprecated */
  static deleteShape<T extends typeof SimpleResource>(
    this: T,
  ): DeleteShape<schema.Delete<T>, Readonly<object>> {
    const endpoint = this.delete();
    const fetch = endpoint.fetch.bind(endpoint as any);
    return { ...endpoint, fetch };
  }
}

// We're only allowing this to get set for descendants but
// by default we want Typescript to treat it as readonly.
Object.defineProperty(SimpleResource.prototype, 'url', {
  get(): string {
    if (this.__url !== undefined) return this.__url;
    // typescript thinks constructor is just a function
    const Static = this.constructor as typeof SimpleResource;
    return Static.url(this);
  },
  set(url: string) {
    this.__url = url;
  },
});

const proto = Object.prototype;
const gpo = Object.getPrototypeOf;

function isPojo(obj: unknown): obj is Record<string, any> {
  if (obj === null || typeof obj !== 'object') {
    return false;
  }
  return gpo(obj) === proto;
}
