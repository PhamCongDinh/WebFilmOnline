import { TestBed } from '@angular/core/testing';

import { LichsuService } from './lichsu.service';

describe('LichsuService', () => {
  let service: LichsuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LichsuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
