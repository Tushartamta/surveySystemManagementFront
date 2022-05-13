import { Component, OnInit } from '@angular/core';
import { SurveyServiceService } from 'src/app/serviceFiles/survey-service.service';

@Component({
  selector: 'app-normal-dashboard',
  templateUrl: './normal-dashboard.component.html',
  styleUrls: ['./normal-dashboard.component.css']
})
export class NormalDashboardComponent implements OnInit {

  aboutSurveys: any;
  constructor(private surveyServiceService: SurveyServiceService) {
    this.aboutSurveys =  [];
  }

  ngOnInit(): void {
      this.surveyServiceService.getAboutSurveyAll().subscribe((data:any)=>{
        console.log("wo aagya",data);
        this.aboutSurveys=data;
      },
        (error)=>{console.log(error);}
      )
  }

}
