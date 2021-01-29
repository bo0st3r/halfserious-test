import { TestBed } from '@angular/core/testing';

import { StarshipControllerService } from './starship-controller.service';

describe('StarshipControllerService', () => {
  let service: StarshipControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarshipControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
