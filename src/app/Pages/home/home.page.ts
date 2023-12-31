import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router,private navCtrl: NavController) { }

  ngOnInit() {
  }
 IraPerfil(){
  this.navCtrl.navigateForward(['/perfil-alumno']);
 }
  IraCursos(){
    this.router.navigate(['cursos-a']);
  }
  IraChat(){
    this.router.navigate(['/chats']);
  }
}
