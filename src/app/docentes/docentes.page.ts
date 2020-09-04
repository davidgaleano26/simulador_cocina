import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.page.html',
  styleUrls: ['./docentes.page.scss'],
})
export class DocentesPage implements OnInit {
  single: any[];
  view: any[] = [380, 500];

  options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() { 
    Object.assign(this, { single });
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }
  // saleData = [
  //   { name: "Mobiles", value: 105000 },
  //   { name: "Laptop", value: 55000 },
  //   { name: "AC", value: 15000 },
  //   { name: "Headset", value: 150000 },
  //   { name: "Fridge", value: 20000 }
  // ];

}
