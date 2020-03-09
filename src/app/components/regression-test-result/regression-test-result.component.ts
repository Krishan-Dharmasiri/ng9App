import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RegressionTest } from '../regressionanalysis/regressionanalysis.component';
import { MatSpinnerComponent } from '../mat-spinner/mat-spinner.component';

@Component({
  selector: 'app-regression-test-result',
  templateUrl: './regression-test-result.component.html',
  styleUrls: ['./regression-test-result.component.css']
})
export class RegressionTestResultComponent implements OnInit {

  
  constructor(private dialogRef : MatDialogRef<RegressionTestResultComponent>,
    @Inject(MAT_DIALOG_DATA) public data : RegressionTest, private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  runRegressionTest():void{

    // Call the service that calls the back end API to get data
    // While you get the data, the spinner should spin
    // Here I mock that with the below function.
    const spinnerDialogRef = this.dialog.open(MatSpinnerComponent);
   
    setTimeout(()=> {
      //Wait for 5 seconds and close the spinner
      spinnerDialogRef.close();
    },5000)

  }

}
