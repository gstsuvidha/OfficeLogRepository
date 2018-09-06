import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserProfileMarketingReportingComponent } from './admin-user-profile-marketing-reporting.component';

describe('AdminUserProfileMarketingReportingComponent', () => {
  let component: AdminUserProfileMarketingReportingComponent;
  let fixture: ComponentFixture<AdminUserProfileMarketingReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserProfileMarketingReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserProfileMarketingReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
