import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'; // We will use this to figure out what route we are on

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService:UiService, private router:Router) {
    //This piece of code is the observer. This constantly listens or subscribes to the Subject from UiService
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    );
   }

  ngOnInit(): void {
    //lifecycle method. 
    //Executes on the load of the component
    //example: make HTTP request on the component load
  }

  toggleAddTask() {
    //This piece of code calls the uiService to update the value in Subject.
    //So in this example, Button is the source as well as the detination(observer) of the Subject
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string): boolean {
    return this.router.url == route;
  }
}
