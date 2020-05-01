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


    __webpack_exports__["default"] = "<div class=\"bg-dark text-white fixed-bottom\">\n    <p>Footer</p>\n</div>\n\n";
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


    __webpack_exports__["default"] = "<app-encabezado></app-encabezado>\n\n<div class = \"container\">\n    \n    <div class=\"container\">\n        \n            <div class=\"media border p-3\" *ngIf=\"imagenActual === 1\" >\n                    <img [src]=\"imagen1\" id=\"foto1\">\n                    <div class=\"media-body\">\n                        <br>\n                      <h4>¿Qué es una subasta? </h4>\n                      <p>Una subasta consiste en un ejercicio de compra y venta de artículos a base de pujas.<br><br>\n\n                        Un usuario, el subastador, pondrá a la venta uno de sus productos a un precio inicial y por un tiempo determinado. \n                        El resto de usuarios podrán pujar por ese producto (siempre y cuando superen en un 5% el coste de la puja anterior) y el que tenga la puja más alta al acabar el tiempo se lleva el producto.\n                        Además, existe la posibilidad de comprar el producto de manera instantánea si se abona el importe de comprar ya, impuesto por el subastador y generalmente muy elevado.<br>\n                        <br>\n                        ¿Lo comprarás directamente o vencerás al resto en la puja?\n                \n                      </p>\n                      \n                      \n                    </div>\n                  </div>\n                  <div class=\"media border p-3\" *ngIf=\"imagenActual === 2\" >\n                        <img [src]=\"imagen2\" id=\"foto2\">\n                        <div class=\"media-body\">\n                            <br>\n                          <h4>¿Estas subastas son seguras? </h4>\n                          <p>Desde The Auctioneer queremos tranquilizar a todos aquellos usuarios poco experimentados en el mundo de la\n                              tecnología y que dudan en si pagar a través de internet es o no seguro. <br> <br>\n\n                              Al igual que cualquier método de pago, existen vulnerabilidades. No obstante, es preciso comentar que esta aplicación\n                              cuenta con convenios con métodos de pago, como PayPal, los cuales garantizan un pago seguro y, en caso de fraude o robo cibernético,\n                              se encargarán de garantizar el reembolso de todo el importe pagado. <br> <br>\n\n                              Por lo tanto ante la pregunta, ¿es seguro pagar en esta página? la respuesta es un rotundo SÍ.\n                    \n                          </p>\n                          \n                          \n                        </div>\n                      </div>\n                      <div class=\"media border p-3\" *ngIf=\"imagenActual === 3\" >\n                        <img [src]=\"imagen3\" id=\"foto3\">\n                        <div class=\"media-body\">\n                            <br>\n                          <h4>¿Quiénes somos? </h4>\n                          <p>The Auctioneer está conformado por un pequeño equipo en crecimiento, con muchas ganas de \n                            trabajar y seguir incluyendo funcionalidades a nuestro sistema de subastas online. <br> <br>\n\n                            Nuestro equipo se centra en 3 pilares: seguridad del cliente, facilidad de uso y organización de la estructura de la página,\n                            con el objetivo de que cualquier persona sea capaz de utilizar nuestro sistema y que, tras utilizarlo,\n                            se mantenga con nosotros y siga haciendo uso del mismo. <br> <br>\n\n                            Así que... ¿a qué estás esperando? ¡ EL TIEMPO DE LAS SUBASTAS SE ACABA !\n                    \n                          </p>\n                          \n                          \n                        </div>\n                      </div>\n                  <img [src] = \"imagenFlechaDer\" id=\"flechaDer\" (click)=\"cambiarImagenDer()\">\n                  <img [src] = \"imagenFlechaDer\" id=\"flechaIzq\" (click)=\"cambiarImagenIzq()\">\n    \n    </div>\n\n</div>\n";
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


    __webpack_exports__["default"] = "\n<div class=\"bg-white text-black\">\n  <img class= \"logo\" [src] = \"logotipo\"/>\n</div>\n<nav class=\"navbar navbar-expand-lg navbar navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Home</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" (click)=\"redirigirMisPujas()\">Pujador <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/subida']\">Subir producto</a>\n        </li>\n        <li class=\"nav-item\"routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/conocenos']\">Conócenos</a>\n        </li>\n        <li class=\"nav-item\"routerLinkActive=\"active\">\n          <a class=\"nav-link\" (click)=\"redirigirPerfil()\">Perfil</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" name=\"filtroHome\" placeholder=\"Search\" aria-label=\"Search\" [(ngModel)]=\"filtroHome\">\n        <button class=\"btn btn-outline-dark my-2 my-sm-0 bg-success\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n";
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


    __webpack_exports__["default"] = "<app-encabezado></app-encabezado>\n<form class=\"form-inline my-2 my-lg-0\">\n    <input class=\"form-control\" type=\"search\" name=\"filtroHome\" placeholder=\"Search\" aria-label=\"Search\" [(ngModel)]=\"filtroHome\">\n</form>\n<div class = \"container\">\n    <div class=\"row\">\n        <div (click)=\"redirigirProducto(producto)\" class=\"alert alert-warning col-lg-4 col-md-4 col-sm-6 col-xs-12\" role=\"alert\" *ngFor=\"let producto of productos | filtro: filtroHome\">\n            <h6>Nombre: {{producto.nombre}}</h6>\n            <h6>Precio de salida: {{producto.precioSalida}} $</h6>\n            <h6>Puja actual: {{producto.pujaActual}} $</h6>\n            <h6>Precio de CompraYa: {{producto.precioCompraYa}} $</h6>\n        </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<app-encabezado></app-encabezado>\n<div class = \"container\">\n    <div class=\"row\">\n        <div class=\"alert alert-warning col-lg-4 col-md-4 col-sm-6 col-xs-12\" role=\"alert\" *ngFor=\"let producto of productosPujados\">\n            <div class=\"float-right\" (click)=\"EliminarProducto(producto)\">\n                <i class=\"far fa-trash-alt\"></i>\n            </div>\n            <div >Hola {{producto.tiempoFin}}</div>\n            <h6>Nombre: {{producto.nombre}}</h6>\n            <h6>Precio de salida: {{producto.precioSalida}} $</h6>\n            <h6>Puja actual: {{producto.pujaActual}} $</h6>\n            <h6>Precio de CompraYa: {{producto.precioCompraYa}} $</h6>\n        </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<app-encabezado></app-encabezado>\n<div class = \"container\">\n    <div class=\"row\">\n        <div class=\"alert alert-warning col-lg-4 col-md-4 col-sm-6 col-xs-12\" role=\"alert\" *ngFor=\"let producto of productos\">\n            <div class=\"float-right\" (click)=\"EliminarProducto(producto)\">\n                <i class=\"far fa-trash-alt\"></i>\n            </div>\n            <div class=\"float-right mr-3\" (click)=\"ModificarProducto(producto)\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n                <i class=\"fas fa-pencil-alt\"></i>\n            </div>\n            <div>Hola {{producto.tiempoFin}}</div>\n            <h6>Nombre: {{producto.nombre}}</h6>\n            <h6>Precio de salida: {{producto.precioSalida}} $</h6>\n            <h6>Puja actual: {{producto.pujaActual}} $</h6>\n            <h6>Precio de CompraYa: {{producto.precioCompraYa}} $</h6>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modificar: {{modificarProducto.nombre}}</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class = \"container\">\n\n                <form (ngSubmit) = \"AgregarProductoModificado()\">\n                    <input type=\"text\" placeholder=\"Ingresa el nombre del producto\" name=\"nombre\" class=\"form-control  mt-4\" [(ngModel)]=\"modificarProducto.nombre\">\n                    <input type=\"number\" placeholder=\"Ingresa el precio de salida del producto\" name=\"precioSalida\" class=\"form-control  mt-4\" [(ngModel)]=\"modificarProducto.precioSalida\">\n                    <input type=\"number\" placeholder=\"Ingresa el precio de CompraYa del producto\" name=\"precioCompraYa\" class=\"form-control  mt-4\" [(ngModel)]=\"modificarProducto.precioCompraYa\">\n                    <button class=\"btn btn-warning mt-4\" type=\"submit\">Guardar cambios</button>\n                </form>\n            \n            </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n";
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


    __webpack_exports__["default"] = "<app-encabezado></app-encabezado>\n\n<div class = \"container\">\n\n  <form (ngSubmit) = \"AgregarProducto()\">\n    <input type=\"text\" placeholder=\"Ingresa el nombre del producto\" name=\"nombre\" class=\"form-control  mt-4\" [(ngModel)]=\"producto.nombre\">\n    <input type=\"number\" placeholder=\"Ingresa el precio de salida del producto\" name=\"precioSalida\" class=\"form-control  mt-4\" [(ngModel)]=\"producto.precioSalida\">\n    <input type=\"number\" placeholder=\"Ingresa el precio de CompraYa del producto\" name=\"precioCompraYa\" class=\"form-control  mt-4\" [(ngModel)]=\"producto.precioCompraYa\">\n    <button class=\"btn btn-warning mt-4\" type=\"submit\">Agregar</button>\n  </form>\n\n</div>\n\n\n";
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


    __webpack_exports__["default"] = "<app-encabezado></app-encabezado>\n\n<div class = \"container\">\n    \n    <h1>Nombre: {{productoPagina.nombre}}</h1>\n    <h1>Precio de salida: {{productoPagina.precioSalida}} $</h1>\n    <h1>Puja actual: {{productoPagina.pujaActual}} $</h1>\n    <h1>Precio de CompraYa: {{productoPagina.precioCompraYa}} $</h1>\n    <input type=\"number\" placeholder=\"Ingresa el precio de CompraYa del producto\" name=\"precioCompraYa\" class=\"form-control  mt-4\" [(ngModel)]=\"nuevaPuja\">\n    <button class=\"btn btn-warning mt-4\" (click)=\"cambiarPuja(nuevaPuja)\"type=\"button\">Guardar cambios</button>\n\n    <!--<br>\n<br>\n<img [src] = \"imagen\"/>\n<br>\n<br>\n<img [src] = \"imagen\"/>\n<br>\n<br>\n<img [src] = \"imagen\"/>\n<br>\n<br>\n<br>\n<br>-->\n</div>\n\n";
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


    __webpack_exports__["default"] = "<div class=\"bg-dark text-white text-center py-5 titulo\">Encabezado\n    <button type=\"button\" class=\"btn btn-primary float-right mr-4\" [routerLink]=\"['../registro']\">Registrarse</button>\n    <button type=\"button\" class=\"btn btn-primary float-right mr-4\" [routerLink]=\"['../inicio-sesion']\">Iniciar Sesión</button>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/footer-principal/footer-principal.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/footer-principal/footer-principal.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPresentacionFooterPrincipalFooterPrincipalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-dark text-white fixed-bottom\">\n    <h2>Soy en footer</h2>\n</div>\n";
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


    __webpack_exports__["default"] = "<app-encabezado-principal></app-encabezado-principal>\n\n<div class=\"mt-5 mb-5 container\">\n  <h2 class=\"text-center\">Inicio de sesión</h2>\n  <br>\n  <form (ngSubmit)=\"tryLogin(usuario.email, usuario.password)\" #f=\"ngForm\">\n    <h1>Email:</h1>\n    <input type=\"email\" placeholder=\"Ingresa tu nombre\" name=\"email\" class=\"form-control\"  [(ngModel)]=\"usuario.email\" [ngModelOptions]=\"{standalone: true}\" ngDefaultControl pattern=\"[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.([a-zA-Z]{2,4})+$\" #email=\"ngModel\" required >\n    <span *ngIf=\"email.value != '' && email.invalid\"><h4 style=\"color: red\">Email no válido, comprueba el formato</h4></span>\n    <span *ngIf=\"email.value == '' \"><h4 style=\"color: red\">Campo obligatorio</h4></span>\n    <h1>Contraseña:</h1>\n    <input type=\"password\" placeholder=\"Ingresa una contraseña\" name=\"password\" class=\"form-control\" minlength=8 [(ngModel)]=\"usuario.password\" [ngModelOptions]=\"{standalone: true}\" ngDefaultControl #password=\"ngModel\" required >\n    <span *ngIf=\"password.value != '' && password.invalid\"><h4 style=\"color: red\">Contraseña no válida. Debe tener 8 caracteres mínimo</h4></span>\n    <span *ngIf=\"password.value == '' \"><h4 style=\"color: red\">Campo obligatorio</h4></span>\n    <button class=\"btn btn-warning mt-3\"  type=\"submit\" [disabled]=\"f.invalid\" >Agregar</button>\n  </form>\n</div>";
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


    __webpack_exports__["default"] = "<app-encabezado-principal></app-encabezado-principal>\n\n<div class=\"container bg-success\">\n    <h1>Introducción</h1>\n</div>";
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


    __webpack_exports__["default"] = "<app-encabezado-principal></app-encabezado-principal>\n\n<div class=\"mt-5 mb-5 container\">\n  <h2 class=\"text-center\">Registro</h2>\n  <br>\n  <form (ngSubmit)=\"tryRegister(usuario.email, usuario.password, usuario.nombreUsuario)\" #f=\"ngForm\">\n    <h1>Nombre de usuario:</h1>\n    <input type=\"text\" #nombre = \"ngModel\" placeholder=\"Ingresa tu nombre\" name=\"nombreUsuario\" class=\"form-control\" [(ngModel)]=\"usuario.nombreUsuario\" required>\n    <span *ngIf=\"nombre.value == '' \"><h4 style=\"color: red\">Campo obligatorio</h4></span>\n    <h1>Email:</h1>\n    <input type=\"email\" placeholder=\"Ingresa tu nombre\" name=\"email\" class=\"form-control\"  [(ngModel)]=\"usuario.email\" pattern=\"[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.([a-zA-Z]{2,4})+$\" #email=\"ngModel\" required>\n    <span *ngIf=\"email.value != '' && email.invalid\"><h4 style=\"color: red\">Email no válido, comprueba el formato</h4></span>\n    <span *ngIf=\"email.value == '' \"><h4 style=\"color: red\">Campo obligatorio</h4></span>\n    <h1>Contraseña:</h1>\n    <input type=\"password\" placeholder=\"Ingresa una contraseña\" name=\"password\" class=\"form-control\" minlength=8 [(ngModel)]=\"usuario.password\" #password=\"ngModel\" required>\n    <span *ngIf=\"password.value != '' && password.invalid\"><h4 style=\"color: red\">Contraseña no válida. Debe tener 8 caracteres mínimo</h4></span>\n    <span *ngIf=\"password.value == '' \"><h4 style=\"color: red\">Campo obligatorio</h4></span>\n    <button class=\"btn btn-warning mt-3\" type=\"submit\" [disabled]=\"f.invalid\" >Agregar</button>\n  </form>\n</div>";
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


    var _presentacion_footer_principal_footer_principal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./presentacion/footer-principal/footer-principal.component */
    "./src/app/presentacion/footer-principal/footer-principal.component.ts");
    /* harmony import */


    var _inside_conocer_conocer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./inside/conocer/conocer.component */
    "./src/app/inside/conocer/conocer.component.ts");
    /* harmony import */


    var _inside_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./inside/perfil/perfil.component */
    "./src/app/inside/perfil/perfil.component.ts");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! angularfire2 */
    "./node_modules/angularfire2/index.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! angularfire2/storage */
    "./node_modules/angularfire2/storage/index.js");
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_firestore_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/firestore.service */
    "./src/app/services/firestore.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _filtro_filtro_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./filtro/filtro.pipe */
    "./src/app/filtro/filtro.pipe.ts");
    /* harmony import */


    var _inside_mispujas_mispujas_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./inside/mispujas/mispujas.component */
    "./src/app/inside/mispujas/mispujas.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _inside_encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_5__["EncabezadoComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _inside_subir_producto_subir_producto_component__WEBPACK_IMPORTED_MODULE_7__["SubirProductoComponent"], _inside_ver_producto_ver_producto_component__WEBPACK_IMPORTED_MODULE_8__["VerProductoComponent"], _inside_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_10__["PresentacionComponent"], _presentacion_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__["RegistroComponent"], _presentacion_inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_12__["InicioSesionComponent"], _presentacion_encabezado_principal_encabezado_principal_component__WEBPACK_IMPORTED_MODULE_13__["EncabezadoPrincipalComponent"], _presentacion_footer_principal_footer_principal_component__WEBPACK_IMPORTED_MODULE_14__["FooterPrincipalComponent"], _inside_conocer_conocer_component__WEBPACK_IMPORTED_MODULE_15__["ConocerComponent"], _inside_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_16__["PerfilComponent"], _filtro_filtro_pipe__WEBPACK_IMPORTED_MODULE_24__["FiltroPipe"], _inside_mispujas_mispujas_component__WEBPACK_IMPORTED_MODULE_25__["MispujasComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], angularfire2__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].firebase), angularfire2_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_19__["AngularFireStorageModule"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"]],
      providers: [_services_firestore_service__WEBPACK_IMPORTED_MODULE_22__["FirestoreService"]],
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";
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


    __webpack_exports__["default"] = "#prueba {\n  margin-right: 50%;\n  float: right;\n}\n\n#flechaDer {\n  width: 5%;\n  float: right;\n  margin-right: 40%;\n  margin-bottom: 5%;\n}\n\n#flechaIzq {\n  width: 5%;\n  float: left;\n  margin-left: 40%;\n  margin-bottom: 5%;\n  transform: rotate(180deg);\n}\n\n#foto1 {\n  height: 20%;\n  width: 25%;\n  margin-bottom: -10%;\n}\n\n#foto2 {\n  height: 40%;\n  width: 30%;\n  margin-top: 6%;\n  margin-right: 1%;\n}\n\n#foto3 {\n  margin-top: 3%;\n  height: 40%;\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvaW5zaWRlL2Nvbm9jZXIvY29ub2Nlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5zaWRlL2Nvbm9jZXIvY29ub2Nlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaW5zaWRlL2Nvbm9jZXIvY29ub2Nlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcnVlYmF7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jZmxlY2hhRGVye1xuICAgIHdpZHRoOiA1JTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbiNmbGVjaGFJenF7XG4gICAgd2lkdGg6IDUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuI2ZvdG8xe1xuICAgIGhlaWdodDogMjAlO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEwJTtcbn1cblxuI2ZvdG8ye1xuICAgIGhlaWdodDogNDAlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luLXRvcDogNiU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcbn1cblxuI2ZvdG8ze1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIHdpZHRoOiAzMCU7XG59IiwiI3BydWViYSB7XG4gIG1hcmdpbi1yaWdodDogNTAlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNmbGVjaGFEZXIge1xuICB3aWR0aDogNSU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA0MCU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4jZmxlY2hhSXpxIHtcbiAgd2lkdGg6IDUlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbiNmb3RvMSB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tYm90dG9tOiAtMTAlO1xufVxuXG4jZm90bzIge1xuICBoZWlnaHQ6IDQwJTtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLXRvcDogNiU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbiNmb3RvMyB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBoZWlnaHQ6IDQwJTtcbiAgd2lkdGg6IDMwJTtcbn0iXX0= */";
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

        this.imagen1 = "/assets/img/subasta.jpeg";
        this.imagen2 = "/assets/img/seguridad.jpeg";
        this.imagen3 = "/assets/img/pilares.PNG";
        this.imagenFlechaDer = "/assets/img/flecha_derecha.png";
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


    __webpack_exports__["default"] = ".logo {\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvaW5zaWRlL2VuY2FiZXphZG8vZW5jYWJlemFkby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5zaWRlL2VuY2FiZXphZG8vZW5jYWJlemFkby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2luc2lkZS9lbmNhYmV6YWRvL2VuY2FiZXphZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcbiAgICB3aWR0aDogNDAwcHg7XG59IiwiLmxvZ28ge1xuICB3aWR0aDogNDAwcHg7XG59Il19 */";
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

    var EncabezadoComponent = /*#__PURE__*/function () {
      function EncabezadoComponent(router) {
        _classCallCheck(this, EncabezadoComponent);

        this.router = router;
        this.logotipo = "/assets/img/logotipo.png";
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
      }]);

      return EncabezadoComponent;
    }();

    EncabezadoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lkZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */";
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
        var _this = this;

        _classCallCheck(this, HomeComponent);

        this.firestoreService = firestoreService;
        this.router = router;
        this.filtroHome = "";
        this.firestoreService.listaProducto().subscribe(function (producto) {
          _this.productos = producto;
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "redirigirProducto",
        value: function redirigirProducto(producto) {
          this.router.navigate(["/ver/", producto.id]);
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lkZS9taXNwdWphcy9taXNwdWphcy5jb21wb25lbnQuc2NzcyJ9 */";
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


    var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/firestore.service */
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
      function MispujasComponent(firestoreService, ruta) {
        var _this2 = this;

        _classCallCheck(this, MispujasComponent);

        this.firestoreService = firestoreService;
        this.ruta = ruta;
        this.productos = [];
        this.usuarioActivoPujas = [];
        this.ruta.params.subscribe(function (params) {
          _this2.id = params['id'];
        });
        this.firestoreService.listaUsuario().subscribe(function (usuario) {
          var _iterator2 = _createForOfIteratorHelper(usuario),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var u = _step2.value;

              if (u.email == firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.email) {
                _this2.usuarioActivoPujas = u.pujas;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        });
        this.firestoreService.listaProducto().subscribe(function (producto) {
          _this2.productosPujados = [];
          _this2.productos = producto;

          var _iterator3 = _createForOfIteratorHelper(_this2.productos),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var p = _step3.value;

              var _iterator4 = _createForOfIteratorHelper(_this2.usuarioActivoPujas),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var p2 = _step4.value;

                  if (p.id == p2) {
                    _this2.productosPujados.push(p);
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        });
      }

      _createClass(MispujasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MispujasComponent;
    }();

    MispujasComponent.ctorParameters = function () {
      return [{
        type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lkZS9wZXJmaWwvcGVyZmlsLmNvbXBvbmVudC5zY3NzIn0= */";
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
        var _this3 = this;

        _classCallCheck(this, PerfilComponent);

        this.firestoreService = firestoreService;
        this.ruta = ruta;
        this.router = router;
        this.productos = [];
        this.hora = 0;
        this.modificarProducto = {
          id: "",
          nombre: "",
          precioSalida: "",
          pujaActual: "",
          precioCompraYa: ""
        };
        this.ruta.params.subscribe(function (params) {
          _this3.id = params['id'];
        });
        this.firestoreService.listaProducto().subscribe(function (producto) {
          _this3.productos = [];

          var _iterator5 = _createForOfIteratorHelper(producto),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var p = _step5.value;

              if (firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email == p.emailSubastador) {
                _this3.productos.push(p);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        });
      }

      _createClass(PerfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "myTimer",
        value: function myTimer(producto) {
          this.hora = new Date().getTime();
          producto.tiempoFin = this.hora - producto.tiempoInicio;
          var segundos = 0;
          var minutos = 0;
          var horas = 0;

          if (producto.tiempoFin > 1000) {
            segundos = Math.floor(producto.tiempoFin / 1000);
            producto.tiempoFin = producto.tiempoFin % 1000;

            if (segundos >= 60) {
              console.log(segundos);
              minutos = Math.floor(segundos / 60);
              console.log(minutos);
              segundos = segundos % 60;

              if (minutos >= 60) {
                horas = Math.floor(minutos / 60);
                minutos = minutos % 60;
              }
            }
          }

          producto.tiempoFin = 23 - horas + ':' + (59 - minutos) + ':' + (59 - segundos);
          console.log(producto.tiempoFin);
          console.log(segundos);
          console.log(minutos);
          console.log(producto.tiempoFin);
        }
      }, {
        key: "EliminarProducto",
        value: function EliminarProducto(producto) {
          this.firestoreService.removeProducto(producto);
          var i = this.productos.indexOf(producto);
          this.productos.splice(i, 1);
        }
      }, {
        key: "ModificarProducto",
        value: function ModificarProducto(producto) {
          this.modificarProducto.id = producto.id;
          this.modificarProducto.nombre = producto.nombre;
          this.modificarProducto.precioSalida = producto.precioSalida;
          this.modificarProducto.pujaActual = producto.pujaActual;
          this.modificarProducto.precioCompraYa = producto.precioCompraYa;
        }
      }, {
        key: "AgregarProductoModificado",
        value: function AgregarProductoModificado() {
          this.firestoreService.editProducto(this.modificarProducto);
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lkZS9zdWJpcl9wcm9kdWN0by9zdWJpcl9wcm9kdWN0by5jb21wb25lbnQuc2NzcyJ9 */";
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

    var SubirProductoComponent = /*#__PURE__*/function () {
      function SubirProductoComponent(servicio) {
        _classCallCheck(this, SubirProductoComponent);

        this.servicio = servicio;
        this.producto = {
          nombre: "",
          precioSalida: "",
          pujaActual: "",
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
          this.producto.precioSalida = "";
          this.producto.pujaActual = "";
          this.producto.precioCompraYa = "";
        }
      }]);

      return SubirProductoComponent;
    }();

    SubirProductoComponent.ctorParameters = function () {
      return [{
        type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lkZS92ZXJfcHJvZHVjdG8vdmVyX3Byb2R1Y3RvLmNvbXBvbmVudC5zY3NzIn0= */";
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
      function VerProductoComponent(ruta, servicio) {
        var _this4 = this;

        _classCallCheck(this, VerProductoComponent);

        this.ruta = ruta;
        this.servicio = servicio;
        this.productoPagina = "";
        this.usuarioNuevo = {
          email: '',
          pujas: []
        };
        this.ruta.params.subscribe(function (params) {
          _this4.id = params['id'];
        });
        this.servicio.listaProducto().subscribe(function (producto) {
          _this4.productos = producto;

          var _iterator6 = _createForOfIteratorHelper(_this4.productos),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var p = _step6.value;

              if (p.id == _this4.id) {
                _this4.productoPagina = p;
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        });
        this.servicio.listaUsuario().subscribe(function (usuario) {
          _this4.usuarios = usuario;
        });
      }

      _createClass(VerProductoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cambiarPuja",
        value: function cambiarPuja(puja) {
          var usuarioActivo = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;

          if (usuarioActivo) {
            if (puja > this.productoPagina.pujaActual) {
              this.productoPagina.pujaActual = puja;
              this.servicio.editProducto(this.productoPagina);

              var _iterator7 = _createForOfIteratorHelper(this.usuarios),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var p = _step7.value;

                  if (p.email == usuarioActivo.email) {
                    console.log(p.pujas);

                    if (!p.pujas.includes(this.id)) {
                      p.pujas.push(this.id);
                      this.servicio.editUsuario(p);
                    }

                    this.productoPagina.ultimoPujador = usuarioActivo.displayName;
                    return;
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              this.usuarioNuevo.email = usuarioActivo.email;
              this.usuarioNuevo.pujas.push(this.id);
              this.servicio.addUsuario(this.usuarioNuevo);
              console.log(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.email);
              this.productoPagina.ultimoPujador = usuarioActivo.displayName;
            } else {
              alert("La puja debe ser superior");
            }
          } else {
            console.log("Shit");
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


    __webpack_exports__["default"] = ".titulo {\n  font-size: 250%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvcHJlc2VudGFjaW9uL2VuY2FiZXphZG8tcHJpbmNpcGFsL2VuY2FiZXphZG8tcHJpbmNpcGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcmVzZW50YWNpb24vZW5jYWJlemFkby1wcmluY2lwYWwvZW5jYWJlemFkby1wcmluY2lwYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcmVzZW50YWNpb24vZW5jYWJlemFkby1wcmluY2lwYWwvZW5jYWJlemFkby1wcmluY2lwYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvIHtcbiAgICBmb250LXNpemU6IDI1MCU7XG59IiwiLnRpdHVsbyB7XG4gIGZvbnQtc2l6ZTogMjUwJTtcbn0iXX0= */";
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
  "./src/app/presentacion/footer-principal/footer-principal.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/presentacion/footer-principal/footer-principal.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPresentacionFooterPrincipalFooterPrincipalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhY2lvbi9mb290ZXItcHJpbmNpcGFsL2Zvb3Rlci1wcmluY2lwYWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/presentacion/footer-principal/footer-principal.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/presentacion/footer-principal/footer-principal.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: FooterPrincipalComponent */

  /***/
  function srcAppPresentacionFooterPrincipalFooterPrincipalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterPrincipalComponent", function () {
      return FooterPrincipalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterPrincipalComponent = /*#__PURE__*/function () {
      function FooterPrincipalComponent() {
        _classCallCheck(this, FooterPrincipalComponent);
      }

      _createClass(FooterPrincipalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterPrincipalComponent;
    }();

    FooterPrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer-principal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer-principal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/footer-principal/footer-principal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer-principal.component.scss */
      "./src/app/presentacion/footer-principal/footer-principal.component.scss"))["default"]]
    })], FooterPrincipalComponent);
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhY2lvbi9pbmljaW8tc2VzaW9uL2luaWNpby1zZXNpb24uY29tcG9uZW50LnNjc3MifQ== */";
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
        var _this5 = this;

        _classCallCheck(this, InicioSesionComponent);

        this.registroServicio = registroServicio;
        this.router = router;
        this.usuario = {
          email: '',
          password: ''
        };
        this.registroServicio.listaUsuario().subscribe(function (usuario) {
          _this5.usuarios = usuario;
        });
      }

      _createClass(InicioSesionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "iniciarSesion",
        value: function iniciarSesion() {
          var _iterator8 = _createForOfIteratorHelper(this.usuarios),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var usuario = _step8.value;

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
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          alert("No hay ningún usuario con ese email");
        }
      }, {
        key: "tryLogin",
        value: function tryLogin(email, password) {
          var _this6 = this;

          this.registroServicio.doLogin(email, password).then(function (res) {
            _this6.router.navigate(["/home"]);
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


    __webpack_exports__["default"] = ".cabecera {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjM20vRXNjcml0b3Jpby9BdWN0aW9uZWVyL3NyYy9hcHAvcHJlc2VudGFjaW9uL3ByZXNlbnRhY2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJlc2VudGFjaW9uL3ByZXNlbnRhY2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcmVzZW50YWNpb24vcHJlc2VudGFjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhYmVjZXJhe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuY2FiZWNlcmEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhY2lvbi9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuc2NzcyJ9 */";
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


    var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/firestore.service */
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
        var _this7 = this;

        _classCallCheck(this, RegistroComponent);

        this.registroServicio = registroServicio;
        this.router = router;
        this.usuario = {
          nombreUsuario: '',
          email: '',
          password: ''
        };
        this.registroServicio.listaUsuario().subscribe(function (usuario) {
          _this7.usuarios = usuario;
        });
      }

      _createClass(RegistroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "agregarUsuario",
        value: function agregarUsuario() {
          var _iterator9 = _createForOfIteratorHelper(this.usuarios),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var usuario = _step9.value;

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
            _iterator9.e(err);
          } finally {
            _iterator9.f();
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
          var _this8 = this;

          this.registroServicio.doRegister(email, password).then(function (res) {
            console.log(res);
            alert("Tu cuenta ha sido creada correctamente");

            _this8.tryLogin(email, password);

            firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.updateProfile({
              displayName: nombreusuario
            });

            _this8.router.navigateByUrl("/home");
          }, function (err) {
            console.log(err);
            alert("Ya existe un usuario con ese email");
          });
        }
      }, {
        key: "tryLogin",
        value: function tryLogin(email, password) {
          var _this9 = this;

          this.registroServicio.doLogin(email, password).then(function (res) {
            _this9.router.navigate(["/home"]);
          }, function (err) {
            alert("Los datos introducidos no son correctos");
          });
        }
      }]);

      return RegistroComponent;
    }();

    RegistroComponent.ctorParameters = function () {
      return [{
        type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]
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
    /*import { Observable } from 'rxjs/Observable';*/


    var FirestoreService = /*#__PURE__*/function () {
      function FirestoreService(afs) {
        _classCallCheck(this, FirestoreService);

        this.afs = afs;
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