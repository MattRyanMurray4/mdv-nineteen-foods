import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as AmericanActions from './american.actions';
import { AmericanEffects } from './american.effects';

describe('AmericanEffects', () => {
  let actions: Observable<Action>;
  let effects: AmericanEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AmericanEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AmericanEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AmericanActions.init() });

      const expected = hot('-a-|', {
        a: AmericanActions.loadAmericanSuccess({ american: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
