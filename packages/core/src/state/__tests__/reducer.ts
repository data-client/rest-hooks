import {
  ArticleResource,
  ArticleResourceWithOtherListUrl,
  PaginatedArticleResource,
} from '__tests__/common';
import { DELETED, schema } from '@rest-hooks/normalizr';

import reducer, { initialState } from '../reducer';
import {
  FetchAction,
  ReceiveAction,
  ResetAction,
  InvalidateAction,
  UpdateFunction,
} from '../../types';
import {
  RECEIVE_TYPE,
  INVALIDATE_TYPE,
  FETCH_TYPE,
  RESET_TYPE,
} from '../../actionTypes';
import createFetch from '../actions/createFetch';

describe('reducer', () => {
  describe('singles', () => {
    const id = 20;
    const payload = { id, title: 'hi', content: 'this is the content' };
    const action: ReceiveAction<typeof payload> = {
      type: RECEIVE_TYPE,
      payload,
      meta: {
        schema: ArticleResource,
        key: ArticleResource.url({ id }),
        date: 5000000000,
        expiresAt: 5000500000,
      },
    };
    const partialResultAction = {
      ...action,
      payload: { id, title: 'hello' },
    };
    const iniState = initialState;
    const newState = reducer(iniState, action);
    it('should update state correctly', () => {
      expect(newState).toMatchSnapshot();
    });
    it('should overwrite existing entity', () => {
      const getEntity = (state: any): ArticleResource =>
        state.entities[ArticleResource.key][
          `${ArticleResource.pk(action.payload)}`
        ];
      const prevEntity = getEntity(newState);
      expect(prevEntity).toBeDefined();
      const nextState = reducer(newState, action);
      const nextEntity = getEntity(nextState);
      expect(nextEntity).not.toBe(prevEntity);
      expect(nextEntity).toBeDefined();
    });
    it('should merge partial entity with existing entity', () => {
      const getEntity = (state: any): ArticleResource =>
        state.entities[ArticleResource.key][
          `${ArticleResource.pk(action.payload)}`
        ];
      const prevEntity = getEntity(newState);
      expect(prevEntity).toBeDefined();
      const nextState = reducer(newState, partialResultAction);
      const nextEntity = getEntity(nextState);
      expect(nextEntity).not.toBe(prevEntity);
      expect(nextEntity).toBeDefined();

      expect(nextEntity.title).not.toBe(prevEntity.title);
      expect(nextEntity.title).toBe(partialResultAction.payload.title);

      expect(nextEntity.content).toBe(prevEntity.content);
      expect(nextEntity.content).not.toBe(undefined);

      expect(
        nextState.entityMeta[ArticleResource.key][
          `${ArticleResource.pk(action.payload)}`
        ],
      ).toBeDefined();
      expect(
        nextState.entityMeta[ArticleResource.key][
          `${ArticleResource.pk(action.payload)}`
        ].date,
      ).toBe(action.meta.date);
    });

    it('should have the latest entity date', () => {
      const localAction = {
        ...partialResultAction,
        meta: {
          ...partialResultAction.meta,
          expiresAt: partialResultAction.meta.expiresAt * 2,
          date: partialResultAction.meta.date * 2,
        },
      };
      const getMeta = (state: any): { expiresAt: number } =>
        state.entityMeta[ArticleResource.key][
          `${ArticleResource.pk(action.payload)}`
        ];
      const prevMeta = getMeta(newState);
      expect(prevMeta).toBeDefined();
      const nextState = reducer(newState, localAction);
      const nextMeta = getMeta(nextState);

      expect(nextMeta).toBeDefined();
      expect(nextMeta.expiresAt).toBe(localAction.meta.expiresAt);
    });

    it('should use existing entity with older date', () => {
      const localAction = {
        ...partialResultAction,
        meta: {
          ...partialResultAction.meta,
          date: partialResultAction.meta.date / 2,
          expiresAt: partialResultAction.meta.expiresAt / 2,
        },
      };
      const getMeta = (state: any): { date: number } =>
        state.entityMeta[ArticleResource.key][
          `${ArticleResource.pk(action.payload)}`
        ];
      const getEntity = (state: any): ArticleResource =>
        state.entities[ArticleResource.key][
          `${ArticleResource.pk(action.payload)}`
        ];
      const prevEntity = getEntity(newState);
      const prevMeta = getMeta(newState);
      expect(prevMeta).toBeDefined();
      const nextState = reducer(newState, localAction);
      const nextMeta = getMeta(nextState);
      const nextEntity = getEntity(nextState);

      expect(prevEntity).toEqual(nextEntity);

      expect(nextMeta).toBeDefined();
      expect(nextMeta.date).toBe(action.meta.date);
    });
  });

  it('mutate should never change results', () => {
    const id = 20;
    const payload = { id, title: 'hi', content: 'this is the content' };
    const action: ReceiveAction = {
      type: RECEIVE_TYPE,
      payload,
      meta: {
        schema: ArticleResource,
        key: ArticleResource.listUrl(payload),
        date: 0,
        expiresAt: 1000000000000,
      },
    };
    const iniState = {
      ...initialState,
      results: { abc: '5', [ArticleResource.listUrl(payload)]: `${id}` },
    };
    const newState = reducer(iniState, action);
    expect(newState.results).toStrictEqual(iniState.results);
  });
  it('purge should delete entities', () => {
    const id = 20;
    const action: ReceiveAction = {
      type: RECEIVE_TYPE,
      payload: { id },
      meta: {
        schema: new schema.Delete(ArticleResource),
        key: ArticleResource.deleteShape().getFetchKey({ id }),
        date: 0,
        expiresAt: 0,
      },
    };
    const iniState: any = {
      ...initialState,
      entities: {
        [ArticleResource.key]: {
          '10': ArticleResource.fromJS({ id: 10 }),
          '20': ArticleResource.fromJS({ id: 20 }),
          '25': ArticleResource.fromJS({ id: 25 }),
        },
        [PaginatedArticleResource.key]: {
          hi: PaginatedArticleResource.fromJS({ id: 5 }),
        },
        '5': undefined,
      },
      results: { abc: '20' },
    };
    const newState = reducer(iniState, action);
    expect(newState.results.abc).toBe(iniState.results.abc);
    const expectedEntities = { ...iniState.entities[ArticleResource.key] };
    expectedEntities['20'] = DELETED;
    expect(newState.entities[ArticleResource.key]).toEqual(expectedEntities);
  });

  describe('optimistic update', () => {
    describe('Update on get (pagination use case)', () => {
      const shape = PaginatedArticleResource.listShape();
      function makeOptimisticAction(
        payload: {
          results: Partial<PaginatedArticleResource>[];
        },
        updaters: {
          [key: string]: UpdateFunction<
            typeof shape['schema'],
            typeof shape['schema']
          >;
        },
      ) {
        return {
          type: RECEIVE_TYPE,
          payload,
          meta: {
            schema: PaginatedArticleResource.listShape().schema,
            key: PaginatedArticleResource.listShape().getFetchKey({
              cursor: 2,
            }),
            updaters,
            date: 5000000000,
            expiresAt: 5000500000,
          },
        };
      }

      const insertAfterUpdater = <T extends { results?: string[] } | undefined>(
        newPage: { results: string[] },
        oldResults: T,
      ) => ({
        ...oldResults,
        results: [...(oldResults?.results || []), ...newPage.results],
      });

      const insertBeforeUpdater = <
        T extends { results?: string[] } | undefined,
      >(
        newPage: { results: string[] },
        oldResults: T,
      ) => ({
        ...oldResults,
        results: [...newPage.results, ...(oldResults?.results || [])],
      });

      const iniState: any = {
        ...initialState,
        entities: {
          [PaginatedArticleResource.key]: {
            '10': PaginatedArticleResource.fromJS({ id: 10 }),
          },
        },
        results: {
          [PaginatedArticleResource.listUrl()]: { results: ['10'] },
        },
      };

      it('should insert a new page of resources into a list request', () => {
        const newState = reducer(
          iniState,
          makeOptimisticAction(
            { results: [{ id: 11 }, { id: 12 }] },
            {
              [PaginatedArticleResource.listUrl()]: insertAfterUpdater,
            },
          ),
        );
        expect(
          newState.results[PaginatedArticleResource.listUrl()],
        ).toStrictEqual({ results: ['10', '11', '12'] });
      });

      it('should insert correctly into the beginning of the list request', () => {
        const newState = reducer(
          iniState,
          makeOptimisticAction(
            { results: [{ id: 11 }, { id: 12 }] },
            {
              [PaginatedArticleResource.listUrl()]: insertBeforeUpdater,
            },
          ),
        );
        expect(
          newState.results[PaginatedArticleResource.listUrl()],
        ).toStrictEqual({ results: ['11', '12', '10'] });
      });
    });

    describe('rpc update on create', () => {
      const createShape = ArticleResource.createShape();
      function makeOptimisticAction(
        payload: Partial<ArticleResource>,
        updaters: {
          [key: string]: UpdateFunction<
            typeof createShape['schema'],
            typeof ArticleResource[]
          >;
        },
      ) {
        return {
          type: RECEIVE_TYPE,
          payload,
          meta: {
            schema: ArticleResource,
            key: ArticleResource.createShape().getFetchKey({}),
            updaters,
            date: 0,
            expiresAt: 100000000000,
          },
        };
      }

      const insertAfterUpdater = (
        result: string,
        oldResults: string[] | undefined,
      ) => [...(oldResults || []), result];

      const insertBeforeUpdater = (
        result: string,
        oldResults: string[] | undefined,
      ) => [result, ...(oldResults || [])];

      const iniState: any = {
        ...initialState,
        entities: {
          [ArticleResourceWithOtherListUrl.key]: {
            '10': ArticleResourceWithOtherListUrl.fromJS({ id: 10 }),
            '21': ArticleResourceWithOtherListUrl.fromJS({ id: 21 }),
          },
        },
        results: {
          [ArticleResourceWithOtherListUrl.listUrl()]: ['10'],
          [ArticleResourceWithOtherListUrl.otherListUrl()]: ['21'],
        },
      };

      it('it should run inserts for a simple resource after the existing list entities', () => {
        const newState = reducer(
          iniState,
          makeOptimisticAction(
            { id: 11 },
            {
              [ArticleResource.listUrl()]: insertAfterUpdater,
            },
          ),
        );
        expect(newState.results[ArticleResource.listUrl()]).toStrictEqual([
          '10',
          '11',
        ]);
      });

      it('it should run inserts for a simple resource before the existing list entities', () => {
        const newState = reducer(
          iniState,
          makeOptimisticAction(
            { id: 11 },
            {
              [ArticleResource.listUrl()]: insertBeforeUpdater,
            },
          ),
        );
        expect(newState.results[ArticleResource.listUrl()]).toStrictEqual([
          '11',
          '10',
        ]);
      });

      it('it runs inserts for multiple updaters', () => {
        const newState = reducer(
          iniState,
          makeOptimisticAction(
            { id: 11 },
            {
              [ArticleResourceWithOtherListUrl.listUrl()]: insertAfterUpdater,
              [ArticleResourceWithOtherListUrl.otherListUrl()]:
                insertAfterUpdater,
            },
          ),
        );
        expect(
          newState.results[ArticleResourceWithOtherListUrl.listUrl()],
        ).toStrictEqual(['10', '11']);
        expect(
          newState.results[ArticleResourceWithOtherListUrl.otherListUrl()],
        ).toStrictEqual(['21', '11']);
      });
    });
  });

  it('invalidates resources correctly', () => {
    const id = 20;
    const action: InvalidateAction = {
      type: INVALIDATE_TYPE,
      meta: {
        key: id.toString(),
      },
    };
    const iniState: any = {
      ...initialState,
      entities: {
        [ArticleResource.key]: {
          '10': ArticleResource.fromJS({ id: 10 }),
          '20': ArticleResource.fromJS({ id: 20 }),
          '25': ArticleResource.fromJS({ id: 25 }),
        },
        [PaginatedArticleResource.key]: {
          hi: PaginatedArticleResource.fromJS({ id: 5 }),
        },
        '5': undefined,
      },
      results: { abc: '20' },
      meta: {
        '20': {
          expiresAt: 500,
        },
        '25': {
          expiresAt: 1000,
        },
      },
    };
    const newState = reducer(iniState, action);
    expect(newState.results).toEqual(iniState.results);
    expect(newState.entities).toBe(iniState.entities);
    const expectedMeta = { ...iniState.meta };
    expectedMeta['20'] = { expiresAt: 0, invalidated: true };
    expect(newState.meta).toEqual(expectedMeta);
  });
  it('should set error in meta for "receive"', () => {
    const id = 20;
    const error = new Error('hi');
    const action: ReceiveAction = {
      type: RECEIVE_TYPE,
      payload: error,
      meta: {
        schema: ArticleResource,
        key: ArticleResource.url({ id }),
        date: 5000000000,
        expiresAt: 5000500000,
      },
      error: true,
    };
    const iniState = initialState;
    const newState = reducer(iniState, action);
    expect(newState).toMatchSnapshot();
  });
  it('should not modify state on error for "rpc"', () => {
    const id = 20;
    const error = new Error('hi');
    const action: ReceiveAction = {
      type: RECEIVE_TYPE,
      payload: error,
      meta: {
        schema: ArticleResource,
        key: ArticleResource.url({ id }),
        date: 0,
        expiresAt: 10000000000000000000,
      },
      error: true,
    };
    const iniState = initialState;
    const newState = reducer(iniState, action);
    // ignore meta for this check
    expect({ ...newState, meta: {} }).toEqual(iniState);
  });
  it('should not delete on error for "purge"', () => {
    const id = 20;
    const error = new Error('hi');
    const action: ReceiveAction = {
      type: RECEIVE_TYPE,
      payload: error,
      meta: {
        schema: new schema.Delete(ArticleResource),
        key: ArticleResource.deleteShape().getFetchKey({ id }),
        date: 0,
        expiresAt: 0,
      },
      error: true,
    };
    const iniState = {
      ...initialState,
      entities: {
        [ArticleResource.key]: {
          [id]: ArticleResource.fromJS({}),
        },
      },
      results: {
        [ArticleResource.url({ id })]: id,
      },
    };
    const newState = reducer(iniState, action);
    expect(newState.entities).toBe(iniState.entities);
  });
  it('rest-hooks/fetch should console.warn()', () => {
    global.console.warn = jest.fn();
    const action: FetchAction = {
      type: FETCH_TYPE,
      payload: () => new Promise<any>(() => null),
      meta: {
        schema: ArticleResource,
        key: ArticleResource.url({ id: 5 }),
        type: 'read' as const,
        throttle: true,
        reject: (v: any) => null,
        resolve: (v: any) => null,
        promise: new Promise((v: any) => null),
        createdAt: new Date(0),
      },
    };
    const iniState = {
      ...initialState,
      results: { abc: '5' },
    };
    const newState = reducer(iniState, action);
    expect(newState).toBe(iniState);
    expect((global.console.warn as jest.Mock).mock.calls.length).toBe(2);
  });
  it('other types should do nothing', () => {
    const action: any = {
      type: 'whatever',
    };
    const iniState = {
      ...initialState,
      results: { abc: '5' },
    };
    const newState = reducer(iniState, action);
    expect(newState).toBe(iniState);
  });
  it('reset should delete all entries', () => {
    const action: ResetAction = {
      type: RESET_TYPE,
    };
    const iniState: any = {
      ...initialState,
      entities: {
        [ArticleResource.key]: {
          '10': ArticleResource.fromJS({ id: 10 }),
          '20': ArticleResource.fromJS({ id: 20 }),
          '25': ArticleResource.fromJS({ id: 25 }),
        },
        [PaginatedArticleResource.key]: {
          hi: PaginatedArticleResource.fromJS({ id: 5 }),
        },
        '5': undefined,
      },
      results: { abc: '20' },
    };
    const newState = reducer(iniState, action);
    expect(newState.results).toEqual({});
    expect(newState.meta).toEqual({});
    expect(newState.entities).toEqual({});
  });
});
