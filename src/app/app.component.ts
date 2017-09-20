import { Component } from '@angular/core';
import { PlantService } from "./services/plant/plant.service";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEP & CTP';
  public query = '';
  public filteredList = [];



  /********** TYPEHEAD ****** */

  ngOnInit() {
    this._plantservice.getAllPlants().then(pl => this.LstPlants = pl);
  }

  stateForm: FormGroup;
  showDropDown = false;

  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    })
  }

  selectValue(value) {
    this.stateForm.patchValue({ "search": value.PlantCode + " " + value.Nombre });
    this.SelectedPlant = value.PlantCode;

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

  filter() {
    if (this.query !== "") {
      this.filteredList = this.LstPlants.filter(function (el) {
        var Texto = (el.PlantCode + el.Nombre);
        return Texto.toLowerCase().indexOf(this.query.toLowerCase()) > -1;

      });//.bind(this);
    } else {
      this.filteredList = [];
    }
  }



  ////////////////////TABLA PLANTAS ///////////////////////
  LstPlants = [];
  SelectedPlant = "";
  selected = [];
  sampleData : string ="some parent Data";

  rows = []; //TABLE
  fetch(cb) { 
    this._plantservice.getPlantsClient()
    .then(data=> { 
        cb(data);
    });       
}

  constructor(private _plantservice: PlantService, private fb: FormBuilder) {
    this.initForm();
    //this.elementRef = elementRef;    

    this.fetch((data) => {
      this.rows = data;
    });
  }
  

  onSelect({ selected }) {
    this.sampleData = selected[0].PlantCode;
  }

  onActivate(event) {  
    //console.log(event)
  }

  getRowClass(row) {
    //console.log(row);
    return {
      'age-is-ten': 1 === 1
    };
  }

  getCellClass({ row, column, value }): any {
    return {
      'is-female': 'female' === 'female'
    };
  }


//BUTTONS
  AddPlantToClient() {
    alert("Add this plant into grid of client" + this.SelectedPlant);
  }

  SearchMorePlants() {
    alert("Search more plants");
  }






 

}
