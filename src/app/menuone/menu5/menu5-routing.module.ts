import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu5Component } from './menu5.component';

const routes: Routes = [{ path: '', component: Menu5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Menu5RoutingModule { }
