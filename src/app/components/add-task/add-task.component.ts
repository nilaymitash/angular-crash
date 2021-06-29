import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  task: string;
  day: string;
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(!this.task) {
      alert('Please add a task!');
      return;
      //apparently a void method CAN return. As long as it doesn't return a value.
    }

    const newTask = {
      text: this.task, //newTask must conform with the Interface variable names and data type. Note: String vs string!!
      day: this.day,
      reminder: this.reminder
    }

    //emit event
    this.onAddTask.emit(newTask);

    //clear form
    this.task = '';
    this.day = '';
    this.reminder = false;

  }
}
