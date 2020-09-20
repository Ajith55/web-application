import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';


const routes: Routes = [{path: '',   redirectTo: '/home', pathMatch: 'full'},
                        {path:"home", component:HomeComponent},
                        {path:"rooms", component:RoomsComponent},
                        {path:"about-us", component:AboutUsComponent},
                        {path:"contact", component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
