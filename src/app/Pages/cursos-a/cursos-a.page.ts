import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataServiceService } from '../../services/data-service.service';
import { CursosalPage } from '../cursosal/cursosal.page';
@Component({
  selector: 'app-cursos-a',
  templateUrl: './cursos-a.page.html',
  styleUrls: ['./cursos-a.page.scss'],
})
export class CursosAPage implements OnInit {

  Listacursos: any;

  constructor(private modalController: ModalController, private router: Router, private dataS: DataServiceService) {
    this.dataS.getALc().subscribe(res => {
      this.Listacursos = res;
    })
  }

  ngOnInit() {
  }

  //async abrirModalInfoCurso(Value:any) {
    //const modal = await this.modalController.create({
      //component: CursosalPage,
      //cssClass: 'myclass',
      //componentProps:{
       //modalInfo: Value
      //}
    //});
    //await modal.present();
  //}

  async volver() {
    this.router.navigate(['/home']);
    await this.modalController.dismiss();
  }
  IraPerfil() {
    this.router.navigate(['/perfil-alumno']);
  }
}
