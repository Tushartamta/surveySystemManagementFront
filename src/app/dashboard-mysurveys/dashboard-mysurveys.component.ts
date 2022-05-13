import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../serviceFiles/login-service.service';
import { ServeyQuestionService } from '../serviceFiles/servey-question.service';
import { SurveyServiceService } from '../serviceFiles/survey-service.service';

@Component({
  selector: 'app-dashboard-mysurveys',
  templateUrl: './dashboard-mysurveys.component.html',
  styleUrls: ['./dashboard-mysurveys.component.css']
})
export class DashboardMysurveysComponent implements OnInit {

  public aboutSurveys=[] as any;
  ResponseCount=[] as any;



  constructor(private snack : MatSnackBar,private aboutSurveyService: SurveyServiceService, private loginService : LoginService,private aboutsurveyquestiondataService:ServeyQuestionService) { }


public setExpired(surveyId:any, disabled :any)
{

    this.aboutsurveyquestiondataService.setSurveyExpiredBySurveyId(surveyId).subscribe((responseHasExpired : any)=>{

          console.log(responseHasExpired);
          this.snack.open('This survey has set to Expired', ' ', { duration: 3500, });


    },
    (error)=>{console.log(error);}
  )

  // setSurveyExpiredBySurveyId
}

  ngOnInit(): void {

    this.loginService.getCurrentUser().subscribe((currentUser: any) => {


    this.aboutSurveyService.getAboutSurveyAll().subscribe((data:any)=>{

      for (let j = 0; j < data.length; j++) {

        if (data[j].userEmail == currentUser.email) {
          console.log(data[j]);
          this.aboutSurveys.push(data[j]);

          this.aboutSurveyService.getCountOfUserSurveyResponseBySurveyId(data[j].surveyId).subscribe((dataCount:any)=>{
            console.log(data[j].surveyId);
              this.ResponseCount.push(dataCount);
            console.log(this.ResponseCount);
        },
        (error: any)=>{console.log(error);}
      )

        }

      }

    },
      (error)=>{console.log(error);}
    )

  },
  (error)=>{console.log(error);}
)
  }

}
