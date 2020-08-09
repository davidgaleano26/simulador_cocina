import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestigacionPage } from './investigacion.page';

const routes: Routes = [
  {
    path: '',
    component: InvestigacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestigacionPageRoutingModule {}
