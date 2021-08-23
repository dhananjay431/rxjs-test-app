import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu1Component } from './menu1.component';
import { SpiderService } from '../../spider.service';
const routes: Routes = [
  {
    path: '',
    component: Menu1Component,
    resolve: {
      data: SpiderService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SpiderService],
})
export class Menu1RoutingModule {}
