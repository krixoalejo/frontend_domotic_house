import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SensorsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SensorsProvider Provider');
  }
  
  cambiarSensorMovimiento(estadoSensorMovimiento): Observable<resultado> {
    return this.http.get<resultado>("http://192.168.49.214:8081/activarSensorMovimiento");
  }

  cambiarSensorTemperatura(estadoSensorTemperatura): Observable<resultado> {
    return this.http.get<resultado>("http://192.168.49.214:8081/tomarTemperatura");
  }

  cambiarSensorGas(estadoSensorGas): Observable<resultado> {
    if (estadoSensorGas) {
      return this.http.get<resultado>("http://192.168.49.214:8081/activarSensorGas");
    } else {
      return this.http.get<resultado>("http://192.168.49.214:8081/desactivarSensorGas");
    }
  }

}

class resultado {
  estado: string;
}
