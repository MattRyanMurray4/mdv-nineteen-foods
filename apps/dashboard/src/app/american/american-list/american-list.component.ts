import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AmericanFood } from '@food/api-interfaces';

@Component({
  selector: 'food-american-list',
  templateUrl: './american-list.component.html',
  styleUrls: ['./american-list.component.scss'],
})
export class AmericanListComponent {
  @Input() americanFoods: AmericanFood[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
