import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal-grades',
  templateUrl: './modal-grades.page.html',
  styleUrls: ['./modal-grades.page.scss'],
})
export class ModalGradesPage implements OnInit {

  constructor(private dtS: DataServiceService, private alertController: AlertController) {
    this.dtS.getAllUsers().subscribe(res => {
      this.alumnos = res;
  })
   }

  modalInfo:any;
  alumnos: any;

  ngOnInit() {
  }

  async agregarAlumno(uid: any, idCurso: any){
    await this.dtS.agregarAlumno(uid, idCurso);
    await this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: '',
      message: 'Alumno evaluado',
      buttons: ['Bueno'],
    });

    await alert.present();
  }
}

