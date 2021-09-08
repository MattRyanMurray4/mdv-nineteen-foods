import { AmericanFood, emptyAmericanFood } from '@food/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AMERICAN_FEATURE_KEY,
  AmericanFoodState,
  americanAdapter,
} from './american.reducer';

// Lookup the 'American' feature state managed by NgRx
export const getAmericanState =
  createFeatureSelector<AmericanFoodState>(AMERICAN_FEATURE_KEY);

const { selectAll, selectEntities } = americanAdapter.getSelectors();

export const getAmericanLoaded = createSelector(
  getAmericanState,
  (state: AmericanFoodState) => state.loaded
);

export const getAmericanError = createSelector(
  getAmericanState,
  (state: AmericanFoodState) => state.error
);

export const getAllAmerican = createSelector(
  getAmericanState,
  (state: AmericanFoodState) => selectAll(state)
);

export const getAmericanEntities = createSelector(
  getAmericanState,
  (state: AmericanFoodState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getAmericanState,
  (state: AmericanFoodState) => state.selectedId
);

export const getSelected = createSelector(
  getAmericanEntities,
  getSelectedId,
  (entities, selectedId) =>
    (selectedId ? entities[selectedId] : emptyAmericanFood) as AmericanFood
);
