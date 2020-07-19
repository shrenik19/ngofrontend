import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registeration.service';
import { ngo } from '../classes/ngo';
import { sendmail } from '../classes/sendmail';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  ngo_email:string;
  ngo_password:string;
  subject:string="About Forget Password";

  constructor(private _loginser:LoginService,private _route:Router) { }
  onForget()
  {
    this._loginser.getPasswordById(this.ngo_email).subscribe(
    (data:ngo[])=>
    {
      console.log(data);
      if(data.length>0)
      {
        this.ngo_password=data[0].ngo_password;
        this._loginser.sendMail(new sendmail(this.ngo_email,this.subject,this.ngo_password)).subscribe(
          (data:sendmail)=>
          {}
        )
        // var fd=new FormData();
        // fd.append('ngo_email',this.ngo_email);
        // fd.append('subject',this.subject);
        // fd.append('ngo_password',this.ngo_password);
        // this._loginser.sendMail(fd).subscribe(
        // (data:sendmail)=>
        // {}
        // )
        alert('password will send on your email');
        this._route.navigate(['/']);

      }
      else
      {
        alert('Email id is not correct');
      }
    })
  }
  addform(f)
  {
    //f.resetForm();
  }
  onsendCode()
  {

  }
  ngOnInit(): void {
  }

}
