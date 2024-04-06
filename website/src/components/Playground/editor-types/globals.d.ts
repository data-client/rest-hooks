import { PathFunction } from 'path-to-regexp';
import { State, Controller, Manager, NetworkError as NetworkError$2, EndpointInterface as EndpointInterface$1, FetchFunction as FetchFunction$1, Schema as Schema$1, DenormalizeNullable as DenormalizeNullable$1, ResolveType as ResolveType$1, Denormalize as Denormalize$1, Queryable as Queryable$1, SchemaArgs as SchemaArgs$1, UnknownError as UnknownError$1, ErrorTypes as ErrorTypes$2 } from '@data-client/core';
export { Manager } from '@data-client/core';
import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface NetworkError$1 extends Error {
    status: number;
    response?: Response;
}
interface UnknownError extends Error {
    status?: unknown;
    response?: unknown;
}
type ErrorTypes$1 = NetworkError$1 | UnknownError;

/** Attempts to infer reasonable input type to construct an Entity */
type EntityFields<U> = {
    readonly [K in keyof U as U[K] extends (...args: any) => any ? never : K]?: U[K] extends number ? U[K] | string : U[K] extends string ? U[K] | number : U[K];
};

type AbstractInstanceType<T> = T extends new (...args: any) => infer U ? U : T extends {
    prototype: infer U;
} ? U : never;
type DenormalizeObject<S extends Record<string, any>> = {
    [K in keyof S]: S[K] extends Schema ? Denormalize<S[K]> : S[K];
};
type DenormalizeNullableObject<S extends Record<string, any>> = {
    [K in keyof S]: S[K] extends Schema ? DenormalizeNullable<S[K]> : S[K];
};
type NormalizeObject<S extends Record<string, any>> = {
    [K in keyof S]: S[K] extends Schema ? Normalize<S[K]> : S[K];
};
type NormalizedNullableObject<S extends Record<string, any>> = {
    [K in keyof S]: S[K] extends Schema ? NormalizeNullable<S[K]> : S[K];
};
interface NestedSchemaClass<T = any> {
    schema: Record<string, Schema>;
    prototype: T;
}
interface RecordClass<T = any> extends NestedSchemaClass<T> {
    fromJS: (...args: any) => AbstractInstanceType<T>;
}
type DenormalizeNullableNestedSchema<S extends NestedSchemaClass> = keyof S['schema'] extends never ? S['prototype'] : string extends keyof S['schema'] ? S['prototype'] : S['prototype'] & {
    [K in keyof S['schema']]: DenormalizeNullable<S['schema'][K]>;
};
type NormalizeReturnType<T> = T extends (...args: any) => infer R ? R : never;
type Denormalize<S> = S extends EntityInterface<infer U> ? U : S extends RecordClass ? AbstractInstanceType<S> : S extends {
    denormalize: (...args: any) => any;
} ? ReturnType<S['denormalize']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Denormalize<F>[] : S extends {
    [K: string]: any;
} ? DenormalizeObject<S> : S;
type DenormalizeNullable<S> = S extends EntityInterface<any> ? DenormalizeNullableNestedSchema<S> | undefined : S extends RecordClass ? DenormalizeNullableNestedSchema<S> : S extends {
    _denormalizeNullable: (...args: any) => any;
} ? ReturnType<S['_denormalizeNullable']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Denormalize<F>[] | undefined : S extends {
    [K: string]: any;
} ? DenormalizeNullableObject<S> : S;
type Normalize<S> = S extends EntityInterface ? string : S extends RecordClass ? NormalizeObject<S['schema']> : S extends {
    normalize: (...args: any) => any;
} ? NormalizeReturnType<S['normalize']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Normalize<F>[] : S extends {
    [K: string]: any;
} ? NormalizeObject<S> : S;
type NormalizeNullable<S> = S extends EntityInterface ? string | undefined : S extends RecordClass ? NormalizedNullableObject<S['schema']> : S extends {
    _normalizeNullable: (...args: any) => any;
} ? NormalizeReturnType<S['_normalizeNullable']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Normalize<F>[] | undefined : S extends {
    [K: string]: any;
} ? NormalizedNullableObject<S> : S;
interface EntityMap<T = any> {
    readonly [k: string]: EntityInterface<T>;
}
type SchemaArgs<S extends Schema> = S extends EntityInterface<infer U> ? [EntityFields<U>] : S extends ({
    queryKey(args: infer Args, queryKey: (...args: any) => any, lookupEntities: any, lookupIndex: any): any;
}) ? Args : never;

interface SnapshotInterface {
    /**
     * Gets the (globally referentially stable) response for a given endpoint/args pair from state given.
     * @see https://dataclient.io/docs/api/Snapshot#getResponse
     */
    getResponse<E extends EndpointInterface>(endpoint: E, ...args: readonly [null]): {
        data: DenormalizeNullable<E['schema']>;
        expiryStatus: ExpiryStatusInterface;
        expiresAt: number;
    };
    getResponse<E extends EndpointInterface>(endpoint: E, ...args: readonly [...Parameters<E>]): {
        data: DenormalizeNullable<E['schema']>;
        expiryStatus: ExpiryStatusInterface;
        expiresAt: number;
    };
    getResponse<E extends Pick<EndpointInterface, 'key' | 'schema' | 'invalidIfStale'>>(endpoint: E, ...args: readonly [...Parameters<E['key']>] | readonly [null]): {
        data: DenormalizeNullable<E['schema']>;
        expiryStatus: ExpiryStatusInterface;
        expiresAt: number;
    };
    /** @see https://dataclient.io/docs/api/Snapshot#getError */
    getError: <E extends Pick<EndpointInterface, 'key'>, Args extends readonly [...Parameters<E['key']>]>(endpoint: E, ...args: Args) => ErrorTypes$1 | undefined;
    /**
     * Retrieved memoized value for any Querable schema
     * @see https://dataclient.io/docs/api/Snapshot#get
     */
    get<S extends Queryable>(schema: S, ...args: SchemaArgs<S>): DenormalizeNullable<S> | undefined;
    readonly fetchedAt: number;
    readonly abort: Error;
}
type ExpiryStatusInterface = 1 | 2 | 3;

/** Get the Params type for a given Shape */
type EndpointParam<E> = E extends (first: infer A, ...rest: any) => any ? A : E extends {
    key: (first: infer A, ...rest: any) => any;
} ? A : never;
/** What the function's promise resolves to */
type ResolveType<E extends (...args: any) => any> = ReturnType<E> extends Promise<infer R> ? R : never;
type PartialParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? Partial<P> : never;
type EndpointToFunction<E extends (...args: any) => Promise<any>> = (this: E, ...args: Parameters<E>) => ReturnType<E>;

type FetchFunction<A extends readonly any[] = any, R = any> = (...args: A) => Promise<R>;
interface EndpointExtraOptions<F extends FetchFunction = FetchFunction> {
    /** Default data expiry length, will fall back to NetworkManager default if not defined */
    readonly dataExpiryLength?: number;
    /** Default error expiry length, will fall back to NetworkManager default if not defined */
    readonly errorExpiryLength?: number;
    /** Poll with at least this frequency in miliseconds */
    readonly pollFrequency?: number;
    /** Marks cached resources as invalid if they are stale */
    readonly invalidIfStale?: boolean;
    /** Determines whether to throw or fallback to */
    errorPolicy?(error: any): 'hard' | 'soft' | undefined;
    /** Enables optimistic updates for this request - uses return value as assumed network response */
    getOptimisticResponse?(snap: SnapshotInterface, ...args: Parameters<F>): ResolveType<F>;
    /** User-land extra data to send */
    readonly extra?: any;
}

type Schema = null | string | {
    [K: string]: any;
} | Schema[] | SchemaSimple | Serializable;
interface Queryable {
    queryKey(args: readonly any[], queryKey: (...args: any) => any, lookupEntities: LookupEntities, lookupIndex: LookupIndex): {};
}
type Serializable<T extends {
    toJSON(): string;
} = {
    toJSON(): string;
}> = (value: any) => T;
interface SchemaSimple<T = any, Args extends readonly any[] = any[]> {
    normalize(input: any, parent: any, key: any, visit: (...args: any) => any, addEntity: (...args: any) => any, visitedEntities: Record<string, any>, storeEntities: any, args: any[]): any;
    denormalize(input: {}, args: readonly any[], unvisit: (input: any, schema: any) => any): T;
    queryKey(args: Args, queryKey: (...args: any) => any, lookupEntities: LookupEntities, lookupIndex: LookupIndex): any;
}
interface SchemaClass<T = any, N = T | undefined, Args extends any[] = any[]> extends SchemaSimple<T, Args> {
    _normalizeNullable(): any;
    _denormalizeNullable(): N;
}
interface EntityInterface<T = any> extends SchemaSimple {
    createIfValid(props: any): any;
    pk(params: any, parent?: any, key?: string, args?: any[]): string | number | undefined;
    readonly key: string;
    merge(existing: any, incoming: any): any;
    mergeWithStore(existingMeta: any, incomingMeta: any, existing: any, incoming: any): any;
    mergeMetaWithStore(existingMeta: any, incomingMeta: any, existing: any, incoming: any): any;
    indexes?: any;
    schema: Record<string, Schema>;
    prototype: T;
}
/** Represents Array or Values */
interface PolymorphicInterface<T = any, Args extends any[] = any[]> extends SchemaSimple<T, Args> {
    readonly schema: any;
    _normalizeNullable(): any;
    _denormalizeNullable(): any;
}
/** Get Array of entities with map function applied */
interface LookupEntities {
    (entityKey: string): {
        readonly [pk: string]: any;
    } | undefined;
    (entityKey: string, pk: string | number): any;
}
/** Get PK using an Entity Index */
interface LookupIndex {
    /** lookupIndex('User', 'username', 'ntucker') */
    (entityKey: string, field: string, value: string): {
        readonly [indexKey: string]: string | undefined;
    };
}
/** Defines a networking endpoint */
interface EndpointInterface<F extends FetchFunction = FetchFunction, S extends Schema | undefined = Schema | undefined, M extends true | undefined = true | undefined> extends EndpointExtraOptions<F> {
    (...args: Parameters<F>): ReturnType<F>;
    key(...args: Parameters<F>): string;
    readonly sideEffect?: M;
    readonly schema?: S;
}
/** For retrieval requests */
type ReadEndpoint<F extends FetchFunction = FetchFunction, S extends Schema | undefined = Schema | undefined> = EndpointInterface<F, S, undefined>;

