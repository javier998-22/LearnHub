import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-alum',
  templateUrl: './perfil-alum.page.html',
  styleUrls: ['./perfil-alum.page.scss'],
})
export class PerfilAlumPage implements OnInit {
  id: any;

  user: any = [
    {
      nombre: '',
      apellido: '',
    }
  ]
  constructor(private Datas : DataServiceService, private Auth:AuthService, private router: Router) {

   }

  ngOnInit() {

  }
 
  IraPrincipal(){
    this.router.navigate(['/home']);
  }
}
