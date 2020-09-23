import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  formSubmitStatus : boolean = false;

  constructor(private formBuilder : FormBuilder, private serviceService : ServiceService) { 
    this.createForm();
  }

  ngOnInit(): void {
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

}
