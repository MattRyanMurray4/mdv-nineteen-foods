import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent, WildComponent } from '@food/ui-library';
import { AmericanComponent } from './american/american.component';

const routes: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: 'american', component: AmericanComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
