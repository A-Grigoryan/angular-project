import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortserviceService {
  public content = new Subject()

  constructor() { }
  shareData(text:string){
    this.content.next(text)
  }
}
