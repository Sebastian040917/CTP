import { Component, OnInit } from '@angular/core';
import { TooltipConfig } from 'ngx-bootstrap/tooltip';
import { PlantService } from "../../services/plant/plant.service";
import { TooltipComponent }  from '../tooltip/tooltip.component'

export function getAlertConfig(): TooltipConfig {
  return Object.assign(new TooltipConfig(), {placement: 'right', container: 'body'});
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [{provide: TooltipConfig, useFactory: getAlertConfig}, TooltipComponent ]
})
export class ScheduleComponent {
  rows = [];
  selected = [];
  _plantCode="";
  textoEnHTML="";
  constructor(private _plantservice : PlantService,private _tooltipComponent: TooltipComponent) {
    this.fetch((data) => {
      this.rows = data;
    });
   }

   fetch(cb) {
    this._plantservice.getPlantsClient()
    .then(data=> { 
        cb(data);
    });       
}

onSelect({ selected }) {
  console.log('Select Event', selected, this.selected);

  this.selected.splice(0, this.selected.length);
  this.selected.push(...selected);
}

onActivate(event) {  
  this.textoEnHTML='<strong>texto prueba</strong> test';
    this._tooltipComponent.doyclick(this.textoEnHTML);

  this._plantCode = `      
  <h2>Responsive Table with Bootstrap</h2>
  
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="table-responsive">
          <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" class="table table-bordered table-hover">
            <caption class="text-center">An example of a responsive table based on <a href="https://getbootstrap.com/css/#tables-responsive" target="_blank">Bootstrap</a>:</caption>
            <thead>
              <tr>
                <th>Country</th>
                <th>Languages</th>
                <th>Population</th>
                <th>Median Age</th>
                <th>Area (Km²)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Argentina</td>
                <td>Spanish (official), English, Italian, German, French</td>
                <td>41,803,125</td>
                <td>31.3</td>
                <td>2,780,387</td>
              </tr>
              <tr>
                <td>Australia</td>
                <td>English 79%, native and other languages</td>
                <td>23,630,169</td>
                <td>37.3</td>
                <td>7,739,983</td>
              </tr>
              <tr>
                <td>Greece</td>
                <td>Greek 99% (official), English, French</td>
                <td>11,128,404</td>
                <td>43.2</td>
                <td>131,956</td>
              </tr>
              <tr>
                <td>Luxembourg</td>
                <td>Luxermbourgish (national) French, German (both administrative)</td>
                <td>536,761</td>
                <td>39.1</td>
                <td>2,586</td>
              </tr>
              <tr>
                <td>Russia</td>
                <td>Russian, others</td>
                <td>142,467,651</td>
                <td>38.4</td>
                <td>17,076,310</td>
              </tr>
              <tr>
                <td>Sweden</td>
                <td>Swedish, small Sami- and Finnish-speaking minorities</td>
                <td>9,631,261</td>
                <td>41.1</td>
                <td>449,954</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="5" class="text-center">Data retrieved from <a href="http://www.infoplease.com/ipa/A0855611.html" target="_blank">infoplease</a> and <a href="http://www.worldometers.info/world-population/population-by-country/" target="_blank">worldometers</a>.</td>
              </tr>
            </tfoot>
          </table>
        </div><!--end of .table-responsive-->
      </div>
    </div>
  </div>`
}




}
