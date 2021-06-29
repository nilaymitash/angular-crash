import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  //call this method on the click of the button
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask); //setting the value in the Subject so that the observers can subscribe to it.
  }

  //To be called or I should say "subscribed" by the Observers. 
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
