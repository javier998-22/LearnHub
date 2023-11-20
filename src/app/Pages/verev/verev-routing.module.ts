import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerevPage } from './verev.page';

const routes: Routes = [
  {
    path: '',
    component: VerevPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerevPageRoutingModule {}
