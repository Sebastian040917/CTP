import { ForFilterPipe } from './shared/filter-pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportschartsComponent } from './components/reportscharts/reportscharts.component';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { TooltipModule,BsDatepickerModule,TimepickerModule,SortableModule,TypeaheadModule } from 'ngx-bootstrap';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastyModule} from 'ng2-toasty';
export declare let require: any;

export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(hc);
  return hc;
}
import { AppComponent } from './app.component';
import  { PlantService} from './services/plant/plant.service';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { DatepickerComponent, } from './components/datepicker/datepicker.component';
import {DndModule} from 'ng2-dnd';
import { EndPoints } from './common/endpoints';

@NgModule({
  declarations: [
    AppComponent,    
    ForFilterPipe,
    ReportschartsComponent,
    ScheduleComponent,
    DatepickerComponent
     
  ],  
  imports: [
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    SortableModule.forRoot(),
    DndModule.forRoot(),
    TypeaheadModule.forRoot(),
    ToastyModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ChartModule,
    NgxDatatableModule,
    DateTimePickerModule,
    BrowserAnimationsModule,
    
  ],
 providers: [
  EndPoints,
  PlantService,
  {
    provide: HighchartsStatic,
    useFactory: highchartsFactory
    
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
