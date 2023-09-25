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
  
  constructor(private dtS: DataServiceService, private atS: AuthService,  private router: Router) {
    this.dtS.getUsuarios(this.atS.getUid()).subscribe(res => {
      this.uid = res;
      this.id = this.atS.getUid();
      this.uid.email = this.atS.getEmail();
    })
  }

  ngOnInit() {
  }

  logout(){
    this.atS.logout();
    this.router.navigate(['/login']);
  }
}
