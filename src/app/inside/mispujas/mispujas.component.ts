import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-mispujas',
  templateUrl: './mispujas.component.html',
  styleUrls: ['./mispujas.component.scss']
})
export class MispujasComponent implements OnInit {

  id:any;
  productos:any[] = [];
  productosPujados:any;
  usuarioActivoPujas:any[] = [];
  hora: any = 0;
  valor: any;
  
  
  constructor(private firestoreService:FirestoreService, private ruta:ActivatedRoute, private router:Router) {
    this.ruta.params.subscribe(params=>{
      this.id = params['id'];
    })
    setInterval(()=> { this.myTimer() }, 1000);
    
    this.firestoreService.listaUsuario().subscribe(usuario=>{
      for (let u of usuario){
        if (u.email == firebase.auth().currentUser.email){
          this.usuarioActivoPujas = u.pujas;
        }
      }
    })
    this.firestoreService.listaProducto().subscribe(producto=>{
      this.productosPujados = [];
      this.productos = producto
      for (let p of this.productos){
        for (let p2 of this.usuarioActivoPujas){
          if (p.id == p2){
            this.productosPujados.push(p)
          }
        }
      }
    })
    
   }

  ngOnInit() {
  }

  redirigirProducto(producto:any){
    this.router.navigate(["/ver/", producto.id])
  }

  myTimer() {
    for (let product of this.productos) {
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
    alert("El producto se ha borrado correctamente")
    this.router.navigate(["/home"])
  }
}
