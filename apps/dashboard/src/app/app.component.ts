import { Component } from '@angular/core';

@Component({
  selector: 'food-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Food-Application';
  links = [
    { path: '/', icon: 'home', title: 'Login' },
    { path: 'american', icon: 'view_list', title: 'Food-List' },
  ];
}
