import { Component, OnInit } from '@angular/core';
import { single } from './data';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [400, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Estudiantes';
  showYAxisLabel = true;
  yAxisLabel = 'Total trabajos entregados';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#262626','blue','purple']
  };
  constructor() {
    Object.assign(this, { single })
   }

  ngOnInit() {
  }
  onSelect(event) {
    console.log(event);
  }

}
