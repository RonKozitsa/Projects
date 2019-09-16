import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: string, limit: number): any {
    return value.length >  limit ? `${value.slice(0,limit)}...` : value;
  }

}
