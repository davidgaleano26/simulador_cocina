"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NologinGuard = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var util_1 = require("util");
var NologinGuard = /** @class */ (function () {
    function NologinGuard(AFauth, router) {
        this.AFauth = AFauth;
        this.router = router;
    }
    NologinGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.AFauth.authState.pipe(operators_1.map(function (auth) {
            if (util_1.isNullOrUndefined(auth)) {
                return true;
            }
            else {
                _this.router.navigate(['/inicio']);
                return false;
            }
            //console.log(auth);
            //return false;
        }));
    };
    NologinGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], NologinGuard);
    return NologinGuard;
}());
exports.NologinGuard = NologinGuard;
