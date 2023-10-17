import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeProfePageRoutingModule } from './home-profe-routing.module';
import { HomeProfePage } from './home-profe.page';
import {ChartEjemploComponent} from '../../components/chart-ejemplo/chart-ejemplo.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeProfePageRoutingModule,
    NgApexchartsModule
  ],
  declarations: [HomeProfePage, ChartEjemploComponent],
})
export class HomeProfePageModule {}
