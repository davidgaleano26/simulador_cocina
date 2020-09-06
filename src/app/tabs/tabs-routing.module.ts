import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
    {
      path: 'docentes',
      loadChildren: '../docentes/docentes.module#DocentesPageModule'
    },
    {
      path: 'tab2',
      loadChildren: '../tab2/tab2.module#Tab2PageModule'
    },
    {
      path: 'tab3',
      loadChildren: '../tab3/tab3.module#Tab3PageModule'
    },
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
