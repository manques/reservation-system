import { Injectable } from '@angular/core';

import { Person } from '../model/person';
import { Status } from '../model/status';
import { MessageService } from './message.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private personsUrl = '/persons';
  persons: Observable<any>;
  person: Person;
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
      //seats = this.person.seats; 
      
      //console.log(this.db.list(this.personsUrl).valueChanges().subscribe(i => console.log(i[0])));
      this.list =  this.db.list(this.personsUrl).valueChanges();
      // this.status.total = 0;
      this.list.subscribe( person => {
        this.status.unAvailable = 0;
          for(var i = 0; i < person.length; i++){
            this.status.unAvailable += person[i].seats;
            //console.log(this.status.unAvailable);
          }
          //console.log(this.status.unAvailable);
      });

      //console.log(this.list);
      return this.list;
    }

    // get current sumbit person
    getCurrentSubmit(){
      console.log(this.status.unAvailable);
      return { name: this.person.name, 
              email: this.person.email, 
              seats: this.person.seats,
              terms: this.person.terms, 
              bStatus: this.bStatus, 
              unAvailable: this.status.unAvailable, 
              total: this.status.total};
    }

    savePerson(person){
      this.person = person;
      //console.log(this.person);
      
      this.status.selected = person.seats;
      const obj = this.db.database.ref(this.personsUrl);
      obj.push(person);
      this.bStatus = true;
    }
}
