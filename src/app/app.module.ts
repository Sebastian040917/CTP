import { LetterBoldPipe } from './shared/letter-bold.pipe';
import { SearchFilterPipe } from './shared/filter-pipe';
import { ClickOutsideDirective } from './shared/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ReportschartsComponent } from './components/reportscharts/reportscharts.component';
import { ChartsreportComponent } from './components/chartsreport/chartsreport.component';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

export declare let require: any;
export function highchartsFactory() {
  //return highcharts;
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(hc);

  return hc;
}

import { AppComponent } from './app.component';
import { PlantComponent } from './components/plant/plant.component';
import  { PlantService} from './services/plant/plant.service'

@NgModule({
  declarations: [
    AppComponent,
    PlantComponent,
    ClickOutsideDirective,
    SearchFilterPipe,
    LetterBoldPipe,
    //ReportschartsComponent,
    ChartsreportComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ChartModule
  ],
 providers: [
  PlantService,
  {
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
