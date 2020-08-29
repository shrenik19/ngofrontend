import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ngo } from '../classes/ngo';
import { sendmail } from '../classes/sendmail';
import { register1 } from '../classes/register1_class';
import { register3 } from '../classes/register3_class';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  // private ngo:string="http://localhost:3000/ngo/";

  // private forgetpassword:string="http://localhost:3000/forgetpassword/";

  private register1_url:string='http://localhost:3000/register1/';
  private register2_url:string='http://localhost:3000/register2/';
  private nop:string='http://localhost:3000/nop/';
  private register3_url:string='http://localhost:3000/register3/';
  private viewprofilebyid_url:string='http://localhost:3000/viewProfileById/';
  constructor(private _http:HttpClient) { }
  // getLogin(item:ngo){
  //   let body=JSON.stringify(item);
  //   let head1=new HttpHeaders().set('Content-Type','application/json');
  // return this._http.post(this.ngo+item.ngo_email,body,{headers:head1});
  // }

  getallnop()
  {
    return this._http.get(this.nop);
  }
  register1(item:FormData)
  {
    // let body=JSON.stringify(item);
    // let head1=new HttpHeaders().set('Content-Type','application/json');
    console.log(item);
    return this._http.post(this.register1_url,item);
  }
  add_nop_description(item:FormData)
  {
    console.log(item);
    return this._http.post(this.register2_url,item);
  }
  add_final_details(item:FormData)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    console.log(item);
    return this._http.post(this.register3_url,body,{headers:head1});
  }
  getnopbyemail(ngo_email)
  {
    return this._http.get(this.register1_url + ngo_email);
  }
  viewProfileById(ngo_email:string)
  {
    return this._http.get(this.viewprofilebyid_url + ngo_email);
  }
  // getPasswordById(ngo_email:string){
  //   return this._http.get(this.ngo+ngo_email);
  // }
  // sendMail(item:sendmail){
  //   let body=JSON.stringify(item);
  //   let head1=new HttpHeaders().set('Content-Type','application/json');
  // return this._http.post(this.forgetpassword,body,{headers:head1});
  // }


}

