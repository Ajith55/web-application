import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;
  formSubmitStatus : boolean = false;

  constructor(private formBuilder : FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.contactForm = this.formBuilder.group({
      name : [null, Validators.compose([Validators.required])],
      email : [null, Validators.compose([Validators.required])],
      message : [null, Validators.compose([Validators.required])]
    });
}

submitDetails(){
  this.formSubmitStatus = true;
    console.log(this.contactForm.value);
}

}
