import { LetterBoldPipe } from './shared/letter-bold.pipe';
import { SearchFilterPipe } from './shared/filter-pipe';
import { ClickOutsideDirective } from './shared/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportschartsComponent } from './components/reportscharts/reportscharts.component';
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
//import { NgxTypeaheadModule } from 'ngx-typeahead';
import { AppComponent } from './app.component';
import { PlantComponent } from './components/plant/plant.component';
import  { PlantService} from './services/plant/plant.service';
import { ClientListPlantComponent } from './components/client-list-plant/client-list-plant.component'
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular-2-data-table';

@NgModule({
  declarations: [
    AppComponent,
    PlantComponent,
    ClickOutsideDirective,
    SearchFilterPipe,
    LetterBoldPipe,
    ReportschartsComponent,
    ChartsreportComponent,//este es el bueno
    ClientListPlantComponent 
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ChartModule,
     DataTableModule 
   // NgxTypeaheadModule
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
