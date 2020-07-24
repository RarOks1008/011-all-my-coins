import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customvalue'
})
export class CustomvaluePipe implements PipeTransform {

  transform(value: number, type: string) {
    if (value <= 0) {
      return 'Wrong on no value inserted';
    } else {

    }
    switch(type) {
      case 'g':
        if (value/1000 >= 1) {
          return (value/1000) + ' kg';
        } else {
          return value + ' g';
        }
      case 'm':
        if (value/1000 >= 1) {
          return (value/1000) + ' m';
        } else {
          return value + ' mm';
        }
    }
  }

}
