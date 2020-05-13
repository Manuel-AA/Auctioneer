function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"footer text-white fixed-bottom\">\n    <a href=\"https://www.instagram.com\" target=\"_blank\"><img id=\"icono1\" [src]=\"instagram\"></a>\n    <a href=\"https://www.facebook.com\" target=\"_blank\"><img id=\"icono2\" [src]=\"facebook\"></a>\n    <a href=\"https://www.twitter.com\" target=\"_blank\"><img id=\"icono3\" [src]=\"twitter\"></a>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inside/conocer/conocer.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inside/conocer/conocer.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInsideConocerConocerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-encabezado></app-encabezado>\n\n<div class = \"container-fluid bg-dark py-4\">\n\n  <div class=\"container cajaInformacion mb-5\">\n    <br>\n    <div class=\"media bg-light border p-3\" *ngIf=\"imagenActual === 1\" >\n      <img [src]=\"imagen1\" id=\"foto1\">\n      <div class=\"media-body\">\n        <br>\n        <h4>¿Qué es una subasta? </h4>\n        <p>Una subasta consiste en un ejercicio de compra y venta de artículos a base de pujas.<br><br>\n          Un usuario, el subastador, pondrá a la venta uno de sus productos a un precio inicial y por un tiempo determinado.\n          El resto de usuarios podrán pujar por ese producto (siempre y cuando superen en un 5% el coste de la puja anterior) y el que tenga la puja más alta al acabar el tiempo se lleva el producto.\n          Además, existe la posibilidad de comprar el producto de manera instantánea si se abona el importe de comprar ya, impuesto por el subastador y generalmente muy elevado.<br>\n          <br>\n          ¿Lo comprarás directamente o vencerás al resto en la puja?\n        </p>\n      </div>\n    </div>\n\n    <div class=\"media bg-light border p-3\" *ngIf=\"imagenActual === 2\" >\n      <img [src]=\"imagen2\" id=\"foto2\">\n      <div class=\"media-body\">\n        <br>\n        <h4>¿Estas subastas son seguras? </h4>\n        <p>Desde The Auctioneer queremos tranquilizar a todos aquellos usuarios poco experimentados en el mundo de la\n          tecnología y que dudan en si pagar a través de internet es o no seguro. <br> <br>\n\n          Al igual que cualquier método de pago, existen vulnerabilidades. No obstante, es preciso comentar que esta aplicación\n          cuenta con convenios con métodos de pago, como PayPal, los cuales garantizan un pago seguro y, en caso de fraude o robo cibernético,\n          se encargarán de garantizar el reembolso de todo el importe pagado. <br> <br>\n\n          Por lo tanto ante la pregunta, ¿es seguro pagar en esta página? la respuesta es un rotundo SÍ.\n                    \n        </p>                 \n      </div>\n    </div>\n\n    <div class=\"media bg-light border p-3\" *ngIf=\"imagenActual === 3\" >\n      <img [src]=\"imagen3\" id=\"foto3\">\n      <div class=\"media-body\">\n        <br>\n        <h4>¿Quiénes somos? </h4>\n        <p>The Auctioneer está conformado por un pequeño equipo en crecimiento, con muchas ganas de \n          trabajar y seguir incluyendo funcionalidades a nuestro sistema de subastas online. <br> <br>\n\n          Nuestro equipo se centra en 3 pilares: seguridad del cliente, facilidad de uso y organización de la estructura de la página,\n          con el objetivo de que cualquier persona sea capaz de utilizar nuestro sistema y que, tras utilizarlo,\n          se mantenga con nosotros y siga haciendo uso del mismo. <br> <br>\n\n          Así que... ¿a qué estás esperando? ¡ EL TIEMPO DE LAS SUBASTAS SE ACABA !\n                    \n        </p>\n                          \n      </div>\n    </div>\n\n    <br>\n    <img [src] = \"imagenFlechaDer\" id=\"flechaDer\" (click)=\"cambiarImagenDer()\">\n    <img [src] = \"imagenFlechaDer\" id=\"flechaIzq\" (click)=\"cambiarImagenIzq()\">\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    \n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inside/encabezado/encabezado.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inside/encabezado/encabezado.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInsideEncabezadoEncabezadoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"encabezado\">\n  <img class= \"logo\" [src] = \"logotipo\"/>\n  <button type=\"button\" id=\"btn1\" class=\"btn\" (click) = \"logout()\"><strong>Cerrar sesión</strong></button>\n</div>\n<nav class=\"navbar navbar-expand-lg navbar navbar-dark barraNavegacion\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\"><strong>Home</strong></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item opcionNav\">\n          <a class=\"nav-link\" (click)=\"redirigirMisPujas()\"><strong>Mis pujas</strong><span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item opcionNav\">\n          <a class=\"nav-link\" (click)=\"redirigirPerfil()\"><strong>Perfil</strong></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/subida']\"><strong>Subir producto</strong></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/conocenos']\"><strong>Conócenos</strong></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inside/home/home.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inside/home/home.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInsideHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-encabezado></app-encabezado>\n<div class=\"cuerpo pt-4\">\n    <div class=\"cajaProductos\">\n        <div class=\"filtros mt-5 mb-4\">\n            <div class=\"dropdown float-right\">\n                <button class=\"btn btn-success dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Categoria</button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <a class=\"dropdown-item\" (click)=\"categoria = 'Vehiculos'\">Vehículos</a>\n                  <a class=\"dropdown-item\" (click)=\"categoria = 'Edificios'\">Edificios</a>\n                  <a class=\"dropdown-item\" (click)=\"categoria = 'Deporte'\">Deporte</a>\n                  <a class=\"dropdown-item\" (click)=\"categoria = 'Juegos'\">Juegos</a>\n                  <a class=\"dropdown-item\" (click)=\"categoria = 'Lectura'\">Lectura</a>\n                  <a class=\"dropdown-item\" (click)=\"categoria = 'Otro'\">Otro</a>\n                  <hr>\n                  <a class=\"dropdown-item\" (click)=\"categoria = ''\">Eliminar filtro</a>\n                </div>\n            </div>\n            <form class=\"buscador\">\n                <input class=\"form-control\" type=\"search\" name=\"filtroHome\" placeholder=\"Search\" aria-label=\"Search\" [(ngModel)]=\"filtroHome\">\n            </form>\n        </div>\n        <h1 id=\"categoriaFiltro\" *ngIf=\"categoria != ''\">Filtrar por categoria: {{categoria}}</h1>\n        <div class=\"row p-2\">\n            <ng-container *ngFor=\"let producto of productos | filtro: filtroHome\">\n                <div id = {{producto.id}} (click)=\"redirigirProducto(producto)\" class=\"alert producto col-lg-4 col-md-4 col-sm-6 col-xs-12\" role=\"alert\" *ngIf=\"categoria == producto.categoria || categoria == ''\">\n                    <h2 class=\"mt-1 mb-3\">{{producto.nombre}}</h2>\n                    <h6 class=\"my-2\">Categoría: {{producto.categoria}}</h6>\n                    <h6 class=\"my-2\">Precio de salida: {{producto.precioSalida}} €</h6>\n                    <h6 class=\"my-2\">Puja actual: {{producto.pujaActual}} €</h6>\n                    <h6 class=\"my-2\">Último pujador: {{producto.ultimoPujador}}</h6>\n                    <h6 class=\"float-left\" *ngIf = \"producto.precioCompraYa != ''\">Precio para Comprar ya: {{producto.precioCompraYa}} €</h6>\n                    <br>\n                    <h4 class=\"my-2\">{{producto.tiempoFin}}</h4>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inside/mispujas/mispujas.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inside/mispujas/mispujas.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInsideMispujasMispujasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-encabezado></app-encabezado>\n<div class = \"cuerpo pt-4\">\n    <div class=\"cajaProductos\">\n        <div class=\"row p-2\">\n            <div (click)=\"redirigirProducto(producto)\" class=\"alert producto col-lg-4 col-md-4 col-sm-6 col-xs-12\" role=\"alert\" *ngFor=\"let producto of productosPujados | filtro: filtroHome\">\n                <h2 class=\"mt-1 mb-3\">{{producto.nombre}}</h2>\n                <h6 class=\"my-3\">Categoría: {{producto.categoria}}</h6>\n                <h6 class=\"my-3\">Precio de salida: {{producto.precioSalida}} €</h6>\n                <h6 class=\"my-3\">Puja actual: {{producto.pujaActual}} €</h6>\n                <h6 class=\"my-3\">Último pujador: {{producto.ultimoPujador}}</h6>\n                <h6 class=\"float-left\" *ngIf = \"producto.precioCompraYa != ''\">Precio para Comprar ya: {{producto.precioCompraYa}} €</h6>\n                <br>\n                <h4 class=\"my-2\">{{producto.tiempoFin}}</h4>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inside/perfil/perfil.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inside/perfil/perfil.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInsidePerfilPerfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-encabezado></app-encabezado>\n<div class = \"cuerpo pt-4\">\n    <div class=\"container bg-light rounded mb-4\">\n        <div class=\"text-center userName\">{{name}}</div>\n        <br>\n        <div class=\"row\">\n            <h4 class=\"text-lg-center col-lg-6 col-md-12 col-sm-12 col-xs-12\">Email: {{email}}</h4>\n            <h4 class=\"text-lg-center col-lg-6 col-md-12 col-sm-12 col-xs-12\">Productos subastados: {{numProductos}}</h4>\n        </div>\n    </div>\n    <div class=\"cajaProductos\">\n        <div class=\"row p-2\">\n            <div (click)=\"redirigirProducto(producto)\" class=\"alert producto col-lg-4 col-md-4 col-sm-6 col-xs-12\" role=\"alert\" *ngFor=\"let producto of productos | filtro: filtroHome\">\n                <h2 class=\"mt-1 mb-3\">{{producto.nombre}}</h2>\n                <h6 class=\"my-3\">Categoría: {{producto.categoria}}</h6>\n                <h6 class=\"my-3\">Precio de salida: {{producto.precioSalida}} €</h6>\n                <h6 class=\"my-3\">Puja actual: {{producto.pujaActual}} €</h6>\n                <h6 class=\"my-3\">Último pujador: {{producto.ultimoPujador}}</h6>\n                <h6 class=\"float-left\" *ngIf = \"producto.precioCompraYa != ''\">Precio para Comprar ya: {{producto.precioCompraYa}} €</h6>\n                <br>\n                <h4 class=\"my-2\">{{producto.tiempoFin}}</h4>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inside/subir_producto/subir_producto.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inside/subir_producto/subir_producto.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInsideSubir_productoSubir_productoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-encabezado></app-encabezado>\n\n<div class = \"container cajaFormulario\">\n  <h1 class=\"text-center\"><strong>Subastar un producto</strong></h1>\n  <br>\n  <form (ngSubmit) = \"AgregarProducto()\" #f=\"ngForm\">\n    <br>\n    <div class=\"datos1 float-left\">\n      <h4>Nombre:</h4>\n      <input type=\"text\" #nombre = \"ngModel\" placeholder=\"Ingresa el nombre del producto\" name=\"nombre\" class=\"form-control\" maxlength=\"30\" [(ngModel)]=\"producto.nombre\" required>\n      <span *ngIf=\"nombre.value == '' \"><h5 style=\"color: red\"><strong>Campo obligatorio</strong></h5></span>\n    </div>\n    <div class=\"datos1 float-right\">\n      <h4>Categoria:</h4>\n      <!--<input type=\"text\" placeholder=\"Ingresa la categoria del producto\" name=\"categoria\" class=\"form-control\" [(ngModel)]=\"producto.categoria\">-->\n      <select id=\"categoria\" #categoria = \"ngModel\" placeholder=\"Ingresa la categoria del producto\" name=\"categoria\" class=\"form-control\" [(ngModel)]=\"producto.categoria\" required>\n        <option value=\"Vehiculos\">Vehiculos</option>\n        <option value=\"Edificios\">Edificios</option>\n        <option value=\"Deporte\">Deporte</option>\n        <option value=\"Juegos\">Juegos</option>\n        <option value=\"Lectura\">Lectura</option>\n        <option value=\"Otro\">Otro</option>\n      </select>\n      <span *ngIf=\"categoria.value == '' \"><h5 style=\"color: red\"><strong>Campo obligatorio</strong></h5></span>\n    </div>\n    <br><br><br><br><br><br>\n    <h4>Precio de salida:</h4>\n    <input type=\"number\" #precioSalida = \"ngModel\" placeholder=\"Ingresa el precio de salida del producto\" name=\"precioSalida\" class=\"form-control\" [(ngModel)]=\"producto.precioSalida\" required>\n    <span *ngIf=\"precioSalida.value == '' \"><h5 style=\"color: red\"><strong>Campo obligatorio</strong></h5></span>\n    <br><br>\n    <h4>Precio de CompraYa (Opcional):</h4>\n    <input type=\"number\" placeholder=\"Ingresa el precio de CompraYa del producto\" name=\"precioCompraYa\" class=\"form-control\" [(ngModel)]=\"producto.precioCompraYa\">\n    <br><br>\n    <button id=\"botonInicio\" class=\"btn btn-success mt-4\" type=\"submit\" [disabled]=\"f.invalid\"><strong>Agregar</strong></button>\n  </form>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inside/ver_producto/ver_producto.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inside/ver_producto/ver_producto.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInsideVer_productoVer_productoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-encabezado></app-encabezado>\n\n<div class = \"fondo p-4\">\n  <div class=\"container cajaProducto bg-light p-4\">\n    \n    <div class=\"float-right mr-3\" (click)=\"ModificarProducto(productoPagina)\" data-toggle=\"modal\" data-target=\"#exampleModal\" *ngIf=\"(productoPagina.emailSubastador == usuarioActivoEmail) && (productoPagina.pujaActual == productoPagina.precioSalida)\">\n        <i class=\"fas fa-pencil-alt\"></i>\n    </div>\n    <div id=\"titulo\">{{productoPagina.nombre}}</div>\n    <br>\n    <div class=\"imagenProducto\">\n      IMAGEN\n    </div>\n    <div class=\"infoProducto\">\n      <h4>Categoría: {{productoPagina.categoria}}</h4>\n      <br>\n      <h4>Subastador: {{productoPagina.subastador}}</h4>\n      <br>\n      <h4>Precio de salida: {{productoPagina.precioSalida}} $</h4>\n      <br>\n      <h4>Puja actual: {{productoPagina.pujaActual}} $</h4>\n      <br>\n      <h4>Último pujador: {{productoPagina.ultimoPujador}}</h4>\n      <br>\n      <h4 *ngIf = \"productoPagina.precioCompraYa != ''\">Precio para Comprar ya: {{productoPagina.precioCompraYa}} $</h4>\n      <br>\n      <h1>{{productoPagina.tiempoFin}}</h1>\n      <br>\n    </div>\n    <input type=\"number\" placeholder=\"Ingresa tu puja\" name=\"precioNuevaPuja\" class=\"Pujar float-left\" *ngIf=\"productoPagina.emailSubastador != usuarioActivoEmail\" [(ngModel)]=\"nuevaPuja\">\n    <button id=\"botonPujar\" class=\"btn btn-success ml-2\" (click)=\"cambiarPuja(nuevaPuja)\"type=\"button\" *ngIf=\"productoPagina.emailSubastador != usuarioActivoEmail\">Pujar</button>\n    <button id=\"botonComprarYa\" class=\"btn btn-success\" (click)=\"comprarYa(productoPagina)\"type=\"button\" *ngIf=\"(productoPagina.emailSubastador != usuarioActivoEmail) && (productoPagina.precioCompraYa != '')\">Comprar ya</button>\n\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modificar: {{modificarProducto.nombre}}</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <div class = \"container\">\n\n              <form (ngSubmit) = \"AgregarProductoModificado()\">\n                  <input type=\"text\" placeholder=\"Ingresa el nuevo nombre del producto\" name=\"nombre\" class=\"form-control  mt-4\" [(ngModel)]=\"modificarProducto.nombre\">\n                  <select id=\"categoria\" placeholder=\"Ingresa la nueva categoria del producto\" name=\"categoria\" class=\"form-control mt-4\" [(ngModel)]=\"modificarProducto.categoria\">\n                    <option value=\"Vehiculos\">Vehiculos</option>\n                    <option value=\"Edificios\">Edificios</option>\n                    <option value=\"Deporte\">Deporte</option>\n                    <option value=\"Juegos\">Juegos</option>\n                    <option value=\"Lectura\">Lectura</option>\n                    <option value=\"Otro\">Otro</option>\n                  </select>\n                  <input type=\"number\" placeholder=\"Ingresa el nuevo precio de salida del producto\" name=\"precioSalida\" class=\"form-control  mt-4\" [(ngModel)]=\"modificarProducto.precioSalida\">\n                  <input type=\"number\" placeholder=\"Ingresa el nuevo precio de CompraYa del producto\" name=\"precioCompraYa\" class=\"form-control  mt-4\" [(ngModel)]=\"modificarProducto.precioCompraYa\">\n                  <button class=\"btn btn-warning mt-4\" type=\"submit\">Guardar cambios</button>\n              </form>\n            \n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/encabezado-principal/encabezado-principal.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/encabezado-principal/encabezado-principal.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPresentacionEncabezadoPrincipalEncabezadoPrincipalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"encabezado\">\n    <img class= \"logo\" [src] = \"logotipo\"/>\n    <button type=\"button\" id=\"btn1\" class=\"btn\" [routerLink]=\"['../registro']\"><strong>Registrarse</strong></button>\n    <button type=\"button\" id=\"btn2\" class=\"btn\" [routerLink]=\"['../inicio-sesion']\"><strong>Iniciar Sesión</strong></button>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/inicio-sesion/inicio-sesion.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/inicio-sesion/inicio-sesion.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPresentacionInicioSesionInicioSesionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-encabezado-principal></app-encabezado-principal>\n\n<div class=\"container cajaFormulario\">\n  <h1 class=\"text-center\"><strong>Inicio de sesión</strong></h1>\n  <br>\n  <form (ngSubmit)=\"tryLogin(usuario.email, usuario.password)\" #f=\"ngForm\">\n    <h4>Email:</h4>\n    <input type=\"email\" placeholder=\"Ingresa tu email\" name=\"email\" class=\"form-control\"  [(ngModel)]=\"usuario.email\" [ngModelOptions]=\"{standalone: true}\" ngDefaultControl pattern=\"[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.([a-zA-Z]{2,4})+$\" #email=\"ngModel\" required >\n    <span *ngIf=\"email.value != '' && email.invalid\"><h4 style=\"color: red\">Email no válido, comprueba el formato</h4></span>\n    <span *ngIf=\"email.value == '' \"><h4 style=\"color: red\">Campo obligatorio</h4></span>\n    <br>\n    <h4>Contraseña:</h4>\n    <input type=\"password\" placeholder=\"Ingresa una contraseña\" name=\"password\" class=\"form-control\" minlength=8 [(ngModel)]=\"usuario.password\" [ngModelOptions]=\"{standalone: true}\" ngDefaultControl #password=\"ngModel\" required >\n    <span *ngIf=\"password.value != '' && password.invalid\"><h4 style=\"color: red\">Contraseña no válida. Debe tener 8 caracteres mínimo</h4></span>\n    <span *ngIf=\"password.value == '' \"><h4 style=\"color: red\">Campo obligatorio</h4></span>\n    <br>\n    <button id=\"botonInicio\" class=\"btn btn-success mt-3\" type=\"submit\" [disabled]=\"f.invalid\"><strong>Iniciar Sesion</strong></button>\n  </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/presentacion.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/presentacion.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPresentacionPresentacionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-encabezado-principal></app-encabezado-principal>\n\n<div class=\"container-fluid cajaIntroduccion\">\n    <br>\n    <div class=\"jumbotron text-center\">\n        <h1>The Auctioneer</h1>\n        <p>Tu sitio Web favorito para realizar subastas Online</p> \n    </div>\n        \n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <h3>Gana Dinero</h3>\n                <p>Gana dinero con eso que ya no usas</p>\n                <p>Vende tus productos al mejor postor</p>\n            </div>\n            <div class=\"col-sm-4\">\n                <h3>Adquiere Productos</h3>\n                <p>Consigue ese objeto que tanto anhelas</p>\n                <p>Puja en las mejores subastas Online</p>\n            </div>\n            <div class=\"col-sm-4\">\n                <h3>Y Mucho más...</h3>        \n                <p>Todo esto y mucho más es posible con </p>\n                <p>con The Auctioneer. Regístrate para descubrirlo.</p>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/registro/registro.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/registro/registro.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPresentacionRegistroRegistroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-encabezado-principal></app-encabezado-principal>\n\n<div class=\"container cajaFormulario\">\n  <h1 class=\"text-center\"><strong>Registro</strong></h1>\n  <br>\n  <form (ngSubmit)=\"tryRegister(usuario.email, usuario.password, usuario.nombreUsuario)\" #f=\"ngForm\">\n    <h4>Nombre de usuario:</h4>\n    <input type=\"text\" #nombre = \"ngModel\" placeholder=\"Ingresa tu nombre\" name=\"nombreUsuario\" class=\"form-control\" [(ngModel)]=\"usuario.nombreUsuario\" required>\n    <span *ngIf=\"nombre.value == '' \"><h4 style=\"color: red\">Campo obligatorio</h4></span>\n    <br>\n    <h4>Email:</h4>\n    <input type=\"email\" placeholder=\"Ingresa tu nombre\" name=\"email\" class=\"form-control\"  [(ngModel)]=\"usuario.email\" pattern=\"[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.([a-zA-Z]{2,4})+$\" #email=\"ngModel\" required>\n    <span *ngIf=\"email.value != '' && email.invalid\"><h4 style=\"color: red\">Email no válido, comprueba el formato</h4></span>\n    <span *ngIf=\"email.value == '' \"><h4 style=\"color: red\">Campo obligatorio</h4></span>\n    <br>\n    <h4>Contraseña:</h4>\n    <input type=\"password\" placeholder=\"Ingresa una contraseña\" name=\"password\" class=\"form-control\" minlength=8 [(ngModel)]=\"usuario.password\" #password=\"ngModel\" required>\n    <span *ngIf=\"password.value != '' && password.invalid\"><h4 style=\"color: red\">Contraseña no válida. Debe tener 8 caracteres mínimo</h4></span>\n    <span *ngIf=\"password.value == '' \"><h4 style=\"color: red\">Campo obligatorio</h4></span>\n    <br>\n    <button id=\"botonInicio\" class=\"btn btn-success mt-3\" type=\"submit\" [disabled]=\"f.invalid\"><strong>Registrarse</strong></button>\n  </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _inside_subir_producto_subir_producto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inside/subir_producto/subir_producto.component */
    "./src/app/inside/subir_producto/subir_producto.component.ts");
    /* harmony import */


    var _inside_ver_producto_ver_producto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./inside/ver_producto/ver_producto.component */
    "./src/app/inside/ver_producto/ver_producto.component.ts");
    /* harmony import */


    var _inside_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inside/home/home.component */
    "./src/app/inside/home/home.component.ts");
    /* harmony import */


    var _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./presentacion/presentacion.component */
    "./src/app/presentacion/presentacion.component.ts");
    /* harmony import */


    var _presentacion_registro_registro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./presentacion/registro/registro.component */
    "./src/app/presentacion/registro/registro.component.ts");
    /* harmony import */


    var _presentacion_inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./presentacion/inicio-sesion/inicio-sesion.component */
    "./src/app/presentacion/inicio-sesion/inicio-sesion.component.ts");
    /* harmony import */


    var _inside_conocer_conocer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./inside/conocer/conocer.component */
    "./src/app/inside/conocer/conocer.component.ts");
    /* harmony import */


    var _inside_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./inside/perfil/perfil.component */
    "./src/app/inside/perfil/perfil.component.ts");
    /* harmony import */


    var _inside_mispujas_mispujas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./inside/mispujas/mispujas.component */
    "./src/app/inside/mispujas/mispujas.component.ts");

    var routes = [{
      path: 'subida',
      component: _inside_subir_producto_subir_producto_component__WEBPACK_IMPORTED_MODULE_3__["SubirProductoComponent"]
    }, {
      path: 'ver/:id',
      component: _inside_ver_producto_ver_producto_component__WEBPACK_IMPORTED_MODULE_4__["VerProductoComponent"]
    }, {
      path: 'home',
      component: _inside_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'mispujas/:id',
      component: _inside_mispujas_mispujas_component__WEBPACK_IMPORTED_MODULE_11__["MispujasComponent"]
    }, {
      path: 'presentacion',
      component: _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_6__["PresentacionComponent"]
    }, {
      path: 'registro',
      component: _presentacion_registro_registro_component__WEBPACK_IMPORTED_MODULE_7__["RegistroComponent"]
    }, {
      path: 'inicio-sesion',
      component: _presentacion_inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_8__["InicioSesionComponent"]
    }, {
      path: 'conocenos',
      component: _inside_conocer_conocer_component__WEBPACK_IMPORTED_MODULE_9__["ConocerComponent"]
    }, {
      path: 'perfil/:id',
      component: _inside_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_10__["PerfilComponent"]
    }, {
      path: '',
      component: _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_6__["PresentacionComponent"],
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/',
      pathMatch: 'full'
    }
    /*redirigir a una pagina error 404 (crear otro componente)*/
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = ' The Auctioneer';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _inside_encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inside/encabezado/encabezado.component */
    "./src/app/inside/encabezado/encabezado.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _inside_subir_producto_subir_producto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./inside/subir_producto/subir_producto.component */
    "./src/app/inside/subir_producto/subir_producto.component.ts");
    /* harmony import */


    var _inside_ver_producto_ver_producto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./inside/ver_producto/ver_producto.component */
    "./src/app/inside/ver_producto/ver_producto.component.ts");
    /* harmony import */


    var _inside_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./inside/home/home.component */
    "./src/app/inside/home/home.component.ts");
    /* harmony import */


    var _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./presentacion/presentacion.component */
    "./src/app/presentacion/presentacion.component.ts");
    /* harmony import */


    var _presentacion_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./presentacion/registro/registro.component */
    "./src/app/presentacion/registro/registro.component.ts");
    /* harmony import */


    var _presentacion_inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./presentacion/inicio-sesion/inicio-sesion.component */
    "./src/app/presentacion/inicio-sesion/inicio-sesion.component.ts");
    /* harmony import */


    var _presentacion_encabezado_principal_encabezado_principal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./presentacion/encabezado-principal/encabezado-principal.component */
    "./src/app/presentacion/encabezado-principal/encabezado-principal.component.ts");
    /* harmony import */


    var _inside_conocer_conocer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./inside/conocer/conocer.component */
    "./src/app/inside/conocer/conocer.component.ts");
    /* harmony import */


    var _inside_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./inside/perfil/perfil.component */
    "./src/app/inside/perfil/perfil.component.ts");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! angularfire2 */
    "./node_modules/angularfire2/index.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! angularfire2/storage */
    "./node_modules/angularfire2/storage/index.js");
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_firestore_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/firestore.service */
    "./src/app/services/firestore.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _filtro_filtro_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./filtro/filtro.pipe */
    "./src/app/filtro/filtro.pipe.ts");
    /* harmony import */


    var _inside_mispujas_mispujas_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./inside/mispujas/mispujas.component */
    "./src/app/inside/mispujas/mispujas.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _inside_encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_5__["EncabezadoComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _inside_subir_producto_subir_producto_component__WEBPACK_IMPORTED_MODULE_7__["SubirProductoComponent"], _inside_ver_producto_ver_producto_component__WEBPACK_IMPORTED_MODULE_8__["VerProductoComponent"], _inside_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_10__["PresentacionComponent"], _presentacion_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__["RegistroComponent"], _presentacion_inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_12__["InicioSesionComponent"], _presentacion_encabezado_principal_encabezado_principal_component__WEBPACK_IMPORTED_MODULE_13__["EncabezadoPrincipalComponent"], _inside_conocer_conocer_component__WEBPACK_IMPORTED_MODULE_14__["ConocerComponent"], _inside_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_15__["PerfilComponent"], _filtro_filtro_pipe__WEBPACK_IMPORTED_MODULE_23__["FiltroPipe"], _inside_mispujas_mispujas_component__WEBPACK_IMPORTED_MODULE_24__["MispujasComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], angularfire2__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase), angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorageModule"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"]],
      providers: [_services_firestore_service__WEBPACK_IMPORTED_MODULE_21__["FirestoreService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/filtro/filtro.pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/filtro/filtro.pipe.ts ***!
    \***************************************/

  /*! exports provided: FiltroPipe */

  /***/
  function srcAppFiltroFiltroPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltroPipe", function () {
      return FiltroPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FiltroPipe = /*#__PURE__*/function () {
      function FiltroPipe() {
        _classCallCheck(this, FiltroPipe);
      }

      _createClass(FiltroPipe, [{
        key: "transform",
        value: function transform() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var resultadoBusqueda = [];

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var _iterator = _createForOfIteratorHelper(value),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var producto = _step.value;

              if (producto.nombre.indexOf(args) > -1) {
                resultadoBusqueda.push(producto);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return resultadoBusqueda;
        }
      }]);

      return FiltroPipe;
    }();

    FiltroPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filtro'
    })], FiltroPipe);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\n  background-color: #bd2727;\n  padding: 0.5%;\n}\n\n#icono1 {\n  width: 2.5%;\n  margin-left: 23.75%;\n}\n\n#icono2 {\n  width: 2.5%;\n  margin-left: 22.5%;\n}\n\n#icono3 {\n  width: 2.5%;\n  margin-left: 22.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODksIDM5LCAzOSk7XG4gICAgcGFkZGluZzogMC41JTtcbn1cblxuI2ljb25vMSB7XG4gICAgd2lkdGg6IDIuNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDIzLjc1JTtcbn1cblxuI2ljb25vMiB7XG4gICAgd2lkdGg6IDIuNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDIyLjUlO1xufVxuXG4jaWNvbm8zIHtcbiAgICB3aWR0aDogMi41JTtcbiAgICBtYXJnaW4tbGVmdDogMjIuNSU7XG59IiwiLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDI3Mjc7XG4gIHBhZGRpbmc6IDAuNSU7XG59XG5cbiNpY29ubzEge1xuICB3aWR0aDogMi41JTtcbiAgbWFyZ2luLWxlZnQ6IDIzLjc1JTtcbn1cblxuI2ljb25vMiB7XG4gIHdpZHRoOiAyLjUlO1xuICBtYXJnaW4tbGVmdDogMjIuNSU7XG59XG5cbiNpY29ubzMge1xuICB3aWR0aDogMi41JTtcbiAgbWFyZ2luLWxlZnQ6IDIyLjUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.instagram = "./assets/img/instagram.png";
        this.facebook = "./assets/img/facebook.png";
        this.twitter = "./assets/img/twitter.png";
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/inside/conocer/conocer.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/inside/conocer/conocer.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInsideConocerConocerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cajaInformacion {\n  background-color: #bd2727;\n}\n\n#flechaDer {\n  width: 5%;\n  float: right;\n  margin-right: 40%;\n  margin-bottom: 5%;\n  cursor: pointer;\n}\n\n#flechaIzq {\n  width: 5%;\n  float: left;\n  margin-left: 40%;\n  margin-bottom: 5%;\n  transform: rotate(180deg);\n  cursor: pointer;\n}\n\n#foto1 {\n  height: 20%;\n  width: 25%;\n  margin-bottom: -10%;\n}\n\n#foto2 {\n  height: 40%;\n  width: 30%;\n  margin-top: 6%;\n  margin-right: 1%;\n}\n\n#foto3 {\n  margin-top: 3%;\n  height: 40%;\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvaW5zaWRlL2Nvbm9jZXIvY29ub2Nlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5zaWRlL2Nvbm9jZXIvY29ub2Nlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2luc2lkZS9jb25vY2VyL2Nvbm9jZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FqYUluZm9ybWFjaW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAzOSwgMzkpO1xufVxuXG4jZmxlY2hhRGVye1xuICAgIHdpZHRoOiA1JTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZmxlY2hhSXpxe1xuICAgIHdpZHRoOiA1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZm90bzF7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTAlO1xufVxuXG4jZm90bzJ7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW4tdG9wOiA2JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xufVxuXG4jZm90bzN7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgd2lkdGg6IDMwJTtcbn0iLCIuY2FqYUluZm9ybWFjaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkMjcyNztcbn1cblxuI2ZsZWNoYURlciB7XG4gIHdpZHRoOiA1JTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDQwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2ZsZWNoYUl6cSB7XG4gIHdpZHRoOiA1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNmb3RvMSB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tYm90dG9tOiAtMTAlO1xufVxuXG4jZm90bzIge1xuICBoZWlnaHQ6IDQwJTtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLXRvcDogNiU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbiNmb3RvMyB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBoZWlnaHQ6IDQwJTtcbiAgd2lkdGg6IDMwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/inside/conocer/conocer.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/inside/conocer/conocer.component.ts ***!
    \*****************************************************/

  /*! exports provided: ConocerComponent */

  /***/
  function srcAppInsideConocerConocerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConocerComponent", function () {
      return ConocerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConocerComponent = /*#__PURE__*/function () {
      function ConocerComponent() {
        _classCallCheck(this, ConocerComponent);

        this.imagen1 = "./assets/img/subasta.jpeg";
        this.imagen2 = "./assets/img/seguridad.jpeg";
        this.imagen3 = "./assets/img/pilares.PNG";
        this.imagenFlechaDer = "./assets/img/flecha_derecha.png";
        this.imagenActual = 1;
      }

      _createClass(ConocerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cambiarImagenDer",
        value: function cambiarImagenDer() {
          if (this.imagenActual != 3) {
            this.imagenActual = this.imagenActual + 1;
          } else {
            this.imagenActual = 1;
          }
        }
      }, {
        key: "cambiarImagenIzq",
        value: function cambiarImagenIzq() {
          if (this.imagenActual != 1) {
            this.imagenActual = this.imagenActual - 1;
          } else {
            this.imagenActual = 3;
          }
        }
      }]);

      return ConocerComponent;
    }();

    ConocerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-conocer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conocer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inside/conocer/conocer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conocer.component.scss */
      "./src/app/inside/conocer/conocer.component.scss"))["default"]]
    })], ConocerComponent);
    /***/
  },

  /***/
  "./src/app/inside/encabezado/encabezado.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/inside/encabezado/encabezado.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInsideEncabezadoEncabezadoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".encabezado {\n  height: 120px;\n  background-color: #bd2727;\n}\n\n.logo {\n  height: 100%;\n  margin-left: 43.5%;\n}\n\n#btn1 {\n  margin-top: 2.6%;\n  margin-left: 29%;\n  color: white;\n  border: 2px solid white;\n  position: absolute;\n}\n\n.barraNavegacion {\n  background-color: #e40000;\n}\n\n.opcionNav {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvaW5zaWRlL2VuY2FiZXphZG8vZW5jYWJlemFkby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5zaWRlL2VuY2FiZXphZG8vZW5jYWJlemFkby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9pbnNpZGUvZW5jYWJlemFkby9lbmNhYmV6YWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVuY2FiZXphZG8ge1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgMzksIDM5KTtcbn1cblxuLmxvZ28ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogNDMuNSU7XG59XG5cblxuI2J0bjEge1xuICAgIG1hcmdpbi10b3A6IDIuNiU7XG4gICAgbWFyZ2luLWxlZnQ6IDI5JTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYmFycmFOYXZlZ2FjaW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAwLCAwKTtcbn1cblxuLm9wY2lvbk5hdiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsIi5lbmNhYmV6YWRvIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkMjcyNztcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA0My41JTtcbn1cblxuI2J0bjEge1xuICBtYXJnaW4tdG9wOiAyLjYlO1xuICBtYXJnaW4tbGVmdDogMjklO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5iYXJyYU5hdmVnYWNpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQwMDAwO1xufVxuXG4ub3BjaW9uTmF2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/inside/encabezado/encabezado.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/inside/encabezado/encabezado.component.ts ***!
    \***********************************************************/

  /*! exports provided: EncabezadoComponent */

  /***/
  function srcAppInsideEncabezadoEncabezadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EncabezadoComponent", function () {
      return EncabezadoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/firestore.service */
    "./src/app/services/firestore.service.ts");

    var EncabezadoComponent = /*#__PURE__*/function () {
      function EncabezadoComponent(router, servicio) {
        _classCallCheck(this, EncabezadoComponent);

        this.router = router;
        this.servicio = servicio;
        this.logotipo = "./assets/img/logotipo.png";
      }

      _createClass(EncabezadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "redirigirPerfil",
        value: function redirigirPerfil() {
          this.router.navigate(["/perfil/", firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid]);
        }
      }, {
        key: "redirigirMisPujas",
        value: function redirigirMisPujas() {
          this.router.navigate(["/mispujas/", firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid]);
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this = this;

          this.servicio.doLogout().then(function (res) {
            console.log(firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser);

            _this.router.navigate([""]);
          }, function (error) {
            console.log("Error de logout", error);
          });
        }
      }]);

      return EncabezadoComponent;
    }();

    EncabezadoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]
      }];
    };

    EncabezadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-encabezado',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./encabezado.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inside/encabezado/encabezado.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./encabezado.component.scss */
      "./src/app/inside/encabezado/encabezado.component.scss"))["default"]]
    })], EncabezadoComponent);
    /***/
  },

  /***/
  "./src/app/inside/home/home.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/inside/home/home.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInsideHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cuerpo {\n  min-height: 500px;\n  padding-left: 2%;\n  padding-right: 2%;\n  padding-bottom: 5%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n#categoriaFiltro {\n  color: white;\n}\n\n.cajaProductos {\n  min-height: 400px;\n  padding-left: 2%;\n  padding-right: 2%;\n  padding-top: 1%;\n  background-color: #c80000;\n}\n\n.filtros {\n  width: 30%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.buscador {\n  width: 70%;\n  min-width: 200px;\n}\n\n.producto {\n  background-color: white;\n  border: 2px solid red;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvaW5zaWRlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5zaWRlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2luc2lkZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VlcnBvIHtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODAwKTtcbn1cblxuI2NhdGVnb3JpYUZpbHRybyB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FqYVByb2R1Y3RvcyB7XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgICBwYWRkaW5nLXRvcDogMSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMCwgMCk7XG59XG5cbi5maWx0cm9zIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmJ1c2NhZG9yIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5wcm9kdWN0byB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iLCIuY3VlcnBvIHtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuI2NhdGVnb3JpYUZpbHRybyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhamFQcm9kdWN0b3Mge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgcGFkZGluZy1yaWdodDogMiU7XG4gIHBhZGRpbmctdG9wOiAxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4MDAwMDtcbn1cblxuLmZpbHRyb3Mge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uYnVzY2Fkb3Ige1xuICB3aWR0aDogNzAlO1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4ucHJvZHVjdG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/inside/home/home.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/inside/home/home.component.ts ***!
    \***********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppInsideHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/firestore.service */
    "./src/app/services/firestore.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); //import { FirestoreService } from 'src/app/services/firestore.service';


    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(firestoreService, router) {
        var _this2 = this;

        _classCallCheck(this, HomeComponent);

        this.firestoreService = firestoreService;
        this.router = router;
        this.hora = 0;
        this.identificador = 0;
        this.color = "red";
        this.categoria = '';
        this.filtroHome = "";
        this.firestoreService.listaProducto().subscribe(function (producto) {
          _this2.productos = producto;
        });
        setInterval(function () {
          _this2.myTimer();
        }, 1000);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "redirigirProducto",
        value: function redirigirProducto(producto) {
          this.router.navigate(["/ver/", producto.id]);
        }
      }, {
        key: "myTimer",
        value: function myTimer() {
          var _iterator2 = _createForOfIteratorHelper(this.productos),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var product = _step2.value;
              this.hora = new Date().getTime();
              this.valor = this.hora - product.tiempoInicio;
              var comprobar = this.valor;
              var segundos = 0;
              var minutos = 0;
              var horas = 0;

              if (this.valor >= 1000) {
                segundos = Math.floor(this.valor / 1000);
                this.valor = this.valor % 1000;

                if (segundos >= 60) {
                  minutos = Math.floor(segundos / 60);
                  segundos = segundos % 60;

                  if (minutos >= 60) {
                    horas = Math.floor(minutos / 60);
                    minutos = minutos % 60;
                  }
                }
              }

              product.tiempoFin = 23 - horas + ':' + (59 - minutos) + ':' + (59 - segundos);

              if (comprobar > 86400000 - 300000) {
                this.cambiarColor(product);
              }

              if (product.pujaActual > 100000) {
                if (comprobar > 86400000 - 300000) {
                  this.cambiarColorDestacado(product);
                } else {
                  this.marcarDestacado(product);
                }
              }

              if (comprobar >= 86400000) {
                this.EliminarProducto(product);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }, {
        key: "cambiarColor",
        value: function cambiarColor(producto) {
          var color = document.getElementById(producto.id);
          color.style.backgroundColor = "#FF9999";
        }
      }, {
        key: "marcarDestacado",
        value: function marcarDestacado(producto) {
          var color = document.getElementById(producto.id);
          color.style.backgroundColor = "#99CCFF";
        }
      }, {
        key: "cambiarColorDestacado",
        value: function cambiarColorDestacado(producto) {
          var color = document.getElementById(producto.id);
          color.style.backgroundColor = "#CC99FF";
        }
      }, {
        key: "EliminarProducto",
        value: function EliminarProducto(producto) {
          this.firestoreService.removeProducto(producto);
          var i = this.productos.indexOf(producto);
          this.productos.splice(i, 1);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inside/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/inside/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/inside/mispujas/mispujas.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/inside/mispujas/mispujas.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInsideMispujasMispujasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cuerpo {\n  min-height: 500px;\n  padding-left: 2%;\n  padding-right: 2%;\n  padding-bottom: 5%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.cajaProductos {\n  min-height: 350px;\n  padding-left: 2%;\n  padding-right: 2%;\n  padding-top: 1%;\n  background-color: #c80000;\n}\n\n.producto {\n  background-color: white;\n  border: 2px solid red;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvaW5zaWRlL21pc3B1amFzL21pc3B1amFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnNpZGUvbWlzcHVqYXMvbWlzcHVqYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9pbnNpZGUvbWlzcHVqYXMvbWlzcHVqYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VlcnBvIHtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODAwKTtcbn1cblxuLmNhamFQcm9kdWN0b3Mge1xuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgcGFkZGluZy1yaWdodDogMiU7XG4gICAgcGFkZGluZy10b3A6IDElO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDAsIDApO1xufVxuXG4ucHJvZHVjdG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiLmN1ZXJwbyB7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi5jYWphUHJvZHVjdG9zIHtcbiAgbWluLWhlaWdodDogMzUwcHg7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xuICBwYWRkaW5nLXRvcDogMSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjODAwMDA7XG59XG5cbi5wcm9kdWN0byB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/inside/mispujas/mispujas.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/inside/mispujas/mispujas.component.ts ***!
    \*******************************************************/

  /*! exports provided: MispujasComponent */

  /***/
  function srcAppInsideMispujasMispujasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MispujasComponent", function () {
      return MispujasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/firestore.service */
    "./src/app/services/firestore.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);

    var MispujasComponent = /*#__PURE__*/function () {
      function MispujasComponent(firestoreService, ruta, router) {
        var _this3 = this;

        _classCallCheck(this, MispujasComponent);

        this.firestoreService = firestoreService;
        this.ruta = ruta;
        this.router = router;
        this.productos = [];
        this.usuarioActivoPujas = [];
        this.hora = 0;
        this.ruta.params.subscribe(function (params) {
          _this3.id = params['id'];
        });
        setInterval(function () {
          _this3.myTimer();
        }, 1000);
        this.firestoreService.listaUsuario().subscribe(function (usuario) {
          var _iterator3 = _createForOfIteratorHelper(usuario),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var u = _step3.value;

              if (u.email == firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.email) {
                _this3.usuarioActivoPujas = u.pujas;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        });
        this.firestoreService.listaProducto().subscribe(function (producto) {
          _this3.productosPujados = [];
          _this3.productos = producto;

          var _iterator4 = _createForOfIteratorHelper(_this3.productos),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var p = _step4.value;

              var _iterator5 = _createForOfIteratorHelper(_this3.usuarioActivoPujas),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var p2 = _step5.value;

                  if (p.id == p2) {
                    _this3.productosPujados.push(p);
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        });
      }

      _createClass(MispujasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "redirigirProducto",
        value: function redirigirProducto(producto) {
          this.router.navigate(["/ver/", producto.id]);
        }
      }, {
        key: "myTimer",
        value: function myTimer() {
          var _iterator6 = _createForOfIteratorHelper(this.productos),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var product = _step6.value;
              this.hora = new Date().getTime();
              this.valor = this.hora - product.tiempoInicio;
              var comprobar = this.valor;
              var segundos = 0;
              var minutos = 0;
              var horas = 0;

              if (this.valor >= 1000) {
                segundos = Math.floor(this.valor / 1000);
                this.valor = this.valor % 1000;

                if (segundos >= 60) {
                  minutos = Math.floor(segundos / 60);
                  segundos = segundos % 60;

                  if (minutos >= 60) {
                    horas = Math.floor(minutos / 60);
                    minutos = minutos % 60;
                  }
                }
              }

              product.tiempoFin = 23 - horas + ':' + (59 - minutos) + ':' + (59 - segundos);

              if (comprobar >= 86400000) {
                this.EliminarProducto(product);
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      }, {
        key: "EliminarProducto",
        value: function EliminarProducto(producto) {
          this.firestoreService.removeProducto(producto);
          var i = this.productos.indexOf(producto);
          this.productos.splice(i, 1);
          alert("El producto se ha borrado correctamente");
          this.router.navigate(["/home"]);
        }
      }]);

      return MispujasComponent;
    }();

    MispujasComponent.ctorParameters = function () {
      return [{
        type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MispujasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mispujas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mispujas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inside/mispujas/mispujas.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mispujas.component.scss */
      "./src/app/inside/mispujas/mispujas.component.scss"))["default"]]
    })], MispujasComponent);
    /***/
  },

  /***/
  "./src/app/inside/perfil/perfil.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/inside/perfil/perfil.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInsidePerfilPerfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".userName {\n  font-size: 40px;\n}\n\n.cuerpo {\n  min-height: 500px;\n  padding-left: 2%;\n  padding-right: 2%;\n  padding-bottom: 5%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.cajaProductos {\n  min-height: 400px;\n  padding-left: 2%;\n  padding-right: 2%;\n  padding-top: 1%;\n  background-color: #c80000;\n}\n\n.producto {\n  background-color: white;\n  border: 2px solid red;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvaW5zaWRlL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2luc2lkZS9wZXJmaWwvcGVyZmlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaW5zaWRlL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlck5hbWUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmN1ZXJwbyB7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwMCk7XG59XG5cbi5jYWphUHJvZHVjdG9zIHtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xuICAgIHBhZGRpbmctdG9wOiAxJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAwLCAwKTtcbn1cblxuLnByb2R1Y3RvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsIi51c2VyTmFtZSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmN1ZXJwbyB7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi5jYWphUHJvZHVjdG9zIHtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xuICBwYWRkaW5nLXRvcDogMSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjODAwMDA7XG59XG5cbi5wcm9kdWN0byB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/inside/perfil/perfil.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/inside/perfil/perfil.component.ts ***!
    \***************************************************/

  /*! exports provided: PerfilComponent */

  /***/
  function srcAppInsidePerfilPerfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilComponent", function () {
      return PerfilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/firestore.service */
    "./src/app/services/firestore.service.ts");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PerfilComponent = /*#__PURE__*/function () {
      function PerfilComponent(firestoreService, ruta, router) {
        var _this4 = this;

        _classCallCheck(this, PerfilComponent);

        this.firestoreService = firestoreService;
        this.ruta = ruta;
        this.router = router;
        this.productos = [];
        this.hora = 0;
        this.numProductos = 0;
        this.usuarioActivoPujas = [];
        this.modificarProducto = {
          id: "",
          nombre: "",
          categoria: "",
          precioSalida: "",
          pujaActual: "",
          precioCompraYa: ""
        };
        this.ruta.params.subscribe(function (params) {
          _this4.id = params['id'];
        });
        this.firestoreService.listaProducto().subscribe(function (producto) {
          _this4.productos = [];

          var _iterator7 = _createForOfIteratorHelper(producto),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var p = _step7.value;

              if (firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email == p.emailSubastador) {
                _this4.productos.push(p);

                _this4.numProductos++;
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          _this4.email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
          _this4.name = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.displayName;
        });
        setInterval(function () {
          _this4.myTimer();
        }, 1000);
      }

      _createClass(PerfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "myTimer",
        value: function myTimer() {
          var _iterator8 = _createForOfIteratorHelper(this.productos),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var product = _step8.value;
              this.hora = new Date().getTime();
              this.valor = this.hora - product.tiempoInicio;
              var comprobar = this.valor;
              var segundos = 0;
              var minutos = 0;
              var horas = 0;

              if (this.valor >= 1000) {
                segundos = Math.floor(this.valor / 1000);
                this.valor = this.valor % 1000;

                if (segundos >= 60) {
                  minutos = Math.floor(segundos / 60);
                  segundos = segundos % 60;

                  if (minutos >= 60) {
                    horas = Math.floor(minutos / 60);
                    minutos = minutos % 60;
                  }
                }
              }

              product.tiempoFin = 23 - horas + ':' + (59 - minutos) + ':' + (59 - segundos);

              if (comprobar >= 86400000) {
                this.EliminarProducto(product);
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      }, {
        key: "EliminarProducto",
        value: function EliminarProducto(producto) {
          this.firestoreService.removeProducto(producto);
          var i = this.productos.indexOf(producto);
          this.productos.splice(i, 1);
        }
      }, {
        key: "redirigirProducto",
        value: function redirigirProducto(producto) {
          this.router.navigate(["/ver/", producto.id]);
        }
      }]);

      return PerfilComponent;
    }();

    PerfilComponent.ctorParameters = function () {
      return [{
        type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    PerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-perfil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./perfil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inside/perfil/perfil.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./perfil.component.scss */
      "./src/app/inside/perfil/perfil.component.scss"))["default"]]
    })], PerfilComponent);
    /***/
  },

  /***/
  "./src/app/inside/subir_producto/subir_producto.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/inside/subir_producto/subir_producto.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInsideSubir_productoSubir_productoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cajaFormulario {\n  width: 60%;\n  margin-top: 1.5%;\n  margin-bottom: 5%;\n  padding-top: 4%;\n  padding-bottom: 4%;\n  padding-left: 4%;\n  padding-right: 4%;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  border-radius: 10px;\n}\n\n#botonInicio {\n  width: 50%;\n  margin-left: 25%;\n}\n\n.datos1 {\n  width: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvaW5zaWRlL3N1YmlyX3Byb2R1Y3RvL3N1YmlyX3Byb2R1Y3RvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnNpZGUvc3ViaXJfcHJvZHVjdG8vc3ViaXJfcHJvZHVjdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxVQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9pbnNpZGUvc3ViaXJfcHJvZHVjdG8vc3ViaXJfcHJvZHVjdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FqYUZvcm11bGFyaW8ge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luLXRvcDogMS41JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICBwYWRkaW5nLXRvcDogNCU7XG4gICAgcGFkZGluZy1ib3R0b206IDQlO1xuICAgIHBhZGRpbmctbGVmdDogNCU7XG4gICAgcGFkZGluZy1yaWdodDogNCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwMCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNib3RvbkluaWNpbyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG5cbi5kYXRvczEge1xuICAgIHdpZHRoOiA0NSU7XG59IiwiLmNhamFGb3JtdWxhcmlvIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXRvcDogMS41JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIHBhZGRpbmctdG9wOiA0JTtcbiAgcGFkZGluZy1ib3R0b206IDQlO1xuICBwYWRkaW5nLWxlZnQ6IDQlO1xuICBwYWRkaW5nLXJpZ2h0OiA0JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNib3RvbkluaWNpbyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5kYXRvczEge1xuICB3aWR0aDogNDUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/inside/subir_producto/subir_producto.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/inside/subir_producto/subir_producto.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SubirProductoComponent */

  /***/
  function srcAppInsideSubir_productoSubir_productoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubirProductoComponent", function () {
      return SubirProductoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/firestore.service */
    "./src/app/services/firestore.service.ts");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SubirProductoComponent = /*#__PURE__*/function () {
      function SubirProductoComponent(servicio, router) {
        _classCallCheck(this, SubirProductoComponent);

        this.servicio = servicio;
        this.router = router;
        this.producto = {
          nombre: "",
          categoria: "",
          precioSalida: "",
          pujaActual: "",
          ultimoPujador: "",
          precioCompraYa: "",
          subastador: "",
          emailSubastador: "",
          tiempoInicio: ""
        };
      }

      _createClass(SubirProductoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "AgregarProducto",
        value: function AgregarProducto() {
          this.producto.pujaActual = this.producto.precioSalida;
          var user = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;

          if (user) {
            this.producto.subastador = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.displayName;
            this.producto.emailSubastador = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
          } else {// No user is signed in
          }

          this.producto.tiempoInicio = new Date().getTime();
          this.producto.tiempoFin = 0;
          this.servicio.addProducto(this.producto);
          this.producto.nombre = "";
          this.producto.categoria = "";
          this.producto.precioSalida = "";
          this.producto.pujaActual = "";
          this.producto.precioCompraYa = "";
          this.router.navigate(["/home"]);
        }
      }]);

      return SubirProductoComponent;
    }();

    SubirProductoComponent.ctorParameters = function () {
      return [{
        type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SubirProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subir_producto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subir_producto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inside/subir_producto/subir_producto.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subir_producto.component.scss */
      "./src/app/inside/subir_producto/subir_producto.component.scss"))["default"]]
    })], SubirProductoComponent);
    /***/
  },

  /***/
  "./src/app/inside/ver_producto/ver_producto.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/inside/ver_producto/ver_producto.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInsideVer_productoVer_productoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fondo {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.cajaProducto {\n  margin-bottom: 5%;\n  background-color: white;\n  border-radius: 20px;\n}\n\n#titulo {\n  margin-top: -2%;\n  font-size: 50px;\n}\n\n.Pujar {\n  width: 40%;\n  padding-top: 0.65%;\n  padding-bottom: 0.65%;\n  font-size: 20px;\n}\n\n#botonPujar {\n  width: 20%;\n  border: 2px solid black;\n  font-size: 20px;\n}\n\n#botonComprarYa {\n  width: 37%;\n  border: 2px solid black;\n  font-size: 20px;\n  float: right;\n}\n\n.infoProducto {\n  width: 40%;\n}\n\n.imagenProducto {\n  width: 50%;\n  min-height: 300px;\n  margin-right: 5%;\n  padding-bottom: 1%;\n  background-color: red;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvaW5zaWRlL3Zlcl9wcm9kdWN0by92ZXJfcHJvZHVjdG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2luc2lkZS92ZXJfcHJvZHVjdG8vdmVyX3Byb2R1Y3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2luc2lkZS92ZXJfcHJvZHVjdG8vdmVyX3Byb2R1Y3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODAwKTtcbn1cblxuLmNhamFQcm9kdWN0byB7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuI3RpdHVsbyB7XG4gICAgbWFyZ2luLXRvcDogLTIlO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLlB1amFyIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIHBhZGRpbmctdG9wOiAwLjY1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC42NSU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jYm90b25QdWphciB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNib3RvbkNvbXByYXJZYSB7XG4gICAgd2lkdGg6IDM3JTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uaW5mb1Byb2R1Y3RvIHtcbiAgICB3aWR0aDogNDAlO1xufVxuXG4uaW1hZ2VuUHJvZHVjdG8ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGZsb2F0OiByaWdodDtcbn0iLCIuZm9uZG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi5jYWphUHJvZHVjdG8ge1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbiN0aXR1bG8ge1xuICBtYXJnaW4tdG9wOiAtMiU7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLlB1amFyIHtcbiAgd2lkdGg6IDQwJTtcbiAgcGFkZGluZy10b3A6IDAuNjUlO1xuICBwYWRkaW5nLWJvdHRvbTogMC42NSU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2JvdG9uUHVqYXIge1xuICB3aWR0aDogMjAlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jYm90b25Db21wcmFyWWEge1xuICB3aWR0aDogMzclO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5pbmZvUHJvZHVjdG8ge1xuICB3aWR0aDogNDAlO1xufVxuXG4uaW1hZ2VuUHJvZHVjdG8ge1xuICB3aWR0aDogNTAlO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgcGFkZGluZy1ib3R0b206IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/inside/ver_producto/ver_producto.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/inside/ver_producto/ver_producto.component.ts ***!
    \***************************************************************/

  /*! exports provided: VerProductoComponent */

  /***/
  function srcAppInsideVer_productoVer_productoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerProductoComponent", function () {
      return VerProductoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/firestore.service */
    "./src/app/services/firestore.service.ts");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);

    var VerProductoComponent = /*#__PURE__*/function () {
      function VerProductoComponent(ruta, servicio, router) {
        var _this5 = this;

        _classCallCheck(this, VerProductoComponent);

        this.ruta = ruta;
        this.servicio = servicio;
        this.router = router;
        this.productoPagina = "";
        this.hora = 0;
        this.usuarioNuevo = {
          email: '',
          pujas: []
        };
        this.modificarProducto = {
          id: "",
          nombre: "",
          categoria: "",
          precioSalida: "",
          pujaActual: "",
          precioCompraYa: ""
        };
        this.ruta.params.subscribe(function (params) {
          _this5.id = params['id'];
        });
        this.servicio.listaProducto().subscribe(function (producto) {
          _this5.productos = producto;

          var _iterator9 = _createForOfIteratorHelper(_this5.productos),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var p = _step9.value;

              if (p.id == _this5.id) {
                _this5.productoPagina = p;
                console.log(_this5.productoPagina);
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        });
        setInterval(function () {
          _this5.myTimer();
        }, 1000);
        this.servicio.listaUsuario().subscribe(function (usuario) {
          _this5.usuarios = usuario;
          _this5.usuarioActivoEmail = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.email;
        });
      }

      _createClass(VerProductoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "myTimer",
        value: function myTimer() {
          this.hora = new Date().getTime();
          this.valor = this.hora - this.productoPagina.tiempoInicio;
          var comprobar = this.valor;
          var segundos = 0;
          var minutos = 0;
          var horas = 0;

          if (this.valor >= 1000) {
            segundos = Math.floor(this.valor / 1000);
            this.valor = this.valor % 1000;

            if (segundos >= 60) {
              minutos = Math.floor(segundos / 60);
              segundos = segundos % 60;

              if (minutos >= 60) {
                horas = Math.floor(minutos / 60);
                minutos = minutos % 60;
              }
            }
          }

          this.productoPagina.tiempoFin = 23 - horas + ':' + (59 - minutos) + ':' + (59 - segundos);

          if (comprobar >= 86400000) {
            this.EliminarProducto(this.productoPagina);
          }
        }
      }, {
        key: "cambiarPuja",
        value: function cambiarPuja(puja) {
          var usuarioActivo = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;

          if (usuarioActivo) {
            if (puja > this.productoPagina.pujaActual) {
              this.productoPagina.pujaActual = puja;
              this.productoPagina.ultimoPujador = usuarioActivo.displayName;
              this.servicio.editProducto(this.productoPagina);

              var _iterator10 = _createForOfIteratorHelper(this.usuarios),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var p = _step10.value;

                  if (p.email == usuarioActivo.email) {
                    console.log(p.pujas);

                    if (!p.pujas.includes(this.id)) {
                      p.pujas.push(this.id);
                      this.servicio.editUsuario(p);
                    }

                    return;
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }

              this.usuarioNuevo.email = usuarioActivo.email;
              this.usuarioNuevo.pujas.push(this.id);
              this.servicio.addUsuario(this.usuarioNuevo);
              console.log(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.email);
              this.productoPagina.ultimoPujador = usuarioActivo.displayName;
            } else {
              alert("La puja debe ser superior a la Puja actual");
            }
          }
        }
      }, {
        key: "ModificarProducto",
        value: function ModificarProducto(producto) {
          this.modificarProducto.id = producto.id;
          this.modificarProducto.nombre = producto.nombre;
          this.modificarProducto.categoria = producto.categoria;
          this.modificarProducto.precioSalida = producto.precioSalida;
          this.modificarProducto.pujaActual = producto.pujaActual;
          this.modificarProducto.precioCompraYa = producto.precioCompraYa;
        }
      }, {
        key: "AgregarProductoModificado",
        value: function AgregarProductoModificado() {
          this.servicio.editProducto(this.modificarProducto);
        }
      }, {
        key: "EliminarProducto",
        value: function EliminarProducto(producto) {
          this.servicio.removeProducto(producto);
          var i = this.productos.indexOf(producto);
          this.productos.splice(i, 1);
          alert("El producto se ha borrado correctamente");
          this.router.navigate(["/home"]);
        }
      }, {
        key: "comprarYa",
        value: function comprarYa(producto) {
          var opcion = confirm("Seguro que quieres comprar este producto");

          if (opcion == true) {
            alert("La compra se ha realizado correctamente");
            this.servicio.removeProducto(producto);
            var i = this.productos.indexOf(producto);
            this.productos.splice(i, 1);
            this.router.navigate(["/home"]);
          }
        }
      }]);

      return VerProductoComponent;
    }();

    VerProductoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    VerProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ver_producto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ver_producto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inside/ver_producto/ver_producto.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ver_producto.component.scss */
      "./src/app/inside/ver_producto/ver_producto.component.scss"))["default"]]
    })], VerProductoComponent);
    /***/
  },

  /***/
  "./src/app/presentacion/encabezado-principal/encabezado-principal.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/presentacion/encabezado-principal/encabezado-principal.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPresentacionEncabezadoPrincipalEncabezadoPrincipalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".encabezado {\n  height: 120px;\n  background-color: #bd2727;\n}\n\n.logo {\n  height: 100%;\n  margin-left: 43.5%;\n}\n\n#btn1 {\n  margin-top: 2.6%;\n  margin-left: 33%;\n  color: white;\n  border: 2px solid white;\n  position: absolute;\n}\n\n#btn2 {\n  margin-top: 2.6%;\n  margin-left: 22%;\n  color: white;\n  border: 2px solid white;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvcHJlc2VudGFjaW9uL2VuY2FiZXphZG8tcHJpbmNpcGFsL2VuY2FiZXphZG8tcHJpbmNpcGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcmVzZW50YWNpb24vZW5jYWJlemFkby1wcmluY2lwYWwvZW5jYWJlemFkby1wcmluY2lwYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhY2lvbi9lbmNhYmV6YWRvLXByaW5jaXBhbC9lbmNhYmV6YWRvLXByaW5jaXBhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmNhYmV6YWRvIHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODksIDM5LCAzOSk7XG59XG5cbi5sb2dvIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQzLjUlO1xufVxuXG4jYnRuMSB7XG4gICAgbWFyZ2luLXRvcDogMi42JTtcbiAgICBtYXJnaW4tbGVmdDogMzMlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNidG4yIHtcbiAgICBtYXJnaW4tdG9wOiAyLjYlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMiU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iLCIuZW5jYWJlemFkbyB7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDI3Mjc7XG59XG5cbi5sb2dvIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNDMuNSU7XG59XG5cbiNidG4xIHtcbiAgbWFyZ2luLXRvcDogMi42JTtcbiAgbWFyZ2luLWxlZnQ6IDMzJTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jYnRuMiB7XG4gIG1hcmdpbi10b3A6IDIuNiU7XG4gIG1hcmdpbi1sZWZ0OiAyMiU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/presentacion/encabezado-principal/encabezado-principal.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/presentacion/encabezado-principal/encabezado-principal.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: EncabezadoPrincipalComponent */

  /***/
  function srcAppPresentacionEncabezadoPrincipalEncabezadoPrincipalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EncabezadoPrincipalComponent", function () {
      return EncabezadoPrincipalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EncabezadoPrincipalComponent = /*#__PURE__*/function () {
      function EncabezadoPrincipalComponent() {
        _classCallCheck(this, EncabezadoPrincipalComponent);

        this.logotipo = "./assets/img/logotipo.png";
      }

      _createClass(EncabezadoPrincipalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EncabezadoPrincipalComponent;
    }();

    EncabezadoPrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-encabezado-principal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./encabezado-principal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/encabezado-principal/encabezado-principal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./encabezado-principal.component.scss */
      "./src/app/presentacion/encabezado-principal/encabezado-principal.component.scss"))["default"]]
    })], EncabezadoPrincipalComponent);
    /***/
  },

  /***/
  "./src/app/presentacion/inicio-sesion/inicio-sesion.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/presentacion/inicio-sesion/inicio-sesion.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPresentacionInicioSesionInicioSesionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cajaFormulario {\n  width: 60%;\n  margin-top: 1%;\n  margin-bottom: 5%;\n  padding-top: 4%;\n  padding-bottom: 4%;\n  padding-left: 4%;\n  padding-right: 4%;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  border-radius: 10px;\n}\n\n#botonInicio {\n  width: 50%;\n  margin-left: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvcHJlc2VudGFjaW9uL2luaWNpby1zZXNpb24vaW5pY2lvLXNlc2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJlc2VudGFjaW9uL2luaWNpby1zZXNpb24vaW5pY2lvLXNlc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJlc2VudGFjaW9uL2luaWNpby1zZXNpb24vaW5pY2lvLXNlc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWphRm9ybXVsYXJpbyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICBwYWRkaW5nLXRvcDogNCU7XG4gICAgcGFkZGluZy1ib3R0b206IDQlO1xuICAgIHBhZGRpbmctbGVmdDogNCU7XG4gICAgcGFkZGluZy1yaWdodDogNCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwMCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNib3RvbkluaWNpbyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xufSIsIi5jYWphRm9ybXVsYXJpbyB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBwYWRkaW5nLWJvdHRvbTogNCU7XG4gIHBhZGRpbmctbGVmdDogNCU7XG4gIHBhZGRpbmctcmlnaHQ6IDQlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2JvdG9uSW5pY2lvIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/presentacion/inicio-sesion/inicio-sesion.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/presentacion/inicio-sesion/inicio-sesion.component.ts ***!
    \***********************************************************************/

  /*! exports provided: InicioSesionComponent */

  /***/
  function srcAppPresentacionInicioSesionInicioSesionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioSesionComponent", function () {
      return InicioSesionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/firestore.service */
    "./src/app/services/firestore.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var InicioSesionComponent = /*#__PURE__*/function () {
      function InicioSesionComponent(registroServicio, router) {
        var _this6 = this;

        _classCallCheck(this, InicioSesionComponent);

        this.registroServicio = registroServicio;
        this.router = router;
        this.usuario = {
          email: '',
          password: ''
        };
        this.registroServicio.listaUsuario().subscribe(function (usuario) {
          _this6.usuarios = usuario;
        });
      }

      _createClass(InicioSesionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "iniciarSesion",
        value: function iniciarSesion() {
          var _iterator11 = _createForOfIteratorHelper(this.usuarios),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var usuario = _step11.value;

              if (usuario.email == this.usuario.email) {
                if (usuario.password == this.usuario.password) {
                  this.router.navigateByUrl('/home');
                  return;
                } else {
                  alert("La contraseña es incorrecta");
                  return;
                }
              }
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          alert("No hay ningún usuario con ese email");
        }
      }, {
        key: "tryLogin",
        value: function tryLogin(email, password) {
          var _this7 = this;

          this.registroServicio.doLogin(email, password).then(function (res) {
            _this7.router.navigate(["/home"]);
          }, function (err) {
            alert("Los datos introducidos no son correctos");
          });
        }
      }]);

      return InicioSesionComponent;
    }();

    InicioSesionComponent.ctorParameters = function () {
      return [{
        type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    InicioSesionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio-sesion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inicio-sesion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/inicio-sesion/inicio-sesion.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inicio-sesion.component.scss */
      "./src/app/presentacion/inicio-sesion/inicio-sesion.component.scss"))["default"]]
    })], InicioSesionComponent);
    /***/
  },

  /***/
  "./src/app/presentacion/presentacion.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/presentacion/presentacion.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPresentacionPresentacionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cajaIntroduccion {\n  height: 500px;\n  color: white;\n  background: radial-gradient(black 3px, transparent 4px), radial-gradient(black 3px, transparent 4px), linear-gradient(#fff 4px, transparent 0), linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px), linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px), #fff;\n  background-size: 109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px;\n  background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;\n}\n\n.jumbotron {\n  background-color: #ff3131;\n}\n\n.col-sm-4 {\n  background-color: #ff3131;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvcHJlc2VudGFjaW9uL3ByZXNlbnRhY2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJlc2VudGFjaW9uL3ByZXNlbnRhY2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsK1lBQ0E7RUFNRiw2RUFBQTtFQUNBLGtFQUFBO0FDTEY7O0FET0E7RUFDRSx5QkFBQTtBQ0pGOztBRE1BO0VBQ0UseUJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhY2lvbi9wcmVzZW50YWNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FqYUludHJvZHVjY2lvbiB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogXG4gICAgcmFkaWFsLWdyYWRpZW50KGJsYWNrIDNweCwgdHJhbnNwYXJlbnQgNHB4KSxcbiAgICByYWRpYWwtZ3JhZGllbnQoYmxhY2sgM3B4LCB0cmFuc3BhcmVudCA0cHgpLFxuICAgIGxpbmVhci1ncmFkaWVudCgjZmZmIDRweCwgdHJhbnNwYXJlbnQgMCksXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA3NHB4LCB0cmFuc3BhcmVudCA3NXB4LCAjYTRhNGE0IDc1cHgsICNhNGE0YTQgNzZweCwgdHJhbnNwYXJlbnQgNzdweCwgdHJhbnNwYXJlbnQgMTA5cHgpLFxuICAgIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHRyYW5zcGFyZW50IDc1cHgsIHRyYW5zcGFyZW50IDc2cHgsICNhNGE0YTQgNzZweCwgI2E0YTRhNCA3N3B4LCB0cmFuc3BhcmVudCA3OHB4LCB0cmFuc3BhcmVudCAxMDlweCksXG4gICNmZmY7XG4gIGJhY2tncm91bmQtc2l6ZTogMTA5cHggMTA5cHgsIDEwOXB4IDEwOXB4LDEwMCUgNnB4LCAxMDlweCAxMDlweCwgMTA5cHggMTA5cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDU0cHggNTVweCwgMHB4IDBweCwgMHB4IDBweCwgMHB4IDBweCwgMHB4IDBweDtcbn1cbi5qdW1ib3Ryb257XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQ5LCA0OSk7XG59XG4uY29sLXNtLTR7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQ5LCA0OSk7XG59XG4iLCIuY2FqYUludHJvZHVjY2lvbiB7XG4gIGhlaWdodDogNTAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGJsYWNrIDNweCwgdHJhbnNwYXJlbnQgNHB4KSwgcmFkaWFsLWdyYWRpZW50KGJsYWNrIDNweCwgdHJhbnNwYXJlbnQgNHB4KSwgbGluZWFyLWdyYWRpZW50KCNmZmYgNHB4LCB0cmFuc3BhcmVudCAwKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA3NHB4LCB0cmFuc3BhcmVudCA3NXB4LCAjYTRhNGE0IDc1cHgsICNhNGE0YTQgNzZweCwgdHJhbnNwYXJlbnQgNzdweCwgdHJhbnNwYXJlbnQgMTA5cHgpLCBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB0cmFuc3BhcmVudCA3NXB4LCB0cmFuc3BhcmVudCA3NnB4LCAjYTRhNGE0IDc2cHgsICNhNGE0YTQgNzdweCwgdHJhbnNwYXJlbnQgNzhweCwgdHJhbnNwYXJlbnQgMTA5cHgpLCAjZmZmO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwOXB4IDEwOXB4LCAxMDlweCAxMDlweCwgMTAwJSA2cHgsIDEwOXB4IDEwOXB4LCAxMDlweCAxMDlweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTRweCA1NXB4LCAwcHggMHB4LCAwcHggMHB4LCAwcHggMHB4LCAwcHggMHB4O1xufVxuXG4uanVtYm90cm9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzEzMTtcbn1cblxuLmNvbC1zbS00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzEzMTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/presentacion/presentacion.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/presentacion/presentacion.component.ts ***!
    \********************************************************/

  /*! exports provided: PresentacionComponent */

  /***/
  function srcAppPresentacionPresentacionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresentacionComponent", function () {
      return PresentacionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PresentacionComponent = /*#__PURE__*/function () {
      function PresentacionComponent() {
        _classCallCheck(this, PresentacionComponent);
      }

      _createClass(PresentacionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PresentacionComponent;
    }();

    PresentacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-presentacion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./presentacion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/presentacion.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./presentacion.component.scss */
      "./src/app/presentacion/presentacion.component.scss"))["default"]]
    })], PresentacionComponent);
    /***/
  },

  /***/
  "./src/app/presentacion/registro/registro.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/presentacion/registro/registro.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPresentacionRegistroRegistroComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cajaFormulario {\n  width: 60%;\n  margin-top: 1%;\n  margin-bottom: 5%;\n  padding-top: 4%;\n  padding-bottom: 4%;\n  padding-left: 4%;\n  padding-right: 4%;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  border-radius: 10px;\n}\n\n#botonInicio {\n  width: 50%;\n  margin-left: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvcHJlc2VudGFjaW9uL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcmVzZW50YWNpb24vcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhY2lvbi9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWphRm9ybXVsYXJpbyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICBwYWRkaW5nLXRvcDogNCU7XG4gICAgcGFkZGluZy1ib3R0b206IDQlO1xuICAgIHBhZGRpbmctbGVmdDogNCU7XG4gICAgcGFkZGluZy1yaWdodDogNCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwMCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNib3RvbkluaWNpbyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xufSIsIi5jYWphRm9ybXVsYXJpbyB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBwYWRkaW5nLWJvdHRvbTogNCU7XG4gIHBhZGRpbmctbGVmdDogNCU7XG4gIHBhZGRpbmctcmlnaHQ6IDQlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2JvdG9uSW5pY2lvIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/presentacion/registro/registro.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/presentacion/registro/registro.component.ts ***!
    \*************************************************************/

  /*! exports provided: RegistroComponent */

  /***/
  function srcAppPresentacionRegistroRegistroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroComponent", function () {
      return RegistroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/firestore.service */
    "./src/app/services/firestore.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);

    var RegistroComponent = /*#__PURE__*/function () {
      function RegistroComponent(registroServicio, router) {
        var _this8 = this;

        _classCallCheck(this, RegistroComponent);

        this.registroServicio = registroServicio;
        this.router = router;
        this.usuario = {
          nombreUsuario: '',
          email: '',
          password: ''
        };
        this.registroServicio.listaUsuario().subscribe(function (usuario) {
          _this8.usuarios = usuario;
        });
      }

      _createClass(RegistroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "agregarUsuario",
        value: function agregarUsuario() {
          var _iterator12 = _createForOfIteratorHelper(this.usuarios),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var usuario = _step12.value;

              if (usuario.nombreUsuario == this.usuario.nombreUsuario) {
                alert("Ya exite un usuario con ese nombre");
                return;
              }

              if (usuario.email == this.usuario.email) {
                alert("Ya exite un usuario con ese email");
                return;
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }

          this.registroServicio.addUsuario(this.usuario);
          this.usuario.nombreUsuario = '';
          this.usuario.email = '';
          this.usuario.password = '';
          this.router.navigateByUrl('inicio-sesion');
        }
      }, {
        key: "tryRegister",
        value: function tryRegister(email, password, nombreusuario) {
          var _this9 = this;

          this.registroServicio.doRegister(email, password).then(function (res) {
            console.log(res);
            alert("Tu cuenta ha sido creada correctamente");

            _this9.tryLogin(email, password);

            firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.updateProfile({
              displayName: nombreusuario
            });

            _this9.router.navigateByUrl("/home");
          }, function (err) {
            console.log(err);
            alert("Ya existe un usuario con ese email");
          });
        }
      }, {
        key: "tryLogin",
        value: function tryLogin(email, password) {
          var _this10 = this;

          this.registroServicio.doLogin(email, password).then(function (res) {
            _this10.router.navigate(["/home"]);
          }, function (err) {
            alert("Los datos introducidos no son correctos");
          });
        }
      }]);

      return RegistroComponent;
    }();

    RegistroComponent.ctorParameters = function () {
      return [{
        type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/registro/registro.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registro.component.scss */
      "./src/app/presentacion/registro/registro.component.scss"))["default"]]
    })], RegistroComponent);
    /***/
  },

  /***/
  "./src/app/services/firestore.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/firestore.service.ts ***!
    \***********************************************/

  /*! exports provided: FirestoreService */

  /***/
  function srcAppServicesFirestoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirestoreService", function () {
      return FirestoreService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);
    /*import { Observable } from 'rxjs/Observable';*/


    var FirestoreService = /*#__PURE__*/function () {
      function FirestoreService(afs, afAuth) {
        _classCallCheck(this, FirestoreService);

        this.afs = afs;
        this.afAuth = afAuth;
        this.productosCollection = afs.collection('productos');
        this.usuariosCollection = afs.collection('usuarios');
        this.productos = this.productosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        }));
        this.usuarios = this.usuariosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        }));
      }

      _createClass(FirestoreService, [{
        key: "listaProducto",
        value: function listaProducto() {
          return this.productos;
        }
      }, {
        key: "listaUsuario",
        value: function listaUsuario() {
          return this.usuarios;
        }
      }, {
        key: "addUsuario",
        value: function addUsuario(usuario) {
          this.usuariosCollection.add(usuario);
        }
      }, {
        key: "addProducto",
        value: function addProducto(producto) {
          this.productosCollection.add(producto);
        }
      }, {
        key: "removeProducto",
        value: function removeProducto(producto) {
          this.productoDoc = this.afs.doc("productos/".concat(producto.id));
          this.productoDoc["delete"]();
        }
      }, {
        key: "removeUsuario",
        value: function removeUsuario(usuario) {
          this.usuarioDoc = this.afs.doc("usuarios/".concat(usuario.id));
          this.usuarioDoc["delete"]();
        }
      }, {
        key: "editProducto",
        value: function editProducto(producto) {
          this.productoDoc = this.afs.doc("productos/".concat(producto.id));
          this.productoDoc.update(producto);
        }
      }, {
        key: "editUsuario",
        value: function editUsuario(usuario) {
          this.usuarioDoc = this.afs.doc("usuarios/".concat(usuario.id));
          this.usuarioDoc.update(usuario);
        }
      }, {
        key: "doRegister",
        value: function doRegister(email, password) {
          return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().createUserWithEmailAndPassword(email, password).then(function (res) {
              resolve(res);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "doLogin",
        value: function doLogin(email, password) {
          return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithEmailAndPassword(email, password).then(function (res) {
              resolve(res);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "doLogout",
        value: function doLogout() {
          var _this11 = this;

          return new Promise(function (resolve, reject) {
            if (firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser) {
              _this11.afAuth.auth.signOut();

              resolve();
            } else {
              reject();
            }
          });
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return new Promise(function (resolve, reject) {
            var user = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(function (user) {
              if (user) {
                resolve(user);
              } else {
                reject("No user logged in");
              }
            });
          });
        }
      }]);

      return FirestoreService;
    }();

    FirestoreService.ctorParameters = function () {
      return [{
        type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }];
    };

    FirestoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FirestoreService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyBGtvp9MWpZ-yCkr8Fg-RgTV9yyK5g8hJ8",
        authDomain: "proyecto-dsi-d3a63.firebaseapp.com",
        databaseURL: "https://proyecto-dsi-d3a63.firebaseio.com",
        projectId: "proyecto-dsi-d3a63",
        storageBucket: "proyecto-dsi-d3a63.appspot.com",
        messagingSenderId: "429185891880",
        appId: "1:429185891880:web:05eebe516bb09e0e923f1d"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/uc3m/Escritorio/Auctioneer/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map