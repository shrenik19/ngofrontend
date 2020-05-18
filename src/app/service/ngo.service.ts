import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ngo } from '../classes/ngo';
import { sendmail } from '../classes/sendmail';

@Injectable({
  providedIn: 'root'
})
export class NgoService {
  private ngo:string="http://localhost:3000/ngo/";
  private forgetpassword:string="http://localhost:3000/forgetpassword/";

  constructor(private _http:HttpClient) { }
  getLogin(item:ngo){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.ngo+item.ngo_email,body,{headers:head1});
  }
  // addDonor(item){
  //   let body=JSON.stringify(item);
  //   let head1=new HttpHeaders().set('Content-Type','application/json');
  //   return this._http.post(this.donor,body,{headers:head1});
  // }
  getPasswordById(ngo_email:string){
    return this._http.get(this.ngo+ngo_email);
  }
  sendMail(item:sendmail){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.forgetpassword,body,{headers:head1});
  }    


}

