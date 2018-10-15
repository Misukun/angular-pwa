import { Component } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {RandomDataService} from './random-data.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  datos: number[];
  constructor(private swu: SwUpdate, private rds: RandomDataService) {
    this.datos = [];
    // Comprobación de versiones disponibles
    swu.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    // Actualiza la app cuando esté disponible
    swu.available.subscribe(event => {
      if (this.muestraUpdate(event)) {
        swu.activateUpdate().then(() => document.location.reload());
      }
    });
    // Verifica la versión activada
    swu.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
    // Forzar la Comprobación de versiones
    // interval(6 * 60 * 60).subscribe(() => swu.checkForUpdate());
  }
  muestraUpdate(evento) {
    // Debería ser visual con una alerta
    console.log(evento);
  }
  cogeDatos() {
    this.rds.fetchData().subscribe(
      data => {
        this.datos = data
          .split('\n')
          .filter(n => !!n)
          .map(n => parseInt(n, 10));
        console.log(this.datos);
      },
      err => {
        console.error(err);
      },
    );
  }
}
