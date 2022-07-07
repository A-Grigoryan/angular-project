import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.scss']
})
export class PagesListComponent implements OnInit {

  itemsCount = 151;
  itemsPerPage = 20;


  pagesActive = 1;
  pagesNumbrs: number[] = []


  change(el: number) {
    this.pagesActive = el;
  }

  constructor() {
    let x: number = Math.ceil(this.itemsCount / this.itemsPerPage)
    for (let i = 1; i <= x; i++) {
      this.pagesNumbrs.push(i)
    }
  }

  ngOnInit(): void {
  }

  incrementPage() {
    if (this.pagesActive < this.pagesNumbrs.length) {
      this.pagesActive++
    }
  }

  minusPage() {
    if (this.pagesActive > this.pagesNumbrs[0]) {
      this.pagesActive--
    }
  }
}
