import { TestBed } from '@angular/core/testing';

import { RegressionAnalysisDataService } from './regression-analysis-data.service';

describe('RegressionAnalysisDataService', () => {
  let service: RegressionAnalysisDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegressionAnalysisDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
