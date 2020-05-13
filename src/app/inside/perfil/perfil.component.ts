import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  productos:any[] = [];
  email:any;
  name:any;
  id:any;
  hora:any = 0;
  valor:any;
  numProductos: any = 0;
  usuarioActivoPujas:any[] = [];

  modificarProducto: any = {
    id: "",
    nombre: "",
    categoria: "",
    precioSalida: "",
    pujaActual: "",
    precioCompraYa: ""
  }
  subscribeTimer: number;

  constructor(private firestoreService:FirestoreService, private ruta:ActivatedRoute, private router:Router) {
    this.ruta.params.subscribe(params=>{
      this.id = params['id'];
    })
    
    this.firestoreService.listaProducto().subscribe(producto=>{
      this.productos = []
      for (let p of producto){
        if (firebase.auth().currentUser.email == p.emailSubastador ){
          this.productos.push(p);
          this.numProductos++;
        }
      }
      this.email = firebase.auth().currentUser.email;
      this.name = firebase.auth().currentUser.displayName;
    })

    setInterval(()=> { this.myTimer() }, 1000);
   }

  ngOnInit() {
    
  }



  myTimer() {
    for (let product of this.productos){
    this.hora = new Date().getTime();
    this.valor = this.hora - product.tiempoInicio;
    var comprobar = this.valor;
    var segundos = 0;
    var minutos = 0;
    var horas = 0;
    if(this.valor >= 1000){
        segundos = Math.floor(this.valor/1000)
        this.valor = this.valor % 1000
      if(segundos >= 60){
        minutos = Math.floor(segundos/60)
        segundos = segundos % 60
        if(minutos >= 60){
          horas = Math.floor(minutos/60)
          minutos = minutos % 60
        } 
      }
    }
    product.tiempoFin = (23 - horas) + ':' + (59 - minutos) + ':' + (59 -segundos);
     if (comprobar >= 86400000){
      this.EliminarProducto(product)
    }
  }
}

  EliminarProducto(producto){
    this.firestoreService.removeProducto(producto);
    var i = this.productos.indexOf(producto)
    this.productos.splice(i, 1)
  }

  redirigirProducto(producto:any){
    this.router.navigate(["/ver/", producto.id])
  }

}
