import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  countries:any;
  service: any;
  constructor() { }

  ngOnInit(): void {
    this.service.getAllCountries().subscribe((data:any)=> {this.countries=data,console.log(data)}); 
  }
  FindFlightFormSubmit(FindFlightForm:any){
    console.log(FindFlightForm)
  }


}
