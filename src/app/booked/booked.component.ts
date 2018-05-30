import { Component, OnInit } from '@angular/core';
import { BookingService } from '../service/booking.service';
import { BookedStatus } from '../model/booked-status';

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.css']
})

export class BookedComponent implements OnInit {

  personDetail: BookedStatus ={
    name: '',
    email: '',
    seats:  0,
    terms: false,
    bStatus: false,
    unAvailable: 0,
    total: 80
}
 
  constructor(private bs: BookingService ) { }

  ngOnInit() {
    this.showSubmit();
  }

  showSubmit(){
    
    this.personDetail.name = '';
    this.personDetail.email = '';
    this.personDetail.seats=  0;
    this.personDetail.terms = false;
    this.personDetail.bStatus = false;
    this.personDetail.unAvailable = 0;
    this.personDetail.total = 80;
  
    this.personDetail.bStatus = this.bs.getCurrentSubmit().bStatus;
    if(this.personDetail.bStatus){
        this.personDetail = this.bs.getCurrentSubmit();
        //console.log(this.personDetail);
       }
  
  }
}
