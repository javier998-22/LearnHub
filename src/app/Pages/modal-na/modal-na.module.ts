import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNAPageRoutingModule } from './modal-na-routing.module';

import { ModalNAPage } from './modal-na.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNAPageRoutingModule
  ],
  declarations: [ModalNAPage]
})
export class ModalNAPageModule {}
