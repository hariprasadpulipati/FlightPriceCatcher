import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flights:any;
  userFindFlights:boolean 
  isUserLogged:boolean;
  userpayment: boolean;

  constructor(private httpClient:HttpClient){
    this.isUserLogged=false;
    this.userFindFlights=false;
    this.flights=[];
    this.userpayment=false;
    }

    registerUser(user: any): any {
      this.httpClient.post('', user);
    }

    getAllBookingDetails() {
      return this.httpClient.get('getAllBookingDetails')
    }
   
      getAllCountries() {
        return this.httpClient.get('https://restcountries.com/v3.1/all')
      }

      setUserFindFlights() {
        this.userFindFlights=true;
      }
      setUserpayment() {
        this.userpayment=true;
      }
     
     
    setUserLoggedIn() {
          this.isUserLogged=true;
    }
    setUserLoggedOut()
    {
      this.isUserLogged=false;
    }

    getUserLogged():boolean  {
      return this.isUserLogged;
    }
  }
