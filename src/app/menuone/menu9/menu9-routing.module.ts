import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu9Component } from './menu9.component';

const routes: Routes = [{ path: '', component: Menu9Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Menu9RoutingModule { }
