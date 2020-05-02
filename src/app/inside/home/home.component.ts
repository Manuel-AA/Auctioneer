import { Component, OnInit } from '@angular/core';
//import { FirestoreService } from 'src/app/services/firestore.service';
import { FirestoreService } from '../../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos:any;
  hora:any = 0;
  valor:any;

  constructor(private firestoreService:FirestoreService, private router:Router) {
    this.firestoreService.listaProducto().subscribe(producto=>{
      this.productos = producto;
    })
    setInterval(()=> { this.myTimer() }, 1000);
   }

  ngOnInit() {
  }

  filtroHome = "";

  redirigirProducto(producto:any){
    this.router.navigate(["/ver/", producto.id])
  }


  myTimer() {
    for (let product of this.productos){
    this.hora = new Date().getTime();
    console.log(this.hora)
    console.log("hola")
    console.log(this.hora - product.tiempoInicio)
    console.log("Fin")
    console.log(product.tiempoInicio)
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


}
