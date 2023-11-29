import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataServiceService } from '../../services/data-service.service';
import { CursosalPage } from '../cursosal/cursosal.page';
import { RecursosPage } from '../recursos/recursos.page';

@Component({
  selector: 'app-cursos-a',
  templateUrl: './cursos-a.page.html',
  styleUrls: ['./cursos-a.page.scss'],
})
export class CursosAPage implements OnInit {

  listaCursos: any;

  constructor(private modalController: ModalController, private router: Router, private dataS: DataServiceService) {
    this.dataS.getALc().subscribe(res => {
      this.listaCursos = res;
      console.log(this.listaCursos);
    });
  };

  ngOnInit() {
  }

  async abrirModalP(Valor:any) {
    const modal = await this.modalController.create({
      component: CursosalPage,
      cssClass: 'myclass',
      componentProps:{
       modalInfo: Valor
      }
    });
    await modal.present();
  };

  async IraRecursos() {
    const modal = await this.modalController.create({
      component: RecursosPage,
      cssClass: 'myclass',
    });
    await modal.present();
  };


  async volver() {
    this.router.navigate(['/cursos-a']);
    await this.modalController.dismiss();
  };
  IraPerfil() {
    this.router.navigate(['/perfil-alumno']);
  }
  IraChat() {
    this.router.navigate(['/usuarios-chat']);
  }
}
