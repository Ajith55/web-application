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
    console.log(this.signupForm.value);
    this.signupService.signUpBackendCall(this.signupForm.value)
    this.router.navigate(['/home']);
  }

}
