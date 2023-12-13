import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listaprofes-r',
  templateUrl: './listaprofes-r.page.html',
  styleUrls: ['./listaprofes-r.page.scss'],
})
export class ListaprofesRPage implements OnInit {
  modalInfo: any;
  profes: any;

  constructor(private dtS: DataServiceService, private router: Router, private alertController: AlertController,private modalCtrl: ModalController, public toastController: ToastController) { 
    this.dtS.getAllUsers().subscribe(res => {
      this.profes = res;
  })
  }

  Remplazo(id:any, profeid: any){
    this.dtS.AgregarRemplazo(id, profeid);
    this.presentToast("Modificación Realizada");
  }
  ngOnInit() {
  }
  async volver(){
    this.router.navigate(['/panel']);
    await this.modalCtrl.dismiss();
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
