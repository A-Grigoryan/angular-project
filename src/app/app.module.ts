import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FirstHeadComponent } from './header/header/first-head/first-head.component';
import { SecondHeadComponent } from './header/header/second-head/second-head.component';
import { ProductComponent } from './routing/products/product/product.component';
import { PagesListComponent } from './routing/products/product/pages-list/pages-list.component';
import { PrListComponent } from './routing/products/product/pr-list/pr-list.component';
import { FooterHeadComponent } from './footer/footer-head/footer-head.component';
import { FooterFirstComponent } from './footer/footer-head/footer-first/footer-first.component';
import { FooterSecondComponent } from './footer/footer-head/footer-second/footer-second.component';
import { GlobalProductComponent } from './global/global-product/global-product.component';
import { DetailsComponent } from './routing/products/details/details.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { FilterPipe } from './pipes/sort/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstHeadComponent,
    SecondHeadComponent,
    ProductComponent,
    PagesListComponent,
    PrListComponent,
    FooterHeadComponent,
    FooterFirstComponent,
    FooterSecondComponent,
    GlobalProductComponent,
    DetailsComponent,
    SortPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
