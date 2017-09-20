import { LetterBoldPipe } from './shared/letter-bold.pipe';
import { SearchFilterPipe } from './shared/filter-pipe';
import { ClickOutsideDirective } from './shared/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportschartsComponent } from './components/reportscharts/reportscharts.component';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { BsDatepickerModule,TimepickerModule  } from 'ngx-bootstrap';

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

import { TooltipModule } from 'ngx-bootstrap';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { DatepickerComponent, } from './components/datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    SearchFilterPipe,
    LetterBoldPipe,
    ReportschartsComponent,
    TooltipComponent,
    ScheduleComponent,
    DatepickerComponent
  
  ],  
  imports: [
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ChartModule,
    NgxDatatableModule
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
