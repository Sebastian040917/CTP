import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant/plant.service';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-plants',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
  providers:[PlantService]
})
export class PlantComponent implements OnInit {


  public query = '';
  public filteredList = [];
 // public elementRef;


  ////////////////////PLANTAS ///////////////////////
  LstPlants = [];
  SelectedPlant = "";
  constructor(private _plantservice: PlantService, private fb: FormBuilder) {
    this.initForm();
    //this.elementRef = elementRef;    
  }

  ngOnInit() {
    this._plantservice.getAllPlants().then(pl => this.LstPlants = pl);
  }


  AddPlantToClient() {
    alert("Add this plant into grid of client" + this.SelectedPlant);
  }

  SearchMorePlants() {
    alert("Search more plants");
  }

  /********** TYPEHEAD ****** */
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

}
