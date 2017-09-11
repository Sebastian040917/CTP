import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant/plant.service';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { Birds } from '../../models/plant/Birds';  

@Component({
  selector: 'app-plants',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {


   ///////////////////////////////////////////
  //  filterargs = {name: 'Crow'};  
  //  birds: Birds[] = [  
  //  {id: 11, name: 'Crow'},  
  //  {id: 12, name: 'Peacock'},  
  //  {id: 13, name: 'Sparrow'},  
  //  {id: 14, name: 'Cuckoo'},  
  //  {id: 15, name: 'Eagle'},  
  //  {id: 16, name: 'Swan'},  
  //  {id: 17, name: 'Duck'},  
  //  {id: 18, name: 'Hen'},  
  //  {id: 19, name: 'Parrot'},  
  //  {id: 20, name: 'Woodpecker'}  
  //  ]  


   public query = '';
   public countries = [ "Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus",
                       "Belgium","Bosnia & Herzegovina","Bulgaria","Croatia","Cyprus",
                       "Czech Republic","Denmark","Estonia","Finland","France","Georgia",
                       "Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo",
                       "Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta",
                       "Moldova","Monaco","Montenegro","Netherlands","Norway","Poland",
                       "Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia",
                       "Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"];
   public filteredList = [];
   public elementRef;

   filter() {
    if (this.query !== ""){
        this.filteredList = this.LstPlants.filter(function(el){
          var Texto = (el.PlantCode + el.Nombre);
            return Texto.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        
          });//.bind(this.filteredList));
    }else{
        this.filteredList = [];
    }
}
 
select(item){
    this.query = item;
    this.filteredList = [];
}

   ///////////////////////////////////////////
  plantsListFull = [];
  plants = [];
  SelectedPlant:string="DF12";
  constructor(private _plantservice: PlantService, private fb: FormBuilder) 
  {
    this.initForm();
    //this.elementRef = elementRef;
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
    LstPlants = [
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
    //this.showDropDown = false;
    
  }
   closeDropDown() {
     this.showDropDown = false;
   }
 
   openDropDown() {
     this.showDropDown = true;
   }
 
   getSearchValue() {
     return this.stateForm.value.search;
   }

  



   ///////////////////////////////////////////



}
