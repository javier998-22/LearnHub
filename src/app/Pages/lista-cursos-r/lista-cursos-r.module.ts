import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCursosRPageRoutingModule } from './lista-cursos-r-routing.module';

import { ListaCursosRPage } from './lista-cursos-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCursosRPageRoutingModule
  ],
  declarations: [ListaCursosRPage]
})
export class ListaCursosRPageModule {}
