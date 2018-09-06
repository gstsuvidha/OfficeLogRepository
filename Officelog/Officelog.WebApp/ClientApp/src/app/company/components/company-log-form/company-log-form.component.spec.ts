import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLogFormComponent } from './company-log-form.component';

describe('CompanyLogFormComponent', () => {
  let component: CompanyLogFormComponent;
  let fixture: ComponentFixture<CompanyLogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyLogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyLogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
