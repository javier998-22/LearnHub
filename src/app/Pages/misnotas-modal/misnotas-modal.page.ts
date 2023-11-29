import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';
import { ModalController } from '@ionic/angular';
import { RecursosPage } from '../recursos/recursos.page';



@Component({
  selector: 'app-misnotas-modal',
  templateUrl: './misnotas-modal.page.html',
  styleUrls: ['./misnotas-modal.page.scss'],
})
export class MisnotasModalPage implements OnInit {
  
  modalInfo: any;
  nta: any;
  
  constructor( private dts: DataServiceService, private modalCtrl: ModalController, private router: Router, private modalController: ModalController) { 
    this.dts.getNota().subscribe( res => {
      this.nta = res;
    })
  }

  ngOnInit() {
  }
  async volver(){
    this.router.navigate(['/cursos-a']);
    await this.modalCtrl.dismiss();
  }

  async IraRecursos(Valor:any) {
    const modal = await this.modalController.create({
      component: RecursosPage,
      cssClass: 'myclass',
      componentProps:{
        modalInfo: Valor
       }
    });

    await modal.present();
  };
}
