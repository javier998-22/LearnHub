import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { DataServiceService } from 'src/app/services/data-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = {
    email: "",
    password: ""
  }

  uid: any;
  constructor(private DataS: DataServiceService, private router: Router, private Auth: AuthService, public toastController: ToastController, navCtrl:NavController) { }

  ngOnInit() {
  }

  async Entrar() {
    if (this.loginForm.email == "") {
      this.presentToast("El campo de email esta incompleto");
    } else if (this.loginForm.password == "") {
      this.presentToast("El campo de contraseña esta incompleto");
    } else {
      await this.Auth.login(this.loginForm.email, this.loginForm.password)
      .then(() => this.EntrarUsu())
      .catch((e) => console.log(e.message));
    }
  };

  EntrarUsu(){
    this.DataS.getUsuarios(this.Auth.getUid()).subscribe(event => this.uid = event);
    let hideFooterTimeout = setTimeout(() => {
      if (this.uid.tipo == 1) {
        this.router.navigate(['/home-admin']);        
      }else if (this.uid.tipo == 2) {      
        this.router.navigate(['/cursos-profe']);
      }else if (this.uid.tipo == 3){ 
        this.router.navigate(['/cursos-a']);
      }
    }, 2000)
  }

  async presentToast(message: string, duration?: number) {
    const toast = await this.toastController.create(
      {
        message: message,
        duration: duration ? duration : 2000
      }
    );
    toast.present();
  }

  IraReset(){
    this.router.navigate(['/reset-pass']);
  }
}
