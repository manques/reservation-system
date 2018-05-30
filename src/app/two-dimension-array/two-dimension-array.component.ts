import { Component, OnInit } from '@angular/core';

import { Number } from '../model/number';

@Component({
  selector: 'app-two-dimension-array',
  templateUrl: './two-dimension-array.component.html',
  styleUrls: ['./two-dimension-array.component.css']
})
export class TwoDimensionArrayComponent implements OnInit {
  // number primitive type
  rows: number = 12;
  columns: number = 7;
  counter: number = 0;
  // Number object type
  seat: Number;
  seats : Number[][];
  
  constructor() { }

  ngOnInit() {
    
  }

    getSeatsDesign(): Number[][]{
      // 
        this.seat.isAvailable = true;
        this.seats = new Array(this.rows);
        for(var i = 0; i < this.rows; i++ ){
            this.seats[i] = new Array(this.columns);
            for(var j = 0; j < this.columns; j++){
                this.counter++;
                console.log(this.counter);
              if(this.counter <= 80){
                this.seat.seatNumber = this.counter;
                this.seats[i][j] = this.seat; 
              }
            }
        }
      // 
      return this.seats;
  }

}
