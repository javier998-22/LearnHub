import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosChatPage } from './usuarios-chat.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosChatPageRoutingModule {}
