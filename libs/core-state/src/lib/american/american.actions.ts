import { AmericanFood } from '@food/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[American Page] Init');

//  all

export const loadAmericans = createAction(
  '[AmericanFoods] Load All AmericanFoods'
);

export const loadAmericansSuccess = createAction(
  '[AmericanFoods] Load AmericanFoods Success',
  props<{ americanFoods: AmericanFood[] }>()
);

export const loadAmericansFailure = createAction(
  '[AmericanFoods] Load AmericanFoods Failure',
  props<{ error: any }>()
);

// singular

export const loadAmerican = createAction(
  '[AmericanFood] Load An AmericanFood ',
  props<{ id: string }>()
);

export const loadAmericanSuccess = createAction(
  '[AmericanFood] Load AmericanFood Success',
  props<{ americanFood: AmericanFood }>()
);

export const loadAmericanFailure = createAction(
  '[AmericanFood] Load AmericanFood Failure',
  props<{ error: any }>()
);

// select

export const selectAmerican = createAction(
  '[AmericandFood] Select An AmericandFood',
  props<{ americanFoodId: string }>()
);

// create

export const createAmerican = createAction(
  '[AmericanFood] Create An AmericanFood',
  props<{ americanFood: AmericanFood }>()
);

export const createAmericanSuccess = createAction(
  '[AmericanFood] Created AmericanFood Success',
  props<{ americanFood: AmericanFood }>()
);

export const createAmericanFailure = createAction(
  '[AmericanFood] Create An AmericanFood Failure',
  props<{ error: any }>()
);

// update

export const updateAmerican = createAction(
  '[AmericanFood] Update An AmericanFood',
  props<{ americanFood: AmericanFood }>()
);

export const updateAmericanSuccess = createAction(
  '[AmericanFood] Updated An AmericanFood Success',
  props<{ americanFood: AmericanFood }>()
);

export const updateAmericanFailure = createAction(
  '[AmericanFood] Updated An AmericanFood Failure',
  props<{ error: any }>()
);

// delete

export const deleteAmerican = createAction(
  '[AmericanFood] Delete An AmericanFood',
  props<{ americanFood: AmericanFood }>()
);

export const deleteAmericanSuccess = createAction(
  '[AmericanFood] Delete An AmericanFood Success',
  props<{ id: string }>()
);

export const deleteAmericanFailure = createAction(
  '[AmericanFood] Delete An AmericanFood Failure',
  props<{ error: any }>()
);
