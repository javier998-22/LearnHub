import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaprofesRPage } from './listaprofes-r.page';

const routes: Routes = [
  {
    path: '',
    component: ListaprofesRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaprofesRPageRoutingModule {}
