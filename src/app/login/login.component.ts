import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  formSubmitStatus : boolean = false;

  constructor(private formBuilder : FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      username : [null, Validators.compose([Validators.required])],
      password : [null, Validators.compose([Validators.required])],
      role : [null, Validators.compose([Validators.required])]
    });
}
  loginDetails(){
    this.formSubmitStatus = true;
    console.log(this.loginForm.value);
  }

}
