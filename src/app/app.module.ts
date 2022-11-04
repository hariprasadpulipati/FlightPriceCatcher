import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocialAuthServiceConfig, SocialLoginModule, } from 'angularx-social-login';
// import {
//   GoogleLoginProvider,
// } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider  } from 'angularx-social-login';



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
              'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fangularx-social-login.stackblitz.io%3Fid%3Dauth68936&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=528961187921-ld24b25466u4t2lacn9r35asg000lfis.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fangularx-social-login.stackblitz.io&fetch_basic_profile=true&gsiwebsdk=2&service=lso&flowName=GeneralOAuthFlow'
              
          
            )
          },
          
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
