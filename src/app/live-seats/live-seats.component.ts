import { Component, OnInit, Input } from '@angular/core';

import { SeatsService } from '../service/seats.service';
//import { Number } from '../model/number';

@Component({
  selector: 'app-live-seats',
  templateUrl: './live-seats.component.html',
  styleUrls: ['./live-seats.component.css']
})
export class LiveSeatsComponent implements OnInit {
  @Input() 
 x: any;
 rows: number[]=[0,1,2,3,4,5,6,7,8,9,10,11];
 cols: number[]=[0,1,2,3,4,5,6];

  constructor(private ss: SeatsService) { }

  ngOnInit() {
    this.x = new Array(12);
    for (var i = 0; i < 12; i++) {
      this.x[i] = new Array(7);
    }
    this.x = this.ss.getSeatsDesign();
    //console.log(this.x);
  
  }

  

}
