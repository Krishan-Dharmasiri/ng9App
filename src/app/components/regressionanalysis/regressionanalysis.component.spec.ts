import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressionanalysisComponent } from './regressionanalysis.component';

describe('RegressionanalysisComponent', () => {
  let component: RegressionanalysisComponent;
  let fixture: ComponentFixture<RegressionanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegressionanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegressionanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
