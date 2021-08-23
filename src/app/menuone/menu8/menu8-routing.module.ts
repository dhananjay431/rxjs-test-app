import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu8Component } from './menu8.component';

const routes: Routes = [{ path: '', component: Menu8Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Menu8RoutingModule { }
