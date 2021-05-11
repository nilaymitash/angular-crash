import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'; //imported to create new tasks
import {TASKS} from '../../mock-tasks'; //imported to use mock tasks

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
