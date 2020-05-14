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
    for (let product of this.productos){
    this.hora = new Date().getTime();
    var auxiliar = 0;
    if(product.tiempoSubasta == "1"){
      auxiliar = 1;
    }
    if(product.tiempoSubasta == "2"){
      auxiliar = 2;
    }
    if(product.tiempoSubasta == "3"){
      auxiliar = 3; 
    }
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
    if(auxiliar == 1){
    product.tiempoFin = (23 - horas) + ':' + (59 - minutos) + ':' + (59 -segundos);
    }
    if(auxiliar == 2){
      product.tiempoFin = (47 - horas) + ':' + (59 - minutos) + ':' + (59 -segundos);
    }
    if(auxiliar == 3){
        product.tiempoFin = (71 - horas) + ':' + (59 - minutos) + ':' + (59 -segundos);
    }
    if (comprobar > auxiliar * 86400000 - 300000){
      this.cambiarColor(product);
    }
    if (product.pujaActual > 100000){
      if (comprobar > auxiliar * 86400000 - 300000){
          this.cambiarColorDestacado(product)}
        else{
          this.marcarDestacado(product);
        }
      
    }
     if (comprobar >= auxiliar * 86400000){
      this.EliminarProducto(product)
    }
  }
}

cambiarColor(producto){
  var color = document.getElementById(producto.id);
  if (color != null){
    color.style.backgroundColor = "#FF9999";
  }
}

marcarDestacado(producto){
  var color = document.getElementById(producto.id);
  if (color != null){
    color.style.backgroundColor = "#99CCFF";
  }
}

cambiarColorDestacado(producto){
  var color = document.getElementById(producto.id);
  if (color != null){
    color.style.backgroundColor = "#CC99FF";
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
