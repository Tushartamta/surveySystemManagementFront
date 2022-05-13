import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServeyQuestionService } from '../serviceFiles/servey-question.service';

@Component({
  selector: 'app-survey-question-form',
  templateUrl: './survey-question-form.component.html',
  styleUrls: ['./survey-question-form.component.css']
})
export class SurveyQuestionFormComponent implements OnInit {

  id: string ;
  surveyQuestion: any;
  

  constructor(private activatedRoute: ActivatedRoute, private surveyQuestionService:ServeyQuestionService,private _snack:MatSnackBar,
    private router:Router) {
      this.id= '';
     }
     reloadCurrentPage(){
      window. location. reload();
    
    }

     get getSurveyId(){
       return this.id;
     }

     public survey={
      surveyId: '',
      questionId: '',
      questionTitle:'',
      questionDescription:'',
      userEmail:''
    };
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['surveyId'];
    this.survey.surveyId = this.id;
  }
  formSubmit() {
    if (this.survey.questionTitle == '' || this.survey.questionDescription == '') {
      this._snack.open("Can't leave required fields empty", '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      // alert("fields can't be empty");
      // this.router.navigate(['/user']);

      return
    }


    this.surveyQuestionService.addsurveyQuestion(this.survey,this.id).subscribe({
      next: (data: any) => {
        //success
        // alert('success');
        Swal.fire(`Question Added to Survey ${this.id}`);
         let gotSurveyId;
         gotSurveyId = data.surveyId;
         console.log("aagya", gotSurveyId);
       

      },
      error: (error) => {
        //error
        console.log(error);
        //alert('something went wrong');
        this._snack.open('something went wrong !!', '', {
          duration: 3000,
        });
      }
    }
    );
  }

}

 

 


