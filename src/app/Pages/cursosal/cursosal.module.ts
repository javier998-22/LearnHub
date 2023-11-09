import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosalPageRoutingModule } from './cursosal-routing.module';

import { CursosalPage } from './cursosal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosalPageRoutingModule
  ],
  declarations: [CursosalPage]
})
export class CursosalPageModule {}
