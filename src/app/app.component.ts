import { Component } from '@angular/core';
import { PlantService } from "./services/plant/plant.service";
import 'rxjs/add/operator/map';
import {ToastyService, ToastyConfig} from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'MEP & CTP';
  placeholderPlant ='Buscar mas plantas';
  tituloBotonAgregar="Agregar";
  tituloMasPlantas="Más plantas";

  /** TABLE HEADERS*/

  TCH_PlantCode="Center";
  TCH_PlantDescription="Name plant";
  TCH_PlantDuration="Duration";
  TCH_PlantDistance="Distance";
  TCH_PlantCtp="CTP";

  constructor(private _plantservice: PlantService,private toastyService:ToastyService, private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'bootstrap';
   
    this.fetch((data) => {
      this.rows = data;
    });
  }

//   addToast() {
//     this.toastyService.error('Hi there lorem ipsum dolor et natsum oleik na grut');
// }

  /********** TYPEHEAD ****** */
  SelectedPlantTypeHead = "";
  PlantDescriptionTypeHead ="";
  ngOnInit() {
    //this._plantservice.getAllPlants('MX').subscribe(pl => this.LstPlants = pl);
  }
  filterItemOnSelect(item){
     this.SelectedPlantTypeHead = item.PlantCode;
     this.PlantDescriptionTypeHead = item.PlantDesc;
  }
   ////////////////////BUTTONS///////////////////////
   limit=5;
   AddPlantToClient() {
    if(this.SelectedPlantTypeHead){
      this._plantservice.searchAndAddPlantClient(this.SelectedPlantTypeHead).subscribe(res=>{
        console.log(this.rows);
        this.rows.unshift(res);
      });
    }else{
      this.toastyService.warning('No se ha realizado ninguna busqueda');
    }    
  }

  SearchMorePlants() {
    this.limit=100;
    this.toastyService.success('Plantas agregadas al grid.');
  }

  ////////////////////TABLA PLANTAS ///////////////////////
  LstPlants = [];
   
  selected = [];
  sampleData : string ="some parent Data";
  rows = []; //TABLE

  fetch(cb) { 
    this._plantservice.getPlantsClient()
    .then(data=> { 
        cb(data);
    });       
  }

  onSelect({ selected }) {
    this.sampleData = selected[0].PlantCode;
  }

  onActivate(event) {  
    //console.log(event)
  }

  // getRowClass(row) {  
  //   return {
  //     'colorTableClient': row.PlantCode==='DF43'
  //   };  
  // }

  

  // getCellClass({ row, column, value }): any {
  //   return {
  //     'is-female': 'female' === 'female'
  //   };
  // }

 

 





 

}
