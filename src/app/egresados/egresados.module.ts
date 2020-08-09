import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EgresadosPageRoutingModule } from './egresados-routing.module';

import { EgresadosPage } from './egresados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EgresadosPageRoutingModule
  ],
  declarations: [EgresadosPage]
})
export class EgresadosPageModule {}
