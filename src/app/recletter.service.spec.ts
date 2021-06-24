import { TestBed } from '@angular/core/testing';

import { RecomletterService } from './recletter.service';

describe('RecomletterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecomletterService = TestBed.get(RecomletterService);
    expect(service).toBeTruthy();
  });
});