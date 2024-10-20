import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdactsService {

  constructor(private _HttpClient:HttpClient) { }


  baseUrl :string = 'https://ecommerce.routemisr.com/api/v1/'



getCategore():Observable<any>{

return this._HttpClient.get(this.baseUrl+'categories')


}


getProdacts( pageNum:number = 1 ):Observable<any>{

return this._HttpClient.get(this.baseUrl + `products?page=${pageNum}`)


}

getcategories():Observable<any>{

  return this._HttpClient.get(this.baseUrl + 'categories')
  
  
  }


  getProductDetalis(id:string|null):Observable<any>{

    return this._HttpClient.get(this.baseUrl + `products/${id}`)
    
    
    }
  



}
