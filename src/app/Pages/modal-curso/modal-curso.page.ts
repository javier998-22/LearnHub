import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-curso',
  templateUrl: './modal-curso.page.html',
  styleUrls: ['./modal-curso.page.scss'],
})
export class ModalCursoPage implements OnInit {
  Listacursos: any = [{
    idCurso:'',
    establecimiento: '',
    ramoCurso: '',
    siglaCurso: ''
  }]

  //@Input() Cursos: any;

  constructor( private dataS: DataServiceService, private atS: AuthService, private router: Router) {
   }

  async ngOnInit() {
    await this.getCursinho();
    console.log(this.Listacursos.idCurso)
  }

  getCursinho(){
    this.dataS.getCurso().subscribe(res => {
      this.Listacursos = res;
    });
    console.log(this.Listacursos.idCurso)
  }

}
