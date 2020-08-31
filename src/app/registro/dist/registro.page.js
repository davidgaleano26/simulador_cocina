"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegistroPage = void 0;
var core_1 = require("@angular/core");
var RegistroPage = /** @class */ (function () {
    function RegistroPage(auth, router, menuctrl) {
        this.auth = auth;
        this.router = router;
        this.menuctrl = menuctrl;
    }
    RegistroPage.prototype.ngOnInit = function () {
    };
    RegistroPage.prototype.ionViewWillEnter = function () {
        this.menuctrl.enable(false);
    };
    RegistroPage.prototype.ionViewDidLeave = function () {
        this.menuctrl.enable(true);
    };
    RegistroPage.prototype.onSubmitRegister = function () {
        var _this = this;
        this.auth.register(this.email, this.password, this.nombres, this.apellidos, this.direccion, this.telefono).then(function (auth) {
            _this.router.navigate(['/inicio']);
            console.log(auth);
        })["catch"](function (err) { return console.log(err); });
    };
    RegistroPage = __decorate([
        core_1.Component({
            selector: 'app-registro',
            templateUrl: './registro.page.html',
            styleUrls: ['./registro.page.scss']
        })
    ], RegistroPage);
    return RegistroPage;
}());
exports.RegistroPage = RegistroPage;
