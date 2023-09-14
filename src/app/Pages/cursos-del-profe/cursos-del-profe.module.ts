import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosDelProfePageRoutingModule } from './cursos-del-profe-routing.module';

import { CursosDelProfePage } from './cursos-del-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosDelProfePageRoutingModule
  ],
  declarations: [CursosDelProfePage]
})
export class CursosDelProfePageModule {}
