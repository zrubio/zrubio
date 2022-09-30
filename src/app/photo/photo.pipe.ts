import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photo'
})
export class PhotoPipe implements PipeTransform {

  transform(value: string): any {
    return "#"+value.split('/',5)[4];
  }

}