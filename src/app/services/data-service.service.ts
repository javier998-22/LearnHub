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
  uiid: string | undefined;
  
  constructor(private firestore: Firestore,private atS: AuthService) { }

  createFirebaseUser(id: string | undefined, apellido: any,  nombre: any, tipo: any) {
    const usuario = collection(this.firestore, 'Usuarios');
    return setDoc(doc(usuario, id), { nombre: nombre, apellido: apellido, tipo: tipo })
  }

  GetTipoUsu(id : string | undefined){
    const usuarios = doc(this.firestore, `Usuarios/${id}`);
    return docData(usuarios);
  }

  getUsuarios(id : string | undefined) {
    const usuarios = doc(this.firestore, `Usuarios/${id}`);
    return docData(usuarios);
  }

  CrearCurso(id: string | undefined, Establecimiento: any, RamoCurso: any, SiglaCurso: any){
    const cursos = collection(this.firestore, 'Cursos');
    return setDoc(doc(cursos), {establecimiento: Establecimiento, ramoCurso: RamoCurso, siglaCurso: SiglaCurso, idProfe: id})
  }

  cargarId() {
    this.uiid = this.atS.getUid();
  }

}