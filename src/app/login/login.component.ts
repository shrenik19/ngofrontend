import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route:Router,private _location:Location) { }

  refresh():void{
    this._route.navigateByUrl('/signup',{skipLocationChange:true}).then(()=>{
        console.log(this._location.path());
      this._route.navigate([decodeURI( this._location.path())]);
    });
  }

  ngOnInit(): void {
  }

}
