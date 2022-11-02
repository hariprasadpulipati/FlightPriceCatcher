import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
 

  constructor(private service:FlightService,private router:Router) {
    this.loginId="";
    this.password="";
   }

  ngOnInit(): void {
  
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
