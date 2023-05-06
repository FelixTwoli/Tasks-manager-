import { TaskService } from './../../services/task.service';
import {  Observable, of } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task: Task[] = [];
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.task = tasks))
  }

}
