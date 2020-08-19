import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { register1 } from '../classes/register1_class';
import { RegistrationService } from '../service/registeration.service';
import { SELECT_PANEL_INDENT_PADDING_X } from '@angular/material/select';
import { register2 } from '../classes/register2_class';
import { register3 } from '../classes/register3_class';

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


  selectedfile:File=null;
  files:File=null;

  proof_image:File[]=[];
  nop_description:string[]=[];
  part2:register2[]=null;
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



    this._registrationservice.getallnop().subscribe(
    (data:any)=>{

      this.nop_arr=data;
      console.log(data)

    }
    );
  }
  onSubmit1()
  {
    //console.log(this.ngo_landmark);
    //  this.ngo_logo=this.selectedfile.name;

    //   this._registrationservice.register1(new register1(this.ngo_name,this.ngo_logo,this.ngo_registration_no,this.ngo_email,this.ngo_password,this.ngo_contact,this.paytm_merchant_id,this.ngo_address,this.ngo_landmark,this.ngo_city,this.ngo_state,this.ngo_pincode,this.fk_ngo_nop_name)).subscribe(
    //     (data:register1[])=>{
    //       console.log(data);

    //     }
    //   )
    //console.log(this.arr[1]);

  }
  onproof(value)
  {

    this.selectedfile=<File>value.target.files[0];
    console.log(this.selectedfile.name);
    this.proof_image.push(this.selectedfile);
    console.log(this.proof_image);
  }
  onselect(value)
  {
    this.selectedfile=<File>value.target.files[0];
  }
  onSubmit2()
  { }
  onSubmit3()
  {
    var fd=new FormData();
    fd.append('ngo_name',this.ngo_name);
    fd.append('ngo_logo',this.selectedfile,this.selectedfile.name);
    fd.append('ngo_registration_no',this.ngo_registration_no);
    fd.append('ngo_email',this.ngo_email);
    fd.append('ngo_password',this.ngo_password);
    fd.append('ngo_contact',this.ngo_contact);
    fd.append('paytm_merchant_id',this.paytm_merchant_id);
    fd.append('ngo_address',this.ngo_address);
    fd.append('ngo_landmark',this.ngo_landmark);
    fd.append('ngo_city',this.ngo_city);
    fd.append('ngo_state',this.ngo_state);
    fd.append('ngo_pincode',this.ngo_pincode);
    fd.append('fk_ngo_nop_name',this.fk_ngo_nop_name);

    console.log('fd',JSON.stringify(fd));

    this._registrationservice.register1(fd).subscribe(
    (data:register1[])=>
    {

      console.log(data);
      // localStorage.setItem('ngo_email',this.ngo_email);

    }
    );

    for(let k=0;k<this.arr.length;k++)
    {
      var fd1=new FormData();
      fd1.append('fk_ngo_email',this.ngo_email);
      fd1.append('fk_nop_name',this.arr[k]);
      fd1.append('proof_image',this.proof_image[k],this.proof_image[k].name);
      fd1.append('nop_description',this.nop_description[k]);
      this._registrationservice.add_nop_description(fd1).subscribe(
      (data:any)=>{
        console.log(data);
      }
      );
    }
console.log(this.ngo_email,this.contact_for_donor,this.ngo_website,this.ngo_facebook,this.ngo_instagram,this.ngo_twitter);
    var fd2=new FormData();
    // fd2.append('fk_ngo_email','jay@gmail.comcheck');
    // fd2.append('contact_for_donor',this.contact_for_donor);
    // fd2.append('ngo_website',this.ngo_website);
    // fd2.append('ngo_facebook',this.ngo_facebook);
    // fd2.append('ngo_instagram',this.ngo_instagram);
    // fd2.append('ngo_twitter',this.ngo_twitter);

    //console.log(JSON.stringify(fd2));

    this._registrationservice.add_final_details(new register3(this.ngo_email,this.contact_for_donor,this.ngo_website,this.ngo_facebook,this.ngo_instagram,this.ngo_twitter)).subscribe(
    (data:register3[])=>{
      console.log(data);
    }
    );
  }


  Editdescription(item,i)
  {
    let temp:string;
    temp=item.target.value.toString();
    this.nop_description[i]=temp;
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
