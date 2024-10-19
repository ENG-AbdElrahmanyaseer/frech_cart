import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor( private _HttpClient:HttpClient) { }

  forgetpasowrd(UserEmail:object):Observable<any>{


return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',UserEmail)



  }


resstcoood(restcod:object):Observable<any>{


  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode` ,restcod  )
}




resatPasword(resetPasss:object):Observable<any>{


return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,resetPasss )


  
}




}
