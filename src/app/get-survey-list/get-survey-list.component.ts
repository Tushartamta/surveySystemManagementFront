import { Component, OnInit } from '@angular/core';
import { SurveyServiceService } from '../serviceFiles/survey-service.service';

@Component({
  selector: 'app-get-survey-list',
  templateUrl: './get-survey-list.component.html',
  styleUrls: ['./get-survey-list.component.css']
})
export class GetSurveyListComponent implements OnInit {
  constructor(private surveyService1: SurveyServiceService) { }
  surveys:any;

  ngOnInit(): void {
    this.surveyService1.getUserList().subscribe((data1)=>{
      this.surveys = data1;
      console.log(data1);
    })
  }

}
