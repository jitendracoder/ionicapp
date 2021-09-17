import { TestBed } from '@angular/core/testing';

import { StoredataService } from './storedata.service';

describe('StoredataService', () => {
  let service: StoredataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoredataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
