import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegressionTest } from '../regressionanalysis/regressionanalysis.component';

@Component({
  selector: 'app-regression-test-result',
  templateUrl: './regression-test-result.component.html',
  styleUrls: ['./regression-test-result.component.css']
})
export class RegressionTestResultComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<RegressionTestResultComponent>,
    @Inject(MAT_DIALOG_DATA) public data : RegressionTest) { }

  ngOnInit(): void {
  }

}
