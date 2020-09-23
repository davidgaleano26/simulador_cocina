import { Component, OnInit } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-info-popup',
  templateUrl: './info-popup.page.html',
  styleUrls: ['./info-popup.page.scss'],
})
export class InfoPopupPage implements OnInit {
datoscaneado : {}
  constructor(private barcodeScanner: BarcodeScanner,private http: HttpClient) { }
  leercodigo(){
  this.barcodeScanner.scan().then(barcodeData => {
    this.datoscaneado = barcodeData;
    if(this.datoscaneado === 'https://simulador-cocina.web.app/'){
    //  this.http.post('http://localhost:8100/inicio', payloadObject).subscribe();
    //window.open('https://simulador-cocina.web.app/','_blank') 
    }
  })
  .catch(err => {
    console.log("Error", err);
  });
}

// CodificarTexto() {
//   this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.datocodificado).then(
//       encodedData => {
//         this.datocodificado = encodedData;
//       },
//       err => {
//         console.log("Un error ha ocurrido: " + err);
//       }
//     );
// }
  ngOnInit() {
  }

}
