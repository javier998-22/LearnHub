import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModCadminPage } from './mod-cadmin.page';

const routes: Routes = [
  {
    path: '',
    component: ModCadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModCadminPageRoutingModule {}
