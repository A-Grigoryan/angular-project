import { DetailsComponent } from '../products/details/details.component';
import { CategoryComponent } from '../../middle/middle-head/second/category/category.component';
import { FirstComponent } from '../../middle/middle-head/first/first.component';
import { SecondComponent } from '../../middle/middle-head/second/second.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
