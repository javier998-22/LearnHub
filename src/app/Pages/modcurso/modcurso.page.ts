import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modcurso',
  templateUrl: './modcurso.page.html',
  styleUrls: ['./modcurso.page.scss'],
})
export class ModcursoPage implements OnInit {
  modalInfo: any;
  nuevasigla: any;
  nuevoRamo:any;
  nuevoes: any;

  constructor(private dtS: DataServiceService, private router: Router, private modalCtrl: ModalController, public toastController: ToastController) { 
  }

  ngOnInit() {
  }
  
  async volver(){
    this.router.navigate(['/panel']);
    await this.modalCtrl.dismiss();
  }
  modificars(id: any){
    this.dtS.UpdateCursos(id, this.nuevasigla);
    this.presentToast("Modificación Realizada");
  }
  modificarR(id:any){
    this.dtS.UpdateCursor(id, this.nuevoRamo);
    this.presentToast("Modificación Realizada");
  }

  modificare(id:any){
    this.dtS.UpdateCursoe(id,this.nuevoes);
    this.presentToast("Modificación Realizada");
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
