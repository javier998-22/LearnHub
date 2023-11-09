import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosalPage } from './cursosal.page';

const routes: Routes = [
  {
    path: '',
    component: CursosalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosalPageRoutingModule {}
