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
      url: '/folder/Egresados',
      icon: 'school'
    },
    {
      title: 'Docentes',
      url: '/folder/Docentes',
      icon: 'briefcase'
    },
    {
      title: 'Investigacion',
      url: '/folder/Investigacion',
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
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
