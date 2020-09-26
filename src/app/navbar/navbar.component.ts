import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  token = sessionStorage.getItem('token');
  name : any;

  constructor( private router : Router, private navbarService : NavbarService, private store : Store<AppState>) { 
    
  }

  ngOnInit(): void {
    this.store.select(state=>state.homeState.userName).subscribe((userN)=>{
      // console.log(userN);
      this.name = userN;
});
  }

  loggedIn(){
    
    if(sessionStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
   
  }

  logOut(){
    // console.log('call went');
    this.navbarService.logOutBackendCall().subscribe(()=>{
      sessionStorage.clear();
      this.router.navigate(['/home']);

    });
    // this.router.navigate(['/home']);
  }

}
