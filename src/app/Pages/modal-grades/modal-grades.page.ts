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
  ac1: any;
  ac2: any;

   constructor(private dtS: DataServiceService, private alertController: AlertController) {
    this.dtS.getAlumnosC().subscribe(res => {
      this.ac1= res;
      if(this.ac1.Curso == this.modalInfo.idCurso){
        this.dtS.getAlumnosC().subscribe(datos => {
        this.ac1 = datos;
     });
    };
  });
  }
  ngOnInit() {
  }

  //async agregarAlumno(uid: any, idCurso: any){
      //await this.dtS.CargarNota(uid, idCurso, this.notaForm);
      //await this.presentAlert();
 // }

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

