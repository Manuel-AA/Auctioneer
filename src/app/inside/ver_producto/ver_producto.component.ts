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

  usuarioNuevo:any = {
    email: '',
    pujas: []
  }

  modificarProducto: any = {
    id: "",
    nombre: "",
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
          console.log(this.productoPagina)
        }
      }
    })
    this.servicio.listaUsuario().subscribe(usuario=>{
      this.usuarios = usuario;
      this.usuarioActivoEmail = firebase.auth().currentUser.email
    })
   }

  ngOnInit() {
  }

  cambiarPuja(puja){
    let usuarioActivo = firebase.auth().currentUser
    if (usuarioActivo){
      if (puja>this.productoPagina.pujaActual){
        this.productoPagina.pujaActual = puja;
        this.servicio.editProducto(this.productoPagina)
        for (let p of this.usuarios){
          if(p.email == usuarioActivo.email){
            console.log(p.pujas)
            if(!p.pujas.includes(this.id)){
              p.pujas.push(this.id)
              this.servicio.editUsuario(p)
            }
            this.productoPagina.ultimoPujador = usuarioActivo.displayName
            return
          }
        }
        this.usuarioNuevo.email = usuarioActivo.email
        this.usuarioNuevo.pujas.push(this.id)
        this.servicio.addUsuario(this.usuarioNuevo)
        console.log(firebase.auth().currentUser.email)
        this.productoPagina.ultimoPujador = usuarioActivo.displayName
      }
      else {
        alert("La puja debe ser superior")
      }
    }
    else{
      console.log("Shit")
    }
  }

  ModificarProducto(producto) {
    this.modificarProducto.id = producto.id;
    this.modificarProducto.nombre = producto.nombre;
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
}
