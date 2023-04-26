import { Schema, schema } from '@rest-hooks/endpoint';

export default function mapCollection<
  M extends <C extends schema.CollectionType>(collection: C) => any,
  S extends Schema | undefined,
>(
  s: S,
  mapper: M,
): S extends schema.CollectionType
  ? ReturnType<typeof mapper<S>>
  : S extends schema.Object<infer T>
  ? {
      [K in keyof T]: T[K] extends Schema
        ? typeof mapCollection<M, T[K]>
        : T[K];
    }
  : S extends { [K: string]: any }
  ? {
      [K in keyof S]: S[K] extends Schema
        ? typeof mapCollection<M, S[K]>
        : S[K];
    }
  : S {
  if (typeof s !== 'object' || s === undefined) return s as any;
  if (s instanceof schema.Collection) {
    return mapper(s as any);
  }
  const objCopy: Record<string, Schema> = {
    ...(s instanceof schema.Object ? (s as any).schema : s),
  };
  for (const k in objCopy) {
    if (!objCopy[k]) continue;
    objCopy[k] = mapCollection(objCopy[k], mapper) as any;
  }
  return objCopy as any;
}

type MapCollection<
  M extends <C extends schema.CollectionType>(collection: C) => any,
  S extends Schema | undefined,
> = S extends schema.CollectionType
  ? ReturnType<M>
  : S extends schema.Object<infer T>
  ? MapCollection<M, T>
  : S extends { [K: string]: any }
  ? MapObject<M, S>
  : never;

export type MapObject<
  M extends (collection: schema.CollectionType) => any,
  S extends Record<string, any>,
> = {
  [K in keyof S]: S[K] extends Schema ? MapCollection<M, S[K]> : S[K];
};
