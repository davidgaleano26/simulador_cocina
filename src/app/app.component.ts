import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router} from '@angular/router';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';
import { InteractionRequiredAuthError, AuthError } from 'msal';
/**/
import { AuthService } from './servicios/auth.service';
const graphMeEndpoint = 'https://graph.microsoft.com/v1.0/me';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  darkMode: boolean = true;
  path: string = null;
  user: SocialUser;
  loggedIn: boolean;
  profile;
  public open: string = null;


  title: string = null ;
  icon: string = null ;
  url: string = null;
  children: string = null ;

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/inicio',
      icon: 'home',
      open: false
    },
    {
      title: 'Quienes somos',
      url: '/quienes-somos',
      icon: 'bulb',
      open: false
    },
    {
      title: 'Estudiantes',
      icon: 'book',
      open: false,
      children: [
        {
        title: 'Portal estudiantes',
        url: '/folder/Estudiantes',
        icon: 'home',
        open: false
        },
        {
        title: 'Correo institucional',
        url: '/folder/Estudiantes',
        icon: 'school',
        open: false
        },
        {
        title: 'Servicio al cliente',
        url: '/folder/Estudiantes',
        icon: 'home',
        open: false
        },
        {
        title: 'Campus virtual',
        url: '/folder/Estudiantes',
        icon: 'school',
        open: false
        },
        {
        title: 'Centro Virtual de Aprendizaje',
        url: '/folder/Estudiantes',
        icon: 'home',
        open: false
        },
        {
        title: 'Bienestar',
        url: '/folder/Estudiantes',
        icon: 'school',
        open: false
        },
        {
        title: 'Grados',
        url: '/folder/Estudiantes',
        icon: 'home',
        open: false
        },
        {
        title: 'Bolsa de empleo estudiantes',
        url: '/folder/Estudiantes',
        icon: 'school',
        open: false
        },
        {
        title: 'Pagos inteligentes',
        url: '/folder/Estudiantes',
        icon: 'school',
        open: false
        },
        {
        title: 'PQR',
        url: '/folder/Estudiantes',
        icon: 'school',
        open: false
        },
        {
        title: 'Practicantes',
        url: '/folder/Estudiantes',
        icon: 'school',
        open: false
        },
        {
        title: 'Biblioteca',
        url: '/folder/Estudiantes',
        icon: 'school',
        open: false
        },
        {
        title: 'Protocolo Bioseguridad',
        url: '/folder/Estudiantes',
        icon: 'school',
        open: false
        },
      ]
    },
    {
      title: 'Egresados',
      url: '/egresados',
      icon: 'school',
      open: false
    },
    {
      title: 'Docentes',
      url: '/tabs/docentes',
      icon: 'briefcase',
      open: false
    },
    {
      title: 'Investigacion',
      url: '/investigacion',
      icon: 'folder-open',
      open: false
    },
    {
      title: 'Administrativos',
      url: '/administrativos',
      icon: 'person',
      open: false
    }
  ];
 // public labels = ['Gmail', 'Facebook', 'Instagram', 'YouTube', 'Sitio Web'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private autService: SocialAuthService,
    public router: Router,
    private auhService: MsalService,
    private http: HttpClient,
    /**/
    public authserviice : AuthService
    ) {
      this.initializeApp();
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.darkMode = prefersDark.matches;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.darkTheme();
    });
  }
  darkTheme(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches){
      document.body.classList.toggle('dark');
    }
  }
  // ionViewWillEnter() {
  //   this.path = window.location.pathname;
  //   console.log(this.path);
  // }
  ngOnInit() {
    this.getProfile();
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.autService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  cambio(){
    
    this.darkMode = !this.darkMode,
    document.body.classList.toggle('dark');
  }
  verdadero(){
    const uno = document.body.classList.value;
    console.log(graphMeEndpoint);
    if (uno === 'dark'){
      return true;
    }
    else{
      return false;
    }
  }
  
  getProfile() {
    this.http.get(graphMeEndpoint).toPromise()
      .then(profile => {
        this.profile = profile;
      });
  }
////////// CIERRE DE SESIÓN CON GOOGLE
 signOut(): void {
    this.autService.signOut();
}
//////// CIERRE DE SESIÓN CON MICROSOFT
logout(){
  this.auhService.logout();
}
 /*M[etodo CerrarSesion*/
  onlogOut(){
    this.authserviice.logout();
  }
}
