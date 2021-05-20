import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Task} from '../Task'; //imported to create new tasks
import {TASKS} from '../mock-tasks'; //imported to use mock tasks

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Task[] {
    return TASKS;
  }

  //Note: this is just and example function which returns observable
  //When using HttpClient, it will return Observable by default
  getTasksFromServer(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }

  getTasksFromRealServer(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const deleteUrl = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(deleteUrl);
  }

  toggleTaskReminder(task: Task): Observable<Task> {
    const putUrl = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(putUrl, task, httpOptions);
  }
}
