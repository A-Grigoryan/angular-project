import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-product',
  templateUrl: './global-product.component.html',
  styleUrls: ['./global-product.component.scss']
})
export class GlobalProductComponent implements OnInit {

  @Input() el: any;
  constructor() { }

  ngOnInit(): void {
  }

}
