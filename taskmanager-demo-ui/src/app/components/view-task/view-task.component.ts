import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  public taskDetail;


  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTaskDetail(this.route.snapshot.params.id);
  }

  getTaskDetail(id: number) {
    this.taskService.getTask(id).subscribe(
      data => {
        this.taskDetail = data;
      },
      err => console.error(err),
      () => console.log('tasks loaded')
    );
  }

}
