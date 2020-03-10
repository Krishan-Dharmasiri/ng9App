import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegressionTest } from '../components/regressionanalysis/regressionanalysis.component';

@Injectable({
  providedIn: 'root'
})
export class RegressionAnalysisDataService {

  private url = 'https://localhost:1800/api/Regression';

  constructor(private httpClient : HttpClient) { }

  getRegressionTests():Observable<any>{
    return this.httpClient.get(this.url);
  }

}
