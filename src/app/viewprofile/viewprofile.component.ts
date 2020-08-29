import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RegistrationService } from '../service/registeration.service';
import {viewprofile} from '../classes/viewprofile_class'

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  ngo_viewprofile:viewprofile[]=[];
  ngo_name:string;
  ngo_email:string;
  ngo_registration_no:string;
  ngo_logo:string;
  ngo_contact:string;
  paytm_merchant_id:string;
  ngo_address:string;
  ngo_landmark:string;
  ngo_city:string;
  ngo_state:string;
  ngo_pincode:string;
  ngo_nop_name:string;

  contact_for_donor:string;
  ngo_website:string;
  ngo_facebook:string;
  ngo_twitter:string;
  ngo_instagram:string;

  proof_image:File[]=[];
  nop_description:string[]=[];
  arr:string[]=[];
  i:number=0;
  nop_arr:any=null;
  flag:number=0;
  fk_ngo_nop_name:string="";

  constructor(private _formBuilder: FormBuilder,private _registrationservice:RegistrationService,private _route:Router) { }

  ngOnInit(): void
  {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });






    this.ngo_email=localStorage.getItem('ngo_email');
    this._registrationservice.viewProfileById(this.ngo_email).subscribe(
      (data:any)=>{
        this.ngo_viewprofile=data;
        this.ngo_name=data[0].ngo_name;
        this.ngo_logo=data[0].ngo_logo;
        this.ngo_registration_no=data[0].ngo_registration_no;
        this.ngo_email=data[0].ngo_email;
        this.ngo_contact=data[0].ngo_contact;
        this.paytm_merchant_id=data[0].paytm_merchant_id;
        this.ngo_address=data[0].ngo_address;
        this.ngo_landmark=data[0].ngo_landmark;
        this.ngo_city=data[0].ngo_city;
        this.ngo_state=data[0].ngo_state;
        this.ngo_pincode=data[0].ngo_pincode;
        this.ngo_nop_name=data[0].ngo_nop_name;
        this.proof_image=data[0].proof_image;
        this.nop_description=data[0].nop_description;
        this.contact_for_donor=data[0].contact_for_donor;
        this.ngo_website=data[0].ngo_website;
        this.ngo_facebook=data[0].ngo_facebook;
        this.ngo_instagram=data[0].ngo_instagram;
        this.ngo_twitter=data[0].ngo_twitter;

      });
  }

  nopmanage(item)
  {
    if(item.target.checked)
    {
      let temp:string;
      temp=item.target.value.toString();
      this.arr.push(temp);
      this.fk_ngo_nop_name=this.arr.toString();

    }
    else
    {
      let temp:string;
      temp=item.target.value.toString();
      let index:number=this.arr.indexOf(temp);
      this.arr.splice(index,1);
      this.nop_description.slice(index,1);
      this.fk_ngo_nop_name=this.arr.toString();
    }

  }

}
