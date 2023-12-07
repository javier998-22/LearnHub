import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-ver-notas',
  templateUrl: './ver-notas.page.html',
  styleUrls: ['./ver-notas.page.scss'],
})
export class VerNotasPage implements OnInit {
  modalInfo:any;
  notas: any;
  
  constructor(private modalCtrl: ModalController, private router: Router, private dataS: DataServiceService) { 
    this.dataS.GetNotas().subscribe(res => { 
      this.notas = res;
    })
  }

  ngOnInit() {
  }
  async volver(){
    this.router.navigate(['/cursos-profe']);
    await this.modalCtrl.dismiss();
  }

}