interface EndpointOptions<F extends FetchFunction = FetchFunction, S extends Schema | undefined = undefined, M extends true | undefined = undefined> extends EndpointExtraOptions<F> {
    key?: (...args: Parameters<F>) => string;
    sideEffect?: M;
    schema?: S;
    [k: string]: any;
}
interface EndpointExtendOptions<F extends FetchFunction = FetchFunction, S extends Schema | undefined = Schema | undefined, M extends true | undefined = true | undefined> extends EndpointOptions<F, S, M> {
    fetch?: FetchFunction;
}
type KeyofEndpointInstance = keyof EndpointInstance<FetchFunction>;
type ExtendedEndpoint<O extends EndpointExtendOptions<F>, E extends EndpointInstance<FetchFunction, Schema | undefined, true | undefined>, F extends FetchFunction> = EndpointInstance<'fetch' extends keyof O ? Exclude<O['fetch'], undefined> : E['fetch'], 'schema' extends keyof O ? O['schema'] : E['schema'], 'sideEffect' extends keyof O ? O['sideEffect'] : E['sideEffect']> & Omit<O, KeyofEndpointInstance> & Omit<E, KeyofEndpointInstance>;
/**
 * Defines an async data source.
 * @see https://dataclient.io/docs/api/Endpoint
 */
interface EndpointInstance<F extends (...args: any) => Promise<any> = FetchFunction, S extends Schema | undefined = Schema | undefined, M extends true | undefined = true | undefined> extends EndpointInstanceInterface<F, S, M> {
    extend<E extends EndpointInstance<(...args: any) => Promise<any>, Schema | undefined, true | undefined>, O extends EndpointExtendOptions<F> & Partial<Omit<E, keyof EndpointInstance<FetchFunction>>> & Record<string, unknown>>(this: E, options: Readonly<O>): ExtendedEndpoint<typeof options, E, F>;
}
/**
 * Defines an async data source.
 * @see https://dataclient.io/docs/api/Endpoint
 */
interface EndpointInstanceInterface<F extends FetchFunction = FetchFunction, S extends Schema | undefined = Schema | undefined, M extends true | undefined = true | undefined> extends EndpointInterface<F, S, M> {
    constructor: EndpointConstructor;
    /**
     * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
     * @param thisArg The object to be used as the this object.
     * @param argArray A set of arguments to be passed to the function.
     */
    apply<E extends FetchFunction>(this: E, thisArg: ThisParameterType<E>, argArray?: Parameters<E>): ReturnType<E>;
    /**
     * Calls a method of an object, substituting another object for the current object.
     * @param thisArg The object to be used as the current object.
     * @param argArray A list of arguments to be passed to the method.
     */
    call<E extends FetchFunction>(this: E, thisArg: ThisParameterType<E>, ...argArray: Parameters<E>): ReturnType<E>;
    /**
     * For a given function, creates a bound function that has the same body as the original function.
     * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
     * @param thisArg An object to which the this keyword can refer inside the new function.
     * @param argArray A list of arguments to be passed to the new function.
     */
    bind<E extends FetchFunction, P extends PartialParameters<E>>(this: E, thisArg: ThisParameterType<E>, ...args: readonly [...P]): EndpointInstance<(...args: readonly [...RemoveArray<Parameters<E>, P>]) => ReturnType<E>, S, M> & Omit<E, keyof EndpointInstance<FetchFunction>>;
    /** Returns a string representation of a function. */
    toString(): string;
    prototype: any;
    readonly length: number;
    arguments: any;
    caller: F;
    key(...args: Parameters<F>): string;
    readonly sideEffect: M;
    readonly schema: S;
    fetch: F;
    /** @see https://dataclient.io/rest/api/Endpoint#testKey */
    testKey(key: string): boolean;
}
interface EndpointConstructor {
    new <F extends (this: EndpointInstance<FetchFunction> & E, params?: any, body?: any) => Promise<any>, S extends Schema | undefined = undefined, M extends true | undefined = undefined, E extends Record<string, any> = {}>(fetchFunction: F, options?: EndpointOptions<F, S, M> & E): EndpointInstance<F, S, M> & E;
    readonly prototype: Function;
}
interface ExtendableEndpointConstructor {
    new <F extends (this: EndpointInstanceInterface<FetchFunction> & E, params?: any, body?: any) => Promise<any>, S extends Schema | undefined = undefined, M extends true | undefined = undefined, E extends Record<string, any> = {}>(RestFetch: F, options?: Readonly<EndpointOptions<F, S, M>> & E): EndpointInstanceInterface<F, S, M> & E;
    readonly prototype: Function;
}
type RemoveArray<Orig extends any[], Rem extends any[]> = Rem extends [any, ...infer RestRem] ? Orig extends [any, ...infer RestOrig] ? RemoveArray<RestOrig, RestRem> : never : Orig;

/* eslint-disable @typescript-eslint/ban-types */


declare let Endpoint: EndpointConstructor;


declare let ExtendableEndpoint: ExtendableEndpointConstructor;

