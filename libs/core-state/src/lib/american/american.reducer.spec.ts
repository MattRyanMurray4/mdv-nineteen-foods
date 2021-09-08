import { Action } from '@ngrx/store';

import * as AmericanActions from './american.actions';
import { AmericanEntity } from './american.models';
import { State, initialState, reducer } from './american.reducer';

describe('American Reducer', () => {
  const createAmericanEntity = (id: string, name = ''): AmericanEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid American actions', () => {
    it('loadAmericanSuccess should return the list of known American', () => {
      const american = [
        createAmericanEntity('PRODUCT-AAA'),
        createAmericanEntity('PRODUCT-zzz'),
      ];
      const action = AmericanActions.loadAmericanSuccess({ american });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
