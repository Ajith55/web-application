import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  formSubmitStatus : boolean = false;
  user_Name : string;
  role_Name : string;

  constructor(private formBuilder : FormBuilder, 
              private serviceService : ServiceService, 
              private store : Store<AppState>) { 
    this.createForm();

  }

  ngOnInit(): void {
    this.store.select(state=>state.homeState.userName).subscribe((userN)=>{
          // console.log(userN);
          this.user_Name = userN;
    });
    this.store.select(state=>state.homeState.role).subscribe((roleN)=>{
      // console.log(roleN);
      this.role_Name = roleN;
});
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      userName : [null, Validators.compose([Validators.required])],
      password : [null, Validators.compose([Validators.required])],
      role : [null, Validators.compose([Validators.required])]
    });
}
  loginDetails(){
    this.formSubmitStatus = true;
    console.log(this.loginForm.value);
    this.serviceService.loginBackendCall(this.loginForm.value);
  }

  getToken(){
    console.log(sessionStorage.getItem('token'));
  }

  logOut(){
    
  }



}
