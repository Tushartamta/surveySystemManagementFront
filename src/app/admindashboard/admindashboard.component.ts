import { Component, OnInit } from '@angular/core';
import { SurveyServiceService } from '../serviceFiles/survey-service.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

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
