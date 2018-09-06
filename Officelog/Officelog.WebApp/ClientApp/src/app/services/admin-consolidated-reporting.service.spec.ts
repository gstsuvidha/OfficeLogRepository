import { TestBed, inject } from '@angular/core/testing';

import { AdminConsolidatedReportingService } from './admin-consolidated-reporting.service';

describe('AdminConsolidatedReportingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminConsolidatedReportingService]
    });
  });

  it('should be created', inject([AdminConsolidatedReportingService], (service: AdminConsolidatedReportingService) => {
    expect(service).toBeTruthy();
  }));
});
