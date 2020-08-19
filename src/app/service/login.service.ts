import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { sendmail } from '../classes/sendmail';
import { login } from '../classes/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private login_url='http://localhost:3000/ngo/';
  private forget_password_url='http://localhost:3000/forgetpassword/';
  constructor(private _http:HttpClient) { }

  validlogin(item:login)
  {
    //console.log(item.get('ngo_email'));
    console.log(item);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.login_url+item.ngo_email,body,{headers:head1});
  }
  getPasswordById(ngo_email:string)
  {
    return this._http.get(this.login_url + ngo_email);
  }
  sendMail(item:sendmail)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.forget_password_url,body,{headers:head1});
  }
}
