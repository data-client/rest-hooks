import type {
  SchemaSimple,
  Schema,
  UnvisitFunction,
  NormalizedIndex,
  EntityTable,
  EntityInterface,
} from './interface.js';
import type {
  AbstractInstanceType,
  Normalize,
  NormalizeNullable,
  Denormalize,
  DenormalizeNullable,
  DenormalizeObject,
  DenormalizeNullableObject,
  NormalizeObject,
  NormalizedNullableObject,
  EntityMap,
} from './normal.js';
import { CollectionOptions } from './schemas/Collection.js';
import { default as Delete } from './schemas/Delete.js';
import {
  EntityOptions,
  IEntityClass,
  IEntityInstance,
  RequiredPKOptions,
  IDClass,
  Constructor,
  PKClass,
} from './schemas/EntitySchema.js';
import { default as Invalidate } from './schemas/Invalidate.js';

export { Delete, EntityMap, Invalidate };

export { EntityInterface } from './interface.js';

/**
 * Represents arrays
 * @see https://resthooks.io/rest/api/Array
 */
export class Array<S extends Schema = Schema> implements SchemaClass {
  constructor(
    definition: S,
    schemaAttribute?: S extends EntityMap<infer T>
      ? keyof T | SchemaFunction<keyof S>
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

  denormalize(
    // eslint-disable-next-line @typescript-eslint/ban-types
    input: {},
    unvisit: UnvisitFunction,
  ): [
    denormalized: (S extends EntityMap<infer T> ? T : Denormalize<S>)[],
    found: boolean,
    suspend: boolean,
  ];

  _denormalizeNullable(): [
    (S extends EntityMap<infer T> ? T : Denormalize<S>)[] | undefined,
    false,
    boolean,
  ];

  denormalizeOnly(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): (S extends EntityMap<infer T> ? T : Denormalize<S>)[];

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
  ): any;
}

/**
 * Retrieves all entities in cache
 *
 * @see https://resthooks.io/rest/api/AllSchema
 */
export class All<
  S extends EntityMap | EntityInterface = EntityMap | EntityInterface,
> implements SchemaClass
{
  constructor(
    definition: S,
    schemaAttribute?: S extends EntityMap<infer T>
      ? keyof T | SchemaFunction<keyof S>
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

  denormalize(
    // eslint-disable-next-line @typescript-eslint/ban-types
    input: {},
    unvisit: UnvisitFunction,
  ): [
    denormalized: (S extends EntityMap<infer T> ? T : Denormalize<S>)[],
    found: boolean,
    suspend: boolean,
  ];

  _denormalizeNullable(): [
    (S extends EntityMap<infer T> ? T : Denormalize<S>)[] | undefined,
    false,
    boolean,
  ];

  denormalizeOnly(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): (S extends EntityMap<infer T> ? T : Denormalize<S>)[];

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
    entities: EntityTable,
  ): any;
}

/**
 * Represents objects with statically known members
 * @see https://resthooks.io/rest/api/Object
 */
export class Object<O extends Record<string, any> = Record<string, Schema>>
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

  denormalize(
    // eslint-disable-next-line @typescript-eslint/ban-types
    input: {},
    unvisit: UnvisitFunction,
  ): [denormalized: DenormalizeObject<O>, found: boolean, suspend: boolean];

  _denormalizeNullable(): [DenormalizeNullableObject<O>, false, boolean];

  denormalizeOnly(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): DenormalizeObject<O>;

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
  ): any;
}

/**
 * Represents polymorphic values.
 * @see https://resthooks.io/rest/api/Union
 */
export class Union<Choices extends EntityMap = any> implements SchemaClass {
  constructor(
    definition: Choices,
    schemaAttribute:
      | keyof AbstractInstanceType<Choices[keyof Choices]>
      | SchemaFunction<keyof Choices>,
  );

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

