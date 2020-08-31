import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideosPage } from '../videos/videos.page';
import { TipsPage } from '../tips/tips.page';
import { RecetasPage } from '../recetas/recetas.page';
import { TalleresPage } from '../talleres/talleres.page';
import { PreguntasPage } from '../preguntas/preguntas.page';
import { CalendarioPage } from '../calendario/calendario.page';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private modalController: ModalController) { }

  async openModal(){
    const modal = await this.modalController.create({
      component: VideosPage
    });
    return await modal.present();
  }

  async openModalTips(){
    const modal = await this.modalController.create({
      component: TipsPage
    });
    return await modal.present();
  }

  async openModalRecetas(){
    const modal = await this.modalController.create({
      component: RecetasPage
    });
    return await modal.present();
  }

  async openModalTalleres(){
    const modal = await this.modalController.create({
      component: TalleresPage
    });
    return await modal.present();
  }

  async openModalPreguntas(){
    const modal = await this.modalController.create({
      component: PreguntasPage
    });
    return await modal.present();
  }

  async openModalCalendario(){
    const modal = await this.modalController.create({
      component: CalendarioPage
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
