import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModCadminPageRoutingModule } from './mod-cadmin-routing.module';

import { ModCadminPage } from './mod-cadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModCadminPageRoutingModule
  ],
  declarations: [ModCadminPage]
})
export class ModCadminPageModule {}
