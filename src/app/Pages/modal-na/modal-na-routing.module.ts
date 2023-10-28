import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNAPage } from './modal-na.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNAPageRoutingModule {}
