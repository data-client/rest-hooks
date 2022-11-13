import { Endpoint, Entity } from '@rest-hooks/endpoint';
import { CoolerArticleResource } from '__tests__/new';

import { ExpiryStatus } from '../..';
import Contoller from '../Controller';
import { initialState } from '../../state/createReducer';

function ignoreError(e: Event) {
  e.preventDefault();
}
beforeEach(() => {
  if (typeof addEventListener === 'function')
    addEventListener('error', ignoreError);
});
afterEach(() => {
  if (typeof removeEventListener === 'function')
    removeEventListener('error', ignoreError);
});

describe('Controller', () => {
  it('warns when dispatching during middleware setup', () => {
    const controller = new Contoller();
    expect(() =>
      controller.fetch(CoolerArticleResource.get, { id: 5 }),
    ).toThrowErrorMatchingInlineSnapshot(
      `"Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch."`,
    );
  });
});