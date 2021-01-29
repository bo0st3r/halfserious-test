import { TestBed } from '@angular/core/testing';

import { StarshipRepositoryService } from './starship-repository.service';

describe('StarshipRepositoryService', () => {
  let service: StarshipRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarshipRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
