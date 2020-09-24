import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.scss']
})
export class BookingformComponent implements OnInit {
  roomForm : FormGroup;
  formSubmitStatus : boolean = false;
  model: NgbDateStruct;

  constructor(private formBuilder : FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
      this.roomForm = this.formBuilder.group({
        checkin : [null, Validators.compose([Validators.required])],
        checkout : [null, Validators.compose([Validators.required])],
        room : [null, Validators.compose([Validators.required])],
        adult : [null, Validators.compose([Validators.required])],
        children : [null, Validators.compose([Validators.required])]
      });
  }

  submitDetails(){
    this.formSubmitStatus = true;
    console.log(this.roomForm.value);
  }

}
