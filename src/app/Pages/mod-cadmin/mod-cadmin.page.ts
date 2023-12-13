import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LisCursosPage } from '../lis-cursos/lis-cursos.page';


@Component({
  selector: 'app-mod-cadmin',
  templateUrl: './mod-cadmin.page.html',
  styleUrls: ['./mod-cadmin.page.scss'],
})
export class ModCadminPage implements OnInit {

  profes: any;
  
  constructor(private dtS: DataServiceService, private router: Router, private alertController: AlertController,private modalCtrl: ModalController) { 
    this.dtS.getAllUsers().subscribe(res => {
        this.profes= res;
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
      component: LisCursosPage,
      cssClass: 'myclass',
      componentProps:{
        modalInfo: Value
      }
    });
    await modal.present();
  }
}
