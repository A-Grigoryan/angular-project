import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category = {
    categoryActive: "Chocolates",
    categoryObj: ["Chocolates", "Cake", "Loose cookies", "Donuts and cocoa", "Cake pieces", "Dragee", "Assorted chocolate", "Ice-cream", "Chocolate bars", "Hard candy", "Biscuits", "Wafers", "Coffee and Tea", "Fruit jelly and souffle", "Rahat - lokum", "Popcorn, salty sticks and nuts", "Toffee and nougat", "Chocolate cream and halva", "Cocoa products", "Flour and bread", "Exclusive products", "Other"]
  }



  constructor(private value: CategoryService) { }

  ngOnInit(): void {
  }

  change(el: string) {
    if (this.category.categoryActive !== el) {
      this.category.categoryActive = el;
      this.value.shareData(this.category.categoryActive)
    }
  }
}
