import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  BookingDetails()
  {
    return this.httpClient.get('getAllBookingDetails')
  }


  isUserLogged:boolean;
  constructor(private httpClient:HttpClient)
   {
    this.isUserLogged=false;
    }
   
      getAllCountries()
      {
        return this.httpClient.get('https://restcountries.com/v3.1/all')
      }


    setUserLoggedIn()
    {
          this.isUserLogged=true;
    }
    setUserLoggedOut()
    {
      this.isUserLogged=false;
    }
    getUserLogged():boolean
    {
      return this.isUserLogged;
    }
  }
