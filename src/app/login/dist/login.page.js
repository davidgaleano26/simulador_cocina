"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginPage = void 0;
var core_1 = require("@angular/core");
var angularx_social_login_1 = require("angularx-social-login");
var LoginPage = /** @class */ (function () {
    function LoginPage(authService, router, autService, menuctrl) {
        this.authService = authService;
        this.router = router;
        this.autService = autService;
        this.menuctrl = menuctrl;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.onSubmitLogin = function () {
        var _this = this;
        this.authService.login(this.email, this.password).then(function (res) {
            _this.router.navigate(['/inicio/']);
        })["catch"](function (err) { return alert('Los Datos son Incorrectos o no Existe el Usuario'); });
    };
    // loginGoogle(){
    //   this.authService.loginWithGoogle().then(() => {
    //     this.router.navigate(['/inicio']);
    //   }).catch(err => {
    //     alert ('Algo salió mal contacte con el administrador' + JSON.stringify(err));
    //   });
    // }
    LoginPage.prototype.signInWithGoogle = function () {
        var entramos = this.autService.signIn(angularx_social_login_1.GoogleLoginProvider.PROVIDER_ID);
        console.log(entramos);
        if (!entramos) {
            alert("No funciona");
        }
        else {
            this.router.navigate(['/inicio']);
        }
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuctrl.enable(false);
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this.menuctrl.enable(true);
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss']
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
