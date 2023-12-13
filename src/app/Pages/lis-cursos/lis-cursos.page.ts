import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModcursoPage } from '../modcurso/modcurso.page';

@Component({
  selector: 'app-lis-cursos',
  templateUrl: './lis-cursos.page.html',
  styleUrls: ['./lis-cursos.page.scss'],
})
export class LisCursosPage implements OnInit {
  modalInfo:any;
  cursos: any;
  constructor(private dtS: DataServiceService, private router: Router, private alertController: AlertController,private modalCtrl: ModalController) { 
    this.dtS.getCursos().subscribe( res =>{
      this.cursos = res;
    })
  }

  ngOnInit() {
  }
  async volver(){
    this.router.navigate(['/panel']);
    await this.modalCtrl.dismiss();
  }

  async abrirMCurso(Value:any) {
    const modal = await this.modalCtrl.create({
      component: ModcursoPage,
      cssClass: 'myclass',
      componentProps:{
        modalInfo: Value
      }
    });
    await modal.present();
  }
}
