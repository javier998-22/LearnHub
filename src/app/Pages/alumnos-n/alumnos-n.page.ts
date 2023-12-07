import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataServiceService } from '../../services/data-service.service';
import { VerNotasPage } from '../ver-notas/ver-notas.page';

@Component({
  selector: 'app-alumnos-n',
  templateUrl: './alumnos-n.page.html',
  styleUrls: ['./alumnos-n.page.scss'],
})
export class AlumnosNPage implements OnInit {
  modalInfo: any;
  ac1: any;
  constructor(private modalCtrl: ModalController, private router: Router, private dtS: DataServiceService) { 
    this.dtS.getAlumnosC().subscribe(res => {
      this.ac1 = res;
    });
  }

  ngOnInit() {
  }


  async volver(){
    this.router.navigate(['/cursos-profe']);
    await this.modalCtrl.dismiss();
  } 
  async abrirMNotas(Value:any) {
    const modal = await this.modalCtrl.create({
      component: VerNotasPage,
      cssClass: 'myclass',
      componentProps:{
        modalInfo: Value
      }
    });
    await modal.present();
  }
}