  denormalize(
    // eslint-disable-next-line @typescript-eslint/ban-types
    input: {},
    unvisit: UnvisitFunction,
  ): [
    denormalized: AbstractInstanceType<Choices[keyof Choices]>,
    found: boolean,
    suspend: boolean,
  ];

  _denormalizeNullable(): [
    AbstractInstanceType<Choices[keyof Choices]> | undefined,
    false,
    boolean,
  ];

  denormalizeOnly(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): AbstractInstanceType<Choices[keyof Choices]>;

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
  ): any;
}

/**
 * Represents variably sized objects
 * @see https://resthooks.io/rest/api/Values
 */
export class Values<Choices extends Schema = any> implements SchemaClass {
  constructor(
    definition: Choices,
    schemaAttribute?: Choices extends EntityMap<infer T>
      ? keyof T | SchemaFunction<keyof Choices>
      : undefined,
  );

  define(definition: Schema): void;
  readonly isSingleSchema: Choices extends EntityMap ? false : true;
  inferSchema: SchemaAttributeFunction<
    Choices extends EntityMap ? Choices[keyof Choices] : Choices
  >;

  getSchemaAttribute: Choices extends EntityMap
    ? SchemaFunction<keyof Choices>
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
        Choices extends EntityMap
          ? UnionResult<Choices>
          : NormalizeNullable<Choices>
      >
    | undefined;

  denormalize(
    // eslint-disable-next-line @typescript-eslint/ban-types
    input: {},
    unvisit: UnvisitFunction,
  ): [
    denormalized: Record<
      string,
      Choices extends EntityMap<infer T> ? T : Denormalize<Choices>
    >,
    found: boolean,
    suspend: boolean,
  ];

  _denormalizeNullable(): [
    Record<
      string,
      Choices extends EntityMap<infer T>
        ? T | undefined
        : DenormalizeNullable<Choices>
    >,
    false,
    boolean,
  ];

  denormalizeOnly(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): Record<
    string,
    Choices extends EntityMap<infer T> ? T : Denormalize<Choices>
  >;

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
  ): any;
}

/**
 * Entities but for Arrays instead of classes
 * @see https://resthooks.io/rest/api/Collection
 */
export class CollectionSchema<
  S extends Array<any> | Values<any> = any,
  Parent extends any[] = any,
> {
  addWith<P extends any[] = Parent>(
    merge: (existing: any, incoming: any) => any,
    createCollectionFilter?: (
      ...args: P
    ) => (collectionKey: Record<string, any>) => boolean,
  ): CollectionSchema<S, P>;

  readonly schema: S;
  key: string;
  pk(value: any, parent: any, key: string, args: any[]): string;
  normalize(
    input: any,
    parent: Parent,
    key: string,
    visit: (...args: any) => any,
    addEntity: (...args: any) => any,
    visitedEntities: Record<string, any>,
    storeEntities: any,
    args: any[],
  ): string;

  merge(existing: any, incoming: any): any;
  shouldReorder(
    existingMeta: {
      date: number;
      fetchedAt: number;
    },
    incomingMeta: {
      date: number;
      fetchedAt: number;
    },
    existing: any,
    incoming: any,
  ): boolean;

  mergeWithStore(
    existingMeta: {
      date: number;
      fetchedAt: number;
    },
    incomingMeta: {
      date: number;
      fetchedAt: number;
    },
    existing: any,
    incoming: any,
  ): any;

  mergeMetaWithStore(
    existingMeta: {
      expiresAt: number;
      date: number;
      fetchedAt: number;
    },
    incomingMeta: {
      expiresAt: number;
      date: number;
      fetchedAt: number;
    },
    existing: any,
    incoming: any,
  ): {
    expiresAt: number;
    date: number;
    fetchedAt: number;
  };

  infer(
    args: unknown,
    indexes: unknown,
    recurse: unknown,
    entities: unknown,
  ): any;

  createIfValid: (value: any) => any | undefined;
  denormalizeOnly(
    input: any,
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): ReturnType<S['denormalizeOnly']>;

  _denormalizeNullable(): ReturnType<S['_denormalizeNullable']>;
  _normalizeNullable(): ReturnType<S['_normalizeNullable']>;
}
export type CollectionType<
  S extends any[] | Array<any> | Values<any> = any,
  Parent extends any[] = [
    urlParams: Record<string, any>,
    body?: Record<string, any>,
  ],
