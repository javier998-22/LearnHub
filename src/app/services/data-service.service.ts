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
  getALc(){
    this.cargarId();
    const cursillo = collection(this.firestore, `AlumnCur`);
    const cons = query(cursillo, where('Alumno', '==' , this.uiid));
    return collectionData(cons);
  }

  getCurso(){
    this.cargarId();
    const curso = collection(this.firestore, `Cursos`);
    const q = query(curso, where('idProfe', '==' , this.uiid));
    return collectionData(q);
  }
  getNota(){
    this.cargarId();
    const curso = collection(this.firestore, 'notasAC');
    const q = query(curso, where('Alumnos', '==' , this.uiid));
    return collectionData(q);
  }

  agregarAlumno(uid: any , nombre: any,apellido: any , idCurso : any, sigla: any, ramo:any){
    const alumno = collection(this.firestore, 'AlumnCur');
    return setDoc(doc(alumno), {Alumno : uid, nombre: nombre, apellido: apellido , Curso: idCurso, sigla: sigla, ramo: ramo});
  }

  CargarNota(uid: any , nombre: any,apellido: any, idCurso: any, sigla: any, ramo: any, notaa: any){
    const nota = collection(this.firestore, 'notasAC');
    return setDoc(doc(nota), {Alumnos: uid, nombre: nombre, apellido: apellido , Curso:idCurso, sigla: sigla, ramo: ramo, nota: notaa})
  } 

  agregarEv(Curso: any,ramo: any, sigla: any, fecha: any){
    const ev = collection(this.firestore, 'Evaluaciones');
    return setDoc(doc(ev), { curso: Curso,ramo: ramo, sigla: sigla, fecha: fecha})
  }

  getev(){
    this.cargarId();
    const ev = collection(this.firestore, 'AlumnCur');
    const q = query(ev, where('Alumno', '==' , this.uiid));
    return collectionData(q);
  }

  getTableEv(){
    const eva = collection(this.firestore, 'Evaluaciones');
    return collectionData(eva);
  }

  async Updateuser(campo: any, valor: any, id: any){
    const usuario = doc(this.firestore, 'Usuarios', id)
    await updateDoc(usuario,{
      [campo]:valor
    });
  }

}


