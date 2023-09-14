import { Injectable } from '@angular/core';
import { deleteDoc, getDoc, setDoc, updateDoc, where, query, addDoc } from 'firebase/firestore';
import { Firestore, collectionData, collection, doc, docData} from '@angular/fire/firestore';
import { Auth, authState } from '@angular/fire/auth';
import { AngularFireList } from '@angular/fire/compat/database'
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  uid = '';
  uiid: string | undefined;
  
  constructor(private firestore: Firestore, private afAuth: Auth ,private atS: AuthService) { }

  createFirebaseUser(id: string | undefined, apellido: any,  nombre: any, tipo: any) {
    const usuario = collection(this.firestore, 'Usuarios');
    return setDoc(doc(usuario, id), { nombre: nombre, apellido: apellido, tipo: tipo })
  }

  GetTipoUsu(id : string | undefined){
    const usuarios = doc(this.firestore, `Usuarios/${id}`);
    return docData(usuarios);
  }

  getUsuario(id : string | undefined) {
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

  getCursos(){
    this.cargarId();
    const cursos = collection(this.firestore, `Usuarios/${this.uiid}/Cursos`)
    return collectionData(cursos);
  }
}
