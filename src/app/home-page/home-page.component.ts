import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  countries:any;
  service: any;
  router: any;
  minDate = new Date()
 
  
 
  getElementById(arg0: string) {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.service.getAllCountries().subscribe((data:any)=> {this.countries=data,console.log(data)}); 
  
  }
  FindFlightFormSubmit(FindFlightForm:any){
    
    console.log(FindFlightForm);
    this.service.setUserFindFlights();
    this.router.navigate(['bookingdetails']);
    
  }

}
