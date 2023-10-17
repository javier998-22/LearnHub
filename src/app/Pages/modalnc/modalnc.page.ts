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
  Curso = {
    Establecimiento: '',
    Ramo: '',
    Sigla: ''
  }

  idCurso: string;

  constructor(private modalCtrl: ModalController, private router: Router, private DataService: DataServiceService, private auth: AuthService) {
    this.idCurso = this.generarIdAleatorio();
   }

  ngOnInit() {
  }

  async volver(){
    this.router.navigate(['/cursos-profe']);
    await this.modalCtrl.dismiss();
  }
  async CrearCursito(){
    await this.DataService.CrearCurso(this.idCurso, await this.auth.getUid(), this.Curso.Establecimiento, this.Curso.Ramo, this.Curso.Sigla);
    this.router.navigate(['/cursos-del-profe']);
    await this.modalCtrl.dismiss();
  }

  generarIdAleatorio(): string {
    // Genera un ID aleatorio utilizando un valor de tiempo actual y un valor aleatorio
    const timestamp = new Date().getTime();
    const randomValue = Math.floor(Math.random() * 1000); // Puedes ajustar el rango según tus necesidades
    return `id-${timestamp}-${randomValue}`;
  }

}
