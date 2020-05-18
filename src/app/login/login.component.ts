import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ngo } from '../classes/ngo';
import { NgoService } from '../service/ngo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
ngo_email:string;
ngo_password:string;
  constructor(private _route:Router,private _ngo:NgoService) { }

  onSubmit()
  {

    console.log(this.ngo_email);
    console.log(this.ngo_password);
    this._ngo.getLogin(new ngo(this.ngo_email,this.ngo_password)).subscribe((data: any) => {
      console.log(data);
      if (data.length === 1) {
        alert('Login Succesfully...');
        this._route.navigate(["/forget"]);
      } 
        else {
        console.log(this.ngo_email);
        console.log(this.ngo_password);
        alert("The Email_Id Or the Password is wrong");
      }
    });

  }
  
  addform(f){}
  ngOnInit(): void {
  }

}
