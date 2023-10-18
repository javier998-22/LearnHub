import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasUsuarioPageRoutingModule } from './notas-usuario-routing.module';

import { NotasUsuarioPage } from './notas-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasUsuarioPageRoutingModule
  ],
  declarations: [NotasUsuarioPage]
})
export class NotasUsuarioPageModule {}
