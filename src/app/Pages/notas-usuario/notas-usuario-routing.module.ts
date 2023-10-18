import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasUsuarioPage } from './notas-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: NotasUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasUsuarioPageRoutingModule {}
