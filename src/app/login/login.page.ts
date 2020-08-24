import { Component, OnInit } from '@angular/core';
import { AuthService} from '../servicios/auth.service';
import { Router} from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
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
  constructor( public router: Router,private autService: SocialAuthService,public menuctrl: MenuController,private broadcastService: BroadcastService, private authService: MsalService) {}

  ngOnInit() {
    
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
 login() {
    const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
    const requestObj = {
      scopes: ["user.read"]
    };
    if (isIE) {
      this.authService.loginRedirect({
        extraScopesToConsent: ["user.read", "openid", "profile"]
        
      });
      this.authService.acquireTokenSilent(requestObj).then(function (tokenResponse) {
        // Callback code here
        console.log(tokenResponse.accessToken);
      }).catch(function (error) {
        console.log(error);
      });
      
    } else {
      this.authService.loginPopup({
        extraScopesToConsent: ["user.read", "openid", "profile"]
      });
      this.authService.acquireTokenSilent(requestObj).then(function (tokenResponse) {
        // Callback code here
        console.log(tokenResponse.accessToken);
      }).catch(function (error) {
        console.log(error);
      });
    }
  return this.router.navigate(['/inicio']);
} 



}
