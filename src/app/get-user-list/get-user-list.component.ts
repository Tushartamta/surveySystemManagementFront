import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modelClasses/user';
import { LoginService } from '../serviceFiles/login-service.service';
import { UserServiceService } from '../serviceFiles/user-service.service';

@Component({
  selector: 'app-get-user-list',
  templateUrl: './get-user-list.component.html',
  styleUrls: ['./get-user-list.component.css'],
})
export class GetUserListComponent implements OnInit {
  
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

