import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public category = new Subject()

  constructor() { }
  shareData(text:string){
    this.category.next(text)
  }
}
