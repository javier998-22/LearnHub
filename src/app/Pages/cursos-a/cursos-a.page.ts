import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-cursos-a',
  templateUrl: './cursos-a.page.html',
  styleUrls: ['./cursos-a.page.scss'],
})
export class CursosAPage implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
  }
  async volver(){
    this.router.navigate(['/home']);
    await this.modalCtrl.dismiss();
}
}
