import { TestBed, inject } from '@angular/core/testing';

import { RandomDataService } from './random-data.service';

describe('RandomDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomDataService]
    });
  });

  it('should be created', inject([RandomDataService], (service: RandomDataService) => {
    expect(service).toBeTruthy();
  }));
});
