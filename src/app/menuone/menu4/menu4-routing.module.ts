import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu4Component } from './menu4.component';

const routes: Routes = [{ path: '', component: Menu4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Menu4RoutingModule { }
