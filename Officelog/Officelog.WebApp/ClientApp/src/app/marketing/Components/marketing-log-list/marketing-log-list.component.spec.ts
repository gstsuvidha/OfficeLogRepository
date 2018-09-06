import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingLogListComponent } from './marketing-log-list.component';

describe('MarketingLogListComponent', () => {
  let component: MarketingLogListComponent;
  let fixture: ComponentFixture<MarketingLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
