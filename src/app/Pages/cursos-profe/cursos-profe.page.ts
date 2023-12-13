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
  cursos:any
  id: any;

  uid: any;
  constructor(private router: Router, private modalController: ModalController, private dataS: DataServiceService, private atS: AuthService, navCtrl:NavController) {
    this.dataS.getCurso().subscribe(res => { 
      this.Listacursos = res;
    })
    this.dataS.getCursos().subscribe(data => {
      this.cursos = data;
    });
    this.dataS.getUsuarios(this.atS.getUid()).subscribe(dato => {
      if(dato){
        this.uid = dato;
        this.id = this.atS.getUid();
        this.uid.email = this.atS.getEmail();
      }
    });
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


  async abrirModalInfoCurso(Value:any) {
    const modal = await this.modalController.create({
      component: ModalCursoPage,
      cssClass: 'myclass',
      componentProps:{
        modalInfo: Value
      }
    });
    await modal.present();
  }


  IraPerfil(){
    this.router.navigate(['/perfil-profe']);
  }
  IraCursos(){
    this.router.navigate(['/cursos-profe']);
  }
  IraChat(){
    this.router.navigate(['/chats']);
  }

}
