import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ForFilter'})
export class ForFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.type.indexOf(filter) !== -1);
    }
}
