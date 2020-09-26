import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/*Importar el Guard*/
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate : [NologinGuard]
  },
  {
    path: 'egresados',
    loadChildren: () => import('./egresados/egresados.module').then( m => m.EgresadosPageModule)
  },
  {
    path: 'docentes',
    loadChildren: () => import('./docentes/docentes.module').then( m => m.DocentesPageModule)
  },
  {
    path: 'investigacion',
    loadChildren: () => import('./investigacion/investigacion.module').then( m => m.InvestigacionPageModule)
  },
  {
    path: 'administrativos',
    loadChildren: () => import('./administrativos/administrativos.module').then( m => m.AdministrativosPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'preguntas',
    loadChildren: () => import('./preguntas/preguntas.module').then( m => m.PreguntasPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./tips/tips.module').then( m => m.TipsPageModule)
  },
  {
    path: 'recetas',
    loadChildren: () => import('./recetas/recetas.module').then( m => m.RecetasPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate : [NologinGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    /*Guard AuthGuard*/
    canActivate : [AuthGuard]
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule)
  },
  {
    path: 'quienes-somos',
    loadChildren: () => import('./quienes-somos/quienes-somos.module').then( m => m.QuienesSomosPageModule)
  },
  {
    path: 'talleres',
    loadChildren: () => import('./talleres/talleres.module').then( m => m.TalleresPageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'que-somos',
    loadChildren: () => import('./que-somos/que-somos.module').then( m => m.QueSomosPageModule)
  },
  {
    path: 'tabs-quienes-somos',
    loadChildren: () => import('./tabs-quienes-somos/tabs-quienes-somos.module').then( m => m.TabsQuienesSomosPageModule)
  },
  {
    path: 'info-popup',
    loadChildren: () => import('./info-popup/info-popup.module').then( m => m.InfoPopupPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
