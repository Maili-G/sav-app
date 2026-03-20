import { TestBed } from '@angular/core/testing';

import { AuthSerice } from './auth.service';

describe('AuthSerice', () => {
  let service: AuthSerice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSerice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
