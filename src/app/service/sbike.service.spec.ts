import { TestBed } from '@angular/core/testing';

import { SbikeService } from './sbike.service';

describe('SbikeService', () => {
  let service: SbikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
