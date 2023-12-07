import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-grades',
  templateUrl: './modal-grades.page.html',
  styleUrls: ['./modal-grades.page.scss'],
})
export class ModalGradesPage implements OnInit {
  notaForm :any;
  modalInfo:any;
  ac1: any;

   constructor(private dtS: DataServiceService, private alertController: AlertController, private router: Router, private modalCtrl: ModalController) {
    this.dtS.getAlumnosC().subscribe(res => {
      this.ac1 = res;
    });

  }
  ngOnInit() {

  }

  async nota(uid: any, idCurso: any){
    const fechaHoraActual = new Date();
    const cadenaFechaHora = fechaHoraActual;
    await this.dtS.CargarNota(uid.Alumno, uid.nombre, uid.apellido, idCurso.idCurso, idCurso.siglaCurso, idCurso.ramoCurso, this.notaForm, cadenaFechaHora);
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
  async volver(){
    this.router.navigate(['/cursos-profe']);
    await this.modalCtrl.dismiss();
  }
}

