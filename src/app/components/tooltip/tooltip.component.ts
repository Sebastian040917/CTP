import { Component, Input } from '@angular/core';
import { PlantService } from '../../services/plant/plant.service';

@Component({
  selector: 'app-tooltip',
   templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent {
 @Input('Texto1') popiedad1 :string;

  public _plantCode:string = "";
  public rowdata: any =[];
  constructor( ) { 
  }
  

  doyclick(event){ 
       
         this.popiedad1 = event;
         console.log(event);
  }


}
