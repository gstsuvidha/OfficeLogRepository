import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingLogFormComponent } from './marketing-log-form.component';

describe('MarketingLogFormComponent', () => {
  let component: MarketingLogFormComponent;
  let fixture: ComponentFixture<MarketingLogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingLogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingLogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
