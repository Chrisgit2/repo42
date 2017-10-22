import { TestBed, inject } from '@angular/core/testing';

import { SideNavProviderService } from './side-nav-provider.service';

describe('SideNavProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideNavProviderService]
    });
  });

  it('should be created', inject([SideNavProviderService], (service: SideNavProviderService) => {
    expect(service).toBeTruthy();
  }));
});
