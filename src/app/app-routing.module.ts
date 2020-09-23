import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "rooms", component: RoomsComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact", component: ContactComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
