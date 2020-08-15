import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  darkMode = true;
  path: string = null;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/inicio',
      icon: 'home'
    },
    {
      title: 'Quienes somos',
      url: '/quienes-somos',
      icon: 'bulb'
    },
    {
      title: 'Estudiantes',
      icon: 'book',
      children: [
        {
        title: 'Portal estudiantes',
        url: '/folder/Estudiantes',
        icon: 'home'
        },
        {
        title: 'Correo institucional',
        url: '/folder/Estudiantes',
        icon: 'school'
        },
        {
        title: 'Servicio al cliente',
        url: '/folder/Estudiantes',
        icon: 'home'
        },
        {
        title: 'Campus virtual',
        url: '/folder/Estudiantes',
        icon: 'school'
        },
        {
        title: 'Centro Virtual de Aprendizaje',
        url: '/folder/Estudiantes',
        icon: 'home'
        },
        {
        title: 'Bienestar',
        url: '/folder/Estudiantes',
        icon: 'school'
        },
        {
        title: 'Grados',
        url: '/folder/Estudiantes',
        icon: 'home'
        },
        {
        title: 'Bolsa de empleo estudiantes',
        url: '/folder/Estudiantes',
        icon: 'school'
        },
        {
        title: 'Pagos inteligentes',
        url: '/folder/Estudiantes',
        icon: 'school'
        },
        {
        title: 'PQR',
        url: '/folder/Estudiantes',
        icon: 'school'
        },
        {
        title: 'Practicantes',
        url: '/folder/Estudiantes',
        icon: 'school'
        },
        {
        title: 'Biblioteca',
        url: '/folder/Estudiantes',
        icon: 'school'
        },
        {
        title: 'Protocolo Bioseguridad',
        url: '/folder/Estudiantes',
        icon: 'school'
        },
      ]
    },
    {
      title: 'Egresados',
      url: '/egresados',
      icon: 'school'
    },
    {
      title: 'Docentes',
      url: '/docentes',
      icon: 'briefcase'
    },
    {
      title: 'Investigacion',
      url: '/investigacion',
      icon: 'folder-open'
    },
    {
      title: 'Administrativos',
      url: '/administrativos',
      icon: 'person'
    },
    {
      title: 'Cerrar Sesion',
      url: '/login',
      icon: 'arrow-back'
    }
  ];
 // public labels = ['Gmail', 'Facebook', 'Instagram', 'YouTube', 'Sitio Web'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
  ionViewWillEnter() {
    this.path = window.location.pathname;
    console.log(this.path);
  }
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
}
cambio(){

this.darkMode = !this.darkMode,
     document.body.classList.toggle('dark');
 }
 verdadero(){
  const uno = document.body.classList.value;
  if (uno === 'dark'){
    return true;
  }
  else{
    return false;
  }
 }
}
