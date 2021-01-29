import { TestBed } from '@angular/core/testing';

import { PeopleRepositoryService } from './people-repository.service';

describe('PilotRepositoryService', () => {
  let service: PeopleRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
