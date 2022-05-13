import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeyQuestionService } from '../serviceFiles/servey-question.service';

@Component({
  selector: 'app-dashboard-show-only-question',
  templateUrl: './dashboard-show-only-question.component.html',
  styleUrls: ['./dashboard-show-only-question.component.css']
})
export class DashboardShowOnlyQuestionComponent implements OnInit {

  id: any;
  surveyQuestion: any;
  NoOfQuestionsFetched: any;

  constructor(private activatedRoute: ActivatedRoute, private snack: MatSnackBar, private aboutSurveyQuestionDataService: ServeyQuestionService, private router: Router) { }

public goBack()
{
  this.router.navigate(['user/dashboard/mysurveys']);
}

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['surveyId'];




          this.aboutSurveyQuestionDataService.getAboutSurveyQuestionById(this.id).subscribe((data: any) => {
            this.surveyQuestion = data;

            
            console.log(this.surveyQuestion);

   

          },
            (error) => {
              console.log(error);
            }
          )




  }


}
