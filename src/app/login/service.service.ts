import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SAVE_ROLE, SAVE_USERNAME } from '../actions';
import { HttpBackendClient } from '../http-backend.service';
import { ResponseModel } from '../response.model';
import { AppState } from '../store';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient, private store : Store<AppState>, private httpBackendClient : HttpBackendClient) { }

  loginBackendCall(user: any) {

    let url = "http://localhost:3000/api/login"
    return this.httpBackendClient.post<ResponseModel>(url, user).subscribe((result) => {
      console.log(result);
      // console.log(result.data.user);
      sessionStorage.setItem('token', result.data.token);
      
      this.store.dispatch({type:SAVE_USERNAME, payload:result.data.formattedUser.userName}),
      this.store.dispatch({type:SAVE_ROLE, payload:result.data.formattedUser.role})
    },
      err => {
        console.log(err)
      }
    )
  }

}
