import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../serviceFiles/login-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snack: MatSnackBar, private login: LoginService, private router: Router) { }

  public users = {
    email: '',
    password: ''
  }
  ngOnInit(): void {
  }

  formSubmit() {
    console.log("login btn clicked");
    if (this.users.email.trim() == '' || this.users.email == null) {
      this.snack.open('username is required !!', '', { duration: 3000, });
      return;
    }
    if (this.users.password.trim() == '' || this.users.password == null) {
      this.snack.open('password is required !!', '', {
        duration: 3000,
      });
      return;
    }

    //request to server to generate token
    this.login.generateToken(this.users).subscribe({
      next: (data: any) => {
        //success
        console.log("success");
        console.log(data);

        //login....
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            // redirect ....ADMIN: admin-dashboard
            // redirect ....NORMAL: normal-dashboard
            if(this.login.getUserRole()=='ADMIN'){
              // admin dashboard
            //  window.location.href='/admin';
             this.router.navigate(['admin/admindashboard']);
             this.login.loginStatusSubject.next(true);
            }else if(this.login.getUserRole()=='USER'){
              // normal userr dashboard
            //  window.location.href='/user-dashboard';
             this.router.navigate(['normal']);
             this.login.loginStatusSubject.next(true);
            }else{
              this.login.logout();

            }
          }
        );

      },
      error: (error) => {
        //error
        console.log('error');
        console.log(error);
        this.snack.open('Invalid Detail !! Try again', '', {
          duration: 3000,
        });
      }
    }
    );
  }

}