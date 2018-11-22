import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LigthsProvider } from '../../providers/ligths/ligths';
import { SensorsProvider } from '../../providers/sensors/sensors';
import { ServosProvider } from '../../providers/servos/servos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  luzPiso1: boolean;
  luzPiso2: boolean;
  luzPiso3: boolean;
  luzPiso4: boolean;
  persiana1: boolean;
  persiana2: boolean;
  puertaPrincipal: boolean;
  puertaGaraje: boolean;
  sensorTemperatura: boolean;
  sensorGas: boolean;
  sensorMovimiento: boolean;

  constructor(public navCtrl: NavController, public LigthsProv: LigthsProvider, 
      public SensorsProv: SensorsProvider, public ServosProvider: ServosProvider) {
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

  cambiarLuzPiso1() {   
    this.luzPiso1 = !this.luzPiso1;
    this.LigthsProv.cambiarLuzPiso1(this.luzPiso1)
      .subscribe(
        (res) => { console.log(res); }
      );    
  }

  cambiarLuzPiso2() {
    this.luzPiso2 = !this.luzPiso2;
    this.LigthsProv.cambiarLuzPiso2(this.luzPiso2)
      .subscribe(
        (res) => { console.log(res); }
      );
  }

  cambiarLuzPiso3() {
    this.luzPiso3 = !this.luzPiso3;
    this.LigthsProv.cambiarLuzPiso3(this.luzPiso3)
      .subscribe(
        (res) => { console.log(res); }
      );
  }

  cambiarLuzPiso4() {
    this.luzPiso4 = !this.luzPiso4;
    this.LigthsProv.cambiarLuzPiso4(this.luzPiso4)
      .subscribe(
        (res) => { console.log(res); }
      );
  }

  cambiarPersiana1() {
    this.persiana1 = !this.persiana1;
    this.ServosProvider.cambiarPersiana1(this.persiana1)
      .subscribe(
        (res) => { console.log(res); }
      );
  }

  cambiarPersiana2() {
    this.persiana2 = !this.persiana2;
    this.ServosProvider.cambiarPersiana2(this.persiana2)
      .subscribe(
        (res) => { console.log(res); }
      );
  }

  cambiarPuertaPrincipal() {
    this.puertaPrincipal = !this.puertaPrincipal;
    this.ServosProvider.cambiarPuertaPrincipal(this.puertaPrincipal)
      .subscribe(
        (res) => { console.log(res); }
      );
  }

  cambiarPuertaGaraje() {
    this.puertaGaraje = !this.puertaGaraje;
    this.ServosProvider.cambiarPuertaGaraje(this.puertaGaraje)
      .subscribe(
        (res) => { console.log(res); }
      );
  }

  cambiarSensorMovimiento() {
    this.sensorMovimiento = !this.sensorMovimiento;
    this.SensorsProv.cambiarSensorMovimiento(this.sensorMovimiento)
      .subscribe(
        (res) => { console.log(res); }
      );
  }

  cambiarSensorTemperatura() {
    this.sensorTemperatura = !this.sensorTemperatura;
    this.SensorsProv.cambiarSensorTemperatura(this.sensorTemperatura)
      .subscribe(
        (res) => { alert(res.estado); }
      );
  }

  cambiarSensorGas() {
    this.sensorGas = !this.sensorGas;
    this.SensorsProv.cambiarSensorGas(this.sensorGas)
      .subscribe(
        (res) => { console.log(res); }
      );
  }

}
