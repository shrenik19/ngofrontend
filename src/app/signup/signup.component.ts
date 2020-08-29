import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormBuilder, FormGroup, FormArray, Validators, ValidatorFn} from '@angular/forms';
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
  /*firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;*/

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
  form: FormGroup;

  /*items = [
    {key: 'item1', text: 'value1'},
    {key: 'item2', text: 'value2'},
    {key: 'item3', text: 'value3'},
    {key: 'item4', text: 'value4'},
    {key: 'item5', text: 'value5'},
  ];*/

  constructor(private _formBuilder: FormBuilder,private _registrationservice:RegistrationService,private _route:Router) { }



  /*requireCheckboxesToBeCheckedValidator(minRequired = 1):ValidatorFn {
    return function validate (formGroup: FormGroup) {
      let checked = 0;
      Object.keys(formGroup.controls).forEach(key => {
        const control = formGroup.controls[key];
        if (control.value === true) {
          checked ++;
        }
      });
      if (checked < minRequired) {
        return {
          requireCheckboxesToBeChecked: true,
        };
      }
      return null;
    };
  }*/

  ngOnInit(): void
  {
     /*// create checkbox group
     let checkboxGroup = new FormArray(this.items.map(item => new FormGroup({
      id: new FormControl(item.key),
      text: new FormControl(item.text),
      checkbox: new FormControl(false)
    })));
    // create a hidden reuired formControl to keep status of checkbox group
    let hiddenControl = new FormControl(this.mapItems(checkboxGroup.value), Validators.required);
    // update checkbox group's value to hidden formcontrol
    checkboxGroup.valueChanges.subscribe((v) => {
      console.log(v);
      hiddenControl.setValue(this.mapItems(v));
    });
    this.form = new FormGroup({
      items: checkboxGroup,
      selectedItems: hiddenControl
    });*/


    /*this.form.setErrors({required: true});
    this.form.valueChanges.subscribe((newValue) => {
    if (newValue.checkbox1 === false || newValue.checkbox2 === false || newValue.checkbox3 === false) {
      this.form.setErrors(null);
    } else {
      this.form.setErrors({required: false});
    }
  });*/

    this._registrationservice.getallnop().subscribe(
    (data:any)=>{

      this.nop_arr=data;


    }
    );
  }

  /*mapItems(items) {
    let selectedItems = items.filter((item) => item.checkbox).map((item) => item.id);
    return selectedItems.length ? selectedItems : null;
  }*/

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
    //console.log(this.selectedfile.name);
    this.proof_image.push(this.selectedfile);
    //console.log(this.proof_image);
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

    this._registrationservice.register1(fd).subscribe(
    (data:register1[])=>
    {

      console.log(data);
      localStorage.setItem('ngo_email',this.ngo_email);

    }
    );

    console.log(this.ngo_email,this.fk_ngo_nop_name,this.selectedfile.name,this.proof_image);

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
    fd2.append('fk_ngo_email',this.ngo_email);
    fd2.append('contact_for_donor',this.contact_for_donor);
    fd2.append('ngo_website',this.ngo_website);
    fd2.append('ngo_facebook',this.ngo_facebook);
    fd2.append('ngo_instagram',this.ngo_instagram);
    fd2.append('ngo_twitter',this.ngo_twitter);

    this._registrationservice.add_final_details(fd2).subscribe(
    (data:any)=>{
      console.log(data);
    }
    );
    /*this._registrationservice.add_final_details(new register3(this.ngo_email,this.contact_for_donor,this.ngo_website,this.ngo_facebook,this.ngo_instagram,this.ngo_twitter)).subscribe(
      (data:register3[])=>{
        console.log(data);
      }
      );*/
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
  addform(f){}
}
