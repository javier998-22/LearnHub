import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataServiceService } from 'src/app/services/data-service.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-horario-clases',
  templateUrl: './horario-clases.page.html',
  styleUrls: ['./horario-clases.page.scss'],
})
export class HorarioClasesPage implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router, private DataService: DataServiceService, private auth: AuthService)  { }

  ngOnInit() {
  }
  async volver(){
    this.router.navigate(['/perfil-profe']);
    await this.modalCtrl.dismiss();
}
}