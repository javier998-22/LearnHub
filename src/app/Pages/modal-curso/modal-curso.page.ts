import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalNAPage } from '../modal-na/modal-na.page'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-curso',
  templateUrl: './modal-curso.page.html',
  styleUrls: ['./modal-curso.page.scss'],
})
export class ModalCursoPage implements OnInit {
  Listacursos: any = [{
    idCurso:'',
    establecimiento: '',
    ramoCurso: '',
    siglaCurso: ''
  }]

  modalInfo:any;

  //@Input() Cursos: any;

  constructor( private dataS: DataServiceService,private modalCtrl: ModalController, private atS: AuthService, private router: Router, private modalController: ModalController) {
   }

  async ngOnInit() {
    console.log(this.modalInfo)
    // this.dataS.getCursoDetails(this.modalInfo).subscribe(res => {
    //   this.Listacursos = res;
    //   console.log(this.Listacursos.idCurso)
    // })
  }

  async abrirModalInfoCurso(Value:any) {
    const modal = await this.modalController.create({
      component: ModalNAPage,
      cssClass: 'myclass',
      componentProps:{
        modalInfo: Value
      }
    });
    await modal.present();
  }
  async volver(){
    this.router.navigate(['/cursos-profe']);
    await this.modalCtrl.dismiss();
  }
}
