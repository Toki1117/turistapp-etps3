import { TestBed } from '@angular/core/testing';

import { LocationPlaceService } from './location-place.service';

describe('LocationPlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationPlaceService = TestBed.get(LocationPlaceService);
    expect(service).toBeTruthy();
  });
});
