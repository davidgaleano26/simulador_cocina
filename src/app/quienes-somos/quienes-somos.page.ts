import { Component, OnInit } from '@angular/core';
declare var google;
interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}
@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.page.html',
  styleUrls: ['./quienes-somos.page.scss'],
})
export class QuienesSomosPage implements OnInit {
  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: 4.657983,
        lng: -74.057317,
      },
      title: 'Politecnico internacional sede av chile'
    },
    {
      position: {
        lat: 4.687021, 
        lng: -74.081887,
      },
      title: 'Politecnico internacional sede av cll 80'
    },
    {
      position: {
        lat: 4.595609, 
        lng: -74.160750,
      },
      title: 'Politecnico internacional sede sur'
    },
  ];
  constructor() { }

  ngOnInit() {
    this.loadMap();
  }
  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 4.658383846282959, lng: -74.09394073486328};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
    });
  }
  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }
  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
}
