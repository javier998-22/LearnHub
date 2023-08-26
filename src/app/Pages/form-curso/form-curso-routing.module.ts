import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCursoPage } from './form-curso.page';

const routes: Routes = [
  {
    path: '',
    component: FormCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCursoPageRoutingModule {}
