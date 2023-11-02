import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalGradesPageRoutingModule } from './modal-grades-routing.module';

import { ModalGradesPage } from './modal-grades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalGradesPageRoutingModule
  ],
  declarations: [ModalGradesPage]
})
export class ModalGradesPageModule {}
