import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MiddleHeadComponent } from 'src/app/middle/middle-head/middle-head.component';
import { SecondComponent } from 'src/app/middle/middle-head/second/second.component';
import { FirstComponent } from 'src/app/middle/middle-head/first/first.component';
import { CategoryComponent } from 'src/app/middle/middle-head/second/category/category.component';


@NgModule({
  declarations: [
    ProductsComponent,
    MiddleHeadComponent,
    SecondComponent,
    FirstComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
