import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-profe',
  templateUrl: './perfil-profe.page.html',
  styleUrls: ['./perfil-profe.page.scss'],
})
export class PerfilProfePage implements OnInit {
  id: any;

  uid: any = [
    {
    nombre: '',
    apellido: '',
    email: '',
    }
  ];

  image: any;
 
  constructor(private dtS: DataServiceService, private atS: AuthService,  private router: Router) {
    this.dtS.getUsuarios(this.atS.getUid()).subscribe(res => {
      this.uid = res;
      this.id = this.atS.getUid();
      this.uid.email = this.atS.getEmail();
    })
  }

  ngOnInit() {
  }

  async TakeImage(){
    const dataUrl = (await this.dtS.takePicture('Imagen del perfil')).dataUrl;
    this.image.setValue(dataUrl);
  }

  logout(){
    this.atS.logout();
    this.router.navigate(['/login']);
  }
  IraCursos(){
    this.router.navigate(['/cursos-profe']);
  }IraCalev(){
    this.router.navigate(['/horario-ev']);
  }
  IraCaCla(){
    this.router.navigate(['/horario-clases']);
  }
  IraMod(){
    this.router.navigate(['/mod-perfil'])
  }
  IraHome(){
    this.router.navigate(['/home-profe'])
  }
}

