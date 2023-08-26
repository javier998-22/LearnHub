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
    path: 'perfil-alum',
    loadChildren: () => import('./Pages/perfil-alum/perfil-alum.module').then( m => m.PerfilAlumPageModule)
  },
  {
    path: 'perfil-profe',
    loadChildren: () => import('./Pages/perfil-profe/perfil-profe.module').then( m => m.PerfilProfePageModule)
  },
  {
    path: 'perfil-admin',
    loadChildren: () => import('./Pages/perfil-admin/perfil-admin.module').then( m => m.PerfilAdminPageModule)
  },
  {
    path: 'cursos-profe',
    loadChildren: () => import('./Pages/cursos-profe/cursos-profe.module').then( m => m.CursosProfePageModule)
  },
  {
    path: 'form-curso',
    loadChildren: () => import('./Pages/form-curso/form-curso.module').then( m => m.FormCursoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
