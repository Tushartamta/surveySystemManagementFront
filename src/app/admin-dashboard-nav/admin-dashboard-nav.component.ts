import { Component, OnInit } from '@angular/core';
import { LoginService } from '../serviceFiles/login-service.service';

@Component({
  selector: 'app-admin-dashboard-nav',
  templateUrl: './admin-dashboard-nav.component.html',
  styleUrls: ['./admin-dashboard-nav.component.css']
})
export class AdminDashboardNavComponent implements OnInit {
  currentUsername:any;
  currentUseremail:any;
    constructor(private loginService : LoginService) { }

  ngOnInit(): void {

    this.loginService.getCurrentUser().subscribe((currentUser: any) => {
      this.currentUsername = currentUser.fullName;
      this.currentUseremail = currentUser.email;

    },
    (error) => {
      console.log(error);
    }
  )

  }

}
