import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu9RoutingModule } from './menu9-routing.module';
import { Menu9Component } from './menu9.component';


@NgModule({
  declarations: [
    Menu9Component
  ],
  imports: [
    CommonModule,
    Menu9RoutingModule
  ]
})
export class Menu9Module { }
