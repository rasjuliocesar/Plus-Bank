import { TestBed } from '@angular/core/testing';

import { PixkeyService } from './pixkey.service';

describe('PixkeyService', () => {
  let service: PixkeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PixkeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
