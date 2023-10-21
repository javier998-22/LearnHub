import { Injectable } from '@angular/core';
import { deleteDoc, getDoc, setDoc, updateDoc, where, query, addDoc } from 'firebase/firestore';
import { Firestore, collectionData, collection, doc, docData, documentId} from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Cursos } from './modelos.service';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  idProfe: any;
  uid = 'any';
  uiid: any;
  idCurso: any;
  
  
  constructor(private firestore: Firestore,private atS: AuthService) { }

  createFirebaseUser(id: any, apellido: any,  nombre: any, tipo: any) {
    const usuario = collection(this.firestore, 'Usuarios');
    return setDoc(doc(usuario, id), { nombre: nombre, apellido: apellido, tipo: tipo })
  }

  getUsuarios(id:any) {
    const usuarios = doc(this.firestore, `Usuarios/${id}`);
    return docData(usuarios);
  }
  getAllUsers(){
    const usu = collection(this.firestore, `Usuarios`);
    return collectionData(usu);
  }
  CrearCurso(idCurso: any, idProfe: any, Establecimiento: any, RamoCurso: any, SiglaCurso: any){
    const cursos = collection(this.firestore, 'Cursos');
    return setDoc(doc(cursos, idCurso), {idCurso, establecimiento: Establecimiento, ramoCurso: RamoCurso, siglaCurso: SiglaCurso, idProfe: idProfe})
  }

  getCursoDetails(idCurso: any){
    const cursos = collection(this.firestore, `Cursos/${idCurso}`);
    return collectionData(cursos);
  }

  cargarId() {
    this.uiid = this.atS.getUid();
  }

  getCurso(){
    this.cargarId();
    const curso = collection(this.firestore, `Cursos`)
    const q = query(curso, where('idProfe', '==' , this.uiid))
    return collectionData(q);
  }

  GetCursoMarks(){
    this.cargarId();
    const curs = collection(this.firestore, `Cursos`)
    const qa = query(curs, where('idAlumno', '==', this.uiid))
    return collectionData(qa);
  }

  async Updateuser(campo: any, valor: any, id: any){
    const usuario = doc(this.firestore, 'Usuarios', id)
    await updateDoc(usuario,{
      [campo]:valor
    })
  }

}


