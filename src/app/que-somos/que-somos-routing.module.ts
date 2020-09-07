import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueSomosPage } from './que-somos.page';

const routes: Routes = [
  {
    path: '',
    component: QueSomosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueSomosPageRoutingModule {}
