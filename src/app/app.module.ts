import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { MaterialModule } from './modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { RegressionanalysisComponent } from './components/regressionanalysis/regressionanalysis.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RegressionTestResultComponent } from './components/regression-test-result/regression-test-result.component';
import { MatSpinnerComponent } from './components/mat-spinner/mat-spinner.component';


const routes  = [
  {path:"home", component:HomeComponent},
  {path:'regression', component:RegressionanalysisComponent},
  {path:'about', component:AboutComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegressionanalysisComponent,
    HomeComponent,
    AboutComponent,
    RegressionTestResultComponent,
    MatSpinnerComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
