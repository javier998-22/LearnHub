import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModcursoPage } from './modcurso.page';

const routes: Routes = [
  {
    path: '',
    component: ModcursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModcursoPageRoutingModule {}
