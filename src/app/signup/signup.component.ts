import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  formSubmitStatus : boolean = false;

  constructor(private formBuilder : FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.signupForm = this.formBuilder.group({
      username : [null, Validators.compose([Validators.required])],
      password : [null, Validators.compose([Validators.required])],
      role : [null, Validators.compose([Validators.required])]
    });
}
  signupDetails(){
    this.formSubmitStatus = true;
    console.log(this.signupForm.value);
  }

}
