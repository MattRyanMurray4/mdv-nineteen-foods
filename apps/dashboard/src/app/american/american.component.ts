import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AmericanFood, emptyAmericanFood } from '@food/api-interfaces';
import { AmericanFacade } from '@food/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'food-american',
  templateUrl: './american.component.html',
  styleUrls: ['./american.component.scss'],
})
export class AmericanComponent implements OnInit {
  form: FormGroup;
  americanFoods$: Observable<AmericanFood[]> = this.americanFacade.allAmerican$;
  selectedAmericanFood$: Observable<AmericanFood> =
    this.americanFacade.selectedAmerican$;

  constructor(
    private americanFacade: AmericanFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.americanFacade.loadAmericans();
    this.reset();
  }

  selectAmerican(americanFood: AmericanFood) {
    this.americanFacade.selectAmerican(americanFood.id);
    this.form.patchValue(americanFood);
  }

  reset() {
    this.selectAmerican(emptyAmericanFood);
    this.form.reset();
  }

  createAmerican(americanFood: AmericanFood) {
    this.americanFacade.createAmerican(americanFood);
    this.reset();
  }

  updateAmerican(americanFood: AmericanFood) {
    this.americanFacade.updateAmerican(americanFood);
    this.reset();
  }

  saveAmerican(americanFood: AmericanFood) {
    americanFood.id
      ? this.americanFacade.updateAmerican(americanFood)
      : this.americanFacade.createAmerican(americanFood);
    this.reset();
  }

  deleteAmerican(americanFood: AmericanFood) {
    this.americanFacade.deleteAmerican(americanFood);
    this.reset();
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      calContent: ['', Validators.required],
      delicious: [''],
    });
  }
}
