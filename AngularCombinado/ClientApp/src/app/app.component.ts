import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'component.ts';
  
  pelicula = {
    titulo: 'spiderman',
    fecha: new Date(),
    presio: 3000
  }


  duplicarNumero(valor:number):number{
    return valor * 2;
  }
}
