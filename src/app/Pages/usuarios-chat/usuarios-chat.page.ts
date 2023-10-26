import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-chat',
  templateUrl: './usuarios-chat.page.html',
  styleUrls: ['./usuarios-chat.page.scss'],
})
export class UsuariosChatPage implements OnInit {
  
  idUsuario2: any;

  uid: any;

  constructor(private dtS: DataServiceService, private atS: AuthService,  private router: Router) {
    this.dtS.getAllUsers().subscribe(res => {
      this.uid = res;
    })
   }

  ngOnInit() {
  }
  
  abrirChat(usuarioId2: string){
    this.uid = usuarioId2;
    console.log(this.uid);
  }
}
