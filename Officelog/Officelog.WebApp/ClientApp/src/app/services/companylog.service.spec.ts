import { TestBed, inject } from '@angular/core/testing';

import { CompanylogService } from './companylog.service';

describe('CompanylogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanylogService]
    });
  });

  it('should be created', inject([CompanylogService], (service: CompanylogService) => {
    expect(service).toBeTruthy();
  }));
});
