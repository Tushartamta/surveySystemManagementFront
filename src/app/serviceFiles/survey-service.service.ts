import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})

export class SurveyServiceService {
  getCountOfUserSurveyResponseBySurveyId: any;
  public getAboutSurveyAll()
  {
    return this.http.get(`${baseUrl}/survey/`);
  }
 
  constructor(private http: HttpClient) {}
  getUserList(): Observable<any> {
    return this.http.get(`${baseUrl}`);
}
}
