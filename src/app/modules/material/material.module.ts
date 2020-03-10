import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';


const materialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatDividerModule
];

@NgModule({
  imports: [materialModules],
  exports:[materialModules]
})
export class MaterialModule { }
