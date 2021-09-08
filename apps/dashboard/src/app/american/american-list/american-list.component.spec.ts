import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanListComponent } from './american-list.component';

describe('AmericanListComponent', () => {
  let component: AmericanListComponent;
  let fixture: ComponentFixture<AmericanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
