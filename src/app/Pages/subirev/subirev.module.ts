import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirevPageRoutingModule } from './subirev-routing.module';

import { SubirevPage } from './subirev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubirevPageRoutingModule
  ],
  declarations: [SubirevPage]
})
export class SubirevPageModule {}
