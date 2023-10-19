import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-notas-usuario',
  templateUrl: './notas-usuario.page.html',
  styleUrls: ['./notas-usuario.page.scss'],
})
export class NotasUsuarioPage implements OnInit {

  Listacursos: any;

  constructor(private dataS: DataServiceService) {}

  ngOnInit() {
  }

}
