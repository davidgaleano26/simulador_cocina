import { Component, OnInit } from '@angular/core';
import { AuthService} from '../servicios/auth.service';
import { Router} from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { MenuController } from '@ionic/angular';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Extractor } from '@angular/compiler';
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

  // tslint:disable-next-line: max-line-length
  constructor(public router: Router, private autService: SocialAuthService, public menuctrl: MenuController,  private broadcastService: BroadcastService, private auhService: MsalService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.login(this.email, this.password).then( res => {
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
  signInWithGoogle(): void{
    const entramos = this.autService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(entramos);
    if (!entramos){
      alert('No funciona');
    }
    else{
    this.router.navigate(['/inicio']);
    }
  }
  ionViewWillEnter() {
    this.menuctrl.enable(false);
 }
 ionViewDidLeave() {
  //  console.log(this.router.navigate(['/registro']));
  //  if(this.router.navigate(['/registro'])){
  //  this.menuctrl.enable(false);
  //  console.log("Entramos")
  //  }
  //  else{
  //    console.log("Estamos en otro lado")
    this.menuctrl.enable(true);
  // }
 }
 async login() {
     const isIE = await window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
    const requestObj = {
      scopes: ['user.read']
    };
    if (isIE) {
      this.auhService.loginRedirect({
        extraScopesToConsent: ['user.read', 'openid', 'profile']
      });
      // tslint:disable-next-line: only-arrow-functions
      // this.auhService.acquireTokenSilent(requestObj).then(function(tokenResponse) {
      //   // Callback code here
      //   console.log(tokenResponse.accessToken);
      // // tslint:disable-next-line: only-arrow-functions
      // }).catch(function(error) {
      //   console.log(error);
      // });
      
    } else {
      this.auhService.loginPopup({
        extraScopesToConsent: ['user.read', 'openid', 'profile']
      });
      // tslint:disable-next-line: only-arrow-functions
      // this.auhService.acquireTokenSilent(requestObj).then(function(tokenResponse) {
      //   // Callback code here
      //   console.log(tokenResponse.accessToken);
      // // tslint:disable-next-line: only-arrow-functions
      // }).catch(function(error) {
      //   console.log(error);
      // });
       this.router.navigate(['/inicio']);
    }
}
}
