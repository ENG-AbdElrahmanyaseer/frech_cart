import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { CutTextPipe } from 'src/app/core/pipe/cut-text.pipe';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,CutTextPipe ,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


constructor(private _CartService:CartService ,
   private _Renderer2: Renderer2 ,
   
   private _Router:Router){}

cartDetals:any ={}

ngOnInit(): void {
    

this._CartService.GetLoggedUserCart().subscribe({

  next:(respons)=>{
   
    this.cartDetals = respons.data
  },

error:(err)=>{

  console.log(err);
  
}



})


}


RemoveCartItem(id:string ,elimant:any):void{

  this._Renderer2.setAttribute(elimant ,'disabled' ,'true')

this._CartService.RemoveSpecificCartItem(id).subscribe({

next:(respons)=>{



this.cartDetals = respons.data ;

this._Renderer2.removeAttribute(elimant ,'disabled' )

this._CartService.cartNamber.next(respons.numOfCartItems)

},

error:(err)=>{
  console.log(err);
  
}




})



}

updateQuantity( count:number , id:string ,el1:HTMLButtonElement  ,el2:HTMLButtonElement  ):void{

if (count >= 1) {
    this._Renderer2.setAttribute(el1 ,'disabled' ,'true') 
  this._Renderer2.setAttribute(el2 ,'disabled' ,'true')

  this._CartService.Updatecartproductquantity(id ,count ).subscribe({

    next:(responsre)=>{
 
    this.cartDetals = responsre.data
    this._Renderer2.removeAttribute(el1 ,'disabled' ) 
    this._Renderer2.removeAttribute(el2 ,'disabled' )
      
    },
    
    error:(eror)=>{
      console.log(eror);
      
    }
    
    
    
    
    
    
    })
    


}


}

deletAllCart():void{

this._CartService.clearUserCart().subscribe({

next:(reespons)=>{
if (reespons.message === 'success') {
  
  this.cartDetals=null ;
}




  this.cartDetals = reespons

  this._CartService.cartNamber.next(reespons.numOfCartItems)
},


error:(errr)=>{

  console.log(errr);
  
}




})


}




}
