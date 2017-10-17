import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));
});
