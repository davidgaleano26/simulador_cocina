import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPopupPage } from './info-popup.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPopupPageRoutingModule {}
