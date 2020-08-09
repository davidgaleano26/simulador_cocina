import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrativosPageRoutingModule } from './administrativos-routing.module';

import { AdministrativosPage } from './administrativos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrativosPageRoutingModule
  ],
  declarations: [AdministrativosPage]
})
export class AdministrativosPageModule {}
