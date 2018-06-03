import { Injectable } from '@angular/core';

import { Person } from '../model/person';
import { Status } from '../model/status';
import { BookedStatus } from '../model/booked-status';
import { MessageService } from './message.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private personsUrl = '/persons';
  persons: Observable<any>;
  person: Person ={
    name: '',
    email: '',
    seats: 0,
    terms: true
  };
  bStatus: boolean = false;
  // status: Status;
  status: Status = {
    available: 0,
    unAvailable: 0,
    selected: 0,
    total: 80
  };

  list:  Observable<any>;

  constructor( private db: AngularFireDatabase,
    private messageService: MessageService) {
      
     }

     private log(message: string){
      this.messageService.add('Booking-control: '+message);
    }

    getPersons(): Observable<any>{

      this.list =  this.db.list(this.personsUrl).valueChanges();
      this.list.subscribe( person => {
        this.status.unAvailable = 0;
          for(var i = 0; i < person.length; i++){
            this.status.unAvailable += person[i].seats;
          }
      });
      return this.list;
    }

    // get current sumbit person
    getCurrentSubmit(){
      //console.log(this.status.unAvailable);
      return { name: this.person.name, 
              email: this.person.email, 
              seats: this.person.seats,
              terms: this.person.terms, 
              bStatus: this.bStatus, 
              unAvailable: this.status.unAvailable, 
              total: this.status.total};
    }

    getUnAvailable(){
      return this.status.unAvailable;
    }

    savePerson(person){
      this.person = person;
      this.status.selected = person.seats;
      const obj = this.db.database.ref(this.personsUrl);
      obj.push(person);
      this.bStatus = true;
    }
}
