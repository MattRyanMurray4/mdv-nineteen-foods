import { ActionReducerMap } from '@ngrx/store';
import {
  americanFoodReducer,
  AmericanFoodState,
  AMERICAN_FEATURE_KEY,
} from './american/american.reducer';

export interface AppState {
  [AMERICAN_FEATURE_KEY]: AmericanFoodState;
}

export const reducers: ActionReducerMap<AppState> = {
  [AMERICAN_FEATURE_KEY]: americanFoodReducer,
};
