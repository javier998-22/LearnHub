import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-prom-notas',
  templateUrl: './prom-notas.page.html',
  styleUrls: ['./prom-notas.page.scss'],
})
export class PromNotasPage implements OnInit {
  notas: any = [{
    nota1:'',
    nota2: '',
    nota3: '',
    nota4: '',
  }]
  
  promedio: number = 0; // Variable para almacenar el resultado del promedio

  constructor(private router:Router, private modalCtrl: ModalController,  public Alerta: AlertController, ) { }

  ngOnInit() {
  }
  volver(){
    this.router.navigate(['/notas-usuario']);
}

calcularPromedio() {

  // Obtener las notas de los campos de entrada

  // Calcular el promedio
  this.promedio = (this.notas.nota1 + this.notas.nota2 + this.notas.nota3) / 3;
  return this.promedio;
}
async presentAlert(sub:string) {
  const alert = await this.Alerta.create({
    header: 'Alert',
    subHeader: sub,
    message: 'This is an alert!',
    buttons: ['OK'],
  });

  await alert.present();
}
}



