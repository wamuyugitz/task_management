import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  //Marks this class as an injectable service, meaning it can be used throughout the app
  providedIn: 'root',
})
export class TaskService {
  private backendUrl = 'http://172.16.10.16:8080/swagger-ui/index.html#';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getAllTask(): Observable<any> {
    return this.http.get(this.backendUrl, this.httpOptions);
  }
}
