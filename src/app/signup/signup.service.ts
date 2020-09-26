import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../response.model';
import { HttpBackendClient } from '../http-backend.service';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http : HttpClient, private httpBackendClient : HttpBackendClient) { }

  signUpBackendCall(user:any){

    let url = "http://localhost:3000/api/signup"
    return this.httpBackendClient.post<ResponseModel>(url,user).subscribe((result)=>{
        console.log(result);
        // console.log(result.data.user);
        sessionStorage.setItem('token', result.data.token)
    },
    err => console.log(err)
    )
  }

}
