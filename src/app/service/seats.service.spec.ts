import { TestBed, inject } from '@angular/core/testing';

import { SeatsService } from './seats.service';

describe('SeatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeatsService]
    });
  });

  it('should be created', inject([SeatsService], (service: SeatsService) => {
    expect(service).toBeTruthy();
  }));
});
