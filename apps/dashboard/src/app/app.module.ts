import { CoreDataModule } from '@food/core-data';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AmericanComponent } from './american/american.component';
import { AmericanListComponent } from './american/american-list/american-list.component';
import { AmericanDetailsComponent } from './american/american-details/american-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@food/material';
import { UiLibraryModule } from '@food/ui-library';
import { CoreStateModule } from '@food/core-state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AmericanComponent,
    AmericanListComponent,
    AmericanDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    UiLibraryModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
