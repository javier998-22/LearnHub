import { Injectable } from '@angular/core';
import { deleteDoc, getDoc, setDoc, updateDoc, where, query, addDoc } from 'firebase/firestore';
import { Firestore, collectionData, collection, doc, docData} from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  uid = '';
  uiid: any;
  
  constructor(private firestore: Firestore,private atS: AuthService) { }

  createFirebaseUser(id: any, apellido: any,  nombre: any, tipo: any) {
    const usuario = collection(this.firestore, 'Usuarios');
    return setDoc(doc(usuario, id), { nombre: nombre, apellido: apellido, tipo: tipo })
  }

  getUsuarios(id: any) {
    const usuarios = doc(this.firestore, `Usuarios/${id}`);
    return docData(usuarios);
  }

  CrearCurso(id: any, Establecimiento: any, RamoCurso: any, SiglaCurso: any){
    const cursos = collection(this.firestore, 'Cursos');
    return setDoc(doc(cursos), {establecimiento: Establecimiento, ramoCurso: RamoCurso, siglaCurso: SiglaCurso, idProfe: id})
  }

  cargarId() {
    this.uiid = this.atS.getUid();
  }

}