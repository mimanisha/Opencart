import { TestBed } from '@angular/core/testing';

import { SnipperService } from './snipper.service';

describe('SnipperService', () => {
  let service: SnipperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnipperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
