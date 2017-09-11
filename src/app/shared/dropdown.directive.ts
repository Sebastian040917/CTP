import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import { PlantService} from '../services/plant/plant.service'

@Directive({
    selector: '[clickOutside]',
})
export class ClickOutsideDirective {
    @Output() 
    public clickOutside = new EventEmitter();
    constructor(private _elementRef: ElementRef) {

    }

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {

        //console.log(targetElement.id);
        //console.log(this._elementRef.nativeElement);
        
       if(targetElement.id == "search"){return;}

        const isClickedInside = this._elementRef.nativeElement.contains(targetElement);
       // console.log(isClickedInside);
        if (!isClickedInside) {
            
            this.clickOutside.emit(null);
        }
        
        //Redireccionar a funcion de planta clock
        if(targetElement.textContent.length == 5 && targetElement.tagName =="tspan"){
            console.log(targetElement.textContent);
            //PlantService.testService();
            PlantService.prototype.testService();
        }
    }
}