import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalncPage} from '../modalnc/modalnc.page';



@Component({
  selector: 'app-cursos-profe',
  templateUrl: './cursos-profe.page.html',
  styleUrls: ['./cursos-profe.page.scss'],
})
export class CursosProfePage implements OnInit {

  constructor(private router : Router,private modalController: ModalController) { }
  
  ngOnInit() {
  }
  
  async abrirModal(){
    const modal= await this.modalController.create({
      component: ModalncPage,
      cssClass:'myclass',
    });
    await modal.present();
  }
}

