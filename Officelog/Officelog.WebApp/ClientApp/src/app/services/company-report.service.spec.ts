import { TestBed, inject } from '@angular/core/testing';

import { CompanyReportService } from './company-report.service';

describe('CompanyReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyReportService]
    });
  });

  it('should be created', inject([CompanyReportService], (service: CompanyReportService) => {
    expect(service).toBeTruthy();
  }));
});
