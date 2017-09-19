import { LetterBoldPipe } from './shared/letter-bold.pipe';
import { SearchFilterPipe } from './shared/filter-pipe';
import { ClickOutsideDirective } from './shared/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportschartsComponent } from './components/reportscharts/reportscharts.component';
//  import { ChartsreportComponent } from './components/chartsreport/chartsreport.component';

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
//import { DataTableModule } from 'angular-2-data-table';
// import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';
//import { TestComponent } from './components/test/test.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { TooltipModule } from 'ngx-bootstrap';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantComponent,
    ClickOutsideDirective,
    SearchFilterPipe,
    LetterBoldPipe,
    ReportschartsComponent,
    // ChartsreportComponent,//este es el bueno
    ClientListPlantComponent,
    // jqxGridComponent,
    //TestComponent,
    TooltipComponent,
    ScheduleComponent,
    DatepickerComponent
  
  ],  
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ChartModule,
    NgxDatatableModule
   //  DataTableModule 
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
