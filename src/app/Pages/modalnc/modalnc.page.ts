import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataServiceService } from 'src/app/services/data-service.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-modalnc',
  templateUrl: './modalnc.page.html',
  styleUrls: ['./modalnc.page.scss'],
})
export class ModalncPage implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router, private DataService: DataServiceService, private auth: AuthService) { }

  Curso = {
    Establecimiento: '',
    Ramo: '',
    Sigla: ''
  }

  ngOnInit() {
  }

  async volver(){
    this.router.navigate(['/cursos-profe']);
    await this.modalCtrl.dismiss();
  }
  async CrearCursito(){
    await this.DataService.CrearCurso(await this.auth.getUid(), this.Curso.Establecimiento, this.Curso.Ramo, this.Curso.Sigla);
    this.router.navigate(['/cursos-del-profe']);
    await this.modalCtrl.dismiss();
  }

}
