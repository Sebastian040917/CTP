import { Component, ViewChild, OnInit  } from '@angular/core';
import { DataTable, DataTableResource } from 'angular-2-data-table';
//import { cars } from './data';
import { PlantService } from '../../services/plant/plant.service';
import {  PlantClient,AllPlantList } from '../../models/plant/plant';

@Component({
  selector: 'app-client-list-plant',
  templateUrl: './client-list-plant.component.html',
  styleUrls: [
      './client-list-plant.component.css'
]
})
export class ClientListPlantComponent {
  tool_tip;
  cars = [];
  ListCount = 0;
  plantsListFull = [];
  plantsListResource = new DataTableResource(PlantasCliente);  
 
  @ViewChild(DataTable) ClientPlantTable: DataTable;

  constructor() {
      this.rowColors = this.rowColors.bind(this);
      this.plantsListResource.count().then(count => this.ListCount = count);
      PlantService.prototype.getPlants().then(plants=> this.plantsListFull = plants);
  }

  reloadCars(params) {
      console.log("accionando reload");
      this.plantsListResource.query(params).then(clPlant => this.plantsListFull = clPlant);
  }

  carClicked(car) {
      alert(car.model);
  }
  CickRow(plantsListFull){
    var data  = plantsListFull.row.item
    console.log(data.PlantCode);
  }
  yearLimit = 1999;

  rowColors(car) {
      //if (car.year >= this.yearLimit) return 'rgb(255, 255, 197)';
  }

  rowTooltip(item) { 
    return  ` Plant code ` + item.Nombre + `
      Name: ` + item.Nombre + `
      Distance: ` + item.Distancia + `
      Duration: ` + item.Duracion; 
}


}

export var PlantasCliente = [
    {Selected: false, PlantCode: 'DF43', Distancia: '0.0',Nombre: 'MX-PLANT-CASR',  Duracion: '00:20', CTP:'Camion' },
    {Selected: true,  PlantCode: 'DF47', Distancia: '0.0',Nombre: 'MX-PLANT-CSCY',  Duracion: '00:25', CTP:'Camion' },
    {Selected: false, PlantCode: 'DF49', Distancia: '0.0',Nombre: 'MX-PLANT-VSVK',  Duracion: '00:30', CTP:'Camion' },
    {Selected: false, PlantCode: 'DF47', Distancia: '0.0',Nombre: 'MX-PLANT-EQQE',  Duracion: '00:10', CTP:'Camion' },
    {Selected: false, PlantCode: 'DF41', Distancia: '0.0',Nombre: 'MX-PLANT-THHR',  Duracion: '00:17', CTP:'Camion' },
    {Selected: false, PlantCode: 'DF42', Distancia: '0.0',Nombre: 'MX-PLANT-HRTH',  Duracion: '00:13', CTP:'Camion' },
    {Selected: false, PlantCode: 'DF40', Distancia: '0.0',Nombre: 'MX-PLANT-NFNT',  Duracion: '00:21', CTP:'Camion' },
    {Selected: false, PlantCode: 'DF12', Distancia: '0.0',Nombre: 'MX-PLANT-NTFN',  Duracion: '00:40', CTP:'Camion' }
];

