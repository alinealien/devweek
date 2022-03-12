import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamesRoutingModule } from './exames-routing.module';
import { ExamesComponent } from './exames/exames.component';


@NgModule({
  declarations: [
    ExamesComponent
  ],
  imports: [
    CommonModule,
    ExamesRoutingModule
  ]
})
export class ExamesModule { }
