webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ligths_ligths__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sensors_sensors__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servos_servos__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, LigthsProv, SensorsProv, ServosProvider) {
        this.navCtrl = navCtrl;
        this.LigthsProv = LigthsProv;
        this.SensorsProv = SensorsProv;
        this.ServosProvider = ServosProvider;
        this.LigthsProv = LigthsProv;
        this.SensorsProv = SensorsProv;
        this.ServosProvider = ServosProvider;
        this.luzPiso1 = false;
        this.luzPiso2 = false;
        this.luzPiso3 = false;
        this.luzPiso4 = false;
        this.persiana1 = false;
        this.persiana2 = false;
        this.puertaPrincipal = false;
        this.puertaGaraje = false;
        this.sensorTemperatura = false;
        this.sensorGas = false;
        this.sensorMovimiento = false;
    }
    HomePage.prototype.cambiarLuzPiso1 = function () {
        this.luzPiso1 = !this.luzPiso1;
        this.LigthsProv.cambiarLuzPiso1(this.luzPiso1)
            .subscribe(function (res) { console.log(res); });
    };
    HomePage.prototype.cambiarLuzPiso2 = function () {
        this.luzPiso2 = !this.luzPiso2;
        this.LigthsProv.cambiarLuzPiso2(this.luzPiso2)
            .subscribe(function (res) { console.log(res); });
    };
    HomePage.prototype.cambiarLuzPiso3 = function () {
        this.luzPiso3 = !this.luzPiso3;
        this.LigthsProv.cambiarLuzPiso3(this.luzPiso3)
            .subscribe(function (res) { console.log(res); });
    };
    HomePage.prototype.cambiarLuzPiso4 = function () {
        this.luzPiso4 = !this.luzPiso4;
        this.LigthsProv.cambiarLuzPiso4(this.luzPiso4)
            .subscribe(function (res) { console.log(res); });
    };
    HomePage.prototype.cambiarPersiana1 = function () {
        this.persiana1 = !this.persiana1;
        this.ServosProvider.cambiarPersiana1(this.persiana1)
            .subscribe(function (res) { console.log(res); });
    };
    HomePage.prototype.cambiarPersiana2 = function () {
        this.persiana2 = !this.persiana2;
        this.ServosProvider.cambiarPersiana2(this.persiana2)
            .subscribe(function (res) { console.log(res); });
    };
    HomePage.prototype.cambiarPuertaPrincipal = function () {
        this.puertaPrincipal = !this.puertaPrincipal;
        this.ServosProvider.cambiarPuertaPrincipal(this.puertaPrincipal)
            .subscribe(function (res) { console.log(res); });
    };
    HomePage.prototype.cambiarPuertaGaraje = function () {
        this.puertaGaraje = !this.puertaGaraje;
        this.ServosProvider.cambiarPuertaGaraje(this.puertaGaraje)
            .subscribe(function (res) { console.log(res); });
    };
    HomePage.prototype.cambiarSensorMovimiento = function () {
        this.sensorMovimiento = !this.sensorMovimiento;
        this.SensorsProv.cambiarSensorMovimiento(this.sensorMovimiento)
            .subscribe(function (res) { console.log(res); });
    };
    HomePage.prototype.cambiarSensorTemperatura = function () {
        this.sensorTemperatura = !this.sensorTemperatura;
        this.SensorsProv.cambiarSensorTemperatura(this.sensorTemperatura)
            .subscribe(function (res) { alert(res.estado); });
    };
    HomePage.prototype.cambiarSensorGas = function () {
        this.sensorGas = !this.sensorGas;
        this.SensorsProv.cambiarSensorGas(this.sensorGas)
            .subscribe(function (res) { console.log(res); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/alejo/domotichouse/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Casa Domótica\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>  \n    <ion-list-header>\n      <ion-icon name="sunny"></ion-icon>\n      Luces\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <!-- Luz del primer piso -->\n          <button [disabled]="sensorMovimiento" ion-button icon-left color="light" (click)="cambiarLuzPiso1()">\n            <ion-icon *ngIf="!luzPiso1" name="sunny" color="danger"></ion-icon>\n            <ion-icon *ngIf="luzPiso1" name="sunny" color="secondary"></ion-icon>\n            Luz 1er piso\n          </button>\n        </ion-col>\n\n        <ion-col col-6>\n          <!-- Sensor movimiento de la luz del primer piso -->\n          <button ion-button icon-left color="light" (click)="cambiarSensorMovimiento()">\n            <ion-icon *ngIf="!sensorMovimiento" name="square" color="danger"></ion-icon>\n            <ion-icon *ngIf="sensorMovimiento" name="checkbox" color="secondary"></ion-icon>\n            ¿Sensor activo?\n          </button>\n          <!-- <ion-item>\n            <ion-label>¿Sensor activo?</ion-label>\n            <ion-checkbox [(ngModel)]="sensorActivo" color="dark" checked="sensorActivo" (click)="cambiarSensorActivo()"></ion-checkbox>\n          </ion-item> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <!-- Luz del segundo piso -->\n          <button ion-button icon-left color="light" (click)="cambiarLuzPiso2()">\n            <ion-icon *ngIf="!luzPiso2" name="sunny" color="danger"></ion-icon>\n            <ion-icon *ngIf="luzPiso2" name="sunny" color="secondary"></ion-icon>\n            Luz 2do piso\n          </button>\n        </ion-col>\n    \n        <ion-col col-6>\n          <!-- Luz del tercer piso -->\n          <button ion-button icon-left color="light" (click)="cambiarLuzPiso3()">\n            <ion-icon *ngIf="!luzPiso3" name="sunny" color="danger"></ion-icon>\n            <ion-icon *ngIf="luzPiso3" name="sunny" color="secondary"></ion-icon>\n            Luz 3er piso\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <!-- Luz del cuarto piso -->\n          <button ion-button icon-left color="light" (click)="cambiarLuzPiso4()">\n            <ion-icon *ngIf="!luzPiso4" name="sunny" color="danger"></ion-icon>\n            <ion-icon *ngIf="luzPiso4" name="sunny" color="secondary"></ion-icon>\n            Luz 4to piso\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n  \n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="browsers"></ion-icon>\n      Persianas\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <!-- Persiana 1 -->\n          <button ion-button icon-left color="light" (click)="cambiarPersiana1()">\n            <ion-icon *ngIf="!persiana1" name="browsers" color="danger"></ion-icon>\n            <ion-icon *ngIf="persiana1" name="browsers" color="secondary"></ion-icon>\n            Persiana izquierda\n          </button>\n        </ion-col>\n\n        <ion-col col-6>\n          <!-- Persiana 2 -->\n          <button ion-button icon-left color="light" (click)="cambiarPersiana2()">\n            <ion-icon *ngIf="!persiana2" name="browsers" color="danger"></ion-icon>\n            <ion-icon *ngIf="persiana2" name="browsers" color="secondary"></ion-icon>\n            Persiana derecha\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="square"></ion-icon>\n       Puertas\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <!-- Puerta principal -->\n          <button ion-button icon-left color="light" (click)="cambiarPuertaPrincipal()">\n            <ion-icon *ngIf="!puertaPrincipal" name="square" color="danger"></ion-icon>\n            <ion-icon *ngIf="puertaPrincipal" name="square" color="secondary"></ion-icon>\n            Puerta garaje\n          </button>\n        </ion-col>\n  \n        <ion-col col-6>\n          <!-- Puerta garaje -->\n          <button ion-button icon-left color="light" (click)="cambiarPuertaGaraje()">\n            <ion-icon *ngIf="!puertaGaraje" name="square" color="danger"></ion-icon>\n            <ion-icon *ngIf="puertaGaraje" name="square" color="secondary"></ion-icon>\n            Puerta principal\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="cog"></ion-icon>\n      Sensores\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <!-- Sensor temperatura -->\n          <button ion-button icon-left color="light" (click)="cambiarSensorTemperatura()">\n            <ion-icon name="thermometer" color="danger"></ion-icon>\n            Temperatura\n          </button>\n        </ion-col>\n  \n        <ion-col col-6>\n          <!-- Sensor gas -->\n          <!-- <button ion-button icon-left color="light" (click)="cambiarSensorGas()">\n            <ion-icon *ngIf="!sensorGas" name="flame" color="danger"></ion-icon>\n            <ion-icon *ngIf="sensorGas" name="flame" color="secondary"></ion-icon>\n            Gas/Humo\n          </button> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/alejo/domotichouse/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_ligths_ligths__["a" /* LigthsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sensors_sensors__["a" /* SensorsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_servos_servos__["a" /* ServosProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LigthsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LigthsProvider = /** @class */ (function () {
    function LigthsProvider(http) {
        this.http = http;
        console.log('Hello LigthsProvider Provider');
    }
    LigthsProvider.prototype.cambiarLuzPiso1 = function (estadoLuzPiso1) {
        if (estadoLuzPiso1) {
            return this.http.get("http://192.168.49.214:8081/encenderLuzP1");
        }
        else {
            return this.http.get("http://192.168.49.214:8081/apagarLuzP1");
        }
    };
    LigthsProvider.prototype.cambiarLuzPiso2 = function (estadoLuzPiso2) {
        if (estadoLuzPiso2) {
            return this.http.get("http://192.168.49.214:8081/encenderLuzP2");
        }
        else {
            return this.http.get("http://192.168.49.214:8081/apagarLuzP2");
        }
    };
    LigthsProvider.prototype.cambiarLuzPiso3 = function (estadoLuzPiso3) {
        if (estadoLuzPiso3) {
            return this.http.get("http://192.168.49.214:8081/encenderLuzP3");
        }
        else {
            return this.http.get("http://192.168.49.214:8081/apagarLuzP3");
        }
    };
    LigthsProvider.prototype.cambiarLuzPiso4 = function (estadoLuzPiso4) {
        if (estadoLuzPiso4) {
            return this.http.get("http://192.168.49.214:8081/encenderLuzP4");
        }
        else {
            return this.http.get("http://192.168.49.214:8081/apagarLuzP4");
        }
    };
    LigthsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LigthsProvider);
    return LigthsProvider;
}());

var resultado = /** @class */ (function () {
    function resultado() {
    }
    return resultado;
}());
//# sourceMappingURL=ligths.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SensorsProvider = /** @class */ (function () {
    function SensorsProvider(http) {
        this.http = http;
        console.log('Hello SensorsProvider Provider');
    }
    SensorsProvider.prototype.cambiarSensorMovimiento = function (estadoSensorMovimiento) {
        return this.http.get("http://192.168.49.214:8081/activarSensorMovimiento");
    };
    SensorsProvider.prototype.cambiarSensorTemperatura = function (estadoSensorTemperatura) {
        return this.http.get("http://192.168.49.214:8081/tomarTemperatura");
    };
    SensorsProvider.prototype.cambiarSensorGas = function (estadoSensorGas) {
        if (estadoSensorGas) {
            return this.http.get("http://192.168.49.214:8081/activarSensorGas");
        }
        else {
            return this.http.get("http://192.168.49.214:8081/desactivarSensorGas");
        }
    };
    SensorsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SensorsProvider);
    return SensorsProvider;
}());

