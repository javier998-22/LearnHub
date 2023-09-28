import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioEvPageRoutingModule } from './horario-ev-routing.module';

import { HorarioEvPage } from './horario-ev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioEvPageRoutingModule
  ],
  declarations: [HorarioEvPage]
})
export class HorarioEvPageModule {}
