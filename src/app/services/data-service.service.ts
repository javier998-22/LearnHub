import { Injectable } from '@angular/core';
import { deleteDoc, getDoc, setDoc, updateDoc, where, query, addDoc } from 'firebase/firestore';
import { Firestore, collectionData, collection, doc, docData} from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { AngularFireList } from '@angular/fire/compat/database'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  uid = '';
  constructor(private firestore: Firestore, private afAuth: Auth) { }


  createFirebaseUser(id: string | undefined, apellido: any,  nombre: any, tipo: any) {
    const usuario = collection(this.firestore, 'Usuarios');
    return setDoc(doc(usuario, id), { nombre: nombre, apellido: apellido, tipo: tipo })
  }
}
