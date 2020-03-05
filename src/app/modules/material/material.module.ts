import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  MatMenuModule } from '@angular/material/menu';

const materialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule
];

@NgModule({
  imports: [materialModules],
  exports:[materialModules]
})
export class MaterialModule { }
