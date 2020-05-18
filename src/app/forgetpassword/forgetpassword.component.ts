import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgoService } from '../service/ngo.service';
import { ngo } from '../classes/ngo';
import { sendmail } from '../classes/sendmail';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  ngo_email:string;
  ngo_password:string;
  subject:string="About Forget Password";

  constructor(private _ngo:NgoService,private _route:Router) { }
  onForget(){
    this._ngo.getPasswordById(this.ngo_email).subscribe(
      (data:ngo[])=>{
        console.log(data);
        if(data.length>0)
        {
             this.ngo_password=data[0].ngo_password;
          this._ngo.sendMail(new sendmail(this.ngo_email,this.subject,this.ngo_password)).subscribe(
            (data:sendmail)=>{
             
             
            }
          )
           alert('password will send on your email');
           this._route.navigate(['/']);
  
         }
        else{
          alert('Email id is not correct');
        }
      }
      
    )
  }
  addform(f)
  {
    //f.resetForm();
  }
  ngOnInit(): void {
  }

}
