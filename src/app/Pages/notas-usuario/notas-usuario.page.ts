import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notas-usuario',
  templateUrl: './notas-usuario.page.html',
  styleUrls: ['./notas-usuario.page.scss'],
})
export class NotasUsuarioPage implements OnInit {

  Listacursos: any;

  constructor(private dataS: DataServiceService, private router:Router) {}

  ngOnInit() {
  }
  IraProm(){
    this.router.navigate(['/prom-notas']);
}
  volver(){
    this.router.navigate(['/perfil-alumno'])
  }
}