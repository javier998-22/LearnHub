import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private auth: AuthService, public toastController: ToastController, private router: Router, private DataService: DataServiceService) { }

  newUserFields = {
    Name: '',
    Surname: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    TypeUser: ''
  }
  Validmessage = 0
  ngOnInit() {
  }

  async CreateUser(){
    if (this.newUserFields.Name == "") {
      this.presentToast("El campo de nombre esta incompleto");
    } else if (this.newUserFields.Surname == "") {
      this.presentToast("El campo de apellido esta incompleto");
    } else if (this.newUserFields.Email == "") {
      this.presentToast("El campo de email esta incompleto");
    } else if (this.newUserFields.Password == "") {
      this.presentToast("El campo de contraseña esta incompleto");
    } else if (this.newUserFields.ConfirmPassword == "") {
      this.presentToast("El campo de repetir contraseña esta incompleto");
    } else if (this.newUserFields.Name == "" || this.newUserFields.Surname == "" || this.newUserFields.Email == "" || this.newUserFields.Password == "" || this.newUserFields.ConfirmPassword == "") {
    this.Validmessage = 1
    }
    else if (this.newUserFields.Password != this.newUserFields.ConfirmPassword) {
      this.Validmessage = 2
  }
  else {
    this.Validmessage = 0
    await this.auth.register(this.newUserFields.Email, this.newUserFields.Password);
    await this.DataService.createFirebaseUser(await this.auth.getUid(), this.newUserFields.Surname, this.newUserFields.Name, this.newUserFields.TypeUser)
    this.router.navigate(['/login'])
  }
  console.log(this.newUserFields.TypeUser);
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

}
