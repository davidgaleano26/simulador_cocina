import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.page.html',
  styleUrls: ['./docentes.page.scss'],
})
export class DocentesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides = [
    {
      img:'https://contraloriadelmagdalena.gov.co/contratacion/imagenes/botones/usuario.png',
      titulo: 'David Ariza<br>Decano'
    },
    {
      img:'https://contraloriadelmagdalena.gov.co/contratacion/imagenes/botones/usuario.png',
      titulo: 'David Ariza<br>Decano'
    },{
      img:'https://contraloriadelmagdalena.gov.co/contratacion/imagenes/botones/usuario.png',
      titulo: 'David Ariza<br>Decano'
    }
  ]

}
