import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ReportschartsComponent } from './components/reportscharts/reportscharts.component';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import {TooltipModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastyModule } from 'ng2-toasty';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ForFilterPipe } from './shared/filter-pipe';

export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(hc);
  return hc;
}

import { AppComponent } from './app.component';
import { PlantService } from './services/plant/plant.service';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { DatepickerComponent, } from './components/datepicker/datepicker.component';
import { ReportschartsComponent } from './components/reportscharts/reportscharts.component';
import { EndPoints } from './common/endpoints';
import { DragulaModule } from 'ng2-dragula';
import { ClientPlantComponent } from './components/client-plant/client-plant.component';
import { AppRoutingModule } from './app-routing.module';
export declare let require: any;
@NgModule({
  declarations: [
    AppComponent,
    ForFilterPipe,
    ReportschartsComponent,
    ScheduleComponent,
    DatepickerComponent,
    ClientPlantComponent

  ],
  imports: [
    AppRoutingModule,
    TooltipModule.forRoot(),
    DragulaModule.forRoot(),
    ToastyModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    NgxDatatableModule,
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
