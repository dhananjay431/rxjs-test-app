import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu8RoutingModule } from './menu8-routing.module';
import { Menu8Component } from './menu8.component';


@NgModule({
  declarations: [
    Menu8Component
  ],
  imports: [
    CommonModule,
    Menu8RoutingModule
  ]
})
export class Menu8Module { }
