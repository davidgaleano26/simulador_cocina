"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./folder/folder.module'); }).then(function (m) { return m.FolderPageModule; }); }
    },
    {
        path: 'login',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./login/login.module'); }).then(function (m) { return m.LoginPageModule; }); }
    },
    {
        path: 'egresados',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./egresados/egresados.module'); }).then(function (m) { return m.EgresadosPageModule; }); }
    },
    {
        path: 'docentes',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./docentes/docentes.module'); }).then(function (m) { return m.DocentesPageModule; }); }
    },
    {
        path: 'investigacion',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./investigacion/investigacion.module'); }).then(function (m) { return m.InvestigacionPageModule; }); }
    },
    {
        path: 'administrativos',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./administrativos/administrativos.module'); }).then(function (m) { return m.AdministrativosPageModule; }); }
    },
    {
        path: 'registro',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./registro/registro.module'); }).then(function (m) { return m.RegistroPageModule; }); }
    },
    {
        path: 'inicio',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./inicio/inicio.module'); }).then(function (m) { return m.InicioPageModule; }); }
    },
    {
        path: 'estudiantes',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./estudiantes/estudiantes.module'); }).then(function (m) { return m.EstudiantesPageModule; }); }
    },
    {
        path: 'quienes-somos',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./quienes-somos/quienes-somos.module'); }).then(function (m) { return m.QuienesSomosPageModule; }); }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
