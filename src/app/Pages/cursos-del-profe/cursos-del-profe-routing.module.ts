import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosDelProfePage } from './cursos-del-profe.page';

const routes: Routes = [
  {
    path: '',
    component: CursosDelProfePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosDelProfePageRoutingModule {}
