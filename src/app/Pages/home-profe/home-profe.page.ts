import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../../services/data-service.service';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-profe',
  templateUrl: './home-profe.page.html',
  styleUrls: ['./home-profe.page.scss'],
})
export class HomeProfePage implements OnInit {



  constructor( private dataS : DataServiceService, private router:Router) { }

  ngOnInit() {
  }
  IrACursos(){
    this.router.navigate(['/cursos-profe']);
  }
  IraPerfil(){
    this.router.navigate(['/perfil-profe']);
  }
  IraChat(){
    this.router.navigate(['/usuarios-chat']);
  }
}
