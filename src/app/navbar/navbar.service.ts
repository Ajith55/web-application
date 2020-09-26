import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private http : HttpClient) { }

  logOutBackendCall(){
    return this.http.get('http://localhost:3000/api/logout');
  }

  // loggedIn(){
  //   return !!localStorage.getItem('token')
  // }



}
