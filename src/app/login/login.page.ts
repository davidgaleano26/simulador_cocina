import { Component, OnInit } from '@angular/core';
import { AuthService} from '../servicios/auth.service';
import { Router} from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { MenuController } from '@ionic/angular';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Extractor } from '@angular/compiler';
import { Plugins } from '@capacitor/core';

/**/
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';

import { BarcodeScannerOptions, BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import * as firebase from 'firebase';
const { SplashScreen } = Plugins;
let provider = new firebase.auth.OAuthProvider('microsoft.com');

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  datocodificado: any;
  datoscaneado: {};



  email: string;
  password: string;
  
  // tslint:disable-next-line: max-line-length
  constructor(private barcodeScanner: BarcodeScanner, 
    public router: Router, 
    private autService: AuthService, 
    public menuctrl: MenuController,  
    private broadcastService: BroadcastService, 
    private auhService: MsalService, 
    private authService: AuthService, 
    private AFauth: AngularFireAuth) { }

  ngOnInit() {
    // Hide the splash (you should do this on app launch)
    SplashScreen.hide();

  // Show the splash for an indefinite amount of time:
    SplashScreen.show({
    autoHide: false
    });

  // Show the splash for two seconds and then auto hide:
    SplashScreen.show({
    showDuration: 2000,
    autoHide: true
    });
  }

  onSubmitLogin(){
  this.authService.login(this.email, this.password).then( res => {
      this.router.navigate(['/inicio/']);
      this.menuctrl.enable(true);
    }).catch(err => alert('Los Datos son Incorrectos o no Existe el Usuario'));
  }
  // loginGoogle(){
  //   this.authService.loginWithGoogle().then(() => {
  //     this.router.navigate(['/inicio']);
  //   }).catch(err => {
  //     alert ('Algo salió mal contacte con el administrador' + JSON.stringify(err));
  //   });
  // }

  /*
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
  */

  signInWithGoogle(){
    this.autService.loginConGoogle().then(respuesta => 
      {this.router.navigateByUrl('/inicio');}, error => {
              console.log(error);});  
  }

  /*
  signInWithMicrosoft(){
    this.autService.loginConMicrosoft().then(respuesta => 
      {this.router.navigateByUrl('/inicio');}, error => {
              console.log(error);});  
  }
  */

  /*
  loginConMicrosoft(){
    var provider = new firebase.auth.OAuthProvider('microsoft.com');
    this.AFauth.signInWithPopup(provider).then(
      respuesta => 
      {this.router.navigateByUrl('/inicio');}, error => {
              console.log(error);}
    )
  }
  */

  ionViewWillEnter() {
    this.menuctrl.enable(false);
  }

  ionViewDidLeave() {
   const registro = this.router.url;
    if(registro != '/registro'){
      this.menuctrl.enable(true);
      return true
    }
    else{
      this.menuctrl.enable(false);
      return false;
    }
  }
<<<<<<< HEAD
 
  async login() {
    const isIE = await window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
    const requestObj = {
      scopes: ['user.read']
    };
    if (isIE) {
      this.auhService.loginRedirect({
        extraScopesToConsent: ['user.read', 'openid', 'profile']
      });
=======
 }
// async login() {
//     const isIE = await window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
//    const requestObj = {
//      scopes: ['user.read']
//    };
//    if (isIE) {
//      this.auhService.loginRedirect({
//        extraScopesToConsent: ['user.read', 'openid', 'profile']
//      });
>>>>>>> d585a20d0eec14fb5dc682cede119c1524fadb96
      // tslint:disable-next-line: only-arrow-functions
      // this.auhService.acquireTokenSilent(requestObj).then(function(tokenResponse) {
      //   // Callback code here
      //   console.log(tokenResponse.accessToken);
      // // tslint:disable-next-line: only-arrow-functions
      // }).catch(function(error) {
      //   console.log(error);
      // });
      
<<<<<<< HEAD
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
=======
//    } else {
//      this.auhService.loginPopup({
//        extraScopesToConsent: ['user.read', 'openid', 'profile']
//      });
//      // tslint:disable-next-line: only-arrow-functions
//      // this.auhService.acquireTokenSilent(requestObj).then(function(tokenResponse) {
//      //   // Callback code here
//      //   console.log(tokenResponse.accessToken);
//      // // tslint:disable-next-line: only-arrow-functions
//      // }).catch(function(error) {
//      //   console.log(error);
//      // });
//       this.router.navigate(['/inicio']);
//    }
//}
>>>>>>> d585a20d0eec14fb5dc682cede119c1524fadb96

abrirmicrosoft(){
  provider.setCustomParameters({
    auth: {
      clientId: '77d8101b-ef65-4713-a5f9-a5c73784e382', // This is your client ID
      authority: 'https://login.microsoftonline.com/organizations',
      redirectUri: 'https://baselogin-e6cb3.firebaseapp.com/__/auth/handler',// This is your redirect URI
      postLogoutRedirectUri: "https://baselogin-e6cb3.firebaseapp.com/__/auth/handler"
    },
  })
  firebase.auth().signInWithPopup(provider)
  .then(function(result){
    console.log(result)
  })
  .catch(function(error){

  })
}
}
