import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalGradesPage } from './modal-grades.page';

const routes: Routes = [
  {
    path: '',
    component: ModalGradesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalGradesPageRoutingModule {}
