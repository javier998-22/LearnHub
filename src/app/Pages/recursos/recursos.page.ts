import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.page.html',
  styleUrls: ['./recursos.page.scss'],
})
export class RecursosPage implements OnInit {
  modalInfo: any;
  recursos: any;
  constructor(private modalController: ModalController, private router: Router, private dataS: DataServiceService) {
    this.dataS.getRecursos().subscribe( rec => {
      this.recursos = rec;
    });
  }

  ngOnInit() {
  }

}
