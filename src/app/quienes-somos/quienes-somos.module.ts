import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuienesSomosPageRoutingModule } from './quienes-somos-routing.module';

import { QuienesSomosPage } from './quienes-somos.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuienesSomosPageRoutingModule,
    RouterModule.forChild([{ path: '', component: QuienesSomosPageModule }])
  ],
  declarations: [QuienesSomosPage]
})
export class QuienesSomosPageModule {}
