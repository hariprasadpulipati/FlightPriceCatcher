import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { FindFlightsComponent } from './find-flights/find-flights.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'homepage',component:HomePageComponent},
  {path:'findFlights',component:FindFlightsComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'homepage',component:HomePageComponent},
  {path:'bookingdetails',component:BookingdetailsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
