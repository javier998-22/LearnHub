import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {
  Email={
    email: ""
  }
  constructor(public toastController: ToastController, private ats : AuthService) { }

  ngOnInit() {
  }
  reset(){
    if(this.Email.email == ""){
      this.presentToast("El campo email esta vacio");
    }else{
      this.ats.ResetPass(this.Email.email)
      console.log('Correo enviado');
    }
  }

  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }
}

