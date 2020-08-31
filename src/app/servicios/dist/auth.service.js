"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var firebase_1 = require("firebase");
var AuthService = /** @class */ (function () {
    function AuthService(AFauth, google, router, db) {
        this.AFauth = AFauth;
        this.google = google;
        this.router = router;
        this.db = db;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, rejected) {
            _this.AFauth.signInWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            })["catch"](function (err) { return rejected(err); });
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.AFauth.signOut().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    AuthService.prototype.register = function (email, password, nombres, apellidos, direccion, telefono) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.AFauth.createUserWithEmailAndPassword(email, password).then(function (res) {
                var uid = res.user.uid;
                //console.log(res.user.uid);
                _this.db.collection('/Usuarios').doc(uid).set({
                    nombres: nombres,
                    apellidos: apellidos,
                    direccion: direccion,
                    telefono: telefono,
                    uid: uid
                });
                resolve(res);
            })["catch"](function (err) { return reject(err); });
        });
    };
    AuthService.prototype.loginWithGoogle = function () {
        var _this = this;
        // tslint:disable-next-line: no-unused-expression
        return this.google.login({}).then(function (result) {
            // tslint:disable-next-line: variable-name
            var user_data_google = result;
            return _this.AFauth.signInWithCredential(firebase_1.auth.GoogleAuthProvider.credential(null, user_data_google.accesToken));
        });
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
