import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisnotasModalPageRoutingModule } from './misnotas-modal-routing.module';

import { MisnotasModalPage } from './misnotas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisnotasModalPageRoutingModule
  ],
  declarations: [MisnotasModalPage]
})
export class MisnotasModalPageModule {}
