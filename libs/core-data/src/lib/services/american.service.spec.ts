import { TestBed } from '@angular/core/testing';

import { AmericanService } from './american.service';

describe('AmericanService', () => {
  let service: AmericanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmericanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
