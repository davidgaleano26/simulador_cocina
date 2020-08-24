"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/splash-screen/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var login_pipe_1 = require("./login.pipe");
var ngx_3 = require("@ionic-native/google-plus/ngx");
/*import { AngularFireAuthModule } from '@angular/fire/auth';*/
/*import { firebaseConfig } from '../environments/environment';*/
/*import { AngularFireModule} from '@angular/fire';*/
var service_worker_1 = require("@angular/service-worker");
var environment_1 = require("../environments/environment");
var angularx_social_login_1 = require("angularx-social-login");
var angularx_social_login_2 = require("angularx-social-login");
var environment_2 = require("../environments/environment");
var fire_1 = require("@angular/fire");
var auth_1 = require("@angular/fire/auth");
var msal_angular_1 = require("@azure/msal-angular");
var http_1 = require("@angular/common/http");
var isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, login_pipe_1.LoginPipe],
            entryComponents: [],
            imports: [
                platform_browser_1.BrowserModule,
                angular_1.IonicModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                auth_1.AngularFireAuthModule,
                angularx_social_login_1.SocialLoginModule,
                fire_1.AngularFireModule.initializeApp(environment_2.firebaseConfig),
                service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment_1.environment.production }),
                msal_angular_1.MsalModule.forRoot({
                    auth: {
                        clientId: 'a984ae93-11e1-4ebb-8a65-061c3fda7bbc',
                        authority: 'f8cdef31-a31e-4b4a-93e4-5f571e91255a',
                        redirectUri: 'https://simulador-cocina.web.app' // This is your redirect URI
                    },
                    cache: {
                        cacheLocation: 'localStorage',
                        storeAuthStateInCookie: isIE
                    }
                }, {
                    popUp: !isIE,
                    consentScopes: [
                        'user.read',
                        'openid',
                        'profile',
                    ],
                    unprotectedResources: [],
                    protectedResourceMap: [
                        ['https://graph.microsoft.com/v1.0/me', ['user.read']]
                    ],
                    extraQueryParameters: {}
                })
            ],
            providers: [
                ngx_3.GooglePlus,
                ngx_2.StatusBar,
                ngx_1.SplashScreen,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: msal_angular_1.MsalInterceptor,
                    multi: true
                },
                {
                    provide: 'SocialAuthServiceConfig',
                    useValue: {
                        autoLogin: false,
                        providers: [
                            {
                                id: angularx_social_login_2.GoogleLoginProvider.PROVIDER_ID,
                                provider: new angularx_social_login_2.GoogleLoginProvider('795410966593-9kmlcvmnsf0gr4r4ia2hleer24ppihpo.apps.googleusercontent.com')
                            },
                            {
                                id: angularx_social_login_2.FacebookLoginProvider.PROVIDER_ID,
                                provider: new angularx_social_login_2.FacebookLoginProvider('clientId')
                            },
                            {
                                id: angularx_social_login_2.AmazonLoginProvider.PROVIDER_ID,
                                provider: new angularx_social_login_2.AmazonLoginProvider('clientId')
                            },
                        ]
                    }
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
