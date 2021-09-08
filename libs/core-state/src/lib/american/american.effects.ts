import {
  actionTypeNamePastTense,
  actionTypeNamePresentTense,
  AmericanFoodService,
  getActionType,
  NotifyService,
} from '@food/core-data';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map, tap, catchError, switchMap } from 'rxjs/operators';
import {
  loadAmerican,
  loadAmericanFailure,
  loadAmericanSuccess,
  loadAmericans,
  loadAmericansFailure,
  loadAmericansSuccess,
  createAmerican,
  createAmericanFailure,
  createAmericanSuccess,
  updateAmerican,
  updateAmericanFailure,
  updateAmericanSuccess,
  deleteAmerican,
  deleteAmericanFailure,
  deleteAmericanSuccess,
} from './american.actions';
import * as AmericanActions from './american.actions';
import { of } from 'rxjs';

@Injectable()
export class AmericanEffects {
  loadAmericans$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAmericans),
      switchMap(() =>
        this.americanFoodService.all().pipe(
          map((americanFoods) => loadAmericansSuccess({ americanFoods })),
          catchError((error) => of(loadAmericansFailure({ error })))
        )
      )
    )
  );

  loadAmerican$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAmerican),
      switchMap(({ id }) =>
        this.americanFoodService.find(id).pipe(
          map((americanFood) => loadAmericanSuccess({ americanFood })),
          catchError((error) => of(loadAmericanFailure({ error })))
        )
      )
    )
  );

  createAmerican$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createAmerican),
      switchMap(({ americanFood }) =>
        this.americanFoodService.create(americanFood).pipe(
          map((americanFood) => createAmericanSuccess({ americanFood })),
          catchError((error) => of(createAmericanFailure({ error })))
        )
      )
    )
  );

  updateAmerican$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateAmerican),
      switchMap(({ americanFood }) =>
        this.americanFoodService.update(americanFood).pipe(
          map((americanFood) => updateAmericanSuccess({ americanFood })),
          catchError((error) => of(updateAmericanFailure({ error })))
        )
      )
    )
  );

  deleteAmerican$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteAmerican),
      switchMap(({ americanFood }) =>
        this.americanFoodService.delete(americanFood.id).pipe(
          map((id) => deleteAmericanSuccess({ id })),
          catchError((error) => of(deleteAmericanFailure({ error })))
        )
      )
    )
  );

  americanSuccessNotifications$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          updateAmericanSuccess,
          createAmericanSuccess,
          deleteAmericanSuccess
        ),
        tap((action) => {
          const actionType = getActionType(action.type);
          this.notify.notification(
            `American Food ${actionTypeNamePastTense[actionType]} Successfully!`
          );
        })
      ),
    { dispatch: false }
  );

  americanFailureNotifications$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          updateAmericanFailure,
          createAmericanFailure,
          deleteAmericanFailure
        ),
        tap((action) => {
          const actionType = getActionType(action.type);
          this.notify.notification(
            `Failed to ${actionTypeNamePresentTense[actionType]} American Food. Please try again.`
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private americanFoodService: AmericanFoodService,
    private notify: NotifyService
  ) {}
}
