import GlobalCache from './globalCache.js';
import { INVALID } from './symbol.js';
import getUnvisit from './unvisit.js';
import buildQueryKey, { validateQueryKey } from '../buildQueryKey.js';
import type { EntityTable, NormalizedIndex, Schema } from '../interface.js';
import type {
  DenormalizeNullable,
  EntityCache,
  Path,
  EndpointsCache,
} from '../types.js';
import WeakEntityMap, { getEntities } from '../WeakEntityMap.js';

/**
 * TODO: make schema.queryKey indexes and entities accessible as functions that vary the cache based on access
 * then we only need to vary based on args and schema otherwise
 */
export function queryMemoized<S extends Schema>(
  schema: S,
  args: any[],
  entities: Record<string, Record<string, object>>,
  indexes: NormalizedIndex,
  entityCache: EntityCache = {},
  resultCache: EndpointsCache = new WeakEntityMap(),
  queriesCache: Map<
    Schema,
    {
      [key: string]: unknown;
    }
  >,
): { data: DenormalizeNullable<S> | symbol; paths: Path[] } {
  // MEMOIZE buildQueryKey - vary on schema + args
  // NOTE: different orders can result in cache busting here; but since it's just a perf penalty we will allow for now
  const key = JSON.stringify(args);
  if (!queriesCache.has(schema)) {
    queriesCache.set(schema, {});
  }
  const querySchemaCache = queriesCache.get(schema) as {
    [key: string]: unknown;
  };
  if (!querySchemaCache[key] || true) {
    const lookupEntity = createLookupEntity(entities);
    const lookupIndex = createLookupIndex(indexes);
    // do equivalent of this:
    // cache.getEntity(pk, schema, entity, localCacheKey =>
    //   unvisitEntityObject(entity, schema, unvisit, pk, localCacheKey, args),
    // );
    querySchemaCache[key] = buildQueryKey(
      schema,
      args,
      lookupIndex,
      lookupEntity,
    );
  }
  const input = querySchemaCache[key];
  // END BLOCK

  // when not active simply return the query input without denormalizing
  if (args.length === 1 && args[0] === null) {
    return { data: input as any, paths: [] };
  }

  if (input === undefined || !validateQueryKey(input)) {
    return { data: INVALID, paths: [] };
  }

  const getEntity = getEntities(entities);
  return getUnvisit(
    getEntity,
    new GlobalCache(getEntity, entityCache, resultCache),
    args,
  )(input, schema);
}

const createLookupEntity =
  (entities: EntityTable) =>
  (entityKey: string): { readonly [pk: string]: any } | undefined =>
    entities[entityKey];

const createLookupIndex =
  (indexes: NormalizedIndex) =>
  (
    entityKey: string,
    indexName: string,
    indexKey: string,
  ): string | undefined => {
    if (indexes[entityKey]) {
      return indexes[entityKey][indexName][indexKey];
    }
  };
