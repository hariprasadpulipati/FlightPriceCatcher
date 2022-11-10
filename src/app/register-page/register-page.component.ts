import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator, NgForm } from '@angular/forms';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  FirstName:String;
  LastName:String;
  // Male = ['male'];
  // FeMale = ['female'];
  // Other = ['other'];
  Dob:Date;
  Email:String;
  Contact:number;
  address:string;
  pincode:String;
  Username:String;
  Pswd:String;

  countries:any;
  Gender: string;

  constructor(private service:FlightService ) 
  {
    this.FirstName = "";
    this.LastName = "";
    this.Gender = "";
    // this.Male = ['male'];
    // this.FeMale = ['female'];
    // this.Other = ['other'];
    this.Dob = new Date()
    this.Email = "";
    this.Contact = 0;
    this.address="";
    this.pincode="";
    this.Username = "";
    this.Pswd = "";
   }

  ngOnInit(): void {
     this.service.getAllCountries().subscribe((data:any)=> {this.countries=data,console.log(data)}); 
  }
  RegisterSubmit():any
  {
    console.log('Fisrtname :',this.FirstName)
    console.log('Lastname:',this.LastName)
    console.log('gender:',this.Gender)
    // console.log('gender:',this.Male)
    // console.log('gender:',this.FeMale)
    // console.log('gender:',this.Other)
    // console.log('Dob:',this.Dob)
    console.log('Email:',this.Email)
    console.log('Contact:',this.Contact)
    console.log('Username:',this.Username)
    console.log('Password:',this.Pswd)
    console.log('Address:',this.address)
    console.log('Pincode:',this.pincode)

  }

  
  RegistrationFormSubmit(RegistrationForm:any){
    console.log(RegistrationForm);
    this.service.registerUser(RegistrationForm).subscribe((data:any) => {console.log('Register Success'); alert('Register Success')});
  }
 
  

}
