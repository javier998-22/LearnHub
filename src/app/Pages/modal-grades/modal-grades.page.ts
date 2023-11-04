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
  notaForm :any;
  modalInfo:any;
  alumnos: any;

  constructor(private dtS: DataServiceService, private alertController: AlertController) {
    this.dtS.getAllUsers().subscribe(res => {
      this.alumnos = res;
  })
   }

  ngOnInit() {
  }

  async agregarAlumno(uid: any, idCurso: any){
      await this.dtS.CargarNota(uid, idCurso, this.notaForm);
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

