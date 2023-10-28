import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-modal-na',
  templateUrl: './modal-na.page.html',
  styleUrls: ['./modal-na.page.scss'],
})
export class ModalNAPage implements OnInit {

  modalInfo:any;
  alumnos: any;
  constructor(private dtS: DataServiceService) { 
    this.dtS.getAllUsers().subscribe(res => {
      this.alumnos= res;
    })
  }

  async ngOnInit() {
    console.log(this.modalInfo)
  }

}
