import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  constructor(private router:Router, private servicio:FirestoreService) { }

  ngOnInit() {
  }
  logotipo = "/assets/img/logotipo.png"

  redirigirPerfil(){
    this.router.navigate(["/perfil/", firebase.auth().currentUser.uid])
  }

  redirigirMisPujas(){
    this.router.navigate(["/mispujas/", firebase.auth().currentUser.uid])
  }

  logout(){
    this.servicio.doLogout()
    .then((res) => {
      console.log(firebase.auth().currentUser)
      this.router.navigate([""])
    }, (error) => {
      console.log("Error de logout", error)
    })
  }
}
