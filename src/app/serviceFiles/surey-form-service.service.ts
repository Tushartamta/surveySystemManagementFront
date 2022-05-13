import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SureyFormServiceService {

  constructor(private http: HttpClient) { }

  getsurveyList(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  public addSurvey(survey:any){
    return this.http.post(`${baseUrl}/survey/`,survey);
  }
}
