import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowItsMadeRoutingModule } from './how-its-made-routing.module';
import { HowItsMadeComponent } from './how-its-made.component';


@NgModule({
  declarations: [
    HowItsMadeComponent
  ],
  imports: [
    CommonModule,
    HowItsMadeRoutingModule
  ]
})
export class HowItsMadeModule { }
