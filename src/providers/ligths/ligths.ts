import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LigthsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LigthsProvider Provider');
  }

  cambiarLuzPiso1(estadoLuzPiso1): Observable<resultado>{
    if (estadoLuzPiso1) {
      return this.http.get<resultado>("http://192.168.49.214:8081/encenderLuzP1");
    } else {
      return this.http.get<resultado>("http://192.168.49.214:8081/apagarLuzP1");
    }
  }

  cambiarLuzPiso2(estadoLuzPiso2): Observable<resultado> {
    if (estadoLuzPiso2) {
      return this.http.get<resultado>("http://192.168.49.214:8081/encenderLuzP2");
    } else {
      return this.http.get<resultado>("http://192.168.49.214:8081/apagarLuzP2");
    }
  }

  cambiarLuzPiso3(estadoLuzPiso3): Observable<resultado> {
    if (estadoLuzPiso3) {
      return this.http.get<resultado>("http://192.168.49.214:8081/encenderLuzP3");
    } else {
      return this.http.get<resultado>("http://192.168.49.214:8081/apagarLuzP3");
    }
  }

  cambiarLuzPiso4(estadoLuzPiso4): Observable<resultado> {
    if (estadoLuzPiso4) {
      return this.http.get<resultado>("http://192.168.49.214:8081/encenderLuzP4");
    } else {
      return this.http.get<resultado>("http://192.168.49.214:8081/apagarLuzP4");
    }
  }

}

class resultado {
  estado: string;
}