import { TestBed, inject } from '@angular/core/testing';

import { MarketingConversionReportService } from './marketing-conversion-report.service';

describe('MarketingConversionReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketingConversionReportService]
    });
  });

  it('should be created', inject([MarketingConversionReportService], (service: MarketingConversionReportService) => {
    expect(service).toBeTruthy();
  }));
});
