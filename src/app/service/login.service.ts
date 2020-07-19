import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { sendmail } from '../classes/sendmail';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private login_url='http://localhost:3000/login/';
  private forget_password_url='http://localhost:3000/forgetpassword/'
  constructor(private _http:HttpClient) { }

  login(item:FormData)
  {
    console.log(item.get('ngo_email'));
    return this._http.post(this.login_url+item.get('ngo_email'),item);
  }
  getPasswordById(ngo_email:string)
  {
    return this._http.get(this.forget_password_url + ngo_email);
  }
  sendMail(item:sendmail)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.forget_password_url,body,{headers:head1});
  }
}
