import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsQuienesSomosPageRoutingModule } from './tabs-quienes-somos-routing.module';

import { TabsQuienesSomosPage } from './tabs-quienes-somos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsQuienesSomosPageRoutingModule
  ],
  declarations: [TabsQuienesSomosPage]
})
export class TabsQuienesSomosPageModule {}
