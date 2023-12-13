import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataServiceService } from '../../services/data-service.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ver-notas',
  templateUrl: './ver-notas.page.html',
  styleUrls: ['./ver-notas.page.scss'],
})
export class VerNotasPage implements OnInit {
  modalInfo:any;
  nuevanota: any
  notas: any;
  
  constructor(private modalCtrl: ModalController, private router: Router, private dataS: DataServiceService, public Alerta: AlertController, public toastController: ToastController) { 
    this.dataS.GetNotas().subscribe(res => { 
      this.notas = res;
    })
  }
  


  ngOnInit() {
  }
  async volver(){
    this.router.navigate(['/cursos-profe']);
    await this.modalCtrl.dismiss();
  }
  modificar(id: any){
    this.dataS.Updatenota(id, this.nuevanota);

    this.presentToast("Modificación Realizada")
  }
  async presentToast(message: string, duration?: number) {
    const toast = await this.toastController.create(
      {
        cssClass: 'toast-wrapper.toast-bottom',
        message: message,
        position: 'bottom',
        duration: duration ? duration : 2000
      }
    );
    toast.present();
  }
}
