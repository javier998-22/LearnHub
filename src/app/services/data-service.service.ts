import { Injectable } from '@angular/core';
import { deleteDoc, getDoc, setDoc, updateDoc, where, query, addDoc } from 'firebase/firestore';
import { Firestore, collectionData, collection, doc, docData, documentId} from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  idProfe: any;
  uid = '';
  uiid: any;
  
  constructor(private firestore: Firestore,private atS: AuthService) { }

  createFirebaseUser(id: any, apellido: any,  nombre: any, tipo: any) {
    const usuario = collection(this.firestore, 'Usuarios');
    return setDoc(doc(usuario, id), { nombre: nombre, apellido: apellido, tipo: tipo })
  }

  getUsuarios(id:any) {
    const usuarios = doc(this.firestore, `Usuarios/${id}`);
    return docData(usuarios);
  }

  GetAllUsers(id:any){
    const usuarios = doc(this.firestore, `Usuarios`);
    return docData(usuarios);
  }

  CrearCurso(id: any, Establecimiento: any, RamoCurso: any, SiglaCurso: any){
    const cursos = collection(this.firestore, 'Cursos');
    return setDoc(doc(cursos), {establecimiento: Establecimiento, ramoCurso: RamoCurso, siglaCurso: SiglaCurso, idProfe: id})
  }

  cargarId() {
    this.uiid = this.atS.getUid();
  }


  getCurso(){
    this.cargarId();
    const curso = collection(this.firestore, `Usuarios/${this.uiid}/Cursos`)
    return collectionData(curso);
  }

  async Updateuser(campo: any, valor: any, id: any){
    const usuario = doc(this.firestore, 'Usuarios', id)
    await updateDoc(usuario,{
      [campo]:valor
    })
  }

    async takePicture(promptLabelHeader: string){
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelHeader,
      promptLabelPhoto: 'Selecciona una imagen',
      promptLabelPicture: 'Toma una foto'
    });
    
  };

}