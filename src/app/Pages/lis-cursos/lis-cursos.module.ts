import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisCursosPageRoutingModule } from './lis-cursos-routing.module';

import { LisCursosPage } from './lis-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LisCursosPageRoutingModule
  ],
  declarations: [LisCursosPage]
})
export class LisCursosPageModule {}
