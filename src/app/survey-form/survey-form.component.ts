import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../serviceFiles/login-service.service';
import { SureyFormServiceService } from '../serviceFiles/surey-form-service.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class 
SurveyServiceServiceComponent implements OnInit {
  today='';
  dd:any;
  mm:any;
  yyyy:any;
  todayDate:any;

  public survey
  ={
    surveyId:'',
    surveyTitle:'',
	  surveyDate:'',
	  surveyDescription:'',
    userEmail:'',
  };

  constructor(private _survey:SureyFormServiceService,private _snack:MatSnackBar,private loginService:LoginService,
    private router:Router) { }

  ngOnInit(): void {
    this.todayDate = new Date();
    this.dd = this.todayDate.getDate();
    this.mm = this.todayDate.getMonth() + 1; //January is 0!
    this.yyyy = this.todayDate.getFullYear();

    if (this.dd < 10) {

      this.dd='0' + this.dd;

    }

    if (this.mm < 10) {
      this.mm = '0' + this.mm;
    }     
    this.today = this.yyyy + '-' + this.mm + '-' + this.dd;

      }
      
  formSubmit(){
    if(this.survey.surveyTitle.trim()=='' || this.survey.surveyTitle==null){
      this._snack.open("Title Required !!",'',{
        duration:3000
      });
      return;
      
    }
    this.loginService.getCurrentUser().subscribe((currentUser: any) => {

      this.survey.userEmail = currentUser.email;
     


      console.log(this.survey.userEmail);


    

    //all done
    this._survey.addSurvey(this.survey).subscribe({ 
      next: (data: any) => {
        console.log(data);
      let a=data.surveyId;
      Swal.fire('Succes !!', 'survey is added successfully'+data.surveyId+ 'success');
      console.log(a)
      this.router.navigate([`/normal/createsurvey/createsurveyquestion/${a}`]);
      
   
      error: (error: any) => {
        //error
        console.log(error);
        //alert('something went wrong');
        this._snack.open('something went wrong !!', '', {
          duration: 3000,
        });
      }
    }
  });


      console.log(this.survey.userEmail);


      
    },
      (error) => {
        console.log(error);
      }
    )


    
  }






}