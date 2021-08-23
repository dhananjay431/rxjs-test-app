import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu1RoutingModule } from './menu1-routing.module';
import { Menu1Component } from './menu1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Menu1Component],
  imports: [CommonModule, Menu1RoutingModule, FormsModule],
})
export class Menu1Module {}
