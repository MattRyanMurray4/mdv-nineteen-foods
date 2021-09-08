import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAmerican from './american/american.reducer';
import { AmericanEffects } from './american/american.effects';
import { AmericanFacade } from './american/american.facade';
import { reducers } from '.';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true,
  },
};

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([AmericanEffects]),
    StoreDevtoolsModule.instrument({ name: 'Food-App' }),
  ],
  providers: [AmericanFacade],
})
export class CoreStateModule {}
