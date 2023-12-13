import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ListaprofesRPage } from '../listaprofes-r/listaprofes-r.page';

@Component({
  selector: 'app-lista-cursos-r',
  templateUrl: './lista-cursos-r.page.html',
  styleUrls: ['./lista-cursos-r.page.scss'],
})
export class ListaCursosRPage implements OnInit {
  cursos:any;
  constructor(private dtS: DataServiceService, private router: Router, private alertController: AlertController,private modalCtrl: ModalController) {
    this.dtS.getCursos().subscribe( res =>{
      this.cursos = res;
    })
   }

  ngOnInit() {
  }
  async abrirMCurso(Value:any) {
    const modal = await this.modalCtrl.create({
      component: ListaprofesRPage,
      cssClass: 'myclass',
      componentProps:{
        modalInfo: Value
      }
    });
    await modal.present();
  }
  async volver(){
    this.router.navigate(['/panel']);
    await this.modalCtrl.dismiss();
  }
}
