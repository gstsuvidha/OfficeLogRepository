import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsolidatedMarketingReportingComponent } from './admin-consolidated-marketing-reporting.component';

describe('AdminConsolidatedMarketingReportingComponent', () => {
  let component: AdminConsolidatedMarketingReportingComponent;
  let fixture: ComponentFixture<AdminConsolidatedMarketingReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConsolidatedMarketingReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsolidatedMarketingReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
