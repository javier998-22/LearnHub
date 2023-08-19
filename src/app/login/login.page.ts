import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { DataServiceService } from 'src/app/services/data-service.service';

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
  constructor(private DataS: DataServiceService, private router: Router, private Auth: AuthService, public toastController: ToastController) { }

  ngOnInit() {
  }

  async Entrar() {
    if (this.loginForm.email == "") {
      this.presentToast("El campo de email esta incompleto");
    } else if (this.loginForm.password == "") {
      this.presentToast("El campo de contraseña esta incompleto");
    } else {
      await this.Auth.login(this.loginForm.email, this.loginForm.password)
      this.router.navigate(['/home']);
    }
    
  };

  async presentToast(message: string, duration?: number) {
    const toast = await this.toastController.create(
      {
        message: message,
        duration: duration ? duration : 2000
      }
    );
    toast.present();
  }
}


