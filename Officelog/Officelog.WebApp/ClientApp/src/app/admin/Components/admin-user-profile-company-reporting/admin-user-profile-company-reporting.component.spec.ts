import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserProfileCompanyReportingComponent } from './admin-user-profile-company-reporting.component';

describe('AdminUserProfileCompanyReportingComponent', () => {
  let component: AdminUserProfileCompanyReportingComponent;
  let fixture: ComponentFixture<AdminUserProfileCompanyReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserProfileCompanyReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserProfileCompanyReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
