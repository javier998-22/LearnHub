import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-misnotas',
  templateUrl: './misnotas.page.html',
  styleUrls: ['./misnotas.page.scss'],
})
export class MisnotasPage implements OnInit {

  notas: any;
  constructor(private router: Router, private dataS: DataServiceService) { 
    this.dataS.getNota().subscribe(res =>{
      this.notas = res;
      console.log(this.notas);
    });
  }

  ngOnInit() {
  }

}
