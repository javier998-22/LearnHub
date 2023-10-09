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
  id: any;

  Listacursos: any;

  constructor(private router: Router, private modalController: ModalController, private dataS: DataServiceService, private atS: AuthService, navCtrl:NavController) {
    this.dataS.getCurso().subscribe(res => { 
      this.Listacursos = res;
      console.log(this.Listacursos);
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


  async abrirCurso(id: string){
    const modal = await this.modalController.create({  
      component: ModalCursoPage,
      cssClass: 'myclass',
      componentProps:{
        cursos: id
      }
    });
    await modal.present();
  }
}
