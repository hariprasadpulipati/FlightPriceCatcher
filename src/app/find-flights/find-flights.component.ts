import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent implements OnInit {
  flights:any;
  flights1:any;
  flights2:any;
  flights3:any;
  flights4:any;
  flights5:any;
  flights6:any;
  flights7:any;
  flights8:any;
  flights9:any;
  router: any;
  service: any;
  
  constructor() {
 
   }

  ngOnInit(): void {
     this.flights=[{departure:"10:15",arrival:"15:10",duration:"10h 50m",price:15000,}]
     this.flights1=[{departure:"11:15",arrival:"16:10",duration:"10h 50m",price:15500,}]
     this.flights2=[{departure:"9:15",arrival:"14:50",duration:"09h 50m",price:17500,}]
     this.flights3=[{departure:"08:30",arrival:"14:30",duration:"12h 50m",price:18500,}]
     this.flights4=[{departure:"12:45",arrival:"18:30",duration:"13h 50m",price:19500,}]
     //make mytrip
     this.flights5=[{departure:"10:15",arrival:"15:10",duration:"10h 50m",price:14500,}]
     this.flights6=[{departure:"11:15",arrival:"16:10",duration:"10h 50m",price:16500,}]
     this.flights7=[{departure:"9:15",arrival:"14:50",duration:"09h 50m",price:18000,}]
     this.flights8=[{departure:"08:30",arrival:"14:30",duration:"12h 50m",price:19000,}]
     this.flights9=[{departure:"12:45",arrival:"18:30",duration:"13h 50m",price:18500,}]
    
     
  }
  bookingFormSubmit(bookingForm:any){

    console.log(bookingForm);
    this.service.setUserpayment();
    this.router.navigate(['payment']);
  }

}
