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

  employees:any;
 

  constructor(private service:FlightService,private router:Router) {
    this.loginId="";
    this.password="";
   }

  ngOnInit(): void {
    this.employees=[{id:1,name:'sai shankar',gender:'male', dateofjoin :'2008-08-07',salary:10000,email:'pulipati@gmail.com',password:'password'},
    {id:2,name:'sai ram',gender:'male', dateofjoin :'2005-04-01',salary:19000,email:'hariprasad@gmail.com',password:'password'},
    {id:3,name:'sai teja',gender:'male', dateofjoin :'2001-02-04',salary:18000,email:'hp@gmail.com',password:'password'}, 
     {id:4,name:'shivasai',gender:'male', dateofjoin :'2009-02-14',salary:12000,email:'hp.pulipat@gmail.com',password:'password'}]
  }
  loginSubmit():any
  {
    if(this.loginId == 'Admin' && this.password == 'Admin')
    {
      alert('wellcome')
    }else
    {
      this.employees.forEach((employees:any) => 
      {
        if(this.loginId == this.employees.email)
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
