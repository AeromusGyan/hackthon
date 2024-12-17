import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiUrl = "http://localhost:3000/questions";

  constructor(private http:HttpClient) { }

  getAllQuestion(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
