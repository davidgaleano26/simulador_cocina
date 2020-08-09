import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrativosPage } from './administrativos.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrativosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrativosPageRoutingModule {}
