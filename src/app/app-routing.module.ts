import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'home',
    canActivate : [AuthGuard],
    data: {AuthGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home-profe',
    canActivate : [AuthGuard],
    data: {AuthGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./Pages/home-profe/home-profe.module').then( m => m.HomeProfePageModule)
  },
  {
    path: 'home-admin',
    canActivate : [AuthGuard],
    data: {AuthGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./Pages/home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
  },
  {
    path: 'perfil-profe',
    loadChildren: () => import('./Pages/perfil-profe/perfil-profe.module').then( m => m.PerfilProfePageModule)
  },
  {
    path: 'cursos-profe',
    loadChildren: () => import('./Pages/cursos-profe/cursos-profe.module').then( m => m.CursosProfePageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./Pages/recursos/recursos.module').then( m => m.RecursosPageModule)
  },
  {
    path: 'modalnc',
    loadChildren: () => import('./Pages/modalnc/modalnc.module').then( m => m.ModalncPageModule)
  },
  {
    path: 'cursos-a',
    loadChildren: () => import('./Pages/cursos-a/cursos-a.module').then( m => m.CursosAPageModule)
  },
  {
    path: 'horario-clases',
    loadChildren: () => import('./Pages/horario-clases/horario-clases.module').then( m => m.HorarioClasesPageModule)
  },
  {
    path: 'horario-ev',
    loadChildren: () => import('./Pages/horario-ev/horario-ev.module').then( m => m.HorarioEvPageModule)
  },
  {
    path: 'mod-perfil',
    loadChildren: () => import('./Pages/mod-perfil/mod-perfil.module').then( m => m.ModPerfilPageModule)
  },
  {
    path: 'reset-pass',
    loadChildren: () => import('./Pages/reset-pass/reset-pass.module').then( m => m.ResetPassPageModule)
  },
  {
    path: 'usuarios-chat',
    loadChildren: () => import('./Pages/usuarios-chat/usuarios-chat.module').then( m => m.UsuariosChatPageModule)
  },
  {
    path: 'modal-curso/:idCurso',
    loadChildren: () => import('./Pages/modal-curso/modal-curso.module').then( m => m.ModalCursoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
