import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuoneRoutingModule } from './menuone-routing.module';
import { MenuoneComponent } from './menuone.component';


@NgModule({
  declarations: [
    MenuoneComponent
  ],
  imports: [
    CommonModule,
    MenuoneRoutingModule
  ]
})
export class MenuoneModule { }
