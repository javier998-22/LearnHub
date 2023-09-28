import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioClasesPageRoutingModule } from './horario-clases-routing.module';

import { HorarioClasesPage } from './horario-clases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioClasesPageRoutingModule
  ],
  declarations: [HorarioClasesPage]
})
export class HorarioClasesPageModule {}
