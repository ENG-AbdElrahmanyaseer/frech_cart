import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient) { }

  baseurl:string = `https://ecommerce.routemisr.com/api/v1/auth/`

  userInfo:any ;

regester(userData:object):Observable<any> {

return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,userData)






}

login(userData:object):Observable<any> {

  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,userData)
  
  
  
  
  
  
  }

decodeUoser(){

  const encode = localStorage.getItem('etoken');

if (encode !== null) {
  
const decode = jwtDecode(encode)

this.userInfo = decode



}



}










}
