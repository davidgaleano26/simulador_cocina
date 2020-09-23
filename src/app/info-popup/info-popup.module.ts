import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPopupPageRoutingModule } from './info-popup-routing.module';

import { InfoPopupPage } from './info-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPopupPageRoutingModule
  ],
  declarations: [InfoPopupPage]
})
export class InfoPopupPageModule {}
