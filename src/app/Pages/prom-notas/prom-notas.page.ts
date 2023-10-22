import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-prom-notas',
  templateUrl: './prom-notas.page.html',
  styleUrls: ['./prom-notas.page.scss'],
})
export class PromNotasPage implements OnInit {

  constructor(private router:Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async volver(){
    this.router.navigate(['/perfil-profe']);
    await this.modalCtrl.dismiss();
}
}