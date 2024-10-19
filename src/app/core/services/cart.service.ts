import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  basUrl:string = `https://ecommerce.routemisr.com` ;

  myHedars :any = {token: localStorage.getItem('etoken')} ;

  cartNamber :BehaviorSubject<number> = new BehaviorSubject(0) 

addToCart(prodId:any):Observable<any>{

return this._HttpClient.post( `https://ecommerce.routemisr.com/api/v1/cart` , 
  {
productId: prodId
},
{
headers:this.myHedars
}

)

}
GetLoggedUserCart():Observable<any>{


return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',

{headers: this.myHedars}



)





}
RemoveSpecificCartItem(id:string):Observable<any>{


  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,

    
  
  {headers: this.myHedars}
  
  
  
  )
  
  }
Updatecartproductquantity(id:string ,itmcut :number):Observable<any>{


  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,

    {
      count: itmcut
  } ,
    


  {headers: this.myHedars}
  
  
  
  )
  
  
  
  
  
  }
clearUserCart():Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
    {headers: this.myHedars}
    
    )
    
    
    
    
    
    }


getAllOrders():Observable<any>{


return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/`)







}



Sheckout(carId:string ,ordarInfo:object):Observable<any>{

return this._HttpClient.post(
  
  `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${carId}?url=http://localhost:4200`,

  {shippingAddress: ordarInfo} ,

  {headers :this.myHedars}


)




}
}


