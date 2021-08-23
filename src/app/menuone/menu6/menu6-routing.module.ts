import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu6Component } from './menu6.component';

const routes: Routes = [{ path: '', component: Menu6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Menu6RoutingModule { }
