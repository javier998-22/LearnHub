import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-verev',
  templateUrl: './verev.page.html',
  styleUrls: ['./verev.page.scss'],
})
export class VerevPage implements OnInit {

  modalInfo: any;
  ev: any;

  constructor(private dts: DataServiceService, private modalCtrl: ModalController, private router: Router, private modalController: ModalController) { 
    this.dts.getEv().subscribe( res => {
      this.ev = res;
    })
  }

  ngOnInit() {
  }

}
