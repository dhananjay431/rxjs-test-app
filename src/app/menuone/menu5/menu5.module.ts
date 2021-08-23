import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu5RoutingModule } from './menu5-routing.module';
import { Menu5Component } from './menu5.component';


@NgModule({
  declarations: [
    Menu5Component
  ],
  imports: [
    CommonModule,
    Menu5RoutingModule
  ]
})
export class Menu5Module { }
