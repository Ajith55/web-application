import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../response.model';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http : HttpClient) { }

  signUpBackendCall(user:any){

    let url = "http://localhost:3000/api/signup"
    return this.http.post<ResponseModel>(url,user).subscribe((result)=>{
        console.log(result);
        // console.log(result.data.user);
        sessionStorage.setItem('token', result.data.token)
    },
    err => console.log(err)
    )
  }

}
