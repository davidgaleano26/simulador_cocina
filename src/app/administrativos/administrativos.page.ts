import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-administrativos',
  templateUrl: './administrativos.page.html',
  styleUrls: ['./administrativos.page.scss'],
})
export class AdministrativosPage implements OnInit {

  constructor(private loadingCtrl : LoadingController) { }

  ngOnInit() {
  this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'azul',
      message: 'visualizando...',
      duration: 2000
    });
    return await loading.present();
  }
}
