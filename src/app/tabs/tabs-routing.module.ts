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
        loadChildren: () =>
          import('../docentes/docentes.module').then(m => m.DocentesPageModule)
      },
    {
      path: 'tab2',
      loadChildren: () =>
        import('../tab2/tab2.module').then(m => m.Tab2PageModule)
    },
    {
      path: 'tab3',
      loadChildren: () =>
        import('../tab3/tab3.module').then(m => m.Tab3PageModule)
    },
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
