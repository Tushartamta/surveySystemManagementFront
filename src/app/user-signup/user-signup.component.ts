import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { UserServiceService } from '../serviceFiles/user-service.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  public users={
    fullName:'',
		mobileNo:'',
		email:'',
		organization:'',
		profession:'',
		userRoles:'',
    password:''
  };
  constructor(private userService:UserServiceService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.users);
    if(this.users.fullName=='' || this.users.fullName==null){
      this.snack.open("Username is required !!", '',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
     // alert("fields can't be empty");
      return;
    }

    if(this.users.password=='' || this.users.password==null){
      this.snack.open("Password is required !!", '',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
     // alert("fields can't be empty");
      return;
    }


    //validation
    // addUser: userservice
    this.userService.addUser(this.users).subscribe({ 
      next: (data: any)=>{
        //success
        console.log(data);
       // alert('success');
       Swal.fire('Successfully done !!','user id is '+ data.id ,'success');
      },
      error: (error)=>{
        //error
        console.log(error);
        //alert('something went wrong');
        this.snack.open('something went wrong !!','',{
          duration: 3000,
        });
      }
    }
    );
  }
}
