import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant/plant.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-plants',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  plantsListFull = [];
  plants = [];
  SelectedPlant:string="DF12";
  constructor(private _plantservice: PlantService, private fb: FormBuilder) 
  {
    this.initForm();
  }
 
  ngOnInit() {
    this._plantservice.getPlants().then(plants=> this.plantsListFull = plants);
    this._plantservice.FillListPlants().then(pl=> this.plants = pl);
  }

  PlantSelected(){
    console.log("ha seleccionado " + event);
  }

  AddPlantToClient(){
    alert("Add this plant into grid of client" + this.SelectedPlant);    
  }

  SearchMorePlants(){
    alert("Search more plants");
  }

/********** TEST ****** */
  stateForm: FormGroup;
  
    showDropDown = false;
    states = [
      {PlantCode: 'AS10',Nombre: 'MX-PLANT-CASR'},
      {PlantCode: 'DS11',Nombre: 'MX-PLANT-CCAS'},
      {PlantCode: 'GS12',Nombre: 'MX-PLANT-CASC'},
      {PlantCode: 'FS13',Nombre: 'MX-PLANT-BFFBG'},
      {PlantCode: 'GD14',Nombre: 'MX-PLANT-BDFB'},
      {PlantCode: 'DF15',Nombre: 'MX-PLANT-DBFD'},
      {PlantCode: 'RW16',Nombre: 'MX-PLANT-RTEG'},
      {PlantCode: 'GS17',Nombre: 'MX-PLANT-MHKY'},
      {PlantCode: 'BD18',Nombre: 'MX-PLANT-JGYD'},
      {PlantCode: 'RQ19',Nombre: 'MX-PLANT-DREW'},
      {PlantCode: 'TF20',Nombre: 'MX-PLANT-CCAA'},
      {PlantCode: 'RW21',Nombre: 'MX-PLANT-WWGW'},
      {PlantCode: 'DB22',Nombre: 'MX-PLANT-CCCQ'},
      {PlantCode: 'YT23',Nombre: 'MX-PLANT-CAWR'}
    ]
    initForm(): FormGroup {
      return this.stateForm = this.fb.group({
        search: [null]
      })
    }

  selectValue(value) {
    this.stateForm.patchValue({"search": value.PlantCode+" "+value.Nombre});
    this.SelectedPlant = value.PlantCode;
    this.showDropDown = false;
  }
   closeDropDown() {
     this.showDropDown = !this.showDropDown;
   }
 
   openDropDown() {
     this.showDropDown = false;
   }
 
   getSearchValue() {
     return this.stateForm.value.search;
   }


}
