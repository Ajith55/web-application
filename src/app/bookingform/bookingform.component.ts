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
    // this.roomForm.valueChanges.subscribe((data)=>{
    //   console.log(data);
    //     if((data.firstName) || (data.lastName) ){
    //           console.log('Values Present');
    //           this.roomForm.get('firstName').setValidators(Validators.compose(
    //               [Validators.required, Validators.maxLength(10), Validators.minLength(3)]));
    //           this.roomForm.get('lastName').setValidators(Validators.compose([Validators.required]));

    //           this.roomForm.get('firstName').updateValueAndValidity({ emitEvent: false } );
    //           this.roomForm.get('lastName').updateValueAndValidity({ emitEvent: false } );


    //     } else{
    //           console.log('no Values Present');

    //           this.roomForm.get('firstName').setValidators(Validators.compose([]));
    //         this.roomForm.get('lastName').setValidators(Validators.compose([]));

    //         this.roomForm.get('firstName').updateValueAndValidity({ emitEvent: false } );
    //         this.roomForm.get('lastName').updateValueAndValidity({ emitEvent: false } );
    //     }
    // })

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
