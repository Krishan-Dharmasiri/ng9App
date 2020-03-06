import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegressionTestResultComponent } from '../regression-test-result/regression-test-result.component';

@Component({
  selector: 'app-regressionanalysis',
  templateUrl: './regressionanalysis.component.html',
  styleUrls: ['./regressionanalysis.component.css']
})
export class RegressionanalysisComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  
  /**
   * Ideally should come from an API
   * To do : create a service to get this data from a remote API
   */
  regressionTests : RegressionTest[] = [
    {
      testName : 'Regression Test 1',
      testContent : 'This is a lynear regression model test to predict the next forcast value for a given stock in the Colombo Stock exchange',
      testAction : 'VIEW'
    },
    {
      testName : 'Regression Test 2',
      testContent : 'This is a lynear regression model test to predict the next forcast value for a given stock in the Colombo Stock exchange',
      testAction : 'VIEW'
    },
    {
      testName : 'Regression Test 3',
      testContent : 'This is a lynear regression model test to predict the next forcast value for a given stock in the Colombo Stock exchange',
      testAction : 'VIEW'
    },
    {
      testName : 'Regression Test 4',
      testContent : 'This is a lynear regression model test to predict the next forcast value for a given stock in the Colombo Stock exchange',
      testAction : 'VIEW'
    },
    {
      testName : 'Regression Test 5',
      testContent : 'This is a lynear regression model test to predict the next forcast value for a given stock in the Colombo Stock exchange',
      testAction : 'VIEW'
    }
  ];

  openRegressionDialog(test : RegressionTest):void{
    const dialogRef = this.dialog.open(RegressionTestResultComponent,{
      data : test
    });

  }

}


export interface RegressionTest{
  testName:string;
  testContent:string;
  testAction:string;
};