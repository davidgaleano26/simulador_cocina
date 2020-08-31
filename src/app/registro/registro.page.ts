import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

/**/
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public nombres: string;
  public apellidos: string;
  public direccion: string;
  public telefono: string;
  public email: string;
  public password : string;

  constructor(private auth: AuthService, private router: Router, public menuctrl: MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuctrl.enable(false);
  }
  ionViewDidLeave() {
   this.menuctrl.enable(false);
  }
  onSubmitRegister(){
    this.auth.register(this.email, this.password, this.nombres, this.apellidos, this.direccion, this.telefono).then(
      auth =>{
        this.router.navigate(['/inicio']);
        console.log(auth);
      }
    ).catch(err => console.log(err));
  }

}
