import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState} from '@angular/fire/auth';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afAuth: Auth) { }
  
  async register(email: string, password: string){
    const user = await createUserWithEmailAndPassword(this.afAuth, email, password);
    return await signInWithEmailAndPassword(this.afAuth, email, password);
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

  
}
