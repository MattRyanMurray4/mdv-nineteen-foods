import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { AmericanFood } from '@food/api-interfaces';

@Component({
  selector: 'food-american-details',
  templateUrl: './american-details.component.html',
  styleUrls: ['./american-details.component.scss'],
})
export class AmericanDetailsComponent {
  currentAmericanFood: AmericanFood;
  originalName: string;

  @Input() set americanFood(value: AmericanFood | null) {
    if (value) this.originalName = value.name;
    this.currentAmericanFood = Object.assign({}, value);
  }

  @Input() form: FormGroup;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  save(americanFood: AmericanFood) {
    this.saved.emit(americanFood);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    if (formDirective.invalid) return;
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }
}
