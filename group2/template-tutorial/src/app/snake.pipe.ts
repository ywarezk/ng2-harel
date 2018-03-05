import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snake'
})
export class SnakePipe implements PipeTransform {

  transform(value: string): string {
    let result = '';
    for (let i = 0; i < value.length; i++) {
      if (i % 2 === 0) {
        result += value[i].toUpperCase();
      } else {
        result += value[i].toLowerCase();
      }
    }
    return result;
  }

}
