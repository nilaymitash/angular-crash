import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Task} from '../Task'; //imported to create new tasks
import {TASKS} from '../mock-tasks'; //imported to use mock tasks

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }

  //Note: this is just and example function which returns observable
  //When using HttpClient, it will return Observable by default
  getTasksFromServer(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
