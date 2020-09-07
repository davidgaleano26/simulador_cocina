import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueSomosPageRoutingModule } from './que-somos-routing.module';

import { QueSomosPage } from './que-somos.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueSomosPageRoutingModule,
    RouterModule.forChild([{ path: '', component: QueSomosPage }])
  ],
  declarations: [QueSomosPage]
})
export class QueSomosPageModule {}
