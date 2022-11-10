import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent implements OnInit {
  flights:any;
  flights1:any;
  constructor() { }

  ngOnInit(): void {
     this.flights=[{departure:"10:15",arrival:"15:10",duration:"10h 50m",price:15000,}]
     this.flights1=[{departure:"11:15",arrival:"16:10",duration:"11h 50m",price:15500,}]
     
  }

}
