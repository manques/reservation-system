import { Injectable } from '@angular/core';
import { BookingService } from './booking.service';
import { BookedStatus } from '../model/booked-status';
import { Observable } from 'rxjs';
import { Number } from '../model/number';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
    bookingStatus: BookedStatus;
    seats: number;
    constructor(private bs: BookingService) { }
     
      getSeatsDesign(): Number[][]{

        this.bookingStatus = this.bs.getCurrentSubmit();
        this.seats = this.bookingStatus.seats;
        console.log(this.seats);

        var x = new Array(12);
        for (var i = 0; i < 12; i++) {
        x[i] = new Array(7);
        }

        var counter = 1;
        for (var i = 0; i < 12; i++) {
            for (var j = 0; j < 7; j++) {
                if(counter <= 80){
                    let seatProp = {seatNumber : counter++, isAvailable: true} ;
                    x[i][j] = seatProp;
                }
                else{
                    let seatProp = {seatNumber : -1, isAvailable: false} ;
                    x[i][j] = seatProp;
                }
            }
        }

        return x;
    }

}
