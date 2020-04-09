import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../services/task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  task_importance: string[] = [
    'Low',
    'Medium',
    'High'
  ];
  taskForm: FormGroup;
  validMessage: string = "";

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      task_name: new FormControl('', Validators.required),
      task_description: new FormControl(),
      task_duration: new FormControl('', Validators.required),
      task_start_date: new FormControl('', Validators.required),
      task_importance: new FormControl('', Validators.required)
    });

  }

  taskSubmission() {
    if (this.taskForm.valid) {
      this.validMessage = "Task created!";
      this.taskService.createTask(this.taskForm.value).subscribe(
        data => {
          this.taskForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out all the details before clicking submit";
    }
  }

}
