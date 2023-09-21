import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalncPage } from '../modalnc/modalnc.page';
import { DataServiceService } from '../../services/data-service.service';



@Component({
  selector: 'app-cursos-profe',
  templateUrl: './cursos-profe.page.html',
  styleUrls: ['./cursos-profe.page.scss'],
})
export class CursosProfePage implements OnInit {
  curso: any ;
  constructor(private router: Router, private modalController: ModalController, private dataS: DataServiceService) {
  }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalncPage,
      cssClass: 'myclass',
    });
    await modal.present();
  }
  IraPerfil(){
    this.router.navigate(['/perfil-profe']);
  }
}

