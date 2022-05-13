import { Component, OnInit } from '@angular/core';
import { LoginService } from '../serviceFiles/login-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  


  user: any;
  constructor(private loginService : LoginService ) { }

  ngOnInit(): void {

    this.loginService.getCurrentUser().subscribe((currentUser: any) => {

      console.log(currentUser);
      this.user = currentUser;

        },
      (error) => {
        console.log(error);
      }
    )


  }

}
