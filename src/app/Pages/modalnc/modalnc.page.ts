import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalnc',
  templateUrl: './modalnc.page.html',
  styleUrls: ['./modalnc.page.scss'],
})
export class ModalncPage implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
  }
  async volver(){
    this.router.navigate(['/cursos-profe']);
    await this.modalCtrl.dismiss();
  }
}
