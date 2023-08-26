import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-profe',
  templateUrl: './cursos-profe.page.html',
  styleUrls: ['./cursos-profe.page.scss'],
})
export class CursosProfePage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  IracCurso(){
    this.router.navigate(['/form-curso']);
    
  }
}
