import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
              private store : Store<AppState>,
              private router : Router) { 
    this.createForm();

  }

  ngOnInit(): void {

    this.loginForm.valueChanges.subscribe((data)=>{
      // console.log(data);
        if((data.userName) || (data.password) ){
              // console.log('Values Present');
              this.loginForm.get('userName').setValidators(Validators.compose(
                  [Validators.required, Validators.maxLength(10), Validators.minLength(3)]));
              this.loginForm.get('password').setValidators(Validators.compose([Validators.required, 
                Validators.minLength(3)]));

              this.loginForm.get('userName').updateValueAndValidity({ emitEvent: false } );
              this.loginForm.get('password').updateValueAndValidity({ emitEvent: false } );

        } else{
              // console.log('no Values Present');

            this.loginForm.get('userName').setValidators(Validators.compose([]));
            this.loginForm.get('password').setValidators(Validators.compose([]));

            this.loginForm.get('userName').updateValueAndValidity({ emitEvent: false } );
            this.loginForm.get('password').updateValueAndValidity({ emitEvent: false } );
        }
    })
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
      password : [null, Validators.compose([Validators.required])]

    });
}
  loginDetails(){
    this.formSubmitStatus = true;
    // console.log(this.loginForm.value);
    // this.serviceService.loginBackendCall(this.loginForm.value);
    // this.router.navigate(['/home']);
    console.log(this.loginForm);

    if(this.loginForm.valid){
      console.log('form is valid');
      //make a service call
      this.serviceService.loginBackendCall(this.loginForm.value);
      this.router.navigate(['/home']);
      this.formSubmitStatus = false;
  } else{
      console.log('form is invalid');
  }
}

  

  getToken(){
    console.log(sessionStorage.getItem('token'));
  }

  logOut(){
    
  }



}


