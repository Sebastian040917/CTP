import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant/plant.service';


@Component({
  selector: 'app-plants',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  plantsListFull = [];
  plants = [];
  constructor(private _plantservice: PlantService) {}
 
  ngOnInit() {
    this._plantservice.getPlants().then(plants=> this.plantsListFull = plants);
    this._plantservice.FillListPlants().then(pl=> this.plants = pl);
  }

}
