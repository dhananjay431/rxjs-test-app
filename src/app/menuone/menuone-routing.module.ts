import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuoneComponent } from './menuone.component';
import { SpiderService } from '../spider.service';
const routes: Routes = [
  {
    path: '',
    component: MenuoneComponent,
    resolve: {
      data: SpiderService,
    },
    children: [
      {
        path: 'menu1',
        loadChildren: () =>
          import('./menu1/menu1.module').then((m) => m.Menu1Module),
      },
      {
        path: 'menu2',
        loadChildren: () =>
          import('./menu2/menu2.module').then((m) => m.Menu2Module),
      },
      {
        path: 'menu3',
        loadChildren: () =>
          import('./menu3/menu3.module').then((m) => m.Menu3Module),
      },
      {
        path: 'menu4',
        loadChildren: () =>
          import('./menu4/menu4.module').then((m) => m.Menu4Module),
      },
      {
        path: 'menu5',
        loadChildren: () =>
          import('./menu5/menu5.module').then((m) => m.Menu5Module),
      },
      {
        path: 'menu6',
        loadChildren: () =>
          import('./menu6/menu6.module').then((m) => m.Menu6Module),
      },
      {
        path: 'menu7',
        loadChildren: () =>
          import('./menu7/menu7.module').then((m) => m.Menu7Module),
      },
      {
        path: 'menu8',
        loadChildren: () =>
          import('./menu8/menu8.module').then((m) => m.Menu8Module),
      },
      {
        path: 'menu9',
        loadChildren: () =>
          import('./menu9/menu9.module').then((m) => m.Menu9Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SpiderService],
})
export class MenuoneRoutingModule {}
