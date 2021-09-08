import { Injectable } from '@angular/core';
import { AmericanFood } from '@food/api-interfaces';
import { select, Store, Action } from '@ngrx/store';

import * as AmericanActions from './american.actions';
import * as AmericanFeature from './american.reducer';
import * as AmericanSelectors from './american.selectors';

@Injectable()
export class AmericanFacade {
  loaded$ = this.store.pipe(select(AmericanSelectors.getAmericanLoaded));
  allAmerican$ = this.store.pipe(select(AmericanSelectors.getAllAmerican));
  selectedAmerican$ = this.store.pipe(select(AmericanSelectors.getSelected));

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(AmericanActions.init());
  }

  loadAmerican(id: string) {
    return this.store.dispatch(AmericanActions.loadAmerican({ id }));
  }

  loadAmericans() {
    return this.store.dispatch(AmericanActions.loadAmericans());
  }

  createAmerican(americanFood: AmericanFood) {
    return this.store.dispatch(
      AmericanActions.createAmerican({ americanFood })
    );
  }

  updateAmerican(americanFood: AmericanFood) {
    return this.store.dispatch(
      AmericanActions.updateAmerican({ americanFood })
    );
  }

  deleteAmerican(americanFood: AmericanFood) {
    return this.store.dispatch(
      AmericanActions.deleteAmerican({ americanFood })
    );
  }

  selectAmerican(americanFoodId: string) {
    return this.store.dispatch(
      AmericanActions.selectAmerican({ americanFoodId })
    );
  }

  private dispatch(action: Action) {
    return this.store.dispatch(action);
  }
}
