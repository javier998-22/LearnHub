import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';




@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  modalInfo: any;
  mensaje: any;
  id: any;
  uid: any;
  chat: any;
  fecha : any;

  constructor(private dts: DataServiceService, private atS: AuthService,private modalCtrl: ModalController, private router: Router) { 
    this.dts.getUsuarios(this.atS.getUid()).subscribe(res => {
      if (res) {
        this.uid = res;
        this.id = this.atS.getUid();
      }
    });
    //solo traer los chats y hacer la comprobacion en el html con el ngIf correspondiente 
    this.dts.getChat().subscribe(data => {
      if(data) {
        this.chat = data;
      }
    });
  }

  ngOnInit() {
  }

  enviar(cursoId: any) {
    // Obtener la fecha y hora actual
    const fechaHoraActual = new Date();
  
    // Convertir la fecha y hora a una cadena legible o en el formato deseado
    const cadenaFechaHora = fechaHoraActual; // Puedes ajustar el formato según tus necesidades

    this.dts.abrirChat(cursoId, this.id, this.uid.nombre, this.uid.apellido, this.mensaje, cadenaFechaHora);
    this.mensaje = '';
  }
  async volver(){
    this.router.navigate(['/cursos-profe']);
    await this.modalCtrl.dismiss();
  } 

  
}
