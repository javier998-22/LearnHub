import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalncPage } from './modalnc.page';

const routes: Routes = [
  {
    path: '',
    component: ModalncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalncPageRoutingModule {}
