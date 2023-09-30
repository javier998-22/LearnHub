import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosChatPageRoutingModule } from './usuarios-chat-routing.module';

import { UsuariosChatPage } from './usuarios-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosChatPageRoutingModule
  ],
  declarations: [UsuariosChatPage]
})
export class UsuariosChatPageModule {}
