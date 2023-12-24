import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { NavbarComponent } from './units/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),NavbarComponent,ContactComponent]
}

//  districts: any= [
//   {
//     id:1,
//     title: "trivandrum",
//     image: "https://th.bing.com/th/id/R.63f40c641e05d41517f74f048b0beab3?rik=wk0o0F9mt6BL5w&riu=http%3a%2f%2fwww.visittnt.com%2fblog%2fwp-content%2fuploads%2f2018%2f06%2fTrivandrum-1.jpg&ehk=x%2fKJDBPxaWn0jnjN9c0y9hi5qfQvwCaZ12xi2LJu6no%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
//   },
//   {
//     id:2,
//     title: "kollam",
//     image: "https://th.bing.com/th/id/OIP.Bu_JeZwwZq6g4a7MGVn1yAHaE7?w=275&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//   },
//   {
//     id:3,
//     title: "pathanamthitta",
//     image: "https://th.bing.com/th/id/OIP.pqkv6K3E6xKaL0_DYoebhQHaE8?w=281&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//   },
//   {
//     id:4,
//     title: "alappuzha",
//     image: "https://th.bing.com/th?id=OIP.uSc3DHRb9a_JoULm3JU-OAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//   },


// ]