var resultado = /** @class */ (function () {
    function resultado() {
    }
    return resultado;
}());
//# sourceMappingURL=sensors.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServosProvider = /** @class */ (function () {
    function ServosProvider(http) {
        this.http = http;
        console.log('Hello ServosProvider Provider');
    }
    ServosProvider.prototype.cambiarPersiana1 = function (estadoPersiana1) {
        if (estadoPersiana1) {
            return this.http.get("http://192.168.49.214:8081/abrirPersiana1");
        }
        else {
            return this.http.get("http://192.168.49.214:8081/cerrarPersiana1");
        }
    };
    ServosProvider.prototype.cambiarPersiana2 = function (estadoPersiana2) {
        if (estadoPersiana2) {
            return this.http.get("http://192.168.49.214:8081/abrirPersiana2");
        }
        else {
            return this.http.get("http://192.168.49.214:8081/cerrarPersiana2");
        }
    };
    ServosProvider.prototype.cambiarPuertaPrincipal = function (estadoPuertaPrincipal) {
        if (estadoPuertaPrincipal) {
            return this.http.get("http://192.168.49.214:8081/abrirPuertaPrincipal");
        }
        else {
            return this.http.get("http://192.168.49.214:8081/cerrarPuertaPrincipal");
        }
    };
    ServosProvider.prototype.cambiarPuertaGaraje = function (estadoPuertaGaraje) {
        if (estadoPuertaGaraje) {
            return this.http.get("http://192.168.49.214:8081/abrirPuertaGaraje");
        }
        else {
            return this.http.get("http://192.168.49.214:8081/cerrarPuertaGaraje");
        }
    };
    ServosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServosProvider);
    return ServosProvider;
}());

var resultado = /** @class */ (function () {
    function resultado() {
    }
    return resultado;
}());
//# sourceMappingURL=servos.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_ligths_ligths__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_servos_servos__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_sensors_sensors__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_ligths_ligths__["a" /* LigthsProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_servos_servos__["a" /* ServosProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_sensors_sensors__["a" /* SensorsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/alejo/domotichouse/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/alejo/domotichouse/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map