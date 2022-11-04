import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  FirstName:String;
  LastName:String;
  Gender:String;
  Dob:Date;
  Email:String;
  Contact:number;
  address:string;
  pincode:String;
  Username:String;
  Password:String;

  countries:any;

  constructor(private service:FlightService ) 
  {
    this.FirstName = "";
    this.LastName = "";
    this.Gender = "";
    this.Dob = new Date()
    this.Email = "";
    this.Contact = 0;
    this.address="";
    this.pincode="";
    this.Username = "";
    this.Password = "";
   }

  ngOnInit(): void {
    this.service.getAllCountries().subscribe((data:any)=> {this.countries=data,console.log(data)}); 
  }
  RegisterSubmit():any
  {
    console.log('Fisrtname :',this.FirstName)
    console.log('Lastname:',this.LastName)
    console.log('gender:',this.Gender)
    console.log('Dob:',this.Dob)
    console.log('Email:',this.Email)
    console.log('Contact:',this.Contact)
    console.log('Username:',this.Username)
    console.log('Password:',this.Password)
    console.log('Address:',this.address)
    console.log('Pincode:',this.pincode)

  }

  
  RegistrationFormSubmit(RegistrationForm:any){
    console.log(RegistrationForm)
  }

}