type Constructor = abstract new (...args: any[]) => {};
type IDClass = abstract new (...args: any[]) => {
    id: string | number | undefined;
};
type PKClass = abstract new (...args: any[]) => {
    pk(parent?: any, key?: string, args?: readonly any[]): string | number | undefined;
};
type ValidSchemas<TInstance> = {
    [k in keyof TInstance]?: Schema;
};
type EntityOptions<TInstance extends {}> = {
    readonly schema?: ValidSchemas<TInstance>;
    readonly pk?: ((value: TInstance, parent?: any, key?: string) => string | number | undefined) | keyof TInstance;
    readonly key?: string;
} & {
    readonly [K in Extract<keyof IEntityClass, 'process' | 'merge' | 'expiresAt' | 'createIfValid' | 'mergeWithStore' | 'validate' | 'shouldReorder' | 'shouldUpdate'>]?: IEntityClass<abstract new (...args: any[]) => TInstance>[K];
};
interface RequiredPKOptions<TInstance extends {}> extends EntityOptions<TInstance> {
    readonly pk: ((value: TInstance, parent?: any, key?: string) => string | number | undefined) | keyof TInstance;
}
interface IEntityClass<TBase extends Constructor = any> {
    toJSON(): {
        name: string;
        schema: {
            [k: string]: Schema;
        };
        key: string;
    };
    /** Defines nested entities
     *
     * @see https://dataclient.io/rest/api/Entity#schema
     */
    schema: {
        [k: string]: Schema;
    };
    /** Returns the globally unique identifier for the static Entity
     *
     * @see https://dataclient.io/rest/api/Entity#key
     */
    key: string;
    /** Defines indexes to enable lookup by
     *
     * @see https://dataclient.io/rest/api/Entity#indexes
     */
    indexes?: readonly string[] | undefined;
    /**
     * A unique identifier for each Entity
     *
     * @see https://dataclient.io/rest/api/Entity#pk
     * @param [value] POJO of the entity or subset used
     * @param [parent] When normalizing, the object which included the entity
     * @param [key] When normalizing, the key where this entity was found
     * @param [args] ...args sent to Endpoint
     */
    pk<T extends (abstract new (...args: any[]) => IEntityInstance & InstanceType<TBase>) & IEntityClass & TBase>(this: T, value: Partial<AbstractInstanceType<T>>, parent?: any, key?: string, args?: any[]): string | number | undefined;
    /** Return true to merge incoming data; false keeps existing entity
     *
     * @see https://dataclient.io/docs/api/schema.Entity#shouldUpdate
     */
    shouldUpdate(existingMeta: {
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): boolean;
    /** Determines the order of incoming entity vs entity already in store\
     *
     * @see https://dataclient.io/docs/api/schema.Entity#shouldReorder
     * @returns true if incoming entity should be first argument of merge()
     */
    shouldReorder(existingMeta: {
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): boolean;
    /** Creates new instance copying over defined values of arguments
     *
     * @see https://dataclient.io/docs/api/schema.Entity#merge
     */
    merge(existing: any, incoming: any): any;
    /** Run when an existing entity is found in the store
     *
     * @see https://dataclient.io/docs/api/schema.Entity#mergeWithStore
     */
    mergeWithStore(existingMeta: {
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): any;
    /** Run when an existing entity is found in the store
     *
     * @see https://dataclient.io/docs/api/schema.Entity#mergeMetaWithStore
     */
    mergeMetaWithStore(existingMeta: {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    };
    /** Factory method to convert from Plain JS Objects.
     *
     * @param [props] Plain Object of properties to assign.
     */
    fromJS<T extends (abstract new (...args: any[]) => IEntityInstance & InstanceType<TBase>) & IEntityClass & TBase>(this: T, props?: Partial<AbstractInstanceType<T>>): AbstractInstanceType<T>;
    /** Called when denormalizing an entity to create an instance when 'valid'
     *
     * @param [props] Plain Object of properties to assign.
     * @see https://dataclient.io/rest/api/Entity#createIfValid
     */
    createIfValid<T extends (abstract new (...args: any[]) => IEntityInstance & InstanceType<TBase>) & IEntityClass & TBase>(this: T, props: Partial<AbstractInstanceType<T>>): AbstractInstanceType<T> | undefined;
    /** Do any transformations when first receiving input
     *
     * @see https://dataclient.io/rest/api/Entity#process
     */
    process(input: any, parent: any, key: string | undefined, args: any[]): any;
    normalize(input: any, parent: any, key: string | undefined, visit: (...args: any) => any, addEntity: (...args: any) => any, visitedEntities: Record<string, any>): any;
    /** Do any transformations when first receiving input
     *
     * @see https://dataclient.io/rest/api/Entity#validate
     */
    validate(processedEntity: any): string | undefined;
    /** Builds a key access the entity without endpoint results
     *
     * @see https://dataclient.io/rest/api/Entity#queryKey
     */
    queryKey(args: readonly any[], queryKey: any, lookupEntities: LookupEntities, lookupIndex: LookupIndex): any;
    denormalize<T extends (abstract new (...args: any[]) => IEntityInstance & InstanceType<TBase>) & IEntityClass & TBase>(this: T, input: any, args: readonly any[], unvisit: (input: any, schema: any) => any): AbstractInstanceType<T>;
    /** All instance defaults set */
    readonly defaults: any;
}
interface IEntityInstance {
    /**
     * A unique identifier for each Entity
     *
     * @param [parent] When normalizing, the object which included the entity
     * @param [key] When normalizing, the key where this entity was found
     * @param [args] ...args sent to Endpoint
     */
    pk(parent?: any, key?: string, args?: readonly any[]): string | number | undefined;
}

/**
 * Marks entity as Invalid.
 *
 * This triggers suspense for all endpoints requiring it.
 * Optional (like variable sized Array and Values) will simply remove the item.
 * @see https://dataclient.io/rest/api/Invalidate
 */
declare class Invalidate<E extends EntityInterface & {
    process: any;
}> implements SchemaSimple {
    protected _entity: E;
    constructor(entity: E);
    get key(): string;
    /** Normalize lifecycles **/
    normalize(input: any, parent: any, key: string | undefined, visit: (...args: any) => any, addEntity: (...args: any) => any, visitedEntities: Record<string, any>, storeEntities: Record<string, any>, args?: any[]): string | number | undefined;
    merge(existing: any, incoming: any): any;
    mergeWithStore(existingMeta: any, incomingMeta: any, existing: any, incoming: any): any;
    mergeMetaWithStore(existingMeta: {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    };
    /** /End Normalize lifecycles **/
    queryKey(args: any, queryKey: unknown, lookupEntities: unknown, lookupIndex: unknown): undefined;
    denormalize(id: string, args: readonly any[], unvisit: (input: any, schema: any) => any): AbstractInstanceType<E>;
    _denormalizeNullable(): AbstractInstanceType<E> | undefined;
    _normalizeNullable(): string | undefined;
}

/**
 * Programmatic cache reading
 *
 * @see https://dataclient.io/rest/api/Query
 */
declare class Query<S extends Queryable, P extends (entries: DenormalizeNullable<S>, ...args: any) => any> implements SchemaSimple<ReturnType<P> | undefined, ProcessParameters<P, S>> {
    schema: S;
    process: P;
    constructor(schema: S, process: P);
    normalize(...args: any): any;
    denormalize(input: {}, args: any, unvisit: any): ReturnType<P> | undefined;
    queryKey(args: ProcessParameters<P, S>, queryKey: (schema: any, args: any, lookupEntities: LookupEntities, lookupIndex: LookupIndex) => any, lookupEntities: LookupEntities, lookupIndex: LookupIndex): any;
    _denormalizeNullable: (input: {}, args: readonly any[], unvisit: (input: any, schema: any) => any) => ReturnType<P> | undefined;
    _normalizeNullable: () => NormalizeNullable<S>;
}
type ProcessParameters<P, S extends Queryable> = P extends (entries: any, ...args: infer Par) => any ? Par extends [] ? SchemaArgs<S> : Par & SchemaArgs<S> : SchemaArgs<S>;

type CollectionOptions<Args extends any[] = [] | [urlParams: Record<string, any>] | [urlParams: Record<string, any>, body: any], Parent = any> = ({
    nestKey?: (parent: Parent, key: string) => Record<string, any>;
} | {
    argsKey?: (...args: Args) => Record<string, any>;
}) & ({
    createCollectionFilter?: (...args: Args) => (collectionKey: Record<string, string>) => boolean;
} | {
    nonFilterArgumentKeys?: ((key: string) => boolean) | string[] | RegExp;
});

type CollectionArrayAdder$1<S extends PolymorphicInterface> = S extends ({
    denormalize(...args: any): any[];
    schema: infer T;
}) ? T : never;
interface CollectionInterface<S extends PolymorphicInterface = any, Args extends any[] = any[], Parent = any> {
    addWith<P extends any[] = Args>(merge: (existing: any, incoming: any) => any, createCollectionFilter?: (...args: P) => (collectionKey: Record<string, string>) => boolean): Collection<S, P>;
    readonly cacheWith: object;
    readonly schema: S;
    readonly key: string;
    pk(value: any, parent: any, key: string, args: any[]): string;
    normalize(input: any, parent: Parent, key: string, visit: (...args: any) => any, addEntity: (...args: any) => any, visitedEntities: Record<string, any>, storeEntities: any, args: any): string;
    merge(existing: any, incoming: any): any;
    shouldReorder(existingMeta: {
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): boolean;
    mergeWithStore(existingMeta: {
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): any;
    mergeMetaWithStore(existingMeta: {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    };
    queryKey(args: Args, queryKey: unknown, lookupEntities: unknown, lookupIndex: unknown): any;
    createIfValid: (value: any) => any | undefined;
    denormalize(input: any, args: readonly any[], unvisit: (input: any, schema: any) => any): ReturnType<S['denormalize']>;
    _denormalizeNullable(): ReturnType<S['_denormalizeNullable']>;
    _normalizeNullable(): ReturnType<S['_normalizeNullable']>;
    /** Schema to place at the *end* of this Collection
     * @see https://dataclient.io/rest/api/Collection#push
     */
    push: CollectionArrayAdder$1<S>;
    /** Schema to place at the *beginning* of this Collection
     * @see https://dataclient.io/rest/api/Collection#unshift
     */
    unshift: CollectionArrayAdder$1<S>;
    /** Schema to merge with a Values Collection
     * @see https://dataclient.io/rest/api/Collection#assign
     */
    assign: S extends {
        denormalize(...args: any): Record<string, unknown>;
    } ? Collection<S, Args, Parent> : never;
}
type CollectionFromSchema<S extends any[] | PolymorphicInterface = any, Args extends any[] = [] | [urlParams: Record<string, any>] | [urlParams: Record<string, any>, body: any], Parent = any> = CollectionInterface<S extends any[] ? Array$1<S[number]> : S, Args, Parent>;
interface CollectionConstructor {
    new <S extends SchemaSimple[] | PolymorphicInterface = any, Args extends any[] = [] | [urlParams: Record<string, any>] | [urlParams: Record<string, any>, body: any], Parent = any>(schema: S, options?: CollectionOptions<Args, Parent>): CollectionFromSchema<S, Args, Parent>;
    readonly prototype: CollectionInterface;
}
type StrategyFunction<T> = (value: any, parent: any, key: string) => T;
type SchemaFunction<K = string, Args = any> = (value: Args, parent: any, key: string) => K;
type MergeFunction = (entityA: any, entityB: any) => any;
type SchemaAttributeFunction<S extends Schema> = (value: any, parent: any, key: string) => S;
type UnionResult<Choices extends EntityMap> = {
    id: string;
    schema: keyof Choices;
};

/**
 * Represents arrays
 * @see https://dataclient.io/rest/api/Array
 */
declare class Array$1<S extends Schema = Schema> implements SchemaClass {
  constructor(
    definition: S,
    schemaAttribute?: S extends EntityMap<infer T> ?
      keyof T | SchemaFunction<keyof S>
    : undefined,
  );

  define(definition: Schema): void;
  readonly isSingleSchema: S extends EntityMap ? false : true;
  readonly schema: S;
  normalize(
    input: any,
    parent: any,
    key: any,
    visit: (...args: any) => any,
    addEntity: (...args: any) => any,
    visitedEntities: Record<string, any>,
    storeEntities: any,
    args: any[],
  ): (S extends EntityMap ? UnionResult<S> : Normalize<S>)[];

  _normalizeNullable():
    | (S extends EntityMap ? UnionResult<S> : Normalize<S>)[]
    | undefined;

  _denormalizeNullable():
    | (S extends EntityMap<infer T> ? T : Denormalize<S>)[]
    | undefined;

  denormalize(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): (S extends EntityMap<infer T> ? T : Denormalize<S>)[];

  queryKey(
    args: readonly any[],
    queryKey: (...args: any) => any,
    lookupEntities: any,
    lookupIndex: any,
  ): undefined;
}

/**
 * Retrieves all entities in cache
 *
 * @see https://dataclient.io/rest/api/AllSchema
 */
declare class All<
  S extends EntityMap | EntityInterface = EntityMap | EntityInterface,
> implements SchemaClass
{
  constructor(
    definition: S,
    schemaAttribute?: S extends EntityMap<infer T> ?
      keyof T | SchemaFunction<keyof S>
    : undefined,
  );

  define(definition: Schema): void;
  readonly isSingleSchema: S extends EntityMap ? false : true;
  readonly schema: S;
  normalize(
    input: any,
    parent: any,
    key: any,
    visit: (...args: any) => any,
    addEntity: (...args: any) => any,
    visitedEntities: Record<string, any>,
    storeEntities: any,
    args?: any[],
  ): (S extends EntityMap ? UnionResult<S> : Normalize<S>)[];

  _normalizeNullable():
    | (S extends EntityMap ? UnionResult<S> : Normalize<S>)[]
    | undefined;

  _denormalizeNullable(): (S extends EntityMap<infer T> ? T : Denormalize<S>)[];

  denormalize(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): (S extends EntityMap<infer T> ? T : Denormalize<S>)[];

  queryKey(
    // TODO: hack for now to allow for variable arg combinations with Query
    args: [] | [unknown],
    queryKey: (...args: any) => any,
    lookupEntities: LookupEntities,
    lookupIndex: LookupIndex,
  ): any;
}

/**
 * Represents objects with statically known members
 * @see https://dataclient.io/rest/api/Object
 */
declare class Object$1<O extends Record<string, any> = Record<string, Schema>>
  implements SchemaClass
{
  constructor(definition: O);
  define(definition: Schema): void;
  readonly schema: O;
  normalize(
    input: any,
    parent: any,
    key: any,
    visit: (...args: any) => any,
    addEntity: (...args: any) => any,
    visitedEntities: Record<string, any>,
    storeEntities: any,
    args?: any[],
  ): NormalizeObject<O>;

  _normalizeNullable(): NormalizedNullableObject<O>;

  _denormalizeNullable(): DenormalizeNullableObject<O>;

  denormalize(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): DenormalizeObject<O>;

  queryKey(
    args: readonly any[],
    queryKey: (...args: any) => any,
    lookupEntities: LookupEntities,
    lookupIndex: LookupIndex,
  ): any;
}

type RequiredMember<
  O extends Record<string | number | symbol, unknown>,
  Required extends keyof O,
> = {
  [K in Required]: O[K];
};

type UnionSchemaToArgs<
  Choices extends EntityMap,
  SchemaAttribute extends
    | keyof AbstractInstanceType<Choices[keyof Choices]>
    | SchemaFunction<keyof Choices>,
> =
  SchemaAttribute extends keyof AbstractInstanceType<Choices[keyof Choices]> ?
    RequiredMember<
      AbstractInstanceType<Choices[keyof Choices]>,
      SchemaAttribute
    >
  : SchemaAttribute extends (value: infer Args, ...rest: any) => unknown ? Args
  : never;

interface UnionConstructor {
  new <
    Choices extends EntityMap,
    SchemaAttribute extends
      | keyof AbstractInstanceType<Choices[keyof Choices]>
      | SchemaFunction<keyof Choices>,
  >(
    definition: Choices,
    schemaAttribute: SchemaAttribute,
  ): UnionInstance<
    Choices,
    UnionSchemaToArgs<Choices, SchemaAttribute> &
      Partial<AbstractInstanceType<Choices[keyof Choices]>>
  >;

  readonly prototype: UnionInstance;
}

/**
 * Represents polymorphic values.
 * @see https://dataclient.io/rest/api/Union
 */
interface UnionInstance<
  Choices extends EntityMap = any,
  Args extends EntityFields<
    AbstractInstanceType<Choices[keyof Choices]>
  > = EntityFields<AbstractInstanceType<Choices[keyof Choices]>>,
> {
  define(definition: Schema): void;
  inferSchema: SchemaAttributeFunction<Choices[keyof Choices]>;
  getSchemaAttribute: SchemaFunction<keyof Choices>;
  readonly schema: Choices;
  normalize(
    input: any,
    parent: any,
    key: any,
    visit: (...args: any) => any,
    addEntity: (...args: any) => any,
    visitedEntities: Record<string, any>,
    storeEntities: any,
    args?: any[],
  ): UnionResult<Choices>;

  _normalizeNullable(): UnionResult<Choices> | undefined;

  _denormalizeNullable():
    | AbstractInstanceType<Choices[keyof Choices]>
    | undefined;

  denormalize(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): AbstractInstanceType<Choices[keyof Choices]>;

  queryKey(
    args: [Args],
    queryKey: (...args: any) => any,
    lookupEntities: LookupEntities,
    lookupIndex: LookupIndex,
  ): { id: any; schema: string };
}

/**
 * Represents polymorphic values.
 * @see https://dataclient.io/rest/api/Union
 */
declare let UnionRoot: UnionConstructor;

/**
 * Represents polymorphic values.
 * @see https://dataclient.io/rest/api/Union
 */
declare class Union<
  Choices extends EntityMap,
  SchemaAttribute extends
    | keyof AbstractInstanceType<Choices[keyof Choices]>
    | SchemaFunction<keyof Choices>,
> extends UnionRoot<Choices, SchemaAttribute> {}

/**
 * Represents variably sized objects
 * @see https://dataclient.io/rest/api/Values
 */
declare class Values<Choices extends Schema = any> implements SchemaClass {
  constructor(
    definition: Choices,
    schemaAttribute?: Choices extends EntityMap<infer T> ?
      keyof T | SchemaFunction<keyof Choices>
    : undefined,
  );

  define(definition: Schema): void;
  readonly isSingleSchema: Choices extends EntityMap ? false : true;
  inferSchema: SchemaAttributeFunction<
    Choices extends EntityMap ? Choices[keyof Choices] : Choices
  >;

  getSchemaAttribute: Choices extends EntityMap ? SchemaFunction<keyof Choices>
  : false;

  readonly schema: Choices;
  normalize(
    input: any,
    parent: any,
    key: any,
    visit: (...args: any) => any,
    addEntity: (...args: any) => any,
    visitedEntities: Record<string, any>,
    storeEntities: any,
    args?: any[],
  ): Record<
    string,
    Choices extends EntityMap ? UnionResult<Choices> : Normalize<Choices>
  >;

  _normalizeNullable():
    | Record<
        string,
        Choices extends EntityMap ? UnionResult<Choices>
        : NormalizeNullable<Choices>
      >
    | undefined;

  _denormalizeNullable(): Record<
    string,
    Choices extends EntityMap<infer T> ? T | undefined
    : DenormalizeNullable<Choices>
  >;

  denormalize(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): Record<
    string,
    Choices extends EntityMap<infer T> ? T : Denormalize<Choices>
  >;

  queryKey(
    args: readonly any[],
    queryKey: (...args: any) => any,
    lookupEntities: LookupEntities,
    lookupIndex: LookupIndex,
  ): undefined;
}

type CollectionArrayAdder<S extends PolymorphicInterface> =
  S extends (
    {
      // ensure we are an array type
      denormalize(...args: any): any[];
      // get what we are an array of
      schema: infer T;
    }
  ) ?
    // TODO: eventually we want to allow singular or list and infer the return based on arguments
    T
  : never;

declare let CollectionRoot: CollectionConstructor;

/**
 * Entities but for Arrays instead of classes
 * @see https://dataclient.io/rest/api/Collection
 */
declare class Collection<
  S extends any[] | PolymorphicInterface = any,
  Args extends any[] =
    | []
    | [urlParams: Record<string, any>]
    | [urlParams: Record<string, any>, body: any],
  Parent = any,
> extends CollectionRoot<S, Args, Parent> {}

// id is in Instance, so we default to that as pk
/**
 * Represents data that should be deduped by specifying a primary key.
 * @see https://dataclient.io/docs/api/schema.Entity
 */
declare function Entity$1<TBase extends PKClass>(
  Base: TBase,
  opt?: EntityOptions<InstanceType<TBase>>,
): IEntityClass<TBase> & TBase;

// id is in Instance, so we default to that as pk
declare function Entity$1<TBase extends IDClass>(
  Base: TBase,
  opt?: EntityOptions<InstanceType<TBase>>,
): IEntityClass<TBase> & TBase & (new (...args: any[]) => IEntityInstance);

// pk was specified in options, so we don't need to redefine
declare function Entity$1<TBase extends Constructor>(
  Base: TBase,
  opt: RequiredPKOptions<InstanceType<TBase>>,
): IEntityClass<TBase> & TBase & (new (...args: any[]) => IEntityInstance);

type schema_d_EntityMap<T = any> = EntityMap<T>;
type schema_d_Invalidate<E extends EntityInterface & {
    process: any;
}> = Invalidate<E>;
declare const schema_d_Invalidate: typeof Invalidate;
type schema_d_Query<S extends Queryable, P extends (entries: DenormalizeNullable<S>, ...args: any) => any> = Query<S, P>;
declare const schema_d_Query: typeof Query;
type schema_d_SchemaClass<T = any, N = T | undefined, Args extends any[] = any[]> = SchemaClass<T, N, Args>;
type schema_d_All<S extends EntityMap | EntityInterface = EntityMap | EntityInterface> = All<S>;
declare const schema_d_All: typeof All;
type schema_d_UnionConstructor = UnionConstructor;
type schema_d_UnionInstance<Choices extends EntityMap = any, Args extends EntityFields<
    AbstractInstanceType<Choices[keyof Choices]>
  > = EntityFields<AbstractInstanceType<Choices[keyof Choices]>>> = UnionInstance<Choices, Args>;
declare const schema_d_UnionRoot: typeof UnionRoot;
type schema_d_Union<Choices extends EntityMap, SchemaAttribute extends
    | keyof AbstractInstanceType<Choices[keyof Choices]>
    | SchemaFunction<keyof Choices>> = Union<Choices, SchemaAttribute>;
declare const schema_d_Union: typeof Union;
type schema_d_Values<Choices extends Schema = any> = Values<Choices>;
declare const schema_d_Values: typeof Values;
type schema_d_CollectionArrayAdder<S extends PolymorphicInterface> = CollectionArrayAdder<S>;
declare const schema_d_CollectionRoot: typeof CollectionRoot;
type schema_d_Collection<S extends any[] | PolymorphicInterface = any, Args extends any[] =
    | []
    | [urlParams: Record<string, any>]
    | [urlParams: Record<string, any>, body: any], Parent = any> = Collection<S, Args, Parent>;
declare const schema_d_Collection: typeof Collection;
type schema_d_EntityInterface<T = any> = EntityInterface<T>;
type schema_d_CollectionInterface<S extends PolymorphicInterface = any, Args extends any[] = any[], Parent = any> = CollectionInterface<S, Args, Parent>;
type schema_d_CollectionFromSchema<S extends any[] | PolymorphicInterface = any, Args extends any[] = [] | [urlParams: Record<string, any>] | [urlParams: Record<string, any>, body: any], Parent = any> = CollectionFromSchema<S, Args, Parent>;
type schema_d_CollectionConstructor = CollectionConstructor;
type schema_d_StrategyFunction<T> = StrategyFunction<T>;
type schema_d_SchemaFunction<K = string, Args = any> = SchemaFunction<K, Args>;
type schema_d_MergeFunction = MergeFunction;
type schema_d_SchemaAttributeFunction<S extends Schema> = SchemaAttributeFunction<S>;
type schema_d_UnionResult<Choices extends EntityMap> = UnionResult<Choices>;
declare namespace schema_d {
  export {
    schema_d_EntityMap as EntityMap,
    schema_d_Invalidate as Invalidate,
    schema_d_Query as Query,
    schema_d_SchemaClass as SchemaClass,
    Array$1 as Array,
    schema_d_All as All,
    Object$1 as Object,
    schema_d_UnionConstructor as UnionConstructor,
    schema_d_UnionInstance as UnionInstance,
    schema_d_UnionRoot as UnionRoot,
    schema_d_Union as Union,
    schema_d_Values as Values,
    schema_d_CollectionArrayAdder as CollectionArrayAdder,
    schema_d_CollectionRoot as CollectionRoot,
    schema_d_Collection as Collection,
    Entity$1 as Entity,
    schema_d_EntityInterface as EntityInterface,
    schema_d_CollectionInterface as CollectionInterface,
    schema_d_CollectionFromSchema as CollectionFromSchema,
    schema_d_CollectionConstructor as CollectionConstructor,
    schema_d_StrategyFunction as StrategyFunction,
    schema_d_SchemaFunction as SchemaFunction,
    schema_d_MergeFunction as MergeFunction,
    schema_d_SchemaAttributeFunction as SchemaAttributeFunction,
    schema_d_UnionResult as UnionResult,
  };
}

declare const Entity_base: IEntityClass<abstract new (...args: any[]) => {
    pk(parent?: any, key?: string | undefined, args?: readonly any[] | undefined): string | number | undefined;
}> & (abstract new (...args: any[]) => {
    pk(parent?: any, key?: string | undefined, args?: readonly any[] | undefined): string | number | undefined;
});
/**
 * Represents data that should be deduped by specifying a primary key.
 * @see https://dataclient.io/rest/api/Entity
 */
declare abstract class Entity extends Entity_base {
    /**
     * A unique identifier for each Entity
     *
     * @param [parent] When normalizing, the object which included the entity
     * @param [key] When normalizing, the key where this entity was found
     * @param [args] ...args sent to Endpoint
     * @see https://dataclient.io/rest/api/Entity#pk
     */
    abstract pk(parent?: any, key?: string, args?: readonly any[]): string | number | undefined;
    /** Control how automatic schema validation is handled
     *
     * `undefined`: Defaults - throw error in worst offense
     * 'warn': only ever warn
     * 'silent': Don't bother with processing at all
     *
     * Note: this only applies to non-nested members.
     */
    protected static automaticValidation?: 'warn' | 'silent';
    /** Factory method to convert from Plain JS Objects.
     *
     * @param [props] Plain Object of properties to assign.
     * @see https://dataclient.io/rest/api/Entity#fromJS
     */
    static fromJS: <T extends typeof Entity>(this: T, props?: Partial<AbstractInstanceType<T>>) => AbstractInstanceType<T>;
    /**
     * A unique identifier for each Entity
     *
     * @param [value] POJO of the entity or subset used
     * @param [parent] When normalizing, the object which included the entity
     * @param [key] When normalizing, the key where this entity was found
     * @param [args] ...args sent to Endpoint
     */
    static pk: <T extends typeof Entity>(this: T, value: Partial<AbstractInstanceType<T>>, parent?: any, key?: string, args?: any[]) => string | number | undefined;
    /** Do any transformations when first receiving input
     *
     * @see https://dataclient.io/rest/api/Entity#process
     */
    static process(input: any, parent: any, key: string | undefined, args: any[]): any;
    static denormalize: <T extends typeof Entity>(this: T, input: any, args: readonly any[], unvisit: (input: any, schema: any) => any) => AbstractInstanceType<T>;
}

declare function validateRequired(processedEntity: any, requiredDefaults: Record<string, unknown>): string | undefined;

declare const INVALID: unique symbol;

type ExtractObject<S extends Record<string, any>> = {
    [K in keyof S]: S[K] extends Schema ? ExtractCollection<S[K]> : never;
}[keyof S];

type ExtractCollection<S extends Schema | undefined> = S extends ({
    push: any;
    unshift: any;
    assign: any;
    schema: Schema;
}) ? S : S extends Object$1<infer T> ? ExtractObject<T> : S extends Exclude<Schema, {
    [K: string]: any;
}> ? never : S extends {
    [K: string]: Schema;
} ? ExtractObject<S> : never;

type OnlyOptional<S extends string> = S extends `${infer K}?` ? K : never;
type OnlyRequired<S extends string> = S extends `${string}?` ? never : S;
/** Computes the union of keys for a path string */
type PathKeys<S extends string> = string extends S ? string : S extends `${infer A}\\:${infer B}` ? PathKeys<A> | PathKeys<B> : S extends `${infer A}\\?${infer B}` ? PathKeys<A> | PathKeys<B> : PathSplits<S>;
type PathSplits<S extends string> = S extends `${string}:${infer K}${'/' | ',' | '%' | '&'}${infer R}` ? PathSplits<`:${K}`> | PathSplits<R> : S extends `${string}:${infer K}:${infer R}` ? PathSplits<`:${K}`> | PathSplits<`:${R}`> : S extends `${string}:${infer K}` ? K : never;
/** Parameters for a given path */
type PathArgs<S extends string> = PathKeys<S> extends never ? unknown : KeysToArgs<PathKeys<S>>;
type KeysToArgs<Key extends string> = {
    [K in Key as OnlyOptional<K>]?: string | number;
} & (OnlyRequired<Key> extends never ? unknown : {
    [K in Key as OnlyRequired<K>]: string | number;
});
type PathArgsAndSearch<S extends string> = OnlyRequired<PathKeys<S>> extends never ? Record<string, number | string | boolean> | undefined : {
    [K in PathKeys<S> as OnlyRequired<K>]: string | number;
} & Record<string, number | string>;
/** Removes the last :token */
type ShortenPath<S extends string> = string extends S ? string : S extends `${infer B}:${infer R}` ? TrimColon<`${B}:${ShortenPath<R>}`> : '';
type TrimColon<S extends string> = string extends S ? string : S extends `${infer R}:` ? R : S;
type ResourcePath = string;

type OptionsToFunction<O extends PartialRestGenerics, E extends {
    body?: any;
    path?: string;
    method?: string;
}, F extends FetchFunction> = 'path' extends keyof O ? RestFetch<'searchParams' extends keyof O ? O['searchParams'] & PathArgs<Exclude<O['path'], undefined>> : PathArgs<Exclude<O['path'], undefined>>, OptionsToBodyArgument<'body' extends keyof O ? O : E, 'method' extends keyof O ? O['method'] : E['method']>, O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>> : 'body' extends keyof O ? RestFetch<'searchParams' extends keyof O ? O['searchParams'] & PathArgs<Exclude<E['path'], undefined>> : PathArgs<Exclude<E['path'], undefined>>, OptionsToBodyArgument<O, 'method' extends keyof O ? O['method'] : E['method']>, O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>> : 'searchParams' extends keyof O ? RestFetch<O['searchParams'] & PathArgs<Exclude<E['path'], undefined>>, OptionsToBodyArgument<E, 'method' extends keyof O ? O['method'] : E['method']>, O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>> : (this: ThisParameterType<F>, ...args: Parameters<F>) => Promise<O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>>;
type OptionsToBodyArgument<O extends {
    body?: any;
}, Method extends string | undefined> = Method extends 'POST' | 'PUT' | 'PATCH' | 'DELETE' ? 'body' extends keyof O ? O['body'] : any : undefined;

type EndpointUpdateFunction<Source extends FetchFunction, Schema, Updaters extends Record<string, any> = Record<string, any>> = (source: ResultEntry<Source & {
    schema: Schema;
}>, ...args: Parameters<Source>) => {
    [K in keyof Updaters]: (result: Updaters[K]) => Updaters[K];
};
type ResultEntry<E extends FetchFunction & {
    schema: any;
}> = E['schema'] extends undefined | null ? ResolveType<E> : Normalize<E['schema']>;

interface RestInstanceBase<F extends FetchFunction = FetchFunction, S extends Schema | undefined = any, M extends true | undefined = true | undefined, O extends {
    path: string;
    body?: any;
    searchParams?: any;
    method?: string;
} = {
    path: string;
}> extends EndpointInstanceInterface<F, S, M> {
    /** @see https://dataclient.io/rest/api/RestEndpoint#body */
    readonly body?: 'body' extends keyof O ? O['body'] : any;
    /** @see https://dataclient.io/rest/api/RestEndpoint#searchParams */
    readonly searchParams?: 'searchParams' extends keyof O ? O['searchParams'] : unknown;
    /** Pattern to construct url based on Url Parameters
     * @see https://dataclient.io/rest/api/RestEndpoint#path
     */
    readonly path: O['path'];
    /** Prepended to all urls
     * @see https://dataclient.io/rest/api/RestEndpoint#urlPrefix
     */
    readonly urlPrefix: string;
    readonly requestInit: RequestInit;
    /** HTTP request method
     * @see https://dataclient.io/rest/api/RestEndpoint#method
     */
    readonly method: (O & {
        method: string;
    })['method'];
    readonly signal: AbortSignal | undefined;
    /** @see https://dataclient.io/rest/api/RestEndpoint#paginationField */
    readonly paginationField?: string;
    /** Builds the URL to fetch
     * @see https://dataclient.io/rest/api/RestEndpoint#url
     */
    url(...args: Parameters<F>): string;
    /** Encode the searchParams component of the url
     * @see https://dataclient.io/rest/api/RestEndpoint#searchToString
     */
    searchToString(searchParams: Record<string, any>): string;
    /** Prepares RequestInit used in fetch. This is sent to fetchResponse()
     * @see https://dataclient.io/rest/api/RestEndpoint#getRequestInit
     */
    getRequestInit(this: any, body?: RequestInit['body'] | Record<string, unknown>): Promise<RequestInit> | RequestInit;
    /** Called by getRequestInit to determine HTTP Headers
     * @see https://dataclient.io/rest/api/RestEndpoint#getHeaders
     */
    getHeaders(headers: HeadersInit): Promise<HeadersInit> | HeadersInit;
    /** Performs the fetch call
     * @see https://dataclient.io/rest/api/RestEndpoint#fetchResponse
     */
    fetchResponse(input: RequestInfo, init: RequestInit): Promise<Response>;
    /** Takes the Response and parses via .text() or .json()
     * @see https://dataclient.io/rest/api/RestEndpoint#parseResponse
     */
    parseResponse(response: Response): Promise<any>;
    /** Perform any transforms with the parsed result.
     * @see https://dataclient.io/rest/api/RestEndpoint#process
     */
    process(value: any, ...args: Parameters<F>): ResolveType<F>;
    /** Returns true if the provided (fetch) key matches this endpoint.
     * @see https://dataclient.io/rest/api/RestEndpoint#testKey
     */
    testKey(key: string): boolean;
    /** Creates a child endpoint that inherits from this while overriding provided `options`.
     * @see https://dataclient.io/rest/api/RestEndpoint#extend
     */
    extend<E extends RestInstanceBase, ExtendOptions extends PartialRestGenerics | {}>(this: E, options: Readonly<RestEndpointExtendOptions<ExtendOptions, E, F> & ExtendOptions>): RestExtendedEndpoint<ExtendOptions, E>;
}
interface RestInstance<F extends FetchFunction = FetchFunction, S extends Schema | undefined = any, M extends true | undefined = true | undefined, O extends {
    path: string;
    body?: any;
    searchParams?: any;
    method?: string;
    paginationField?: string;
} = {
    path: string;
}> extends RestInstanceBase<F, S, M, O> {
    /** Creates an Endpoint to append the next page extending a list for pagination
     * @see https://dataclient.io/rest/api/RestEndpoint#paginated
     */
    paginated<E extends RestInstanceBase<FetchFunction, any, undefined>, A extends any[]>(this: E, removeCursor: (...args: A) => readonly [...Parameters<E>]): PaginationEndpoint<E, A>;
    paginated<E extends RestInstanceBase<FetchFunction, any, undefined>, C extends string>(this: E, cursorField: C): PaginationFieldEndpoint<E, C>;
    /** Endpoint to append the next page extending a list for pagination
     * @see https://dataclient.io/rest/api/RestEndpoint#getPage
     */
    getPage: 'paginationField' extends keyof O ? O['paginationField'] extends string ? PaginationFieldEndpoint<F & {
        schema: S;
        sideEffect: M;
    } & O, O['paginationField']> : undefined : undefined;
    /** Endpoint that pushes (place at end) a newly created entity to this Collection
     * @see https://dataclient.io/rest/api/RestEndpoint#push
     */
    push: AddEndpoint<F, ExtractCollection<S>['push'], Exclude<O, 'body' | 'method'> & {
        body: OptionsToAdderBodyArgument<O> | OptionsToAdderBodyArgument<O>[] | FormData;
    }>;
    /** Endpoint that unshifts (place at start) a newly created entity to this Collection
     * @see https://dataclient.io/rest/api/RestEndpoint#unshift
     */
    unshift: AddEndpoint<F, ExtractCollection<S>['unshift'], Exclude<O, 'body' | 'method'> & {
        body: OptionsToAdderBodyArgument<O> | OptionsToAdderBodyArgument<O>[] | FormData;
    }>;
    /** Endpoint that assigns newly created entities to their respective keys in this Collection
     * @see https://dataclient.io/rest/api/RestEndpoint#assign
     */
    assign: AddEndpoint<F, ExtractCollection<S>, Exclude<O, 'body' | 'method'> & {
        body: Record<string, OptionsToAdderBodyArgument<O>> | FormData;
    }>;
}
type RestEndpointExtendOptions<O extends PartialRestGenerics, E extends {
    body?: any;
    path?: string;
    schema?: Schema;
    method?: string;
}, F extends FetchFunction> = RestEndpointOptions<OptionsToFunction<O, E, F>, 'schema' extends keyof O ? Extract<O['schema'], Schema | undefined> : E['schema']> & Partial<Omit<E, KeyofRestEndpoint | keyof PartialRestGenerics | keyof RestEndpointOptions>>;
type OptionsToRestEndpoint<O extends PartialRestGenerics, E extends RestInstanceBase & {
    body?: any;
    paginationField?: string;
}, F extends FetchFunction> = 'path' extends keyof O ? RestType<'searchParams' extends keyof O ? O['searchParams'] extends undefined ? PathArgs<Exclude<O['path'], undefined>> : O['searchParams'] & PathArgs<Exclude<O['path'], undefined>> : PathArgs<Exclude<O['path'], undefined>>, OptionsToBodyArgument<'body' extends keyof O ? O : E, 'method' extends keyof O ? O['method'] : E['method']>, 'schema' extends keyof O ? O['schema'] : E['schema'], 'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'], O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>, {
    path: Exclude<O['path'], undefined>;
    body: 'body' extends keyof O ? O['body'] : E['body'];
    searchParams: 'searchParams' extends keyof O ? O['searchParams'] : E['searchParams'];
    method: 'method' extends keyof O ? O['method'] : E['method'];
    paginationField: 'paginationField' extends keyof O ? O['paginationField'] : E['paginationField'];
}> : 'body' extends keyof O ? RestType<'searchParams' extends keyof O ? O['searchParams'] extends undefined ? PathArgs<Exclude<O['path'], undefined>> : O['searchParams'] & PathArgs<Exclude<E['path'], undefined>> : PathArgs<Exclude<E['path'], undefined>>, OptionsToBodyArgument<O, 'method' extends keyof O ? O['method'] : E['method']>, 'schema' extends keyof O ? O['schema'] : E['schema'], 'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'], O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>, {
    path: E['path'];
    body: O['body'];
    searchParams: 'searchParams' extends keyof O ? O['searchParams'] : E['searchParams'];
    method: 'method' extends keyof O ? O['method'] : E['method'];
    paginationField: 'paginationField' extends keyof O ? O['paginationField'] : Extract<E['paginationField'], string>;
}> : 'searchParams' extends keyof O ? RestType<O['searchParams'] extends undefined ? PathArgs<Exclude<O['path'], undefined>> : O['searchParams'] & PathArgs<Exclude<E['path'], undefined>>, OptionsToBodyArgument<E, 'method' extends keyof O ? O['method'] : E['method']>, 'schema' extends keyof O ? O['schema'] : E['schema'], 'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'], O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>, {
    path: E['path'];
    body: E['body'];
    searchParams: O['searchParams'];
    method: 'method' extends keyof O ? O['method'] : E['method'];
    paginationField: 'paginationField' extends keyof O ? O['paginationField'] : Extract<E['paginationField'], string>;
}> : RestInstance<F, 'schema' extends keyof O ? O['schema'] : E['schema'], 'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'], {
    path: 'path' extends keyof O ? Exclude<O['path'], undefined> : E['path'];
    body: 'body' extends keyof O ? O['body'] : E['body'];
    searchParams: 'searchParams' extends keyof O ? O['searchParams'] : E['searchParams'];
    method: 'method' extends keyof O ? O['method'] : E['method'];
    paginationField: 'paginationField' extends keyof O ? O['paginationField'] : E['paginationField'];
}>;
type RestExtendedEndpoint<O extends PartialRestGenerics, E extends RestInstanceBase & {
    getPage?: unknown;
}> = OptionsToRestEndpoint<O, E & (E extends {
    getPage: {
        paginationField: string;
    };
} ? {
    paginationField: E['getPage']['paginationField'];
} : unknown), RestInstance<(...args: Parameters<E>) => O['process'] extends {} ? Promise<ReturnType<O['process']>> : ReturnType<E>, 'schema' extends keyof O ? O['schema'] : E['schema'], 'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect']>> & Omit<O, KeyofRestEndpoint> & Omit<E, KeyofRestEndpoint | keyof O>;
interface PartialRestGenerics {
    /** @see https://dataclient.io/rest/api/RestEndpoint#path */
    readonly path?: string;
    /** @see https://dataclient.io/rest/api/RestEndpoint#schema */
    readonly schema?: Schema | undefined;
    /** @see https://dataclient.io/rest/api/RestEndpoint#method */
    readonly method?: string;
    /** Only used for types */
    /** @see https://dataclient.io/rest/api/RestEndpoint#body */
    body?: any;
    /** Only used for types */
    /** @see https://dataclient.io/rest/api/RestEndpoint#searchParams */
    searchParams?: any;
    /** @see https://dataclient.io/rest/api/RestEndpoint#paginationfield */
    readonly paginationField?: string;
    /** @see https://dataclient.io/rest/api/RestEndpoint#process */
    process?(value: any, ...args: any): any;
}
interface RestGenerics extends PartialRestGenerics {
    readonly path: string;
}
type PaginationEndpoint<E extends FetchFunction & RestGenerics & {
    sideEffect?: true | undefined;
}, A extends any[]> = RestInstanceBase<ParamFetchNoBody<A[0], ResolveType<E>>, E['schema'], E['sideEffect'], Pick<E, 'path' | 'searchParams' | 'body'> & {
    searchParams: Omit<A[0], keyof PathArgs<E['path']>>;
}>;
type PaginationFieldEndpoint<E extends FetchFunction & RestGenerics & {
    sideEffect?: true | undefined;
}, C extends string> = RestInstanceBase<ParamFetchNoBody<{
    [K in C]: string | number | boolean;
} & E['searchParams'] & PathArgs<Exclude<E['path'], undefined>>, ResolveType<E>>, E['schema'], E['sideEffect'], Pick<E, 'path' | 'searchParams' | 'body'> & {
    searchParams: {
        [K in C]: string | number | boolean;
    } & E['searchParams'];
}> & {
    paginationField: C;
};
type AddEndpoint<F extends FetchFunction = FetchFunction, S extends Schema | undefined = any, O extends {
    path: string;
    body: any;
    searchParams?: any;
} = {
    path: string;
    body: any;
}> = RestInstanceBase<RestFetch<'searchParams' extends keyof O ? O['searchParams'] extends undefined ? PathArgs<Exclude<O['path'], undefined>> : O['searchParams'] & PathArgs<Exclude<O['path'], undefined>> : PathArgs<Exclude<O['path'], undefined>>, O['body'], ResolveType<F>>, S, true, Omit<O, 'method'> & {
    method: 'POST';
}>;
type OptionsToAdderBodyArgument<O extends {
    body?: any;
}> = 'body' extends keyof O ? O['body'] : any;
interface RestEndpointOptions<F extends FetchFunction = FetchFunction, S extends Schema | undefined = undefined> extends EndpointExtraOptions<F> {
    urlPrefix?: string;
    requestInit?: RequestInit;
    getHeaders?(headers: HeadersInit): Promise<HeadersInit> | HeadersInit;
    getRequestInit?(body: any): Promise<RequestInit> | RequestInit;
    fetchResponse?(input: RequestInfo, init: RequestInit): Promise<any>;
    parseResponse?(response: Response): Promise<any>;
    sideEffect?: true | undefined;
    name?: string;
    signal?: AbortSignal;
    fetch?: F;
    key?(...args: Parameters<F>): string;
    url?(...args: Parameters<F>): string;
    update?: EndpointUpdateFunction<F, S>;
}
type RestEndpointConstructorOptions<O extends RestGenerics = any> = RestEndpointOptions<RestFetch<'searchParams' extends keyof O ? O['searchParams'] extends undefined ? PathArgs<O['path']> : O['searchParams'] & PathArgs<O['path']> : PathArgs<O['path']>, OptionsToBodyArgument<O, 'method' extends keyof O ? O['method'] : O extends {
    sideEffect: true;
} ? 'POST' : 'GET'>, O['process'] extends {} ? ReturnType<O['process']> : any>, O['schema']>;
interface RestEndpointConstructor {
    new <O extends RestGenerics = any>({ method, sideEffect, name, ...options }: RestEndpointConstructorOptions<O> & Readonly<O>): RestInstance<RestFetch<'searchParams' extends keyof O ? O['searchParams'] extends undefined ? PathArgs<O['path']> : O['searchParams'] & PathArgs<O['path']> : PathArgs<O['path']>, OptionsToBodyArgument<O, 'method' extends keyof O ? O['method'] : O extends {
        sideEffect: true;
    } ? 'POST' : 'GET'>, O['process'] extends {} ? ReturnType<O['process']> : any>, 'schema' extends keyof O ? O['schema'] : undefined, 'sideEffect' extends keyof O ? Extract<O['sideEffect'], undefined | true> : MethodToSide<O['method']>, 'method' extends keyof O ? O : O & {
        method: O extends {
            sideEffect: true;
        } ? 'POST' : 'GET';
    }>;
    readonly prototype: RestInstanceBase;
}
type MethodToSide<M> = M extends string ? M extends 'GET' ? undefined : true : undefined;
/** RestEndpoint types simplified */
type RestType<UrlParams = any, Body = any, S extends Schema | undefined = Schema | undefined, M extends true | undefined = true | undefined, R = any, O extends {
    path: string;
    body?: any;
    searchParams?: any;
    paginationField?: string;
} = {
    path: string;
    paginationField: string;
}> = IfTypeScriptLooseNull<RestInstance<RestFetch<UrlParams, Body, R>, S, M, O>, Body extends {} ? RestTypeWithBody<UrlParams, S, M, Body, R, O> : RestTypeNoBody<UrlParams, S, M, R, O>>;
type RestTypeWithBody<UrlParams = any, S extends Schema | undefined = Schema | undefined, M extends true | undefined = true | undefined, Body = any, R = any, O extends {
    path: string;
    body?: any;
    searchParams?: any;
} = {
    path: string;
    body: any;
}> = RestInstance<ParamFetchWithBody<UrlParams, Body, R>, S, M, O>;
type RestTypeNoBody<UrlParams = any, S extends Schema | undefined = Schema | undefined, M extends true | undefined = true | undefined, R = any, O extends {
    path: string;
    body?: undefined;
    searchParams?: any;
} = {
    path: string;
    body: undefined;
}> = RestInstance<ParamFetchNoBody<UrlParams, R>, S, M, O>;
/** Simple parameters, and body fetch functions */
type RestFetch<UrlParams, Body = {}, Resolve = any> = IfTypeScriptLooseNull<ParamFetchNoBody<UrlParams, Resolve> | ParamFetchWithBody<UrlParams, Body, Resolve>, Body extends {} ? ParamFetchWithBody<UrlParams, Body, Resolve> : ParamFetchNoBody<UrlParams, Resolve>>;
type ParamFetchWithBody<P, B = {}, R = any> = P extends undefined ? (this: EndpointInstanceInterface, body: B) => Promise<R> : {} extends P ? keyof P extends never ? (this: EndpointInstanceInterface, body: B) => Promise<R> : ((this: EndpointInstanceInterface, params: P, body: B) => Promise<R>) | ((this: EndpointInstanceInterface, body: B) => Promise<R>) : (this: EndpointInstanceInterface, params: P, body: B) => Promise<R>;
type ParamFetchNoBody<P, R = any> = P extends undefined ? (this: EndpointInstanceInterface) => Promise<R> : {} extends P ? keyof P extends never ? (this: EndpointInstanceInterface) => Promise<R> : ((this: EndpointInstanceInterface, params: P) => Promise<R>) | ((this: EndpointInstanceInterface) => Promise<R>) : (this: EndpointInstanceInterface, params: P) => Promise<R>;
type ParamToArgs<P> = P extends undefined ? [] : {} extends P ? keyof P extends never ? [
] : [] | [P] : [P];
type IfTypeScriptLooseNull<Y, N> = 1 | undefined extends 1 ? Y : N;
type KeyofRestEndpoint = keyof RestInstance;
type FromFallBack<K extends keyof E, O, E> = K extends keyof O ? O[K] : E[K];
type FetchMutate<A extends readonly any[] = [any, {}] | [{}], R = any> = (this: RestInstance, ...args: A) => Promise<R>;
type FetchGet<A extends readonly any[] = [any], R = any> = (this: RestInstance, ...args: A) => Promise<R>;
type Defaults<O, D> = {
    [K in keyof O | keyof D]: K extends keyof O ? Exclude<O[K], undefined> : D[Extract<K, keyof D>];
};
type GetEndpoint<O extends {
    readonly path: string;
    readonly schema: Schema;
    /** Only used for types */
    readonly searchParams?: any;
    readonly paginationField?: string;
} = {
    path: string;
    schema: Schema;
}> = RestTypeNoBody<'searchParams' extends keyof O ? O['searchParams'] extends undefined ? PathArgs<O['path']> : O['searchParams'] & PathArgs<O['path']> : PathArgs<O['path']>, O['schema'], undefined, any, O & {
    method: 'GET';
}>;
type MutateEndpoint<O extends {
    readonly path: string;
    readonly schema: Schema;
    /** Only used for types */
    readonly searchParams?: any;
    /** Only used for types */
    readonly body?: any;
} = {
    path: string;
    body: any;
    schema: Schema;
}> = RestTypeWithBody<'searchParams' extends keyof O ? O['searchParams'] extends undefined ? PathArgs<O['path']> : O['searchParams'] & PathArgs<O['path']> : PathArgs<O['path']>, O['schema'], true, O['body'], any, O & {
    body: any;
    method: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}>;

/* eslint-disable @typescript-eslint/ban-types */


/** Simplifies endpoint definitions that follow REST patterns
 *
 * @see https://dataclient.io/rest/api/RestEndpoint
 */
declare let RestEndpoint: RestEndpointConstructor;

declare function getUrlBase(path: string): PathFunction;
declare function getUrlTokens(path: string): Set<string>;

type ResourceExtension<R extends {
    [K in ExtendKey]: RestInstanceBase;
}, ExtendKey extends Exclude<Extract<keyof R, string>, 'extend'>, O extends PartialRestGenerics | {}> = {
    [K in keyof R]: K extends ExtendKey ? RestExtendedEndpoint<O, R[K]> : R[K];
};
/** Resource with individual endpoints customized
 *
 */
interface CustomResource<R extends ResourceInterface, O extends ResourceGenerics = {
    path: ResourcePath;
    schema: any;
}, Get extends PartialRestGenerics | {} = any, GetList extends PartialRestGenerics | {} = any, Update extends PartialRestGenerics | {} = any, PartialUpdate extends PartialRestGenerics | {} = any, Delete extends PartialRestGenerics | {} = any> extends Extendable<O> {
    get: unknown extends Get ? R['get'] : PartialRestGenerics extends Get ? R['get'] : RestExtendedEndpoint<Get, R['get']>;
    getList: unknown extends GetList ? R['getList'] : PartialRestGenerics extends GetList ? R['getList'] : RestExtendedEndpoint<GetList, R['getList']>;
    update: unknown extends Update ? R['update'] : PartialRestGenerics extends Update ? R['update'] : RestExtendedEndpoint<Update, R['update']>;
    partialUpdate: unknown extends PartialUpdate ? R['partialUpdate'] : PartialRestGenerics extends PartialUpdate ? R['partialUpdate'] : RestExtendedEndpoint<PartialUpdate, R['partialUpdate']>;
    delete: unknown extends Delete ? R['delete'] : PartialRestGenerics extends Delete ? R['delete'] : RestExtendedEndpoint<Delete, R['delete']>;
}
type ExtendedResource<R extends ResourceInterface, T extends Record<string, EndpointInterface>> = Omit<R, keyof T> & T;
interface ResourceEndpointExtensions<R extends ResourceInterface, Get extends PartialRestGenerics = any, GetList extends PartialRestGenerics = any, Update extends PartialRestGenerics = any, PartialUpdate extends PartialRestGenerics = any, Delete extends PartialRestGenerics = any> {
    readonly get?: RestEndpointOptions<unknown extends Get ? EndpointToFunction<R['get']> : OptionsToFunction<Get, R['get'], EndpointToFunction<R['get']>>, R['get']['schema']> & Readonly<Get>;
    readonly getList?: RestEndpointOptions<unknown extends GetList ? EndpointToFunction<R['getList']> : OptionsToFunction<GetList, R['getList'], EndpointToFunction<R['getList']>>, R['getList']['schema']> & Readonly<GetList>;
    readonly update?: RestEndpointOptions<unknown extends Update ? EndpointToFunction<R['update']> : OptionsToFunction<Update, R['update'], EndpointToFunction<R['update']>>, R['update']['schema']> & Readonly<Update>;
    readonly partialUpdate?: RestEndpointOptions<unknown extends PartialUpdate ? EndpointToFunction<R['partialUpdate']> : OptionsToFunction<PartialUpdate, R['partialUpdate'], EndpointToFunction<R['partialUpdate']>>, R['partialUpdate']['schema']> & Readonly<PartialUpdate>;
    readonly delete?: RestEndpointOptions<unknown extends Delete ? EndpointToFunction<R['delete']> : OptionsToFunction<Delete, R['delete'], EndpointToFunction<R['delete']>>, R['delete']['schema']> & Readonly<Delete>;
}

interface Extendable<O extends ResourceGenerics = {
    path: ResourcePath;
    schema: any;
}> {
    /** Allows customizing individual endpoints
     *
     * @see https://dataclient.io/rest/api/createResource#extend
     */
    extend<R extends {
        [K in ExtendKey]: RestInstanceBase;
    }, const ExtendKey extends Exclude<Extract<keyof R, string>, 'extend'>, ExtendOptions extends PartialRestGenerics | {}>(this: R, key: ExtendKey, options: Readonly<RestEndpointExtendOptions<ExtendOptions, R[ExtendKey], EndpointToFunction<R[ExtendKey]>> & ExtendOptions>): ResourceExtension<R, ExtendKey, ExtendOptions>;
    extend<R extends {
        get: RestInstanceBase;
    }, const ExtendKey extends string, ExtendOptions extends PartialRestGenerics | {}>(this: R, key: ExtendKey, options: Readonly<RestEndpointExtendOptions<ExtendOptions, R['get'], EndpointToFunction<R['get']>> & ExtendOptions>): R & {
        [key in ExtendKey]: RestExtendedEndpoint<ExtendOptions, R['get']>;
    };
    extend<R extends ResourceInterface, Get extends PartialRestGenerics = any, GetList extends PartialRestGenerics = any, Update extends PartialRestGenerics = any, PartialUpdate extends PartialRestGenerics = any, Delete extends PartialRestGenerics = any>(this: R, options: ResourceEndpointExtensions<R, Get, GetList, Update, PartialUpdate, Delete>): CustomResource<R, O, Get, GetList, Update, PartialUpdate, Delete>;
    extend<R extends ResourceInterface, T extends Record<string, EndpointInterface>>(this: R, extender: (baseResource: R) => T): ExtendedResource<R, T>;
}

/** The typed (generic) options for a Resource */
interface ResourceGenerics {
    /** @see https://dataclient.io/rest/api/createResource#path */
    readonly path: ResourcePath;
    /** @see https://dataclient.io/rest/api/createResource#schema */
    readonly schema: Schema;
    /** Only used for types */
    /** @see https://dataclient.io/rest/api/createResource#body */
    readonly body?: any;
    /** Only used for types */
    /** @see https://dataclient.io/rest/api/createResource#searchParams */
    readonly searchParams?: any;
    /** @see https://dataclient.io/rest/api/createResource#paginationfield */
    readonly paginationField?: string;
}
/** The untyped options for createResource() */
interface ResourceOptions {
    /** @see https://dataclient.io/rest/api/createResource#endpoint */
    Endpoint?: typeof RestEndpoint;
    /** @see https://dataclient.io/rest/api/createResource#collection */
    Collection?: typeof Collection;
    /** @see https://dataclient.io/rest/api/createResource#optimistic */
    optimistic?: boolean;
    /** @see https://dataclient.io/rest/api/createResource#urlprefix */
    urlPrefix?: string;
    requestInit?: RequestInit;
    getHeaders?(headers: HeadersInit): Promise<HeadersInit> | HeadersInit;
    getRequestInit?(body: any): Promise<RequestInit> | RequestInit;
    fetchResponse?(input: RequestInfo, init: RequestInit): Promise<any>;
    parseResponse?(response: Response): Promise<any>;
    /** Default data expiry length, will fall back to NetworkManager default if not defined */
    readonly dataExpiryLength?: number;
    /** Default error expiry length, will fall back to NetworkManager default if not defined */
    readonly errorExpiryLength?: number;
    /** Poll with at least this frequency in miliseconds */
    readonly pollFrequency?: number;
    /** Marks cached resources as invalid if they are stale */
    readonly invalidIfStale?: boolean;
    /** Determines whether to throw or fallback to */
    errorPolicy?(error: any): 'hard' | 'soft' | undefined;
}
/** Resources are a collection of methods for a given data model.
 * @see https://dataclient.io/rest/api/createResource
 */
interface Resource<O extends ResourceGenerics = {
    path: ResourcePath;
    schema: any;
}> extends Extendable<O> {
    /** Get a singular item
     *
     * @see https://dataclient.io/rest/api/createResource#get
     */
    get: GetEndpoint<{
        path: O['path'];
        schema: O['schema'];
    }>;
    /** Get a list of item
     *
     * @see https://dataclient.io/rest/api/createResource#getlist
     */
    getList: 'searchParams' extends keyof O ? GetEndpoint<{
        path: ShortenPath<O['path']>;
        schema: Collection<[
            O['schema']
        ], ParamToArgs<O['searchParams'] extends undefined ? KeysToArgs<ShortenPath<O['path']>> : O['searchParams'] & PathArgs<ShortenPath<O['path']>>>>;
        body: 'body' extends keyof O ? O['body'] : Partial<Denormalize<O['schema']>>;
        searchParams: O['searchParams'];
    } & Pick<O, 'paginationField'>> : GetEndpoint<{
        path: ShortenPath<O['path']>;
        schema: Collection<[
            O['schema']
        ], ParamToArgs<(Record<string, number | string | boolean> | undefined) & PathArgs<ShortenPath<O['path']>>>>;
        body: 'body' extends keyof O ? O['body'] : Partial<Denormalize<O['schema']>>;
        searchParams: Record<string, number | string | boolean> | undefined;
    } & Pick<O, 'paginationField'>>;
    /** Create a new item (POST)
     *
     * @deprecated use Resource.getList.push instead
     */
    create: 'searchParams' extends keyof O ? MutateEndpoint<{
        path: ShortenPath<O['path']>;
        schema: Collection<[O['schema']]>['push'];
        body: 'body' extends keyof O ? O['body'] : Partial<Denormalize<O['schema']>>;
        searchParams: O['searchParams'];
    }> : MutateEndpoint<{
        path: ShortenPath<O['path']>;
        schema: Collection<[O['schema']]>['push'];
        body: 'body' extends keyof O ? O['body'] : Partial<Denormalize<O['schema']>>;
    }>;
    /** Update an item (PUT)
     *
     * @see https://dataclient.io/rest/api/createResource#update
     */
    update: 'body' extends keyof O ? MutateEndpoint<{
        path: O['path'];
        body: O['body'];
        schema: O['schema'];
    }> : MutateEndpoint<{
        path: O['path'];
        body: Partial<Denormalize<O['schema']>> | FormData;
        schema: O['schema'];
    }>;
    /** Update an item (PATCH)
     *
     * @see https://dataclient.io/rest/api/createResource#partialupdate
     */
    partialUpdate: 'body' extends keyof O ? MutateEndpoint<{
        path: O['path'];
        body: Partial<O['body']>;
        schema: O['schema'];
    }> : MutateEndpoint<{
        path: O['path'];
        body: Partial<Denormalize<O['schema']>> | FormData;
        schema: O['schema'];
    }>;
    /** Delete an item (DELETE)
     *
     * @see https://dataclient.io/rest/api/createResource#delete
     */
    delete: RestTypeNoBody<PathArgs<O['path']>, O['schema'] extends EntityInterface & {
        process: any;
    } ? Invalidate<O['schema']> : O['schema'], undefined, Partial<PathArgs<O['path']>>, {
        path: O['path'];
    }>;
}
interface ResourceInterface {
    get: RestInstanceBase;
    getList: RestInstanceBase;
    update: RestInstanceBase;
    partialUpdate: RestInstanceBase;
    delete: RestInstanceBase;
}

/** Creates collection of Endpoints for common operations on a given data/schema.
 *
 * @see https://dataclient.io/rest/api/createResource
 */
declare function createResource<O extends ResourceGenerics>({ path, schema, Endpoint, Collection, optimistic, paginationField, ...extraOptions }: Readonly<O> & ResourceOptions): Resource<O>;

interface HookableEndpointInterface extends EndpointInterface {
    extend(...args: any): HookableEndpointInterface;
}
/** Turns a collection of Endpoints (Resource) into a collection of hooks.
 * This is useful for Endpoints that need hooks to prepare their fetch requests.
 *
 * @see https://dataclient.io/rest/api/hookifyResource
 */
declare function hookifyResource<R extends {}>(resource: R, useRequestInit: () => RequestInit): HookResource<R>;
type HookResource<R extends {}> = {
    [K in Extract<keyof R, string> as `use${Capitalize<K>}`]: () => R[K];
};

/** An error with a Rest Endpoint fetch
 *
 * @see https://dataclient.io/rest/api/NetworkError
 */
declare class NetworkError extends Error {
    status: number;
    response: Response;
    name: string;
    constructor(response: Response);
}

type DevToolsPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

interface Props$1 {
    children: React.ReactNode;
    managers?: Manager[];
    initialState: State<unknown>;
    Controller: typeof Controller;
    devButton: DevToolsPosition | null | undefined;
}
/**
 * Manages state, providing all context needed to use the hooks.
 * @see https://dataclient.io/docs/api/CacheProvider
 */
declare function CacheProvider({ children, managers, initialState, Controller, devButton, }: Props$1): JSX.Element;
declare namespace CacheProvider {
    var defaultProps: {
        initialState: State<unknown>;
        Controller: typeof Controller;
        devButton: string;
    };
}

/**
 * Handles loading and error conditions of Suspense
 * @see https://dataclient.io/docs/api/AsyncBoundary
 */
declare function AsyncBoundary({ children, errorComponent, fallback, ...errorProps }: Props): JSX.Element;
declare const _default: typeof AsyncBoundary;

interface Props {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    errorClassName?: string;
    errorComponent?: React.ComponentType<{
        error: NetworkError$2;
        className?: string;
    }>;
}
//# sourceMappingURL=AsyncBoundary.d.ts.map

interface ErrorBoundaryProps<E extends NetworkError$2> {
    children: React.ReactNode;
    className?: string;
    fallbackComponent: React.ComponentType<{
        error: E;
        className?: string;
    }>;
}
interface ErrorState<E extends NetworkError$2> {
    error?: E;
}
/**
 * Handles any networking errors from suspense
 * @see https://dataclient.io/docs/api/NetworkErrorBoundary
 */
declare class NetworkErrorBoundary<E extends NetworkError$2> extends React.Component<ErrorBoundaryProps<E>, ErrorState<E>> {
    static defaultProps: {
        fallbackComponent: ({ error, className, }: {
            error: NetworkError$2;
            className: string;
        }) => react_jsx_runtime.JSX.Element;
    };
    static getDerivedStateFromError(error: NetworkError$2 | any): {
        error: NetworkError$2;
    };
    state: ErrorState<E>;
    render(): JSX.Element;
}

type CondNull$1<P, A, B> = P extends null ? A : B;
type SuspenseReturn<E extends EndpointInterface$1<FetchFunction$1, Schema$1 | undefined, undefined | false>, Args extends readonly [...Parameters<E>] | readonly [null]> = CondNull$1<Args[0], E['schema'] extends undefined | null ? undefined : DenormalizeNullable$1<E['schema']>, E['schema'] extends undefined | null ? ResolveType$1<E> : Denormalize$1<E['schema']>>;

/**
 * Ensure an endpoint is available.
 * Suspends until it is.
 *
 * `useSuspense` guarantees referential equality globally.
 * @see https://dataclient.io/docs/api/useSuspense
 * @throws {Promise} If data is not yet available.
 * @throws {NetworkError} If fetch fails.
 */
declare function useSuspense<E extends EndpointInterface$1<FetchFunction$1, Schema$1 | undefined, undefined | false>, Args extends readonly [...Parameters<E>] | readonly [null]>(endpoint: E, ...args: Args): SuspenseReturn<E, Args>;

/**
 * Access a response if it is available.
 *
 * `useCache` guarantees referential equality globally.
 * @see https://dataclient.io/docs/api/useCache
 */
declare function useCache<E extends Pick<EndpointInterface$1<FetchFunction$1, Schema$1 | undefined, undefined | false | true>, 'key' | 'schema' | 'invalidIfStale'>, Args extends readonly [...Parameters<E['key']>] | readonly [null]>(endpoint: E, ...args: Args): E['schema'] extends undefined | null ? E extends (...args: any) => any ? ResolveType$1<E> | undefined : any : DenormalizeNullable$1<E['schema']>;

/**
 * Query the store.
 *
 * `useQuery` results are globally memoized.
 * @see https://dataclient.io/docs/api/useQuery
 */
declare function useQuery<S extends Queryable$1>(schema: S, ...args: SchemaArgs$1<S>): DenormalizeNullable$1<S> | undefined;

type ErrorTypes = NetworkError$2 | UnknownError$1;
type UseErrorReturn<P> = P extends [null] ? undefined : ErrorTypes | undefined;
/**
 * Get any errors for a given request
 * @see https://dataclient.io/docs/api/useError
 */
declare function useError<E extends Pick<EndpointInterface$1, 'key'>, Args extends readonly [...Parameters<E['key']>] | readonly [null]>(endpoint: E, ...args: Args): UseErrorReturn<Args>;

/**
 * Request a resource if it is not in cache.
 * @see https://dataclient.io/docs/api/useFetch
 */
declare function useFetch<E extends EndpointInterface$1<FetchFunction$1, Schema$1 | undefined, undefined | false>, Args extends readonly [...Parameters<E>] | readonly [null]>(endpoint: E, ...args: Args): (E["schema"] extends null | undefined ? ReturnType<E> : Promise<Denormalize$1<E["schema"]>>) | undefined;

/**
 * Keeps a resource fresh by subscribing to updates.
 * @see https://dataclient.io/docs/api/useSubscription
 */
declare function useSubscription<E extends EndpointInterface$1<FetchFunction$1, Schema$1 | undefined, undefined | false>, Args extends readonly [...Parameters<E>] | readonly [null]>(endpoint: E, ...args: Args): void;

type CondNull<P, A, B> = P extends null ? A : B;
type StatefulReturn<S extends Schema$1 | undefined, P> = CondNull<P, {
    data: DenormalizeNullable$1<S>;
    loading: false;
    error: undefined;
}, {
    data: Denormalize$1<S>;
    loading: false;
    error: undefined;
} | {
    data: DenormalizeNullable$1<S>;
    loading: true;
    error: undefined;
} | {
    data: DenormalizeNullable$1<S>;
    loading: false;
    error: ErrorTypes$2;
}>;
/**
 * Use async date with { data, loading, error } (DLE)
 * @see https://dataclient.io/docs/api/useDLE
 */
declare function useDLE<E extends EndpointInterface$1<FetchFunction$1, Schema$1 | undefined, undefined | false>, Args extends readonly [...Parameters<E>] | readonly [null]>(endpoint: E, ...args: Args): E['schema'] extends undefined | null ? {
    data: E extends (...args: any) => any ? ResolveType$1<E> | undefined : any;
    loading: boolean;
    error: ErrorTypes$2 | undefined;
} : StatefulReturn<E['schema'], Args[0]>;

/**
 * Imperative control of Reactive Data Client store
 * @see https://dataclient.io/docs/api/useController
 */
declare function useController(): Controller;

/**
 * Ensure an endpoint is available. Keeps it fresh once it is.
 *
 * useSuspense() + useSubscription()
 * @see https://dataclient.io/docs/api/useLive
 * @throws {Promise} If data is not yet available.
 * @throws {NetworkError} If fetch fails.
 */
declare function useLive<E extends EndpointInterface$1<FetchFunction$1, Schema$1 | undefined, undefined | false>, Args extends readonly [...Parameters<E>] | readonly [null]>(endpoint: E, ...args: Args): SuspenseReturn<E, Args>;

export { AbstractInstanceType, AddEndpoint, Array$1 as Array, _default as AsyncBoundary, CacheProvider, Collection, CustomResource, Defaults, Denormalize, DenormalizeNullable, Endpoint, EndpointExtendOptions, EndpointExtraOptions, EndpointInstance, EndpointInstanceInterface, EndpointInterface, EndpointOptions, EndpointParam, EndpointToFunction, Entity, ErrorTypes$1 as ErrorTypes, ExpiryStatusInterface, ExtendableEndpoint, ExtendedResource, FetchFunction, FetchGet, FetchMutate, FromFallBack, GetEndpoint, HookResource, HookableEndpointInterface, INVALID, Invalidate, KeyofEndpointInstance, KeyofRestEndpoint, KeysToArgs, MethodToSide, MutateEndpoint, NetworkError, NetworkErrorBoundary, Normalize, NormalizeNullable, OptionsToFunction, PaginationEndpoint, PaginationFieldEndpoint, ParamFetchNoBody, ParamFetchWithBody, ParamToArgs, PartialRestGenerics, PathArgs, PathArgsAndSearch, PathKeys, PolymorphicInterface, Queryable, ReadEndpoint, ResolveType, Resource, ResourceEndpointExtensions, ResourceExtension, ResourceGenerics, ResourceOptions, RestEndpoint, RestEndpointConstructor, RestEndpointConstructorOptions, RestEndpointExtendOptions, RestEndpointOptions, RestExtendedEndpoint, RestFetch, RestGenerics, RestInstance, RestInstanceBase, RestType, RestTypeNoBody, RestTypeWithBody, Schema, SchemaArgs, SchemaClass, SchemaSimple, ShortenPath, SnapshotInterface, UnknownError, createResource, getUrlBase, getUrlTokens, hookifyResource, schema_d as schema, useCache, useController, useDLE, useError, useFetch, useLive, useQuery, useSubscription, useSuspense, validateRequired };
