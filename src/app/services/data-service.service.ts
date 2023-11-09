import { Injectable } from '@angular/core';
import { deleteDoc, getDoc, setDoc, updateDoc, where, query, addDoc , getDocs} from 'firebase/firestore';
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
  uiid: any;
  idCurso: any;

  constructor(private firestore: Firestore,private atS: AuthService) { 

  }

  createFirebaseUser(id: any, apellido: any,  nombre: any, tipo: any) {
    const usuario = collection(this.firestore, 'Usuarios');
    return setDoc(doc(usuario, id), {id, nombre: nombre, apellido: apellido, tipo: tipo });
  }

  getUsuarios(id:any) {
    const usuarios = doc(this.firestore, `Usuarios/${id}`);
    return docData(usuarios);
  }
  getAllUsers(){
    const usu = collection(this.firestore, `Usuarios/`);
    return collectionData(usu);
  }

  CrearCurso(idCurso: any, idProfe: any, Establecimiento: any, RamoCurso: any, SiglaCurso: any){
    const cursos = collection(this.firestore, 'Cursos');
    return setDoc(doc(cursos, idCurso), {idCurso, establecimiento: Establecimiento, ramoCurso: RamoCurso, siglaCurso: SiglaCurso, idProfe: idProfe});
  }

  cargarId() {
    this.uiid = this.atS.getUid();
  }

  getAlumnosC(){
    const cur = collection(this.firestore, `AlumnCur`);
    return collectionData(cur);
  }

  getCurso(){
    this.cargarId();
    const curso = collection(this.firestore, `Cursos`);
    const q = query(curso, where('idProfe', '==' , this.uiid));
    return collectionData(q);
  }

  agregarAlumno(uid: any , nombre: any,apellido: any , idCurso : any){
    const alumno = collection(this.firestore, 'AlumnCur');
    return setDoc(doc(alumno), {Alumno : uid, nombre: nombre, apellido: apellido , Curso: idCurso});
  }

  CargarNota(uid: any , nombre: any,apellido: any, idCurso: any, sigla: any, ramo: any, notaa: any){
    const nota = collection(this.firestore, 'notasAC');
    return setDoc(doc(nota), {Alumnos: uid, nombre: nombre, apellido: apellido , Curso:idCurso ,sigla: sigla, ramo: ramo ,  nota: notaa})
  } 


  async Updateuser(campo: any, valor: any, id: any){
    const usuario = doc(this.firestore, 'Usuarios', id)
    await updateDoc(usuario,{
      [campo]:valor
    });
  }

}


