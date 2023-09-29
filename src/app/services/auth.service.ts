import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail} from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: Auth, private alertCtrl: AlertController, private router: Router) { }
  
  async register(email: string, password: string){
    const user = await createUserWithEmailAndPassword(this.afAuth, email, password);
  }

  login(email: string, password: string){
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  logout(){
    return signOut(this.afAuth);
  }

  getUid() {
    return this.afAuth.currentUser?.uid;
  }

  getEmail(){
    return this.afAuth.currentUser?.email;
  }

  ResetPass(email: string){
    sendPasswordResetEmail(this.afAuth, email).then(
      async () => {
        const alert = await this.alertCtrl.create({
          message: 'Revise su correo para ver el link de recuperacion de contrasena',
          buttons: [
          {  text: 'OK',
            role: 'cancel',
            handler: () => {
              this.router.navigate(['/login']);
            },
          },
        ],
        });
        await alert.present();
      },
    );
  }
  
}
