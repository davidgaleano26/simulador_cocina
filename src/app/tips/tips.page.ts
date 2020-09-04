import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {

  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

}
