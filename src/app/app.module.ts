import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { LoginComponent } from './user-login/user-login.component';
import { GetSurveyComponent } from './get-survey/get-survey.component';
import { GetSurveyListComponent } from './get-survey-list/get-survey-list.component';
import { SurveyQuestionFormComponent } from './survey-question-form/survey-question-form.component';
import { GetSurveyQuestionComponent } from './get-survey-question/get-survey-question.component';
import { GetsurveyQuestionListComponent } from './getsurvey-question-list/getsurvey-question-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { GetUserComponent } from './get-user/get-user.component';
import { GetUserListComponent } from './get-user-list/get-user-list.component';
import { UserSurveyResponseFormComponent } from './user-survey-response-form/user-survey-response-form.component';
import { GetUserSurveyResponseComponent } from './get-user-survey-response/get-user-survey-response.component';
import { GetUserSurveyResponseListComponent } from './get-user-survey-response-list/get-user-survey-response-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SurveyServiceServiceComponent } from './survey-form/survey-form.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AdmindashboardComponent } from 'src/app/admindashboard/admindashboard.component';
import { NormalDashboardComponent } from './normal/normal-dashboard/normal-dashboard.component';
import { authInterceptorProviders } from './serviceFiles/auth.interceptor';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultComponent } from './result/result.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DashboardShowOnlyQuestionComponent } from './dashboard-show-only-question/dashboard-show-only-question.component';
import { DashboardMysurveysComponent } from './dashboard-mysurveys/dashboard-mysurveys.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserDashboardNavComponent } from './user-dashboard-nav/user-dashboard-nav.component';
import { AdminDashboardNavComponent } from './admin-dashboard-nav/admin-dashboard-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserSignupComponent,
    LoginComponent,
    GetSurveyComponent,
    GetSurveyListComponent,
    SurveyQuestionFormComponent,
    GetSurveyQuestionComponent,
    GetsurveyQuestionListComponent,
    UserFormComponent,
    GetUserComponent,
    GetUserListComponent,
    UserSurveyResponseFormComponent,
    GetUserSurveyResponseComponent,
    GetUserSurveyResponseListComponent,
    NavbarComponent,
    SurveyServiceServiceComponent,
    AdmindashboardComponent,
    NormalDashboardComponent,
    ContactComponent,
    ProfileComponent,
    ResultComponent,
    UserDashboardComponent,
    DashboardShowOnlyQuestionComponent,
    DashboardMysurveysComponent,
    AdminNavbarComponent,
    UserDashboardNavComponent,
    AdminDashboardNavComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    
    
    
  ],
  providers: [

      authInterceptorProviders

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
