import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalNAPage } from '../modal-na/modal-na.page';
import { ModalController } from '@ionic/angular';
import { ModalGradesPage } from '../modal-grades/modal-grades.page';
import { SubirevPage } from '../subirev/subirev.page';

@Component({
  selector: 'app-modal-curso',
  templateUrl: './modal-curso.page.html',
  styleUrls: ['./modal-curso.page.scss'],
})
export class ModalCursoPage implements OnInit {

  modalInfo:any;

  constructor(private dataS: DataServiceService,private modalCtrl: ModalController, private atS: AuthService, private router: Router, private modalController: ModalController) {
    console.log(this.modalInfo)
   }

  async ngOnInit() {
  }

  async abrirModalInfoCurso(Value:any) {
    const modal = await this.modalController.create({
      component: ModalNAPage,
      cssClass: 'myclass',
      componentProps:{
        modalInfo: Value
      }
    });
    await modal.present();
  }
  async abrirModalgradesCurso(Value:any) {
    const modal = await this.modalController.create({
      component: ModalGradesPage,
      cssClass: 'myclass',
      componentProps:{
        modalInfo: Value
      }
    });
    await modal.present();
  }
  async abrirModalNE(Value:any) {
    const modal = await this.modalController.create({
      component: SubirevPage,
      cssClass: 'myclass',
      componentProps:{
        modalInfo: Value
      }
    });
    await modal.present();
  }

  async volver(){
    this.router.navigate(['/cursos-profe']);
    await this.modalCtrl.dismiss();
  }
}
