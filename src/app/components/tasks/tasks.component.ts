import { Component, OnInit } from '@angular/core';
import {Task } from '../../Task'; //imported to create new tasks
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //this.tasks = this.taskService.getTasks();
    //usualy when fetching from backend application, you would wanna use observables instead of simply calling the function

    this.taskService.getTasksFromServer().subscribe((tasks) => (this.tasks = tasks));
    //pretty much like promises from angularjs
  }

}
