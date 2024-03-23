import { TestBed } from '@angular/core/testing';

import { PlayphimService } from './playphim.service';

describe('PlayphimService', () => {
  let service: PlayphimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayphimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
