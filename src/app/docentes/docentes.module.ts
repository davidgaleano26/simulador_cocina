import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocentesPageRoutingModule } from './docentes-routing.module';

import { DocentesPage } from './docentes.page';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxChartsModule,
    RouterModule.forChild([{ path: '', component: DocentesPage }]),
    DocentesPageRoutingModule,
  ],
  declarations: [DocentesPage]
})
export class DocentesPageModule {}
