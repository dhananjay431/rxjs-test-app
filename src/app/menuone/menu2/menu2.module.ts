import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu2RoutingModule } from './menu2-routing.module';
import { Menu2Component } from './menu2.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [Menu2Component],
  imports: [CommonModule, Menu2RoutingModule, NgxDatatableModule],
})
export class Menu2Module {}
