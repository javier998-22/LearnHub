import { Injectable } from '@angular/core';
import { deleteDoc, setDoc, updateDoc, where, query} from 'firebase/firestore';
import { Firestore, collectionData, collection, doc, docData, orderBy} from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';


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
    const usu = collection(this.firestore, `Usuarios`);
    return collectionData(usu);
  }

  getDUsers(){
    this.cargarId();
    const usu = collection(this.firestore, `Usuarios`);
    const que = query(usu, where('id', '!=', this.uiid));
    return collectionData(que);

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
  getEv(){
    const ev = collection(this.firestore, `Evaluaciones`);
    return collectionData(ev);
  }
  
  getALc(){
    this.cargarId();
    const cursillo = collection(this.firestore, `AlumnCur`);
    const cons = query(cursillo, where('Alumno', '==' , this.uiid));
    return collectionData(cons);
  }

  getCursos(){
    const cursos = collection(this.firestore, `Cursos`);
    return collectionData(cursos);
  }
  getCurso(){
    this.cargarId();
    const curso = collection(this.firestore, `Cursos`);
    const q = query(curso, where('idProfe', '==' , this.uiid));
    return collectionData(q);
  }
  GetNotas(){
    const nota = collection(this.firestore, 'notasAC');
    return collectionData(nota);
  }
  getNota(){
    this.cargarId();
    const curso = collection(this.firestore, 'notasAC');
    const q = query(curso, where('Alumnos', '==' , this.uiid));
    return collectionData(q);
  }
  getRecursos(){
    const recurso = collection(this.firestore, 'Recursos');
    return collectionData(recurso);
  }

  agregarAlumno(uid: any, nombre: any,apellido: any , idCurso : any, sigla: any, ramo:any){
    const alumno = collection(this.firestore, 'AlumnCur');
    return setDoc(doc(alumno), {Alumno : uid, nombre: nombre, apellido: apellido , idCurso: idCurso, sigla: sigla, ramo: ramo});
  }

  CargarNota(idNota: any, uid: any , nombre: any,apellido: any, idCurso: any, sigla: any, ramo: any, notaa: any){
    const nota = collection(this.firestore, 'notasAC');
    return setDoc(doc(nota, idNota), {idNota: idNota, Alumnos: uid, nombre: nombre, apellido: apellido , idCurso:idCurso, sigla: sigla, ramo: ramo, nota: notaa})
  } 

  agregarEv(Curso: any,ramo: any, sigla: any, fecha: any){
    const ev = collection(this.firestore, 'Evaluaciones');
    return setDoc(doc(ev), { curso: Curso,ramo: ramo, sigla: sigla, fecha: fecha})
  }

  getev(){
    this.cargarId();
    const ev = collection(this.firestore, 'AlumnCur');
    const q = query(ev, where('Alumno', '==' , this.uiid), orderBy('fecha'));
    return collectionData(q);
  }

  getTableEv(){
    const eva = collection(this.firestore, 'Evaluaciones');
    return collectionData(eva);
  }

  abrirChat(idCurso:any,id: any, nombreEm: any, apellidoEm: any, mensaje:any, fecha: any){
    const chat = collection(this.firestore, 'Chats');
    return setDoc(doc(chat), {idCurso, emisor:id, nombreEmisor: nombreEm, apellidoEmisor: apellidoEm, mensaje: mensaje, fecha:fecha});
  }
  getChat(){
    const chatG = collection(this.firestore, `Chats`);
    const que = query(chatG, orderBy('fecha'));
    return collectionData(que)
  }
  getChate(){
    const chate = collection(this.firestore, `Chats`);
    const q = query(chate, where('emisor', '==', this.uiid), orderBy('fecha'));
    return collectionData(q);
  }

  async Updateuser(campo: any, valor: any, id: any){
    const usuario = doc(this.firestore, 'Usuarios', id)
    await updateDoc(usuario,{
      [campo]:valor
    });
  }
  async Updatenota(idNota: any, nota: any) {
    const notas = doc(this.firestore,  'notasAC', idNota)
    try {
      await updateDoc(notas, {
        'nota': nota
      });
      console.log('Nota actualizada correctamente');
    } catch (error) {
      console.error('Error al actualizar la nota:', error);
    }

  }

  async UpdateCursos(idCurso: any, siglaCurso: any) {
    const cursos = doc(this.firestore,  'Cursos', idCurso)
      await updateDoc(cursos, {
        'siglaCurso': siglaCurso,
      });

  }
  async UpdateCursor(idCurso: any, ramoCurso: any) {
    const cursos = doc(this.firestore,  'Cursos', idCurso)
      await updateDoc(cursos, {
        'ramoCurso': ramoCurso,
      });

  }
  async UpdateCursoe(idCurso: any, establecimiento: any) {
    const cursos = doc(this.firestore,  'Cursos', idCurso)
      await updateDoc(cursos, {
        'establecimiento': establecimiento,
      });

  }
  async AgregarRemplazo(idCurso: any, idRemplazo: any) {
    const cursos = doc(this.firestore,  'Cursos', idCurso)
      await updateDoc(cursos, {
        'idRemplazo': idRemplazo,
      });

  }
}
