import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaprofesRPageRoutingModule } from './listaprofes-r-routing.module';

import { ListaprofesRPage } from './listaprofes-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaprofesRPageRoutingModule
  ],
  declarations: [ListaprofesRPage]
})
export class ListaprofesRPageModule {}
