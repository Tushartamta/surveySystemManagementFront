import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  
  constructor(private http: HttpClient) { }

  getStudentList(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }
  //post add user
  public addUser(user:any){
    return this.http.post(`${baseUrl}/user`,user);
  }
}
