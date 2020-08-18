import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPipe } from './login.pipe';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from '../environments/environment';
import { AngularFireModule} from '@angular/fire';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';


@NgModule({
  declarations: [AppComponent, LoginPipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    SocialLoginModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    GooglePlus,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '795410966593-9kmlcvmnsf0gr4r4ia2hleer24ppihpo.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId'),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider(
              'clientId'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
