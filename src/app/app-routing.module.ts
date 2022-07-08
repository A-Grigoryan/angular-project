import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./routing/home/home.module').then(home => home.HomeModule),
  },
  {
    path: "products",
    loadChildren: () => import('./routing/products/products.module').then(product => product.ProductsModule),
  },
  {
    path: "about-us",
    loadChildren: () => import('./routing/about-us/about-us.module').then(about => about.AboutUsModule),
  },
  {
    path: "stores",
    loadChildren: () => import('./routing/stores/stores.module').then(stores => stores.StoresModule),
  },
  {
    path: "how-its-made",
    loadChildren: () => import('./routing/how-its-made/how-its-made.module').then(howitsmade => howitsmade.HowItsMadeModule),
  },
  {
    path: "contact-us",
    loadChildren: () => import('./routing/contact-us/contact-us.module').then(contact => contact.ContactUsModule),
  },
  // {
  //   path: "sign-up",
  //   loadChildren: () => import('./routing/sign-up/sign-up.module').then(sign => sign.SignUpModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
