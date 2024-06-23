import { isImmutable, denormalizeImmutable } from './ImmutableUtils.js';
import { INVALID } from '../denormalize/symbol.js';
import type { Visit } from '../interface.js';

export const normalize = (
  schema: any,
  input: any,
  parent: any,
  key: any,
  args: readonly any[],
  visit: Visit,
  addEntity: any,
  getEntity: any,
  checkLoop: any,
) => {
  const object = { ...input };
  Object.keys(schema).forEach(key => {
    const localSchema = schema[key];
    const value = visit(localSchema, input[key], input, key, args);
    if (value === undefined) {
      delete object[key];
    } else {
      object[key] = value;
    }
  });
  return object;
};

export const denormalize = (
  schema: any,
  // eslint-disable-next-line @typescript-eslint/ban-types
  input: {},
  args: readonly any[],
  unvisit: any,
): any => {
  if (isImmutable(input)) {
    return denormalizeImmutable(schema, input, args, unvisit);
  }

  const object = { ...input };
  let deleted = false;
  Object.keys(schema).forEach(key => {
    const item = unvisit(object[key], schema[key]);
    if (object[key] !== undefined) {
      object[key] = item;
    }
    if (typeof item === 'symbol') {
      deleted = true;
    }
  });
  return deleted ? INVALID : object;
};

export function queryKey(
  schema: any,
  args: readonly any[],
  queryKey: any,
  getEntity: any,
  getIndex: any,
) {
  const resultObject: any = {};
  for (const k of Object.keys(schema)) {
    resultObject[k] = queryKey(schema[k], args, getEntity, getIndex);
  }
  return resultObject;
}
