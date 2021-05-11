import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';

  constructor() { }

  ngOnInit(): void {
    //lifecycle method. 
    //Executes on the load of the component
    //example: make HTTP request on the component load
  }

  toggleAddTask() {
    console.log("Toggle Button");
  }
}
