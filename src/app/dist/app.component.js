"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    // public labels = ['Gmail', 'Facebook', 'Instagram', 'YouTube', 'Sitio Web'];
    function AppComponent(platform, splashScreen, statusBar, autService, router, 
    /**/
    authserviice) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.autService = autService;
        this.router = router;
        this.authserviice = authserviice;
        this.darkMode = true;
        this.path = null;
        this.open = null;
        this.title = null;
        this.icon = null;
        this.url = null;
        this.children = null;
        this.selectedIndex = 0;
        this.appPages = [
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
                url: '/docentes',
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
        this.initializeApp();
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkMode = prefersDark.matches;
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.darkTheme();
        });
    };
    AppComponent.prototype.darkTheme = function () {
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDark.matches) {
            document.body.classList.toggle('dark');
        }
    };
    // ionViewWillEnter() {
    //   this.path = window.location.pathname;
    //   console.log(this.path);
    // }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(function (page) { return page.title.toLowerCase() === path.toLowerCase(); });
        }
        this.autService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
        });
    };
    AppComponent.prototype.cambio = function () {
        this.darkMode = !this.darkMode,
            document.body.classList.toggle('dark');
    };
    AppComponent.prototype.verdadero = function () {
        var uno = document.body.classList.value;
        if (uno === 'dark') {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.signOut = function () {
        this.autService.signOut();
    };
    /*M[etodo CerrarSesion*/
    AppComponent.prototype.onlogOut = function () {
        this.authserviice.logout();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
