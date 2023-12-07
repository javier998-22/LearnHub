import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosNPageRoutingModule } from './alumnos-n-routing.module';

import { AlumnosNPage } from './alumnos-n.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosNPageRoutingModule
  ],
  declarations: [AlumnosNPage]
})
export class AlumnosNPageModule {}
