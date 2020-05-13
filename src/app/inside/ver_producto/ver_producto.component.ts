import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-ver_producto',
  templateUrl: './ver_producto.component.html',
  styleUrls: ['./ver_producto.component.scss']
})
export class VerProductoComponent implements OnInit {
  productos:any;
  id:any;
  productoPagina:any = "";
  nuevaPuja:any;
  hora:any = 0;
  valor:any;
  pujaMinima:any;
  

  usuarioNuevo:any = {
    email: '',
    pujas: []
  }

  modificarProducto: any = {
    id: "",
    nombre: "",
    categoria: "",
    precioSalida: "",
    pujaActual: "",
    precioCompraYa: ""
  }
  usuarioActivoEmail:any;

  usuarios:any;
  aux:any[];
  constructor(private ruta:ActivatedRoute, private servicio:FirestoreService, private router:Router) {
    this.ruta.params.subscribe(params=>{
      this.id = params['id'];
    })
    this.servicio.listaProducto().subscribe(producto=>{
      this.productos = producto;
      for (let p of this.productos){
        if (p.id == this.id){
          this.productoPagina = p;
          this.pujaMinima = this.productoPagina.pujaActual + this.productoPagina.pujaActual*0.05;
        }
      }
    })
    setInterval(()=> { this.myTimer() }, 1000);
    this.servicio.listaUsuario().subscribe(usuario=>{
      this.usuarios = usuario;
      this.usuarioActivoEmail = firebase.auth().currentUser.email
    })
    
   }

  ngOnInit() {
  }


  myTimer() {
    
    this.hora = new Date().getTime();
    this.valor = this.hora - this.productoPagina.tiempoInicio;
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
    this.productoPagina.tiempoFin = (23 - horas) + ':' + (59 - minutos) + ':' + (59 -segundos);
     if (comprobar >= 86400000){
      this.EliminarProducto(this.productoPagina)
    }
  }


  cambiarPuja(puja){
    let usuarioActivo = firebase.auth().currentUser
    if (usuarioActivo){
      if (puja>=this.pujaMinima){
        var opcion = confirm("Seguro que quieres pujar por este producto");
        if (opcion == true){
          this.productoPagina.pujaActual = puja;
          this.productoPagina.ultimoPujador = usuarioActivo.displayName;
          this.servicio.editProducto(this.productoPagina)
          for (let p of this.usuarios){
            if(p.email == usuarioActivo.email){
              if(!p.pujas.includes(this.id)){
                p.pujas.push(this.id)
                this.servicio.editUsuario(p)
              }
              return;
            }
          }
          this.usuarioNuevo.email = usuarioActivo.email
          this.usuarioNuevo.pujas.push(this.id)
          this.servicio.addUsuario(this.usuarioNuevo)
        }
      }
      else {
        alert("La puja debe ser superior o igual a la puja mínima")
      }
    }
  }

  ModificarProducto(producto) {
    this.modificarProducto.id = producto.id;
    this.modificarProducto.nombre = producto.nombre;
    this.modificarProducto.categoria = producto.categoria;
    this.modificarProducto.precioSalida = producto.precioSalida;
    this.modificarProducto.pujaActual = producto.pujaActual;
    this.modificarProducto.precioCompraYa = producto.precioCompraYa;
  }

  AgregarProductoModificado(){
    this.servicio.editProducto(this.modificarProducto)
  }

  EliminarProducto(producto){
    this.servicio.removeProducto(producto);
    var i = this.productos.indexOf(producto)
    this.productos.splice(i, 1)
    alert("El producto se ha borrado correctamente")
    this.router.navigate(["/home"])
  }

  comprarYa(producto){
    var opcion = confirm("Seguro que quieres comprar este producto")
    if (opcion == true){
      alert("La compra se ha realizado correctamente")
      this.servicio.removeProducto(producto);
      var i = this.productos.indexOf(producto)
      this.productos.splice(i, 1)
      this.router.navigate(["/home"])
    }
  }
}
