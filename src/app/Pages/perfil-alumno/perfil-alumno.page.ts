import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {

  id: any;

  uid: any;
  constructor(private dtS: DataServiceService, private atS: AuthService,  private router: Router) {
    this.dtS.getUsuarios(this.atS.getUid()).subscribe(res => {
      if(res){
        this.uid = res;
        this.id = this.atS.getUid();
        this.uid.email = this.atS.getEmail();
      }
    });
  }


  ngOnInit() {
  }

logout(){
  this.atS.logout();
  this.router.navigate(['/welcome']);
}
IraCalev(){
  this.router.navigate(['/horario-ev']);
}
IraCaCla(){
  this.router.navigate(['/horario-clases']);
}
IraMod(){
  this.router.navigate(['/mod-perfil']);
}
IraHome(){
  this.router.navigate(['/home']);
}
IraMisNotas(){
  this.router.navigate(['/notas-usuario']);
}
}