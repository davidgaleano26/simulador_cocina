import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private loadingCtrl : LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'azul',
      message: 'Bienvenido',
      duration: 2000
    });
    return await loading.present();
  }
}
