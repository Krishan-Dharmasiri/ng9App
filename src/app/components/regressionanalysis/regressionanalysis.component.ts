import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegressionTestResultComponent } from '../regression-test-result/regression-test-result.component';
import { RegressionAnalysisDataService } from '../../services/regression-analysis-data.service';

@Component({
  selector: 'app-regressionanalysis',
  templateUrl: './regressionanalysis.component.html',
  styleUrls: ['./regressionanalysis.component.css']
})
export class RegressionanalysisComponent implements OnInit {

  regressionTests:RegressionTest[];

  constructor(private dialog : MatDialog, private regressionDataService : RegressionAnalysisDataService ) { }

  ngOnInit(): void {
    this.regressionDataService.getRegressionTests().subscribe(data => {
      this.regressionTests = data;
      //console.log(data);
    });
    
  }

  
  /**
   * Ideally should come from an API
   * To do : create a service to get this data from a remote API
   */
  regressionTestsOLD : RegressionTest[] = [
    {
      name : 'Regression Test 1',
      content : 'This is a lynear regression model test to predict the next forcast value for a given stock in the Colombo Stock exchange',
      action : 'VIEW'
    },
    {
      name : 'Regression Test 2',
      content : 'This is a lynear regression model test to predict the next forcast value for a given stock in the Colombo Stock exchange',
      action : 'VIEW'
    },
    {
      name : 'Regression Test 3',
      content : 'This is a lynear regression model test to predict the next forcast value for a given stock in the Colombo Stock exchange',
      action : 'VIEW'
    },
    {
      name : 'Regression Test 4',
      content : 'This is a lynear regression model test to predict the next forcast value for a given stock in the Colombo Stock exchange',
      action : 'VIEW'
    },
    {
      name : 'Regression Test 5',
      content : 'This is a lynear regression model test to predict the next forcast value for a given stock in the Colombo Stock exchange',
      action : 'VIEW'
    }
  ];

  openRegressionDialog(test : RegressionTest):void{
    const dialogRef = this.dialog.open(RegressionTestResultComponent,{
      data : test
    });

  }

}


export interface RegressionTest{
  name:string;
  content:string;
  action:string;
};