> = CollectionSchema<S extends any[] ? Array<S[number]> : S> &
  (S extends any[]
    ? {
        push: CollectionSchema<Array<S[number]>, Parent>;
        unshift: CollectionSchema<Array<S[number]>, Parent>;
      }
    : S extends Values<any>
    ? { assign: CollectionSchema<S, Parent> }
    : S extends Array<any>
    ? {
        push: CollectionSchema<S, Parent>;
        unshift: CollectionSchema<S, Parent>;
      }
    : never);

export interface CollectionConstructor {
  new <
    S extends SchemaSimple[] | Array<any> | Values<any> = any,
    Parent extends any[] = [
      urlParams: Record<string, any>,
      body?: Record<string, any>,
    ],
  >(
    schema: S,
    options: CollectionOptions,
  ): CollectionType<S, Parent>;
  readonly prototype: CollectionSchema;
}
/**
 * Entities but for Arrays instead of classes
 * @see https://resthooks.io/rest/api/Collection
 */
export declare let Collection: CollectionConstructor;

export type StrategyFunction<T> = (value: any, parent: any, key: string) => T;
export type SchemaFunction<K = string> = (
  value: any,
  parent: any,
  key: string,
) => K;
export type MergeFunction = (entityA: any, entityB: any) => any;
export type SchemaAttributeFunction<S extends Schema> = (
  value: any,
  parent: any,
  key: string,
) => S;
export type { UnvisitFunction };
export type UnionResult<Choices extends EntityMap> = {
  id: string;
  schema: keyof Choices;
};
export interface SchemaClass<T = any, N = T | undefined>
  extends SchemaSimple<T> {
  // this is not an actual member, but is needed for the recursive NormalizeNullable<> type algo
  _normalizeNullable(): any;
  // this is not an actual member, but is needed for the recursive DenormalizeNullable<> type algo
  _denormalizeNullable(): [N, boolean, boolean];
}

export interface SchemaSimpleNew<T = any> {
  normalize(
    input: any,
    parent: any,
    key: any,
    visit: (...args: any) => any,
    addEntity: (...args: any) => any,
    visitedEntities: Record<string, any>,
    storeEntities: any,
    args?: any[],
  ): any;
  denormalizeOnly(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): T;
  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
    entities: EntityTable,
  ): any;
}

// id is in Instance, so we default to that as pk
/**
 * Represents data that should be deduped by specifying a primary key.
 * @see https://resthooks.io/docs/api/schema.Entity
 */
export function Entity<TBase extends PKClass>(
  Base: TBase,
  opt?: EntityOptions<InstanceType<TBase>>,
): IEntityClass<TBase> & TBase;

// id is in Instance, so we default to that as pk
export function Entity<TBase extends IDClass>(
  Base: TBase,
  opt?: EntityOptions<InstanceType<TBase>>,
): IEntityClass<TBase> & TBase & (new (...args: any[]) => IEntityInstance);

// pk was specified in options, so we don't need to redefine
export function Entity<TBase extends Constructor>(
  Base: TBase,
  opt: RequiredPKOptions<InstanceType<TBase>>,
): IEntityClass<TBase> & TBase & (new (...args: any[]) => IEntityInstance);

/* TODO: figure out how to make abstract class mixins work. until then we will require PK in options
export function Entity<TBase extends Constructor>(
  Base: TBase,
  opt?: EntityOptions<keyof InstanceType<TBase>>,
): (abstract new (...args: any[]) => {
  pk(parent?: any, key?: string): string | undefined;
}) &
  IEntityClass<TBase> &
  TBase;
*/
