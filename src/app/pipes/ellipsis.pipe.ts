import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

     transform(value: any, args?: any): any {
      console.log(args);
      value = value.substr(0, args);
      return value + "...";
    }
  

}
