import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investigacion',
  templateUrl: './investigacion.page.html',
  styleUrls: ['./investigacion.page.scss'],
})
export class InvestigacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides = [
    {
      img:'https://www.vippng.com/png/full/81-817987_beef-and-broccoli-platillos-de-comida-png.png',
      titulo: 'Receta<br>Numero 1'
    },
    {
      img:'https://www.qin.mx/img/platillos-kung-pao.png',
      titulo: 'Receta<br>Numero 2'
    },{
      img:'https://www.qin.mx/img/platillos-pollo-naranja.png',
      titulo: 'Receta<br>Numero 3'
    }
  ]

}
