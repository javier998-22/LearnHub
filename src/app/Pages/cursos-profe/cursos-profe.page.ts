import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalncPage } from '../modalnc/modalnc.page';
import { DataServiceService } from '../../services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cursos-profe',
  templateUrl: './cursos-profe.page.html',
  styleUrls: ['./cursos-profe.page.scss'],
})
export class CursosProfePage implements OnInit {
  id: any;

  curso: any = [{
    establecimiento:'',
    ramoCurso:'',
    siglaCurso:'',
  }];

  actualIndex: any;

  constructor(private router: Router, private modalController: ModalController, private dataS: DataServiceService, private atS: AuthService, navCtrl:NavController) {
    this.dataS.getCurso(this.atS.getUid()).subscribe(res => { 
      this.curso = res;
      this.id = this.atS.getUid();
      console.log(this.curso.ramoCurso)
    })
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
  IraCursos(){
    this.router.navigate(['/cursos-profe']);
  }
}
