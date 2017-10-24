import { TestBed, inject } from '@angular/core/testing';

import { BaseObjectGeneratorService } from './base-object-generator.service';

describe('BaseObjectGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseObjectGeneratorService]
    });
  });

  it('should be created', inject([BaseObjectGeneratorService], (service: BaseObjectGeneratorService<Number>) => {
    expect(service).toBeTruthy();
  }));
});
