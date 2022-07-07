
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SortserviceService } from 'src/app/services/sortservice.service';
import products from "/Users/amalyagrigoryan/Desktop/test angular /my-app/src/app/routing/products/product/pr-list/product.json"


interface IProduct {
  id: number;
  title: string;
  description: string;
  value: string;
  url: string
}


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit {

  product: IProduct[] = products

  details: any

  y: IProduct[] = []

  detailsId!: { id: number }
  id!: number
  sortvalue: string = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private value: SortserviceService
  ) { }

  ngOnInit(): void {

    //  ActivatedRoute
    this.id = this.activatedRoute.snapshot.params['id']
    this.details = this.product.find(el => el.id == this.id)
    this.activatedRoute.params.subscribe(id => {
      this.id = id['id']
      console.log(this.id)
      this.details = this.product.find(el => el.id == this.id)
      console.log(this.details)
    })

    this.value.content.subscribe((text:string) => { 
      this.sortvalue = text
      console.log(text)
    })


    let arr = [...this.product]
    arr.splice(this.product.indexOf(this.details), 1)
    console.log(arr)

    let numbers: number[] = []
    let max = 3

    for (let i = 0; i < arr.length; i++) {
      numbers.push(i)
    }

    for (let i = 0; i < max; i++) {
      let random = Math.floor(Math.random() * numbers.length)
      let element = numbers.splice(random, 1)[0]
      this.y.push(arr[element])
      console.log(element)
    }

    console.log(this.y)
    console.log(numbers)
  }
}