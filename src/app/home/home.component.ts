import { Component, OnInit } from '@angular/core';
import { SurveyServiceService } from '../serviceFiles/survey-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aboutSurveys: any;
  constructor(private surveyServiceService: SurveyServiceService) {
    this.aboutSurveys =  [];
  }

  ngOnInit(): void {
      this.surveyServiceService.getAboutSurveyAll().subscribe((data:any)=>{
        // console.log(data);
        this.aboutSurveys=data;
      },
        (error)=>{console.log(error);}
      )
  }

}