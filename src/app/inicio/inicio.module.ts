import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { VideosPage } from '../videos/videos.page';
import { TipsPage } from '../tips/tips.page';
import { RecetasPage } from '../recetas/recetas.page';
import { TalleresPage } from '../talleres/talleres.page';
import { PreguntasPage } from '../preguntas/preguntas.page';
import { CalendarioPage } from '../calendario/calendario.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule
  ],
  declarations: [InicioPage, VideosPage, TipsPage, RecetasPage, TalleresPage, PreguntasPage, CalendarioPage],
  entryComponents: [VideosPage, TipsPage, RecetasPage, TalleresPage, PreguntasPage, CalendarioPage]
})
export class InicioPageModule {}
