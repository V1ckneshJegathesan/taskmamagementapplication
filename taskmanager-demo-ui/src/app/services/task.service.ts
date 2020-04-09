import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks() {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/tasks',
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  getTask(id: number) {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/tasks/' + id,
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );


  }

  createTask(task) {

    let body  = JSON.stringify(task);

    return this.http.post('/server/api/v1/tasks', body, httpOptions);

  }


}
