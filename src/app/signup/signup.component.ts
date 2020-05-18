import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  ngo_name:string;
  ngo_email:string;
  ngo_password:string;
  ngo_registration_no:string;
  ngo_logo:string;
  ngo_contact:string;
  ngo_address:string;
  ngo_landmark:string;
  ngo_city:string;
  ngo_state:string;
  ngo_pincode:string;
  ngo_nop_name:string;
  old_donor_contact:string;
  new_donor_contact:string;
  ngo_website:string;
  ngo_facebook:string;
  ngo_twitter:string;
  ngo_instagram:string;
  country:string[]=['health','food','education'];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
    onSubmit1()
  {
    alert(this.ngo_name);
  
  }
  onSubmit2() 
  {
   console.log(this.ngo_nop_name);
  }
  onSubmit3()
 {
  console.log(this.ngo_instagram);
  
  }
  
}
