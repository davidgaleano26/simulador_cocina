import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

/**/
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  /*
  usuario = this.fb.group({
    valNombres: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', Validators.email],
  });
  */

  public nombres: string;
  public apellidos: string;
  public direccion: string;
  public telefono: string;
  public email: string;
  public password : string;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, public menuctrl: MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuctrl.enable(false);
  }
  onSubmitRegister(){
    this.auth.register(this.email, this.password, this.nombres, this.apellidos, this.direccion, this.telefono).then(
      auth =>{
        this.router.navigate(['/inicio']);
        this.menuctrl.enable(true);
        console.log(auth);
      }
    ).catch(err => console.log(err));
  }

}
