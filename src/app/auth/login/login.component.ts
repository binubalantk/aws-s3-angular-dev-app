import { Component, OnInit } from '@angular/core';
import { SignupUser } from '../../model/signup-user';
import { Router } from '@angular/router';
import { toast } from 'angular2-materialize';
import { AuthService} from '../../services/auth.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  signupUser = new SignupUser();

  constructor(private AuthService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onLogin()
  {

    //validate all independently
    if(this.signupUser.name==null || this.signupUser.name=="")
    {
      toast("Name is required", 3000);
      return;
    }
    if(this.signupUser.phone==null || this.signupUser.phone=="")
    {
      toast("Phone is required", 3000);
      return;
    }
    if(this.signupUser.email==null || this.signupUser.email=="")
    {
      toast("Email is required", 3000);
      return;
    }
    if(this.signupUser.place==null || this.signupUser.place=="")
    {
      toast("Place is required", 3000);
      return;
    }
    if(this.signupUser.password==null || this.signupUser.password=="")
    {
      toast("Password is required", 3000);
      return;
    }

    //all validations are positive

    //call api to store new user
    this.AuthService.signupUser(this.signupUser)
        .subscribe((res)=>{
          var resp = res.json();
          if(resp.status)
          {
            toast("Joined successfully", 3000);
            //navigate to home
            this.router.navigate(['/home']);
          }
          else{
            toast("Failed, try again", 3000);
          }
        });

  }



}
