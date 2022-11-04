import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setupTestingRouter } from '@angular/router/testing';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


// user!:SocialUser;
// constructor(private authService:SocialAuthService){}

//   ngOnInit(): void {

//     this.authService.authState.subscribe((user))=>{
//       this.user =this.user;
//     }
 
//   }



 
  loginId:String;
  password:String;

  users:any;
  user: any;
  gUser = new SocialUser;
 

  constructor(private service:FlightService,private router:Router ,private authService:SocialAuthService) {
    this.loginId="";
    this.password="";

    
   }
  ngOnInit(): void {
    this.authService.authState.subscribe((gUser)=>
    {
      this.gUser = gUser;
      console.log(gUser);
    })

    
  
  }
  signWithGoogle():any{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut():any
  {
    this.authService.signOut();
  }
 
  loginSubmit():any
  {
    if(this.loginId == 'Admin' && this.password == 'Admin')
    {
      alert('wellcome')
    }else
    {
      this.users.forEach((users:any) => 
      {
        if(this.loginId == this.users.email)
        {
          alert('welcome to homepage');
        }

      });
    
    }
  }
  loginFormSubmit(loginForm:any)
    {
      if(loginForm.loginId ==='pulipati@gmail.com' &&loginForm.password ==='password')
      {
        this.service.setUserLoggedIn();
        this.router.navigate(['homepage']);
      }
    }


}
function signWithGoogle() {
  throw new Error('Function not implemented.');
}

function signOut() {
  throw new Error('Function not implemented.');
}

