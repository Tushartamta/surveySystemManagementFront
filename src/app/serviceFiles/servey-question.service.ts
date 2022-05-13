import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ServeyQuestionService {
  public addsurveyQuestion(surveyquestion:any,id:string){
    return this.http.post(`${baseUrl}/surveyQuestion/${id}`,surveyquestion);
  }

  constructor(private http: HttpClient) { }

  getquestionList(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  public getAboutSurveyQuestionById(id: string)
  {
    // console.log("more sexy", id);
    return this.http.get(`${baseUrl}/surveyQuestion/${id}`);
  }
  public getSurveyResponseBySurveyId(surveyId : any)
  {
    return this.http.get(`${baseUrl}/userSurveyResponse/${surveyId}`);
  }

  public addQuestion(survey:any){
    return this.http.post(`${baseUrl}/surveyQuestion/{id}`,survey);
  }

  public getSurveyResponseByQuestionId(questionid : any)
  {
    return this.http.get(`${baseUrl}/userSurveyResponse/questionId/${questionid}`);
  }

  public checkIfUserHasAnsweredTheSurvey(userEmail: any,surveyId:any){
      return this.http.get(`${baseUrl}/userSurveyResponse/checkUserHasAnswered/${userEmail}/${surveyId}`);
  }
  public setUserResopnseForSurveyQuestion(surveyResponseDataPost : any)
  {
    // console.log("more sexy", id);
    return this.http.post(`${baseUrl}/userSurveyResponse/`,surveyResponseDataPost);
  }
  public setSurveyExpiredBySurveyId(surveyId:any)
  {
    return this.http.put(`${baseUrl}/survey/expiresurvey/${surveyId}`, null);
  }
}
