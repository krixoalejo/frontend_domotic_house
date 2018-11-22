import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServosProvider Provider');
  }

  cambiarPersiana1(estadoPersiana1): Observable<resultado> {
    if (estadoPersiana1) {
      return this.http.get<resultado>("http://192.168.49.214:8081/abrirPersiana1");
    } else {
      return this.http.get<resultado>("http://192.168.49.214:8081/cerrarPersiana1");
    }
  }

  cambiarPersiana2(estadoPersiana2): Observable<resultado> {
    if (estadoPersiana2) {
      return this.http.get<resultado>("http://192.168.49.214:8081/abrirPersiana2");
    } else {
      return this.http.get<resultado>("http://192.168.49.214:8081/cerrarPersiana2");
    }
  }

  cambiarPuertaPrincipal(estadoPuertaPrincipal): Observable<resultado> {
    if (estadoPuertaPrincipal) {
      return this.http.get<resultado>("http://192.168.49.214:8081/abrirPuertaPrincipal");
    } else {
      return this.http.get<resultado>("http://192.168.49.214:8081/cerrarPuertaPrincipal");
    }
  }

  cambiarPuertaGaraje(estadoPuertaGaraje): Observable<resultado> {
    if (estadoPuertaGaraje) {
      return this.http.get<resultado>("http://192.168.49.214:8081/abrirPuertaGaraje");
    } else {
      return this.http.get<resultado>("http://192.168.49.214:8081/cerrarPuertaGaraje");
    }
  }

}

class resultado {
  estado: string;
}
