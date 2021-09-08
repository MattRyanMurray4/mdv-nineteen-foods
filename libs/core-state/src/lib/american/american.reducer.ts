import { AmericanFood } from '@food/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as AmericanActions from './american.actions';

export const AMERICAN_FEATURE_KEY = 'american';

export interface AmericanFoodAction extends Action {
  error: string;
}

export interface AmericanFoodState extends EntityState<AmericanFood> {
  selectedId?: string | number; // which American record has been selected
  loaded: boolean; // has the American list been loaded
  error?: string | null; // last known error (if any)
}

export interface AmericanPartialState {
  readonly [AMERICAN_FEATURE_KEY]: AmericanFoodState;
}

export const americanAdapter: EntityAdapter<AmericanFood> =
  createEntityAdapter<AmericanFood>();

export const initialState: AmericanFoodState = americanAdapter.getInitialState({
  loaded: false,
});

const setLoading = (state: AmericanFoodState) => ({
  ...state,
  loaded: false,
  error: null,
});

const setFailure = (
  state: AmericanFoodState,
  { error }: AmericanFoodAction
) => ({
  ...state,
  error,
});

const _americanFoodReducer = createReducer(
  initialState,
  on(
    AmericanActions.loadAmerican,
    AmericanActions.loadAmericans,
    AmericanActions.createAmerican,
    AmericanActions.updateAmerican,
    AmericanActions.deleteAmerican,
    setLoading
  ),
  on(
    AmericanActions.loadAmericanFailure,
    AmericanActions.loadAmericanFailure,
    AmericanActions.createAmericanFailure,
    AmericanActions.updateAmericanFailure,
    AmericanActions.deleteAmericanFailure,
    setFailure
  ),
  on(AmericanActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AmericanActions.loadAmericansSuccess, (state, { americanFoods }) =>
    americanAdapter.setAll(americanFoods, { ...state, loaded: true })
  ),
  on(AmericanActions.loadAmericanFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(AmericanActions.selectAmerican, (state, { americanFoodId }) => ({
    ...state,
    selectedId: americanFoodId,
  })),
  on(AmericanActions.loadAmericanSuccess, (state, { americanFood }) =>
    americanAdapter.upsertOne(americanFood, { ...state, loaded: true })
  ),
  on(AmericanActions.createAmericanSuccess, (state, { americanFood }) =>
    americanAdapter.addOne(americanFood, { ...state, loaded: true })
  ),
  on(
    AmericanActions.updateAmericanSuccess,
    (state, { americanFood: { id, ...restAmericanFood } }) =>
      americanAdapter.updateOne(
        { id, changes: { ...restAmericanFood } },
        { ...state, loaded: true }
      )
  ),
  on(AmericanActions.deleteAmericanSuccess, (state, { id }) =>
    americanAdapter.removeOne(id, { ...state, loaded: true })
  )
);

export function americanFoodReducer(
  state: AmericanFoodState | undefined,
  action: Action
) {
  return _americanFoodReducer(state, action);
}
