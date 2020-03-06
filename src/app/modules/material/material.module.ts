import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';

const materialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule
];

@NgModule({
  imports: [materialModules],
  exports:[materialModules]
})
export class MaterialModule { }
