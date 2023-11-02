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
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.scss'],
})
export class PanelPage implements OnInit {
  Listacursos: any;

  constructor(private router: Router, private modalController: ModalController, private dataS: DataServiceService, private atS: AuthService, navCtrl:NavController) {
    this.dataS.getCurso().subscribe(res => { 
      this.Listacursos = res;
    })
  }

  ngOnInit() {
  }
  IraPerfil(){
    this.router.navigate(['/perfil-admin']);
  }
}
