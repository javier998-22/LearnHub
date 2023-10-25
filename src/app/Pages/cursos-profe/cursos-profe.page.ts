import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalncPage } from '../modalnc/modalnc.page';
import { DataServiceService } from '../../services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { NavController } from '@ionic/angular';
import { ModalCursoPage } from '../modal-curso/modal-curso.page';
import { Cursos } from '../../services/modelos.service';



@Component({
  selector: 'app-cursos-profe',
  templateUrl: './cursos-profe.page.html',
  styleUrls: ['./cursos-profe.page.scss'],
})
export class CursosProfePage implements OnInit {
  Listacursos: any;

  constructor(private router: Router, private modalController: ModalController, private dataS: DataServiceService, private atS: AuthService, navCtrl:NavController) {
    this.dataS.getCurso().subscribe(res => { 
      this.Listacursos = res;
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
  IraHome(){
    this.router.navigate(['/home-profe'])
  }
  abrirCurso(){
    this.router.navigate(['/modal-curso/this.Listacursos.idCurso'])
    console.log(this.Listacursos.idCurso);
  }
}
