import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../response.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  loginBackendCall(user: any) {

    let url = "http://localhost:3000/api/login"
    return this.http.post<ResponseModel>(url, user).subscribe((result) => {
      console.log(result);
      // console.log(result.data.user);
      sessionStorage.setItem('token', result.data.token)
    },
      err => console.log(err)
    )
  }

}
