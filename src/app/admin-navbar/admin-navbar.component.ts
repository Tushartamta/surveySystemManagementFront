import { Component, OnInit } from '@angular/core';
import { LoginService } from '../serviceFiles/login-service.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  isLoggedIn=false;
  //user = this.login.getUser();
  user:any=null;

  constructor(public login: LoginService ) { }

  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(
      data => {
        this.isLoggedIn=this.login.isLoggedIn();
        this.user=this.login.getUser();
      }
    );
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  // this.login.loginStatusSubject.next(false);
  }

}

