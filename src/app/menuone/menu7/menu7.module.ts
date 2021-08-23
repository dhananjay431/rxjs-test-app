import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu7RoutingModule } from './menu7-routing.module';
import { Menu7Component } from './menu7.component';


@NgModule({
  declarations: [
    Menu7Component
  ],
  imports: [
    CommonModule,
    Menu7RoutingModule
  ]
})
export class Menu7Module { }
