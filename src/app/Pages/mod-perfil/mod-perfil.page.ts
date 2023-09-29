import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../../services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mod-perfil',
  templateUrl: './mod-perfil.page.html',
  styleUrls: ['./mod-perfil.page.scss'],
})
export class ModPerfilPage implements OnInit {

  id:any;
  uid: any = [
    {
    nombre: '',
    apellido: '',
    }
  ];
  email ='';

  constructor(private DataS: DataServiceService, private Auth: AuthService,public Alerta: AlertController) {
    this.DataS.getUsuarios(this.Auth.getUid()).subscribe(res => {
      this.uid = res;
      this.id = this.Auth.getUid();
      this.uid.email = this.Auth.getEmail();
    })
   }

  ngOnInit() {
  }

  alerta(titulo: string){
    this.presentAlert(titulo, "Desea Modificar?");
  }

  async presentAlert(titulo:string, message: string){
    const alert = await this.Alerta.create({
      header: titulo,
      message: message,
      inputs: [{
        name: 'dato',
        placeholder: 'Ingrese Modificacion'
      },],
      buttons: [{
        text:'Cancelar',
        handler: () => {
          console.log('Confirm Cancel');
        }
      },{
        text: 'Guardar',
        handler: (data) =>{
          if(data.dato.length > 0){
            this.DataS.Updateuser(titulo.toLocaleLowerCase(), data.dato, this.id)
          }
          console.log('Comfirm Ok');
        }
      }]
    })
    await alert.present();
  }
}

