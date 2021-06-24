import { TestBed } from '@angular/core/testing';

import { HonorService } from './honor.service';

describe('HonorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HonorService = TestBed.get(HonorService);
    expect(service).toBeTruthy();
  });
});