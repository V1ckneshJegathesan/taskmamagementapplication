import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../services/task.service';

@Component({
  selector: 'app-taskviewer',
  templateUrl: './taskviewer.component.html',
  styleUrls: ['./taskviewer.component.css']
})
export class TaskviewerComponent implements OnInit {

  public tasks;

  constructor(private taskService: TaskService) { }

  ngOnInit() {

    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(
      data => {this.tasks = data; },
      err => console.error(err),
      () => console.log('tasks loaded')
    );


  }

}
