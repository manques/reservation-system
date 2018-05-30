import { Injectable } from '@angular/core';

//import { Number } from '../model/number';
//import { shallowEqualArrays } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
    
    constructor() { }

     
      getSeatsDesign(): Number[][]{

        var x = new Array(12);
        for (var i = 0; i < 12; i++) {
          x[i] = new Array(7);
        }
        var counter = 1;
        for (var i = 0; i < 12; i++) {
          
          for (var j = 0; j < 7; j++) {
              if(counter <= 80){
                x[i][j] = {seatNumber : counter++, isAvailable: true} ;
              }else{
                x[i][j] = {seatNumber : -1, isAvailable: false} ;
              }
          }
      }

      //console.log(x);
         return x;
    }

}
