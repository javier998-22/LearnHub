import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCursoPageRoutingModule } from './form-curso-routing.module';

import { FormCursoPage } from './form-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCursoPageRoutingModule
  ],
  declarations: [FormCursoPage]
})
export class FormCursoPageModule {}
