import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalncPage } from '../modalnc/modalnc.page';
import { DataServiceService } from '../../services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { NavController } from '@ionic/angular';
import { ModCadminPage } from '../mod-cadmin/mod-cadmin.page';
import { ListaCursosRPage } from '../lista-cursos-r/lista-cursos-r.page';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.scss'],
})
export class PanelPage implements OnInit {
  Listacursos: any;

  constructor(private router: Router, private modalController: ModalController, private dataS: DataServiceService, private atS: AuthService, navCtrl:NavController) {
    this.dataS.getCurso().subscribe(res => { 
      this.Listacursos = res;
    })
  }

  ngOnInit() {
  }
  async iraProfes() {
    const modal = await this.modalController.create({
      component: ModCadminPage,
      cssClass: 'myclass'
    });
    await modal.present();
  }

  async iraProfeR() {
    const modal = await this.modalController.create({
      component: ListaCursosRPage,
      cssClass: 'myclass'
    });
    await modal.present();
  }
  IraPerfil(){
    this.router.navigate(['/perfil-admin']);
  }
}
