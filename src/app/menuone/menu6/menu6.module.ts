import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu6RoutingModule } from './menu6-routing.module';
import { Menu6Component } from './menu6.component';


@NgModule({
  declarations: [
    Menu6Component
  ],
  imports: [
    CommonModule,
    Menu6RoutingModule
  ]
})
export class Menu6Module { }
