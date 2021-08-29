import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu3RoutingModule } from './menu3-routing.module';
import { Menu3Component } from './menu3.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [Menu3Component],
  imports: [CommonModule, Menu3RoutingModule, NgxDatatableModule],
})
export class Menu3Module {}
