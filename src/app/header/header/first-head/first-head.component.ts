import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-head',
  templateUrl: './first-head.component.html',
  styleUrls: ['./first-head.component.scss']
})
export class FirstHeadComponent implements OnInit {
  a = ["Frequently asked questions", "General terms and conditions", "Delivery and return", "Privacy policy"]

  constructor() { }

  ngOnInit(): void {
  }

}
