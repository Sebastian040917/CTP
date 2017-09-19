import { Component, Input } from '@angular/core';
import { PlantService } from '../../services/plant/plant.service';
//import { ClientListPlantComponent} from '../client-list-plant/client-list-plant.component';

@Component({
  selector: 'app-tooltip',
   templateUrl: './tooltip.component.html',
  // template: `
  // <template >Here we go: <div [innerHtml]="popiedad1"></div></template>
  // `,
  styleUrls: ['./tooltip.component.css'],
  ///viewProviders: [ClientListPlantComponent] 
})
export class TooltipComponent {
 // @ViewChild('myTable') table: any;
 @Input('Texto1') popiedad1 :string;
 //@Input() popTemplate:string;

  public _plantCode:string = "";
  public rowdata: any =[];
  constructor( ) { 

    //this._tooltipOut(event);
   //console.log(this._comp.onActivate(Event));
   //this._plantCode = this.rowdata.PlantCode;
   //this.popTemplate = "popTemplate";
  }
  

  doyclick(event){ 
       
        //this.rowdata   = event;
        //this._plantCode = event;
         this.popiedad1 = event;
        // ///this.popTemplate = "popTemplate";
         console.log(event);
  }
  // _tooltipOut(){    
  //   console.log(this._plantCode);
  // }

}
