import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
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
  getallPassengers() {
    throw new Error('Method not implemented.');
  }
  signWithGoogle():any{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
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
      if(loginForm.loginId === 'pulipati@gmail.com' &&loginForm.password === 'password')
      {
        this.service.setUserLoggedIn();
        this.router.navigate(['homepage']);
        
      }
    }


  }

