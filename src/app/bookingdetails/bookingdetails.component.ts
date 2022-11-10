import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {
  flights:any;
  constructor(private service:FlightService) {
    // this.flights=[{flightname:'Indigo',flightnumber:'6E-2212',departure:'17:15',arrival:'00:05',duration:'6h 50m',price:'14998'},
    //                  {flightname:'Go First',flightnumber:'G8-119',departure:'21:10',arrival:'23:55',duration:'2h 45m',price:'15798'},
    //                 {flightname:'Air India',flightnumber:'AI-473',departure:'1:45',arrival:'20:30',duration:'25H 45M',price:'13998'},
    //               {flightname:'Vistara',flightnumber:'UK-637',departure:'17:10',arrival:'17:45',duration:'24h 45m',price:'23595'},]
       }
    

       ngOnInit(): void {
        this.service.getAllBookingDetails().subscribe((data:any)=>{
          this.flights=data;
          console.log(this.flights);
        })
      }
}
