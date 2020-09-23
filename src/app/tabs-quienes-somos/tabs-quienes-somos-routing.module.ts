import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsQuienesSomosPage } from './tabs-quienes-somos.page';
//import { QuienesSomosPage } from '../quienes-somos/quienes-somos.page';

const routes: Routes = [
  {
    path: '',
    component: TabsQuienesSomosPage,
    children: [
      {
        path: 'que-somos',
        loadChildren: () =>
          import('../que-somos/que-somos.module').then(m => m.QueSomosPageModule)
      },
    {
      path: 'quienes-somos',
      loadChildren: () =>
        import('../quienes-somos/quienes-somos.module').then(m => m.QuienesSomosPageModule)
    },
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsQuienesSomosPageRoutingModule {}
