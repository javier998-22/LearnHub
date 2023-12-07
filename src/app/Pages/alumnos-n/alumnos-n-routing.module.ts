import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosNPage } from './alumnos-n.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnosNPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosNPageRoutingModule {}
