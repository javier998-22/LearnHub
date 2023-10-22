import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromNotasPageRoutingModule } from './prom-notas-routing.module';

import { PromNotasPage } from './prom-notas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromNotasPageRoutingModule
  ],
  declarations: [PromNotasPage]
})
export class PromNotasPageModule {}
