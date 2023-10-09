import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-curso',
  templateUrl: './modal-curso.page.html',
  styleUrls: ['./modal-curso.page.scss'],
})
export class ModalCursoPage implements OnInit {
  Listacursos: any = [{
    establecimiento: '',
    ramoCurso: '',
    siglaCurso: ''
  }]

  @Input() cursos: any;

  constructor( private dataS: DataServiceService, private atS: AuthService, private router: Router) {
    this.dataS.getCurso().subscribe(res => { 
      this.Listacursos = res;
      console.log(this.Listacursos);
    })
   }

  ngOnInit() {
  }

}
