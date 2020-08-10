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
  darkMode: boolean = true;
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
      url: '/estudiantes',
      icon: 'book'
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
      // this.darkTheme();
    });
  }
    // darkTheme(){
    //     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    //     if(prefersDark.matches){
    //       document.body.classList.toggle('dark');
    //     }
    //   }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  cambio(){
    //const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = !this.darkMode
         document.body.classList.toggle('dark');
     }
}
