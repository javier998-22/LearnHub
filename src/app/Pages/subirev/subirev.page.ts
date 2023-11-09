import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataServiceService } from '../../services/data-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-subirev',
  templateUrl: './subirev.page.html',
  styleUrls: ['./subirev.page.scss'],
})
export class SubirevPage implements OnInit {

  fecha: any;
  modalInfo : any;
  constructor(private dataS: DataServiceService, private modalCtrl: ModalController, private router: Router, private alertController: AlertController) { 
  }

  ngOnInit() {
  }
  async volver(){
    this.router.navigate(['/cursos-profe']);
    await this.modalCtrl.dismiss();
  }
  async agregarAlumno(curso: any){
    await this.dataS.agregarEv(curso.idCurso ,curso.ramoCurso, curso.siglaCurso , this.fecha);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: '',
      message: 'Evaluacion agregada',
      buttons: ['Bueno'],
    });

    await alert.present();
  }
}
