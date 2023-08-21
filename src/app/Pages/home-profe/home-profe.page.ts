import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../../services/data-service.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home-profe',
  templateUrl: './home-profe.page.html',
  styleUrls: ['./home-profe.page.scss'],
})
export class HomeProfePage implements OnInit {



  constructor( private dataS : DataServiceService) { }

  ngOnInit() {
  }

}
