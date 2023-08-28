import { EndpointInterface, Schema, FetchFunction } from '@data-client/core';
import { useEffect } from 'react';

import useController from './useController.js';

/**
 * Keeps a resource fresh by subscribing to updates.
 * @see https://dataclient.io/docs/api/useSubscription
 */
export default function useSubscription<
  E extends EndpointInterface<
    FetchFunction,
    Schema | undefined,
    undefined | false
  >,
  Args extends readonly [...Parameters<E>] | readonly [null],
>(endpoint: E, ...args: Args) {
  const controller = useController();

  const key = args[0] !== null ? endpoint.key(...args) : '';

  useEffect(() => {
    if (!key) return;
    // typescript cannot infer truthy key means args is not null
    const cleanedArgs = args as readonly [...Parameters<E>];

    controller.subscribe(endpoint, ...cleanedArgs);
    return () => {
      controller.unsubscribe(endpoint, ...cleanedArgs);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controller, key]);
}
