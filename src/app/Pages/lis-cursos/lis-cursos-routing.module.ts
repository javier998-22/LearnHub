import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisCursosPage } from './lis-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: LisCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisCursosPageRoutingModule {}
