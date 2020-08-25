import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalleresPage } from './talleres.page';

const routes: Routes = [
  {
    path: '',
    component: TalleresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalleresPageRoutingModule {}
