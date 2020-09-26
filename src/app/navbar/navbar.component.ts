import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  token = sessionStorage.getItem('token');

  constructor( private router : Router, private navbarService : NavbarService) { }

  ngOnInit(): void {
  }

  logOut(){
    // sessionStorage.removeItem('token');
    this.navbarService.logOutBackendCall(this.token).subscribe(()=>{
      this.router.navigate(['/home']);
    });
    // this.router.navigate(['/home']);
  }

}
