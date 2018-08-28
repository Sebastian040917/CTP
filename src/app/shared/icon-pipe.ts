import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'IconFilter'})
export class ForFilterPipe implements PipeTransform {
    transform(items: any): any {
        // items == "Camion" ?  "1"

    } 

}