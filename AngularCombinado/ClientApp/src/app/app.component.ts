import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'component.ts';
  
  pelicula = {
    titulo: 'spiderman',
    fecha: new Date()
  }


  duplicarNumero(valor:number):number{
    return valor * 2;
  }
}
