import { TestBed, inject } from '@angular/core/testing';

import { ValueDefinitionDomainService } from './value-definition-domain.service';

describe('ValueDefinitionDomainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueDefinitionDomainService]
    });
  });

  it('should be created', inject([ValueDefinitionDomainService], (service: ValueDefinitionDomainService) => {
    expect(service).toBeTruthy();
  }));
});
