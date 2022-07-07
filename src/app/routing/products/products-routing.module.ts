import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from 'src/app/routing/products/product/product.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: "", 
    component: ProductsComponent,
    children: [
      {
        path: "",
        component: ProductComponent,
      },
      {
        path: "details/:id",
        component: DetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
