
import { Component, ElementRef, HostListener, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { SortserviceService } from '../../../services/sortservice.service';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent implements OnInit {

  sortpart = ["value", "title"]
  sortby = ""

  constructor(
    private sorting: SortserviceService,
    private categoryservice: CategoryService
  ) { }

  category: string = "Chocolates"

  ngOnInit(): void {
    this.categoryservice.category.subscribe((text: string) => {
      this.category = text
      console.log(text)
    })
    window.onclick = function(event){
      if(!event.target.matches(".click-here")){
        let el = document.querySelector('#flex')
        if(el.classList.contains('show')){
          el.classList.remove('show')
        }
      }
    }
  }

  changedisplay() {
    let el = document.querySelector('#flex')
    el.classList.toggle("show")
  }

  updatedata(sort: string) {
    this.sorting.shareData(sort)
  }
  sortBy(sort: any) {
    this.sortby = sort
    console.log(this.sortby)
  }
}
