import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerevPageRoutingModule } from './verev-routing.module';

import { VerevPage } from './verev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerevPageRoutingModule
  ],
  declarations: [VerevPage]
})
export class VerevPageModule {}
