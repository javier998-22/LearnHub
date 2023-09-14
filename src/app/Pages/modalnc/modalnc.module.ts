import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalncPageRoutingModule } from './modalnc-routing.module';

import { ModalncPage } from './modalnc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalncPageRoutingModule
  ],
  declarations: [ModalncPage]
})
export class ModalncPageModule {}
