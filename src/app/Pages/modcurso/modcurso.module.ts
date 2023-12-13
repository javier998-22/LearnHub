import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModcursoPageRoutingModule } from './modcurso-routing.module';

import { ModcursoPage } from './modcurso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModcursoPageRoutingModule
  ],
  declarations: [ModcursoPage]
})
export class ModcursoPageModule {}
