import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanDetailsComponent } from './american-details.component';

describe('AmericanDetailsComponent', () => {
  let component: AmericanDetailsComponent;
  let fixture: ComponentFixture<AmericanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
