import { FirstComponent } from '../../../../middle/middle-head/first/first.component';
import products from './product.json';
import { Component, OnInit } from '@angular/core';
import { SortserviceService } from 'src/app/services/sortservice.service';

interface IProduct {
  id: number;
  title: string;
  description: string;
  value: string;
  url: string
}


@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.scss']
})
export class PrListComponent implements OnInit {

  sort = ""
  product: IProduct[] = products;

  sortvalue = ""


  constructor(private value: SortserviceService) {

  }

  ngOnInit(): void {
    this.value.content.subscribe((text:string) => { 
      this.sortvalue = text
    })
  }
}
