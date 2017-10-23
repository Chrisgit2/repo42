import { TestBed, inject } from '@angular/core/testing';

import { SizeProviderService } from './size-provider.service';

describe('SizeProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SizeProviderService]
    });
  });

  it('should be created', inject([SizeProviderService], (service: SizeProviderService) => {
    expect(service).toBeTruthy();
  }));
});
