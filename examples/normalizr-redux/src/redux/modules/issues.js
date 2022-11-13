import { denormalize, normalize } from '@rest-hooks/normalizr';

import { Issue } from '../../api/schema';
import { ADD_ENTITIES, addEntities } from '../actions';
import * as Repo from './repos';

export const STATE_KEY = 'issues';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_ENTITIES:
      return {
        ...state,
        ...action.payload.Issue,
      };

    default:
      return state;
  }
}

export const getIssues =
  ({ page = 0 } = {}) =>
  (dispatch, getState, { api, schema }) => {
    const state = getState();
    const owner = Repo.selectOwner(state);
    const repo = Repo.selectRepo(state);
    return api.issues
      .listForRepo({
        owner,
        repo,
      })
      .then(response => {
        const data = normalize(response.data, [schema.Issue]);
        dispatch(addEntities(data.entities));
        return response;
      })
      .catch(error => {
        console.error(error);
      });
  };

export const selectHydrated = (state, id) => denormalize(id, Issue, state);
