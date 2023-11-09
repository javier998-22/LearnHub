import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataServiceService } from 'src/app/services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { AnyCnameRecord } from 'dns';
@Component({
  selector: 'app-horario-ev',
  templateUrl: './horario-ev.page.html',
  styleUrls: ['./horario-ev.page.scss'],
})
export class HorarioEvPage implements OnInit {
  data: any;
  tabla: any;
  constructor(private modalCtrl: ModalController, private router: Router, private Dts: DataServiceService, private auth: AuthService) { 

  };

  ngOnInit() {

  }

  async volver(){
    this.router.navigate(['/perfil-alumno']);
    await this.modalCtrl.dismiss();
  }
}

