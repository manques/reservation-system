import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BookingService } from '../service/booking.service';
import { Person } from '../model/person';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title ="Reservation System";
  bookingForm : FormGroup;
  toggleSeats: boolean = false;
  persons: Person[];
  person: Person;
  items: Observable<any>;
  unAvailable = 0;
  available = 0;
  //currentSeats = 7;
  constructor(private bs: BookingService) { }

  ngOnInit() {

    this.getPersons();
    //this.currentSeats = this. || 7;
    this.bookingForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'seats': new FormControl(null, [Validators.required, Validators.max(7), Validators.min(1)]),
      'terms': new FormControl(true, Validators.required)
    });
  }

  toggler(){
    this.toggleSeats = ! this.toggleSeats;
  }

  getPersons(): void{
    this.items = this.bs.getPersons();
  
    this.bs.getPersons().subscribe( item => {

      this.unAvailable=0; 
      for(var i =0; i < item.length; i++){
        this.unAvailable += item[i].seats;
      }
      this.available = 80 - this.unAvailable;
    });
  
  }
  
  onSubmit(){
    this.bs.savePerson(this.bookingForm.value);
  
  }
  
}
