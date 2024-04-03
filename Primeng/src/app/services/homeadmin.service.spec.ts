import { TestBed } from '@angular/core/testing';

import { HomeadminService } from './homeadmin.service';

describe('HomeadminService', () => {
  let service: HomeadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
