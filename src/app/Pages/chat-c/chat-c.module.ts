import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatCPageRoutingModule } from './chat-c-routing.module';

import { ChatCPage } from './chat-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatCPageRoutingModule
  ],
  declarations: [ChatCPage]
})
export class ChatCPageModule {}
