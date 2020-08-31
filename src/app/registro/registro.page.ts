import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor( public menuctrl: MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuctrl.enable(false);
 }
 ionViewDidLeave() {
   this.menuctrl.enable(false);
 }
}
