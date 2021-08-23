import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu7Component } from './menu7.component';

const routes: Routes = [{ path: '', component: Menu7Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Menu7RoutingModule { }
