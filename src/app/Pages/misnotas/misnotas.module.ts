import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisnotasPageRoutingModule } from './misnotas-routing.module';

import { MisnotasPage } from './misnotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisnotasPageRoutingModule
  ],
  declarations: [MisnotasPage]
})
export class MisnotasPageModule {}
