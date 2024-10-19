import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProdactsService } from 'src/app/core/services/prodacts.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { detalsPRODUCT } from 'src/app/core/interface/nadi';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-detals',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './detals.component.html',
  styleUrls: ['./detals.component.scss']
})
export class DetalsComponent implements OnInit {

constructor(private _ActivatedRoute:ActivatedRoute ,
   private _ProdactsService:ProdactsService ,
   private toastr_: ToastrService ,
   private _Renderer2:Renderer2 ,
   private _CartService:CartService, 
  
  
  ){}

productId!:string|null ;

productDetalse!:detalsPRODUCT 


ngOnInit(): void {
    
this._ActivatedRoute.paramMap.subscribe({
  next:(param)=>{

   this.productId =   param.get('id')

   
   
  }
})

this._ProdactsService.getProductDetalis(this.productId).subscribe({


next:(respons)=>{

  this.productDetalse = respons.data ;

},
error:(errr)=>{console.log(errr);
}


})


}


addProduct(id:any , elimant:HTMLButtonElement):void{


  this._Renderer2.setAttribute(elimant ,'disabled' ,'true')
  
  
  
  
  this._CartService.addToCart(id).subscribe({
  
  
    next:(reees)=>{
  
  this.toastr_.success(reees.message);
  this._Renderer2.removeAttribute(elimant ,'disabled')
  
    },
    error:(errr)=>{
  
      this._Renderer2.removeAttribute(elimant ,'disabled')
  console.log(errr);
  
    }
  
  
  
  })
  
  
  
  }






detalseee: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
   items:1,
  nav: true
}










}
