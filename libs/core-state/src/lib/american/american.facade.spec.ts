import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as AmericanActions from './american.actions';
import { AmericanEffects } from './american.effects';
import { AmericanFacade } from './american.facade';
import { AmericanEntity } from './american.models';
import {
  AMERICAN_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './american.reducer';
import * as AmericanSelectors from './american.selectors';

interface TestSchema {
  american: State;
}

describe('AmericanFacade', () => {
  let facade: AmericanFacade;
  let store: Store<TestSchema>;
  const createAmericanEntity = (id: string, name = ''): AmericanEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(AMERICAN_FEATURE_KEY, reducer),
          EffectsModule.forFeature([AmericanEffects]),
        ],
        providers: [AmericanFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(AmericanFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allAmerican$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allAmerican$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadAmericanSuccess` to manually update list
     */
    it('allAmerican$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allAmerican$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        AmericanActions.loadAmericanSuccess({
          american: [createAmericanEntity('AAA'), createAmericanEntity('BBB')],
        })
      );

      list = await readFirst(facade.allAmerican$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
