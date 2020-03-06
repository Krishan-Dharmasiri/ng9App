import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressionTestResultComponent } from './regression-test-result.component';

describe('RegressionTestResultComponent', () => {
  let component: RegressionTestResultComponent;
  let fixture: ComponentFixture<RegressionTestResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegressionTestResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegressionTestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
