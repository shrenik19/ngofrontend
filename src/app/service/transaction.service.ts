import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transaction_url='http://localhost:3000/trancationbynop/';
  private transactiontotal_url='http://localhost:3000/trancationtotalbynop/';
  private transactionbyallnop='http://localhost:3000/trancationbyallnop/';
 
  constructor(private _http:HttpClient) { }
  getAllTransactionByNopName(nop_name)
  {
    //console.log(ngo_email+nop_name);
    return this._http.get(this.transaction_url +nop_name);
  }
  getAllTransactionTotalByNopName()
  {
    //console.log(ngo_email+nop_name);
    return this._http.get(this.transactiontotal_url );
  }
  getAllTransactionByAllNopName()
  {
    //console.log(ngo_email+nop_name);
    return this._http.get(this.transactionbyallnop );
  }
}
