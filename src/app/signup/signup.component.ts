import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  formSubmitStatus : boolean = false;

  constructor(private formBuilder : FormBuilder, private signupService : SignupService, private router : Router) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.signupForm.valueChanges.subscribe((data)=>{
      // console.log(data);
        if((data.userName) || (data.password) || (data.role)){
              // console.log('Values Present');
              this.signupForm.get('userName').setValidators(Validators.compose(
                  [Validators.required, Validators.maxLength(10), Validators.minLength(3)]));
              this.signupForm.get('password').setValidators(Validators.compose([Validators.required, 
                Validators.minLength(3)]));
              this.signupForm.get('role').setValidators(Validators.compose([Validators.required, 
                Validators.minLength(4)]));

              this.signupForm.get('userName').updateValueAndValidity({ emitEvent: false } );
              this.signupForm.get('password').updateValueAndValidity({ emitEvent: false } );
              this.signupForm.get('role').updateValueAndValidity({ emitEvent: false } );

        } else{
              // console.log('no Values Present');

            this.signupForm.get('userName').setValidators(Validators.compose([]));
            this.signupForm.get('password').setValidators(Validators.compose([]));
            this.signupForm.get('role').setValidators(Validators.compose([]));

            this.signupForm.get('userName').updateValueAndValidity({ emitEvent: false } );
            this.signupForm.get('password').updateValueAndValidity({ emitEvent: false } );
            this.signupForm.get('role').updateValueAndValidity({ emitEvent: false } );
        }
    })
  }

  createForm(){
    this.signupForm = this.formBuilder.group({
      userName : [null, Validators.compose([Validators.required])],
      password : [null, Validators.compose([Validators.required])],
      role : [null, Validators.compose([Validators.required])]
    });
}
  signupDetails(){

    this.formSubmitStatus = true;

    if(this.signupForm.valid){
      console.log('form is valid');
      //make a service call
      this.signupService.signUpBackendCall(this.signupForm.value)
      this.router.navigate(['/home']);
      this.formSubmitStatus = false;
  } else{
      console.log('form is invalid');
  }
  }

}
