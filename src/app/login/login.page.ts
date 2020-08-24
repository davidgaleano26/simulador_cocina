import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: SocialUser;
  loggedIn: boolean;

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router,private autService: SocialAuthService,public menuctrl: MenuController) { }

  ngOnInit() {    
  }

  onSubmitLogin(){
    this.authService.login(this.email, this.password).then( res =>{
      this.router.navigate(['/inicio/']);
    }).catch(err => alert('Los Datos son Incorrectos o no Existe el Usuario'));
  }
  // loginGoogle(){
  //   this.authService.loginWithGoogle().then(() => {
  //     this.router.navigate(['/inicio']);
  //   }).catch(err => {
  //     alert ('Algo salió mal contacte con el administrador' + JSON.stringify(err));
  //   });
  // }
  signInWithGoogle():void{
    const entramos = this.autService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(entramos)
    if (!entramos){
      alert("No funciona");
    }
    else{
    this.router.navigate(['/inicio']);
    }
  }
  ionViewWillEnter() {
    this.menuctrl.enable(false);
 }
 ionViewDidLeave() {
   this.menuctrl.enable(true);
 } 
}
