import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
    transform(value: any, search: string): any {
         if  (!search) {return value; }
         let solution = value.filter(v => {
            if ( !v ) {return;}
            var searcher:string = v.PlantCode + v.Nombre;
           return  searcher.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })
        return solution;
    }
}