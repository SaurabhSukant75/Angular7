import { Injectable } from '@angular/core';
import { Observable, Subject }    from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class DataService {

  // Observable string sources
    private caseNumber = new  BehaviorSubject<array>();

    // Observable string streams
  caseNumber$ = this.caseNumber.asObservable();
constructor(){}
      // Service message commands
    publishData(data: array) {
      this.caseNumber.next(data);
    }

    getData() {
        return this.caseNumber$;
    }


}
