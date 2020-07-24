import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customyear'
})
export class CustomyearPipe implements PipeTransform {

  transform(value: number) {
    if (value >= 0) {
      return value + ' AD';
    } else {
      return value*(-1) + ' BC';
    }
  }

}
