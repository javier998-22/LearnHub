import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromNotasPage } from './prom-notas.page';

const routes: Routes = [
  {
    path: '',
    component: PromNotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromNotasPageRoutingModule {}
