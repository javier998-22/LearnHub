import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCursosRPage } from './lista-cursos-r.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCursosRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCursosRPageRoutingModule {}
