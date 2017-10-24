import { TestBed, inject } from '@angular/core/testing';

import { BaseDomainService } from './base-domain.service';

describe('BaseDomainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseDomainService]
    });
  });

  it('should be created', inject([BaseDomainService], (service: BaseDomainService) => {
    expect(service).toBeTruthy();
  }));
});
