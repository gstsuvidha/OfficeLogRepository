import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsolidatedCompanyReportingComponent } from './admin-consolidated-company-reporting.component';

describe('AdminConsolidatedCompanyReportingComponent', () => {
  let component: AdminConsolidatedCompanyReportingComponent;
  let fixture: ComponentFixture<AdminConsolidatedCompanyReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConsolidatedCompanyReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsolidatedCompanyReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
