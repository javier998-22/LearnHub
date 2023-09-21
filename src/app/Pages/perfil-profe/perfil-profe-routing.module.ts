import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilProfePage } from './PerfilProfePage';

const routes: Routes = [
  {
    path: '',
    component: PerfilProfePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilProfePageRoutingModule {}
