import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-spinner',
  templateUrl: './mat-spinner.component.html',
  styleUrls: ['./mat-spinner.component.css']
})
export class MatSpinnerComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<MatSpinnerComponent>, @Inject(MAT_DIALOG_DATA) public progressMessage : string) { }

  ngOnInit(): void {
  }

}
