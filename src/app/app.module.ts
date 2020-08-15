import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPipe } from './login.pipe';
<<<<<<< HEAD
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from '../environments/environment';
import { AngularFireModule} from '@angular/fire';
=======
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

>>>>>>> 9daee1797411e436de9c55cb304e9860be6e761d
@NgModule({
  declarations: [AppComponent, LoginPipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
<<<<<<< HEAD
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
=======
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
>>>>>>> 9daee1797411e436de9c55cb304e9860be6e761d
  ],
  providers: [
    GooglePlus,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
