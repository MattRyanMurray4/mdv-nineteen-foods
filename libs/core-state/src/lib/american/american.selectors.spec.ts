import { AmericanEntity } from './american.models';
import {
  americanAdapter,
  AmericanPartialState,
  initialState,
} from './american.reducer';
import * as AmericanSelectors from './american.selectors';

describe('American Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAmericanId = (it: AmericanEntity) => it.id;
  const createAmericanEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AmericanEntity);

  let state: AmericanPartialState;

  beforeEach(() => {
    state = {
      american: americanAdapter.setAll(
        [
          createAmericanEntity('PRODUCT-AAA'),
          createAmericanEntity('PRODUCT-BBB'),
          createAmericanEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('American Selectors', () => {
    it('getAllAmerican() should return the list of American', () => {
      const results = AmericanSelectors.getAllAmerican(state);
      const selId = getAmericanId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = AmericanSelectors.getSelected(state) as AmericanEntity;
      const selId = getAmericanId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getAmericanLoaded() should return the current "loaded" status', () => {
      const result = AmericanSelectors.getAmericanLoaded(state);

      expect(result).toBe(true);
    });

    it('getAmericanError() should return the current "error" state', () => {
      const result = AmericanSelectors.getAmericanError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
