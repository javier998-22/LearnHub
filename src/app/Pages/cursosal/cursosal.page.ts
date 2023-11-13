import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';
import { ModalController } from '@ionic/angular';
import { MisnotasModalPage } from '../misnotas-modal/misnotas-modal.page';

@Component({
  selector: 'app-cursosal',
  templateUrl: './cursosal.page.html',
  styleUrls: ['./cursosal.page.scss'],
})
export class CursosalPage implements OnInit {

  modalInfo: any;
  constructor(private dataS: DataServiceService, private modalCtrl: ModalController, private router: Router, private modalController: ModalController) { }

  ngOnInit() {
  }
  
  async abrirModalNE(Value:any) {
    const modal = await this.modalController.create({
      component: MisnotasModalPage,
      cssClass: 'myclass',
      componentProps:{
        modalInfo: Value
      }
    });
    await modal.present();
  }

  async volver(){
    this.router.navigate(['/cursos-a']);
    await this.modalCtrl.dismiss();
  }
}
