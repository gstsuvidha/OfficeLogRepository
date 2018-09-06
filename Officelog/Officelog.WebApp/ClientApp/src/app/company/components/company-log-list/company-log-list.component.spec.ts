import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLogListComponent } from './company-log-list.component';

describe('CompanyLogListComponent', () => {
  let component: CompanyLogListComponent;
  let fixture: ComponentFixture<CompanyLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
