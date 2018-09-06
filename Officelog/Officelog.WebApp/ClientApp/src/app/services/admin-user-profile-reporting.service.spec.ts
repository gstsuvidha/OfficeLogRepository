import { TestBed, inject } from '@angular/core/testing';

import { AdminUserProfileReportingService } from './admin-user-profile-reporting.service';

describe('AdminUserProfileReportingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminUserProfileReportingService]
    });
  });

  it('should be created', inject([AdminUserProfileReportingService], (service: AdminUserProfileReportingService) => {
    expect(service).toBeTruthy();
  }));
});
