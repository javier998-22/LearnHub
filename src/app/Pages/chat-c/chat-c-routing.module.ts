import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatCPage } from './chat-c.page';

const routes: Routes = [
  {
    path: '',
    component: ChatCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatCPageRoutingModule {}
