import { Component, OnInit, } from '@angular/core';
import { DataServiceService } from './../../services/data-service.service';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;};


@Component({

  selector: 'app-home-profe',
  templateUrl: './home-profe.page.html',
  styleUrls: ['./home-profe.page.scss'],
})
export class HomeProfePage implements OnInit {
  public chartOptions: Partial<ChartOptions>;

  constructor( private dataS : DataServiceService, private router:Router) { this.chartOptions = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    title: {
      text: "Product Trends by Month",
      align: "left"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    }
  };}

  ngOnInit() {
  }
  IrACursos(){
    this.router.navigate(['/cursos-profe']);
  }
  IraPerfil(){
    this.router.navigate(['/perfil-profe']);
  }
  IraChat(){
    this.router.navigate(['/usuarios-chat']);
  }
}
