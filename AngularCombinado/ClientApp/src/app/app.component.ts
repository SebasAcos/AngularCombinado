import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {

    setTimeout(() => {
      this.peliculas  = [
        /** se agrega peliculas en el arreglo
        {
      titulo: 'spiderman',
      fecha: new Date(),
      presio: 3000
    },
    {
      titulo: 'IronMan',
      fecha: new Date('03-02-2022'),
      presio: 3400
    },
    {
      titulo: 'UFC',
      fecha: new Date('06-03-2020'),
      presio: 5000
    }**/
     ]
}, 3000);
}

    
  title = 'component.ts';
  
  peliculas;


  duplicarNumero(valor:number):number{
    return valor * 2;
  }
}
