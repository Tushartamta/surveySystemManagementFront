import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'angular-google-charts';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardMysurveysComponent } from './dashboard-mysurveys/dashboard-mysurveys.component';
import { DashboardShowOnlyQuestionComponent } from './dashboard-show-only-question/dashboard-show-only-question.component';
import { GetUserListComponent } from './get-user-list/get-user-list.component';
import { GetsurveyQuestionListComponent } from './getsurvey-question-list/getsurvey-question-list.component';
import { HomeComponent } from './home/home.component';
import { NormalDashboardComponent } from './normal/normal-dashboard/normal-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultComponent } from './result/result.component';
import { AdminGuard } from './serviceFiles/admin.guard';
import { NormalGuard } from './serviceFiles/normal.guard';
import { SurveyServiceServiceComponent } from './survey-form/survey-form.component';
import { SurveyQuestionFormComponent } from './survey-question-form/survey-question-form.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';


const routes: Routes = [
  {

    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: UserSignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    // component: AdmindashboardComponent,
    canActivate: [AdminGuard],
    children: [
      
      {
        path: '',
        component: AdmindashboardComponent,
      },
      {
        
        path: 'createsurvey',
        component: SurveyServiceServiceComponent,
      },
      {
        
        path: 'admindashboard',
        component: AdmindashboardComponent,
      },
      {
        
        path: 'result',
        component: ResultComponent,
      },
      {
        path: 'admindashboard/createquestion',
        component: SurveyQuestionFormComponent,
      },
      {
        path: 'getUsers',
        component: GetUserListComponent,
      },
      {
        path: 'surveyresult/:surveyId',
        component:ResultComponent,
        
      },
      {
        path: 'createsurvey',
        //component:CreateaboutsurveyComponent,
  
        children:
          [
            {
              path: '',
              component: SurveyServiceServiceComponent,
            },
  
            {
              path: 'createsurveyquestion/:surveyId',
              component: SurveyQuestionFormComponent,
            },
  
  
          ]
  
      },
      

    ],
  },
  {
    
    path: 'normal',
    // component:HomeComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: '',
        component: NormalDashboardComponent,
      },
      {
        path: 'getUsers',
        component: GetUserListComponent,
      },
      {
        path:'surveyquestions/:surveyId',
        component:SurveyQuestionFormComponent
    },
    {
      path:'getsurveyquestionlist/:surveyId',
      component:GetsurveyQuestionListComponent
    },
    {
      path: 'createsurvey',
      //component:CreateaboutsurveyComponent,

      children:
        [
          {
            path: '',
            component: SurveyServiceServiceComponent,
          },

          {
            path: 'createsurveyquestion/:surveyId',
            component: SurveyQuestionFormComponent,
          },


        ]

    },
    {
      path:'dashboard',
      // component:UserDashboardComponent,
      children:
        [

          {
            path: '',
            component: UserDashboardComponent,
          },
          
          {
            path: 'surveyresult/:surveyId',
            component:UserDashboardComponent
            
          },
          {
            path: 'mysurveys',
            // component:DashboardMysurveysComponent,
            children:[
              {
              path: '',
            component: DashboardMysurveysComponent,
          },
          
          {
            path: 'surveyquestionsonly/:surveyId',
            component:DashboardShowOnlyQuestionComponent,
            
          },

        ],
      },
        ],
      }
    ]
  }
]

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
