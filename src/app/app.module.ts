import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocialAuthServiceConfig, SocialLoginModule, } from 'angularx-social-login';
// import {
//   GoogleLoginProvider,
// } from 'angularx-social-login';
import { GoogleLoginProvider,} from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FindFlightsComponent } from './find-flights/find-flights.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NavbarComponent,
    FindFlightsComponent,
    BookingdetailsComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    SocialLoginModule,
    
    

  
  ],
  providers:  [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '190141339294-62aide3cf61v32kpfhbvbk321jbeancf.apps.googleusercontent.com'
            )
          },
          
        ],
      } as SocialAuthServiceConfig,
    },
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
