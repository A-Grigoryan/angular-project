import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(list: any[], type: string): any[] {
    let sort = list.sort((a,b) => {
      if(a[type] > b[type]){
        return 1
      }else if (a[type] < b[type]) {
        return -1
      } else {
        return 0
      }
    })
    return sort;
  }

}
