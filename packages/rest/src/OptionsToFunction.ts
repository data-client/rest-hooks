import type { FetchFunction, ResolveType } from '@data-client/endpoint';

import { PathArgs } from './pathTypes.js';
import {
  PartialRestGenerics,
  RestInstanceBase,
  RestFetch,
} from './RestEndpoint.js';

export type OptionsToFunction<
  O extends PartialRestGenerics,
  E extends RestInstanceBase & { body?: any },
  F extends FetchFunction,
> = 'path' extends keyof O
  ? RestFetch<
      'searchParams' extends keyof O
        ? O['searchParams'] & PathArgs<Exclude<O['path'], undefined>>
        : PathArgs<Exclude<O['path'], undefined>>,
      'body' extends keyof O ? O['body'] : E['body'],
      O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>
    >
  : 'body' extends keyof O
  ? RestFetch<
      'searchParams' extends keyof O
        ? O['searchParams'] & PathArgs<Exclude<E['path'], undefined>>
        : PathArgs<Exclude<E['path'], undefined>>,
      O['body'],
      O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>
    >
  : 'searchParams' extends keyof O
  ? RestFetch<
      O['searchParams'] & PathArgs<Exclude<E['path'], undefined>>,
      E['body'],
      O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>
    >
  : (
      this: ThisParameterType<F>,
      ...args: Parameters<F>
    ) => Promise<
      O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>
    >;