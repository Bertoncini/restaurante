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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./inicio/inicio.component */
    "./src/app/inicio/inicio.component.ts");
    /* harmony import */


    var _cozinha_cozinha_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cozinha/cozinha.component */
    "./src/app/cozinha/cozinha.component.ts");

    var routes = [{
      path: '',
      component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"]
    }, {
      path: 'home',
      component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"]
    }, {
      path: 'cozinha',
      component: _cozinha_cozinha_component__WEBPACK_IMPORTED_MODULE_3__["CozinhaComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Sabor & Afeto';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".inside-grid[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 5px;\r\n  }\r\n\r\n.example-margin[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDs7QUFFRjtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLmluc2lkZS1ncmlkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inicio/inicio.component */
    "./src/app/inicio/inicio.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _observacao_item_observacao_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./observacao-item/observacao-item.component */
    "./src/app/observacao-item/observacao-item.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _cozinha_cozinha_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./cozinha/cozinha.component */
    "./src/app/cozinha/cozinha.component.ts");
    /* harmony import */


    var _popup_confirmacao_popup_confirmacao_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./popup-confirmacao/popup-confirmacao.component */
    "./src/app/popup-confirmacao/popup-confirmacao.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp({
        apiKey: "AIzaSyDKAg_TU4Ukh5X82Oll2dtO1029i59hX3Q",
        authDomain: "saborafeto-8108d.firebaseapp.com",
        databaseURL: "https://saborafeto-8108d.firebaseio.com",
        projectId: "saborafeto-8108d",
        storageBucket: "saborafeto-8108d.appspot.com",
        messagingSenderId: "172887160750",
        appId: "1:172887160750:web:14e0678a507bdabe313a3f",
        measurementId: "G-FZLGFZ7N2T"
      }, 'restauranteApp'), _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"]], _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__["InicioComponent"], _observacao_item_observacao_item_component__WEBPACK_IMPORTED_MODULE_17__["ObservacaoItemComponent"], _cozinha_cozinha_component__WEBPACK_IMPORTED_MODULE_19__["CozinhaComponent"], _popup_confirmacao_popup_confirmacao_component__WEBPACK_IMPORTED_MODULE_20__["PopupConfirmacaoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"]],
        exports: [_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__["InicioComponent"], _observacao_item_observacao_item_component__WEBPACK_IMPORTED_MODULE_17__["ObservacaoItemComponent"], _cozinha_cozinha_component__WEBPACK_IMPORTED_MODULE_19__["CozinhaComponent"], _popup_confirmacao_popup_confirmacao_component__WEBPACK_IMPORTED_MODULE_20__["PopupConfirmacaoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp({
            apiKey: "AIzaSyDKAg_TU4Ukh5X82Oll2dtO1029i59hX3Q",
            authDomain: "saborafeto-8108d.firebaseapp.com",
            databaseURL: "https://saborafeto-8108d.firebaseio.com",
            projectId: "saborafeto-8108d",
            storageBucket: "saborafeto-8108d.appspot.com",
            messagingSenderId: "172887160750",
            appId: "1:172887160750:web:14e0678a507bdabe313a3f",
            measurementId: "G-FZLGFZ7N2T"
          }, 'restauranteApp'), _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"]],
          exports: [_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cozinha/cozinha.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/cozinha/cozinha.component.ts ***!
    \**********************************************/

  /*! exports provided: CozinhaComponent */

  /***/
  function srcAppCozinhaCozinhaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CozinhaComponent", function () {
      return CozinhaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _popup_confirmacao_popup_confirmacao_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../popup-confirmacao/popup-confirmacao.component */
    "./src/app/popup-confirmacao/popup-confirmacao.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = function _c0(a0) {
      return {
        "backgroundColor": a0
      };
    };

    function CozinhaComponent_div_1_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r2.getColor(i_r4)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r3.tipo, " - ", item_r3.descr, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.observacao ? "Obs: " + item_r3.observacao : "", " ");
      }
    }

    function CozinhaComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CozinhaComponent_div_1_div_14_Template, 6, 6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CozinhaComponent_div_1_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var pedido_r1 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.btnCancelar(pedido_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CozinhaComponent_div_1_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var pedido_r1 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.btnFinalizar(pedido_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Finalizar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pedido_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pedido ", pedido_r1.idPedido, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Hora Retira ", pedido_r1.horaRetirada, ":", pedido_r1.minutoRetirada, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Cliente: ", pedido_r1.nomeCliente, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Telefone: ", pedido_r1.telefoneCliente, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pedido_r1.itens);
      }
    }

    var CozinhaComponent = /*#__PURE__*/function () {
      function CozinhaComponent(dialog, snackBar, db) {
        var _this = this;

        _classCallCheck(this, CozinhaComponent);

        this.dialog = dialog;
        this.snackBar = snackBar;
        this.db = db;
        this.users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.db.list("saborAfeto/".concat(this.dataAtualFormatada()), function (ref) {
          return ref.equalTo(0).orderByChild("status");
        }).valueChanges().subscribe(function (data) {
          _this.pedidos = data.sort(function (a, b) {
            var hora1 = a["horaRetirada"] * 60 + a["minutoRetirada"];
            var hora2 = b["horaRetirada"] * 60 + b["minutoRetirada"];
            return hora1 > hora2 ? 1 : hora1 < hora2 ? -1 : 0;
          });
          ;
        });
      }

      _createClass(CozinhaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.breakpoint = window.innerWidth <= 400 ? 1 : 6;
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.breakpoint = event.target.innerWidth <= 400 ? 1 : 6;
        }
      }, {
        key: "btnFinalizar",
        value: function btnFinalizar(pedido) {
          var xx = this.db.database.ref('saborAfeto');
          pedido.status = 1;
          xx.child("".concat(pedido.data, "/").concat(pedido.idPedido)).set(pedido);
        }
      }, {
        key: "btnCancelar",
        value: function btnCancelar(pedido) {
          var _this2 = this;

          var dialogRef = this.dialog.open(_popup_confirmacao_popup_confirmacao_component__WEBPACK_IMPORTED_MODULE_1__["PopupConfirmacaoComponent"], {
            width: '250px',
            data: {
              mensagem: "Deseja cancelar o pedido?",
              seMotivo: true
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            var xx = _this2.db.database.ref('saborAfeto');

            pedido.status = 2;
            pedido.motivo = result.resposta;
            xx.child("".concat(pedido.data, "/").concat(pedido.idPedido)).set(pedido);
          });
        }
      }, {
        key: "getColor",
        value: function getColor(index) {
          return index % 2 ? '#abc' : '#0f0';
        }
      }, {
        key: "dataAtualFormatada",
        value: function dataAtualFormatada() {
          var data = new Date(),
              dia = data.getDate().toString(),
              diaF = dia.length == 1 ? '0' + dia : dia,
              mes = (data.getMonth() + 1).toString(),
              //+1 pois no getMonth Janeiro começa com zero.
          mesF = mes.length == 1 ? '0' + mes : mes,
              anoF = data.getFullYear();
          return anoF + "/" + mesF + "/" + diaF;
        }
      }]);

      return CozinhaComponent;
    }();

    CozinhaComponent.ɵfac = function CozinhaComponent_Factory(t) {
      return new (t || CozinhaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]));
    };

    CozinhaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CozinhaComponent,
      selectors: [["app-cozinha"]],
      decls: 2,
      vars: 1,
      consts: [[1, "divFundo", 2, "display", "flex", "flex-wrap", "wrap"], ["style", "display: block;", 4, "ngFor", "ngForOf"], [2, "display", "block"], [2, "width", "20vw", "margin", "10px"], [2, "background-color", "gray"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [2, "height", "40px", ";vertical-align", "bottom"], ["mat-raised-button", "", "color", "warn", 2, "float", "left", 3, "click"], ["mat-raised-button", "", "color", "primary", 2, "float", "right", 3, "click"], [3, "ngStyle"]],
      template: function CozinhaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CozinhaComponent_div_1_Template, 21, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pedidos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]],
      styles: ["@import url('https://fonts.googleapis.com/css?family=Open+Sans');\r\np[_ngcontent-%COMP%] {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 120%;\r\n}\r\nmat-grid-tile[_ngcontent-%COMP%] {\r\n  background: lightblue;\r\n}\r\n.divFundo[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n.divFundo[_ngcontent-%COMP%]:after {\r\n    content : \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-image: url('logo.jpg');\r\n    background-repeat: repeat;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    opacity : 0.2;\r\n    z-index: -1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY296aW5oYS9jb3ppbmhhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0VBQWdFO0FBQ2hFO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQU1BO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGlDQUFvRDtJQUNwRCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY296aW5oYS9jb3ppbmhhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucycpO1xyXG5wIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG59XHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuIFxyXG5cclxuXHJcblxyXG4uZGl2RnVuZG97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmRpdkZ1bmRvOmFmdGVyIHtcclxuICAgIGNvbnRlbnQgOiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2UvbG9nby5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3BhY2l0eSA6IDAuMjtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CozinhaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cozinha',
          templateUrl: './cozinha.component.html',
          styleUrls: ['./cozinha.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/db.ts":
  /*!***********************!*\
    !*** ./src/app/db.ts ***!
    \***********************/

  /*! exports provided: dxb */

  /***/
  function srcAppDbTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dxb", function () {
      return dxb;
    });

    var itemDiario = [{
      Dia: 1,
      itens: [{
        id: 1,
        descr: 'Strogonoff',
        tipo: 'Mini',
        valor: 15.
      }, {
        id: 2,
        descr: 'Strogonoff',
        tipo: 'Normal',
        valor: 17.
      }, {
        id: 3,
        descr: 'Strogonoff',
        tipo: 'Executivo',
        valor: 18.
      }, {
        id: 4,
        descr: 'Strogonoff',
        tipo: 'Combo (p/ 2 Pessoas)',
        valor: 55.
      }]
    }, {
      Dia: 2,
      itens: [{
        id: 1,
        descr: 'Sobrecoxa',
        tipo: 'Mini',
        valor: 15.
      }, {
        id: 2,
        descr: 'Sobrecoxa',
        tipo: 'Normal',
        valor: 17.
      }, {
        id: 3,
        descr: 'Sobrecoxa',
        tipo: 'Executivo',
        valor: 18.
      }, {
        id: 4,
        descr: 'Sobrecoxa',
        tipo: 'Combo (p/ 2 Pessoas)',
        valor: 55.
      }]
    }, {
      Dia: 3,
      itens: [{
        id: 1,
        descr: 'Feijoada',
        tipo: 'Mini',
        valor: 15.
      }, {
        id: 2,
        descr: 'Feijoada',
        tipo: 'Normal',
        valor: 17.
      }, {
        id: 3,
        descr: 'Feijoada',
        tipo: 'Executivo',
        valor: 18.
      }, {
        id: 4,
        descr: 'Feijoada',
        tipo: 'Combo (p/ 2 Pessoas)',
        valor: 55.
      }]
    }, {
      Dia: 4,
      itens: [{
        id: 1,
        descr: 'Tambaqui',
        tipo: 'Mini',
        valor: 18.
      }, {
        id: 2,
        descr: 'Tambaqui',
        tipo: 'Normal',
        valor: 21.
      }, {
        id: 3,
        descr: 'Tambaqui',
        tipo: 'Executivo',
        valor: 22.
      }, {
        id: 4,
        descr: 'Tambaqui',
        tipo: 'Combo (p/ 2 Pessoas)',
        valor: 70.
      }]
    }, {
      Dia: 5,
      itens: [{
        id: 1,
        descr: 'Parmegiana',
        tipo: 'Mini',
        valor: 15.
      }, {
        id: 2,
        descr: 'Parmegiana',
        tipo: 'Normal',
        valor: 17.
      }, {
        id: 3,
        descr: 'Parmegiana',
        tipo: 'Executivo',
        valor: 18.
      }, {
        id: 4,
        descr: 'Parmegiana',
        tipo: 'Combo (p/ 2 Pessoas)',
        valor: 55.
      }]
    }, {
      Dia: 6,
      itens: [{
        id: 1,
        descr: 'Feijoada',
        tipo: 'Mini',
        valor: 15.
      }, {
        id: 2,
        descr: 'Feijoada',
        tipo: 'Normal',
        valor: 17.
      }, {
        id: 3,
        descr: 'Feijoada',
        tipo: 'Executivo',
        valor: 18.
      }, {
        id: 4,
        descr: 'Feijoada',
        tipo: 'Combo (p/ 2 Pessoas)',
        valor: 55.
      }]
    }];
    var dxb = {
      Menu: [{
        id: 1,
        descr: 'Marmitex',
        tipo: 'Menu',
        subMenu: [{
          id: 1,
          descr: 'Mini',
          tipo: 'Marmitex',
          image: '../assets/image/marmita/mini.jpg',
          imageH: '70%',
          imageW: '70%',
          itens: [{
            id: 1,
            tipo: 'Mini',
            descr: 'Sobrecoxa',
            valor: 15.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 2,
            tipo: 'Mini',
            descr: 'Filé Grelhado',
            valor: 15.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 3,
            tipo: 'Mini',
            descr: 'Cação',
            valor: 15.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 4,
            tipo: 'Mini',
            descr: 'Tilápia',
            valor: 17.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 5,
            tipo: 'Mini',
            descr: 'Contra Filé',
            valor: 19.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }]
        }, {
          id: 2,
          descr: 'Normal',
          tipo: 'Marmitex',
          image: '../assets/image/marmita/normal.jpg',
          imageH: '100%',
          imageW: '100%',
          itens: [{
            id: 1,
            tipo: 'Normal',
            descr: 'Sobrecoxa',
            valor: 17.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 2,
            tipo: 'Normal',
            descr: 'Filé Grelhado',
            valor: 17.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 3,
            tipo: 'Normal',
            descr: 'Cação',
            valor: 17.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 4,
            tipo: 'Normal',
            descr: 'Tilápia',
            valor: 20.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 5,
            tipo: 'Normal',
            descr: 'Contra Filé',
            valor: 22.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }]
        }, {
          id: 3,
          descr: 'Executivo',
          tipo: 'Marmitex',
          image: '../assets/image/marmita/executivo.jpg',
          imageH: '100%',
          imageW: '100%',
          itens: [{
            id: 1,
            tipo: 'Executivo',
            descr: 'Sobrecoxa',
            valor: 18.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 2,
            tipo: 'Executivo',
            descr: 'Filé Grelhado',
            valor: 18.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 3,
            tipo: 'Executivo',
            descr: 'Cação',
            valor: 18.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 4,
            tipo: 'Executivo',
            descr: 'Tilápia',
            valor: 21.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 5,
            tipo: 'Executivo',
            descr: 'Contra Filé',
            valor: 23.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }]
        }, {
          id: 4,
          descr: 'Combo (p/ 2 Pessoas)',
          tipo: 'Marmitex',
          image: '../assets/image/marmita/combo.jpg',
          imageH: '100%',
          imageW: '100%',
          itens: [{
            id: 1,
            tipo: 'Combo',
            descr: 'Sobrecoxa',
            valor: 55.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 2,
            tipo: 'Combo',
            descr: 'Filé Grelhado',
            valor: 55.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 3,
            tipo: 'Combo',
            descr: 'Cação',
            valor: 55.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 4,
            tipo: 'Combo',
            descr: 'Tilápia',
            valor: 65.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }, {
            id: 5,
            tipo: 'Combo',
            descr: 'Contra Filé',
            valor: 75.0,
            image: '../assets/image/marmita.png',
            imageH: '100%',
            imageW: '100%'
          }]
        }],
        image: '../assets/image/marmita.png',
        imageH: '100%',
        imageW: '95%'
      }, {
        id: 2,
        descr: 'Porção',
        image: '../assets/image/porcoes.png',
        imageH: '10%',
        imageW: '50%',
        itens: [{
          id: 1,
          tipo: 'Porção',
          descr: 'Salada',
          valor: 8.0,
          image: '../assets/image/porcao/salada.jpg',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 2,
          tipo: 'Porção',
          descr: 'Yakisoba',
          valor: 20.0,
          image: '../assets/image/porcao/yakisoba.jpg',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 3,
          tipo: 'Porção',
          descr: 'Pastel (5 Un)',
          valor: 12.0,
          image: '../assets/image/porcao/pastel.jpg',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 4,
          tipo: 'Porção',
          descr: 'Tempura (6 Un)',
          valor: 15.0,
          image: '../assets/image/porcao/tempura.jpg',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 5,
          tipo: 'Porção',
          descr: 'Polenta',
          valor: 15.0,
          image: '../assets/image/porcao/polenta.jpg',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 7,
          tipo: 'Porção',
          descr: 'Mista',
          valor: 38.0,
          image: '../assets/image/porcao/mista.jpg',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 6,
          tipo: 'Porção',
          descr: 'Frango à Passarinho e Polenta Frita',
          valor: 25.0,
          image: '../assets/image/porcao/frangopolenta.jpg',
          imageH: '10%',
          imageW: '50%'
        }]
      }, {
        id: 3,
        descr: 'Caldo',
        image: '../assets/image/caldo.png',
        imageH: '100%',
        imageW: '50%',
        itens: [{
          id: 1,
          tipo: 'Caldo',
          descr: 'Caldo Feijão',
          valor: 10.0,
          image: '../assets/image/caldo/feijao.jpg',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 2,
          tipo: 'Caldo',
          descr: 'Caldo Verde',
          valor: 10.0,
          image: '../assets/image/caldo/verde.jpg',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 3,
          tipo: 'Caldo',
          descr: 'Caldo Mandioca',
          valor: 14.0,
          image: '../assets/image/caldo/mandioca.jpg',
          imageH: '10%',
          imageW: '50%'
        }]
      }, {
        id: 4,
        descr: 'Massa',
        image: '../assets/image/massa.png',
        imageH: '100%',
        imageW: '50%',
        itens: [{
          id: 1,
          tipo: 'Massa',
          descr: 'Panqueca Carne c/ Queijo (5 Un)',
          valor: 20.0,
          image: '../assets/image/massa/panqueca.jpg',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 2,
          tipo: 'Massa',
          descr: 'Canelone Queijo (6 Un)',
          valor: 20.0,
          image: '../assets/image/massa/canelone.jpg',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 3,
          tipo: 'Massa',
          descr: 'Lasanha Pres C/ Queijo',
          valor: 22.0,
          image: '../assets/image/massa/lasanha.jpg',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 3,
          tipo: 'Massa',
          descr: 'Rondeli Frango C/ Catu (6 Un)',
          valor: 25.0,
          image: '../assets/image/massa/rondeli.jpg',
          imageH: '10%',
          imageW: '50%'
        }]
      }, {
        id: 5,
        descr: 'Sobremesa',
        image: '../assets/image/sobremesa.png',
        imageH: '100%',
        imageW: '50%',
        itens: [{
          id: 1,
          tipo: 'Sobremesa',
          descr: 'Pudim',
          valor: 25.0,
          image: '../assets/image/sobremesa/pudim.jpg',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 2,
          tipo: 'Sobremesa',
          descr: 'Manjar de Coco',
          valor: 25.0,
          image: '../assets/image/sobremesa/manjarcoco.jpg',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 3,
          tipo: 'Sobremesa',
          descr: 'Brigadeirão',
          valor: 25.0,
          image: '../assets/image/sobremesa/brigadeirao.jpg',
          imageH: '10%',
          imageW: '50%'
        }]
      }, {
        id: 6,
        descr: 'Bebida',
        image: '../assets/image/bebida.png',
        imageH: '100%',
        imageW: '50%',
        itens: [{
          id: 1,
          tipo: 'Bebida',
          descr: 'Água',
          valor: 3.0,
          image: '../assets/image/bebida.png',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 2,
          tipo: 'Bebida',
          descr: 'Refrigerante Lata',
          valor: 5.0,
          image: '../assets/image/bebida.png',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 3,
          tipo: 'Bebida',
          descr: 'Del Valle Maracujá',
          valor: 5.0,
          image: '../assets/image/bebida.png',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 3,
          tipo: 'Bebida',
          descr: 'Del Valle Uva',
          valor: 5.0,
          image: '../assets/image/bebida.png',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 3,
          tipo: 'Bebida',
          descr: 'Del Valle Pessêgo',
          valor: 5.0,
          image: '../assets/image/bebida.png',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 3,
          tipo: 'Bebida',
          descr: 'Guarana 1,5L',
          valor: 10.0,
          image: '../assets/image/bebida.png',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 3,
          tipo: 'Bebida',
          descr: 'Coca Cola 1,5L',
          valor: 10.0,
          image: '../assets/image/bebida.png',
          imageH: '10%',
          imageW: '50%'
        }, {
          id: 3,
          tipo: 'Bebida',
          descr: 'Coca Cola ZERO 1,5L',
          valor: 10.0,
          image: '../assets/image/bebida.png',
          imageH: '10%',
          imageW: '50%'
        }]
      }]
    };
    /***/
  },

  /***/
  "./src/app/inicio/inicio.component.ts":
  /*!********************************************!*\
    !*** ./src/app/inicio/inicio.component.ts ***!
    \********************************************/

  /*! exports provided: InicioComponent */

  /***/
  function srcAppInicioInicioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
      return InicioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../db */
    "./src/app/db.ts");
    /* harmony import */


    var _observacao_item_observacao_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../observacao-item/observacao-item.component */
    "./src/app/observacao-item/observacao-item.component.ts");
    /* harmony import */


    var _popup_confirmacao_popup_confirmacao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../popup-confirmacao/popup-confirmacao.component */
    "./src/app/popup-confirmacao/popup-confirmacao.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = ["divLogo"];

    var _c1 = function _c1(a0) {
      return {
        "background-image": a0
      };
    };

    function InicioComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InicioComponent_div_11_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var tile_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.clickDivSelecao(tile_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tile_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tile_r5.descr, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, "url(" + tile_r5.image + ")"));
      }
    }

    function InicioComponent_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InicioComponent_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.voltarMenu();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Voltar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InicioComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InicioComponent_div_18_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var item_r10 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.clickDivMessageItem(item_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "message");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InicioComponent_div_18_Template_div_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var item_r10 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.clickDivRemoveItem(item_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "deleted");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r10 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.tipo + " - " + item_r10.descr);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.formatarValor(item_r10.valor), " ");
      }
    }

    var InicioComponent = /*#__PURE__*/function () {
      function InicioComponent(dialog, snackBar, db) {
        var _this3 = this;

        _classCallCheck(this, InicioComponent);

        this.dialog = dialog;
        this.snackBar = snackBar;
        this.db = db;
        this.title = 'Sabor & Afeto';
        this.steps = [];
        this.nomeCliente = '';
        this.telefoneCliente = '';
        this.horaRetirada = 0;
        this.minutoRetirada = 0;
        this.bag = [];
        this.qtdPedido = 0;
        this.tiles = []; // this.menuAtual = dxb.Menu;

        this.db.list('saborAfeto/menu').query.once("value").then(function (data) {
          _this3.tiles = data.val();
          _this3.menuAtual = _this3.tiles;
        });
        this.db.list("saborAfeto/".concat(this.dataAtualFormatada())).valueChanges().subscribe(function (data) {
          return _this3.qtdPedido = data.length + 1;
        });
      }

      _createClass(InicioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.divLogo) {
            this.ctx = this.divLogo.nativeElement.getContext('2d');
            var ctx = this.ctx;
            var img = new Image();
            var self = this;
            img.src = "../assets/image/logo.jpg";

            img.onload = function () {
              ctx.beginPath();
              ctx.arc(100, 100, 60, 0, 6.28, false); //draw the circle

              ctx.clip(); //call the clip method so the next render is clipped in last path

              ctx.closePath();
              ctx.drawImage(img, 25, 50);
            };
          }
        }
      }, {
        key: "clickDivSelecao",
        value: function clickDivSelecao(tile) {
          if (tile.subMenu) {
            this.steps.push(this.menuAtual);
            this.menuAtual = tile.subMenu;
            this.tiles = tile.subMenu;
          } else if (tile.itens) {
            this.steps.push(this.menuAtual);
            this.tiles = tile.itens;
          } else if (tile.valor) {
            var idPedidoItem = Math.max.apply(Math, this.bag.map(function (o) {
              return o.idPedidoItem;
            }));
            if (idPedidoItem == Number.POSITIVE_INFINITY || idPedidoItem == Number.NEGATIVE_INFINITY) idPedidoItem = 0;
            idPedidoItem = idPedidoItem + 1;
            this.bag.push(Object.assign({
              idPedidoItem: idPedidoItem
            }, tile));
            this.tiles = _db__WEBPACK_IMPORTED_MODULE_1__["dxb"].Menu;
            this.menuAtual = _db__WEBPACK_IMPORTED_MODULE_1__["dxb"].Menu;
            this.steps = [];
          } else {
            this.tiles = _db__WEBPACK_IMPORTED_MODULE_1__["dxb"].Menu;
            this.steps = [];
            this.menuAtual = _db__WEBPACK_IMPORTED_MODULE_1__["dxb"].Menu;
            ;
          }
        }
      }, {
        key: "clickDivRemoveItem",
        value: function clickDivRemoveItem(item) {
          var _this4 = this;

          console.log(item);
          var dialogRef = this.dialog.open(_popup_confirmacao_popup_confirmacao_component__WEBPACK_IMPORTED_MODULE_3__["PopupConfirmacaoComponent"], {
            width: '250px',
            data: {
              mensagem: "Deseja remover o item: ".concat(item.descr, " ?")
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');

            if (result.status) {
              _this4.bag = _this4.bag.filter(function (x) {
                return x != item;
              });
            }
          }); // let snackBarRef = this.snackBar.open(`Deseja remover ${item.descr} ?`, 'Confirmar', { duration: 3000 });;
          // snackBarRef.onAction().subscribe(() => {
          //   this.bag = this.bag.filter((x) => x != item);
          // });
        }
      }, {
        key: "clickDivMessageItem",
        value: function clickDivMessageItem(item) {
          var _this5 = this;

          this.itemObservacao = item;
          var dialogRef = this.dialog.open(_observacao_item_observacao_item_component__WEBPACK_IMPORTED_MODULE_2__["ObservacaoItemComponent"], {
            width: '250px',
            data: {
              produto: item.descr,
              observacao: item.observacao
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result.status) _this5.itemObservacao.observacao = result.observacao;
          });
        }
      }, {
        key: "voltarMenu",
        value: function voltarMenu() {
          this.tiles = this.steps.pop();
        }
      }, {
        key: "formatarValor",
        value: function formatarValor(value) {
          var parts = value.toFixed(2).split(".");
          parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          return "R$ " + parts.join(",");
        }
      }, {
        key: "valorBag",
        value: function valorBag() {
          if (this.bag.length == 0) return this.formatarValor(0);else return this.formatarValor(this.bag.reduce(function (ac, va) {
            return ac + va.valor;
          }, 0));
        }
      }, {
        key: "btnFinalizar",
        value: function btnFinalizar() {
          if (!this.nomeCliente) {
            this.snackBar.open("Nome do cliente obrigat\xF3rio!", null, {
              duration: 3000
            });
            return;
          }

          if (this.horaRetirada <= 0) {
            this.snackBar.open("Hora de retirada obrigat\xF3rio!", null, {
              duration: 3000
            });
            return;
          }

          if (this.minutoRetirada <= 0) {
            this.snackBar.open("Minuto de retirada obrigat\xF3rio!", null, {
              duration: 3000
            });
            return;
          }

          if (this.bag.length <= 0) {
            this.snackBar.open("Deve ter ao menos 1 item no pedido!", null, {
              duration: 3000
            });
            return;
          }

          var dataAtual = this.dataAtualFormatada();
          var xx = this.db.database.ref('saborAfeto');
          xx.child("".concat(dataAtual, "/").concat(this.qtdPedido)).set({
            idPedido: this.qtdPedido,
            data: dataAtual,
            nomeCliente: this.nomeCliente,
            telefoneCliente: this.telefoneCliente,
            horaRetirada: this.horaRetirada,
            minutoRetirada: this.minutoRetirada,
            itens: this.bag,
            status: 0
          });
          var snackBarRef = this.snackBar.open("Pedido enviado para a cozinha", null, {
            duration: 3000
          }); // snackBarRef.onAction().subscribe(() => {
          //   this.bag = this.bag.filter((x) => x != item);
          // });

          this.limparCampos();
        }
      }, {
        key: "btnCancelar",
        value: function btnCancelar() {
          var _this6 = this;

          var dialogRef = this.dialog.open(_popup_confirmacao_popup_confirmacao_component__WEBPACK_IMPORTED_MODULE_3__["PopupConfirmacaoComponent"], {
            width: '250px',
            data: {
              mensagem: "Deseja cancelar o pedido?",
              seMotivo: true
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');

            if (result.status) {
              var dataAtual = _this6.dataAtualFormatada();

              var xx = _this6.db.database.ref('saborAfeto');

              xx.child("".concat(dataAtual, "/").concat(_this6.qtdPedido)).set({
                idPedido: _this6.qtdPedido,
                data: dataAtual,
                nomeCliente: _this6.nomeCliente,
                telefoneCliente: _this6.telefoneCliente,
                horaRetirada: _this6.horaRetirada,
                minutoRetirada: _this6.minutoRetirada,
                itens: _this6.bag,
                motivo: result.resposta,
                status: 2
              });

              _this6.limparCampos();
            }
          });
        }
      }, {
        key: "limparCampos",
        value: function limparCampos() {
          this.bag = [];
          this.nomeCliente = '';
          this.telefoneCliente = '';
          this.horaRetirada = 0;
          this.minutoRetirada = 0;
        }
      }, {
        key: "dataAtualFormatada",
        value: function dataAtualFormatada() {
          var data = new Date(),
              dia = data.getDate().toString(),
              diaF = dia.length == 1 ? '0' + dia : dia,
              mes = (data.getMonth() + 1).toString(),
              //+1 pois no getMonth Janeiro começa com zero.
          mesF = mes.length == 1 ? '0' + mes : mes,
              anoF = data.getFullYear();
          return anoF + "/" + mesF + "/" + diaF;
        }
      }, {
        key: "carregarLogo",
        value: function carregarLogo() {
          var ctx;
          var canvas;
          var img = new Image();
          var self = this;
          img.src = "http://www.antiquiet.com/wp-content/uploads/2011/03/Free-Trapper_Remasters_The-Kills-467x311.jpg";

          img.onload = function () {
            ctx = self.divLogo.nativeElement.getContext('2d');
            ctx.beginPath();
            ctx.arc(100, 100, 60, 0, 6.28, false); //draw the circle

            ctx.clip(); //call the clip method so the next render is clipped in last path

            ctx.stroke();
            ctx.closePath();
            ctx.drawImage(img, -190, 0);
          };
        }
      }]);

      return InicioComponent;
    }();

    InicioComponent.ɵfac = function InicioComponent_Factory(t) {
      return new (t || InicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]));
    };

    InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InicioComponent,
      selectors: [["app-inicio"]],
      viewQuery: function InicioComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divLogo = _t.first);
        }
      },
      decls: 57,
      vars: 10,
      consts: [[2, "background-color", "#ffe3c3"], [2, "position", "absolute", "float", "left", "z-index", "99999"], [2, "width", "13vw", "z-index", "99999"], ["divLogo", ""], [2, "height", "100vh"], [2, "padding", "5px", "text-align", "center"], [2, "display", "flex"], [2, "width", "65vw", "height", "80vh", "display", "flex", "float", "left", "vertical-align", "top"], [2, "margin", "0"], ["style", "margin: 5px; display: flex;float: left; vertical-align: top;", 4, "ngFor", "ngForOf"], [2, "margin", "5px", "clear", "both"], ["mat-raised-button", "", "color", "warn", "style", "float: left;", 3, "click", 4, "ngIf"], [2, "width", "35vw", "display", "flex", "float", "right", "vertical-align", "top"], [2, "clear", "both"], [2, "width", "32vw", "height", "30vh", "overflow-y", "scroll", "overflow-x", "hidden", 3, "scrollTop"], ["scrollMe", ""], [4, "ngFor", "ngForOf"], [2, "clear", "both", "width", "100%", "margin", "5px"], [2, "float", "left", "vertical-align", "bottom", "width", "100%"], [2, "display", "block", "float", "left"], [2, "display", "block", "float", "right"], [1, "example-section"], [1, "example-margin"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "tel", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "min", "10", "max", "21", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "min", "0", "max", "59", 3, "ngModel", "ngModelChange"], [1, "example-button-row"], ["mat-raised-button", "", "color", "warn", 2, "float", "left", 3, "click"], ["mat-raised-button", "", "color", "primary", 2, "float", "right", 3, "click"], [2, "margin", "5px", "display", "flex", "float", "left", "vertical-align", "top"], [2, "width", "20vw", "height", "36vh", 3, "click"], [2, "overflow", "hidden", "background-size", "cover", "background-position", "center", "height", "25vh", 3, "ngStyle"], [2, "display", "block", "float", "left", 3, "click"], ["matBadge", "12", "matBadgeColor", "warn"], [2, "display", "block", "float", "right", 3, "click"]],
      template: function InicioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InicioComponent_div_11_Template, 8, 4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InicioComponent_button_13_Template, 2, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, InicioComponent_div_18_Template, 12, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "TOTAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cliente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InicioComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.nomeCliente = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Telefone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InicioComponent_Template_input_ngModelChange_37_listener($event) {
            return ctx.telefoneCliente = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Hora de Retirada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Hora");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InicioComponent_Template_input_ngModelChange_46_listener($event) {
            return ctx.horaRetirada = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Minuto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InicioComponent_Template_input_ngModelChange_50_listener($event) {
            return ctx.minutoRetirada = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InicioComponent_Template_button_click_53_listener() {
            return ctx.btnCancelar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InicioComponent_Template_button_click_55_listener() {
            return ctx.btnFinalizar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Finalizar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tiles[0] == null ? null : ctx.tiles[0].tipo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.steps.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollTop", _r3.scrollHeight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.valorBag());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nomeCliente);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.telefoneCliente);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.horaRetirada);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.minutoRetirada);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"]],
      styles: [".example-card[_ngcontent-%COMP%] {\r\n    max-width: 100px;\r\n    max-height: 150px;\r\n  }\r\n  \r\n.example-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('https://image.winudf.com/v2/image1/YnIuY29tLm1hY3JvcHVibGljaWRhZGUubWFybWl0YW1pYV9pY29uXzE1NjAwMjMzOThfMDI2/icon.png?w=170&fakeurl=1');\r\n    background-size: cover;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFRjtJQUNJLDZKQUE2SjtJQUM3SixzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcbiAgXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2Uud2ludWRmLmNvbS92Mi9pbWFnZTEvWW5JdVkyOXRMbTFoWTNKdmNIVmliR2xqYVdSaFpHVXViV0Z5YldsMFlXMXBZVjlwWTI5dVh6RTFOakF3TWpNek9UaGZNREkyL2ljb24ucG5nP3c9MTcwJmZha2V1cmw9MScpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiJdfQ== */"]
    });
    InicioComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InicioComponent,
      factory: InicioComponent.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inicio',
          templateUrl: './inicio.component.html',
          styleUrls: ['./inicio.component.css']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]
        }];
      }, {
        divLogo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['divLogo', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/observacao-item/observacao-item.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/observacao-item/observacao-item.component.ts ***!
    \**************************************************************/

  /*! exports provided: ObservacaoItemComponent */

  /***/
  function srcAppObservacaoItemObservacaoItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObservacaoItemComponent", function () {
      return ObservacaoItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var ObservacaoItemComponent = /*#__PURE__*/function () {
      function ObservacaoItemComponent(dialogRef, data) {
        _classCallCheck(this, ObservacaoItemComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(ObservacaoItemComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.data.status = false;
          this.dialogRef.close(this.data);
        }
      }, {
        key: "onYesClick",
        value: function onYesClick() {
          this.data.status = true;
          this.dialogRef.close(this.data);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ObservacaoItemComponent;
    }();

    ObservacaoItemComponent.ɵfac = function ObservacaoItemComponent_Factory(t) {
      return new (t || ObservacaoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    ObservacaoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ObservacaoItemComponent,
      selectors: [["app-observacao-item"]],
      decls: 14,
      vars: 3,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "click"]],
      template: function ObservacaoItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Observa\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ObservacaoItemComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.data.observacao = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObservacaoItemComponent_Template_button_click_10_listener() {
            return ctx.onNoClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObservacaoItemComponent_Template_button_click_12_listener() {
            return ctx.onYesClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Confirmar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.produto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Informe a observa\xE7\xE3o para o produto ", ctx.data.produto, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.observacao);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ic2VydmFjYW8taXRlbS9vYnNlcnZhY2FvLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObservacaoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-observacao-item',
          templateUrl: './observacao-item.component.html',
          styleUrls: ['./observacao-item.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/popup-confirmacao/popup-confirmacao.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/popup-confirmacao/popup-confirmacao.component.ts ***!
    \******************************************************************/

  /*! exports provided: PopupConfirmacaoComponent */

  /***/
  function srcAppPopupConfirmacaoPopupConfirmacaoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupConfirmacaoComponent", function () {
      return PopupConfirmacaoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function PopupConfirmacaoComponent_mat_form_field_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PopupConfirmacaoComponent_mat_form_field_5_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.data.resposta = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.data.resposta);
      }
    }

    var PopupConfirmacaoComponent = /*#__PURE__*/function () {
      function PopupConfirmacaoComponent(snackBar, dialogRef, data) {
        _classCallCheck(this, PopupConfirmacaoComponent);

        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(PopupConfirmacaoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.data.status = false;
          this.dialogRef.close(this.data);
        }
      }, {
        key: "onYesClick",
        value: function onYesClick() {
          if (this.data.seMotivo && !this.data.resposta) {
            this.snackBar.open("Informe o motivo!", null, {
              duration: 3000
            });
            return;
          }

          this.data.status = true;
          this.dialogRef.close(this.data);
        }
      }]);

      return PopupConfirmacaoComponent;
    }();

    PopupConfirmacaoComponent.ɵfac = function PopupConfirmacaoComponent_Factory(t) {
      return new (t || PopupConfirmacaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    PopupConfirmacaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PopupConfirmacaoComponent,
      selectors: [["app-popup-confirmacao"]],
      decls: 11,
      vars: 2,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "click"], ["matInput", "", 3, "ngModel", "ngModelChange"]],
      template: function PopupConfirmacaoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirma\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PopupConfirmacaoComponent_mat_form_field_5_Template, 2, 1, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupConfirmacaoComponent_Template_button_click_7_listener() {
            return ctx.onNoClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupConfirmacaoComponent_Template_button_click_9_listener() {
            return ctx.onYesClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Salvar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.mensagem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.seMotivo);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcHVwLWNvbmZpcm1hY2FvL3BvcHVwLWNvbmZpcm1hY2FvLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupConfirmacaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-popup-confirmacao',
          templateUrl: './popup-confirmacao.component.html',
          styleUrls: ['./popup-confirmacao.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! C:\Sources\pessoal\restaurante\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map