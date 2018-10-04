# AngularPwa
Este proyecto representa el uso de Angular con PWA desde [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Instalación de HTTP-SERVER
El http-server es un paquete de npm que permite lanzar un servidor we de una manera muy sencilla. Ejecutando `npm install http-server -g` instalaremos el comando. Luego para lanza el servidor deberemos movernos al directorio `dist/angular-pwa` y ejecutar `http-server -o` y nos abrirá la url [http://localhost:8080/](http://localhost:8080/)

## Instalación de LightHouse Chrome Extension

Para auditar el uso de las técnicas de PWA's deberemos instalar [LightHouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) 

## Inclusión de PWA con Angular CLI

* Para incluir PWA será necesario ejecutar `ng add @angular/pwa` para configurar el uso del Service Worker.
* Esto añadirá los archivos: ngsw-config.json y manifest.json que son la base del funcionamiento del Service Worker y el Manifiesto.
* Para comprobar que funciona correctamente el service worker deberemos compilar el proyecto para producción `ng build --prod` y desde `dist/angular-pwa` ejecutamos `http-server -o`.
* Desde las Chrome Dev Tools nos vamos a la pestaña Application y a Service Worker para ver si está funcionando correctamente.
* Desde la pestaña de Audit podemos ejecutar LightHouse para analizar la calidad de la página incluido cómo de PWA es nuestra aplicación.  

## Desarrollo
Ejecuta `ng serve` para lanzar el servidor de desarrollo.

## Compilación para producción

Ejecuta `ng build` para compilar el proyecto. Los ficheros de producción se colocarán en el directorio  `dist/`. Utiliza el `--prod` para compilar para producción.

## Test de Unidad

Ejecuta `ng test` para lanzar las pruebas de unidad de [Karma](https://karma-runner.github.io).

## Test de Aceptación

Ejecuta `ng e2e` para lanzar las pruebas de aceptación escritas con [Protractor](http://www.protractortest.org/).




