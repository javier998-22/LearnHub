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
    path: 'home-admin',
    canActivate : [AuthGuard],
    data: {AuthGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./Pages/panel/panel.module').then( m => m.PanelPageModule)
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
    path: 'modal-curso',
    loadChildren: () => import('./Pages/modal-curso/modal-curso.module').then( m => m.ModalCursoPageModule)
  },
  {
    path: 'notas-usuario',
    loadChildren: () => import('./Pages/notas-usuario/notas-usuario.module').then( m => m.NotasUsuarioPageModule)
  },
  {
    path: 'prom-notas',
    loadChildren: () => import('./Pages/prom-notas/prom-notas.module').then( m => m.PromNotasPageModule)
  },
  {
    path: 'modal-na',
    loadChildren: () => import('./Pages/modal-na/modal-na.module').then( m => m.ModalNAPageModule)

  },
  {
    path: 'panel',
    loadChildren: () => import('./Pages/panel/panel.module').then( m => m.PanelPageModule)
  },  {
    path: 'perfil-alumno',
    loadChildren: () => import('./Pages/perfil-alumno/perfil-alumno.module').then( m => m.PerfilAlumnoPageModule)
  },
  {
    path: 'perfil-admin',
    loadChildren: () => import('./Pages/perfil-admin/perfil-admin.module').then( m => m.PerfilAdminPageModule)
  },
  {
    path: 'modal-grades',
    loadChildren: () => import('./Pages/modal-grades/modal-grades.module').then( m => m.ModalGradesPageModule)
  },
  {
    path: 'misnotas',
    loadChildren: () => import('./Pages/misnotas/misnotas.module').then( m => m.MisnotasPageModule)
  },
  {
    path: 'subirev',
    loadChildren: () => import('./Pages/subirev/subirev.module').then( m => m.SubirevPageModule)
  },
  {
    path: 'cursosal',
    loadChildren: () => import('./Pages/cursosal/cursosal.module').then( m => m.CursosalPageModule)
  },
  {
    path: 'misnotas-modal',
    loadChildren: () => import('./Pages/misnotas-modal/misnotas-modal.module').then( m => m.MisnotasModalPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
