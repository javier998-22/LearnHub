import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirevPage } from './subirev.page';

const routes: Routes = [
  {
    path: '',
    component: SubirevPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirevPageRoutingModule {}
