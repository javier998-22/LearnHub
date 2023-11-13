import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisnotasModalPage } from './misnotas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MisnotasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisnotasModalPageRoutingModule {}
