import { Page } from './../../../../node_modules/ngx-pagination/lib/pagination-controls.directive.d';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdactsService } from 'src/app/core/services/prodacts.service';
import { productIN } from 'src/app/core/interface/product';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CutTextPipe } from 'src/app/core/pipe/cut-text.pipe';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,CutTextPipe,CarouselModule , RouterLink , NgxPaginationModule ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private _ProdactsService:ProdactsService ,
    private _CartService:CartService ,
    private toastr_: ToastrService ,
    private _Renderer2:Renderer2
  
  ){}

Products:productIN[] = [] ;

pageSize:number = 0 ;

currentPage:number = 1 ;

total:number =0 ;
ngOnInit(): void {
    
  this._ProdactsService.getProdacts().subscribe({

    next:(respons)=>{
     

     this.Products =respons.data;
     this.pageSize = respons.metadata.limit;
     this.currentPage = respons.metadata.currentPage;
     this.total = respons.results ;
    },
    
    error:(errr)=>{
    
      console.log(errr);
      
    
    }
      })
  






}



pageChanged(event:any):void{

  this._ProdactsService.getProdacts(event).subscribe({

    next:(respons)=>{


     this.Products =respons.data;
     this.pageSize = respons.metadata.limit;
     this.currentPage = respons.metadata.currentPage;
     this.total = respons.results ;
    },
    
    error:(errr)=>{
    
      console.log(errr);
      
    
    }
      })



}




addProduct(id:any , elimant:HTMLButtonElement):void{

  this._Renderer2.setAttribute(elimant ,'disabled' ,'true')
  this._CartService.addToCart(id).subscribe({
  
    next:(reees)=>{
  
  this.toastr_.success(reees.message);
  this._Renderer2.removeAttribute(elimant ,'disabled') ;
  
  this._CartService.cartNamber.next(reees.numOfCartItems)
  
    },
    error:(errr)=>{
  
      this._Renderer2.removeAttribute(elimant ,'disabled')
  console.log(errr);
  
    }
  
  
  
  })
  
  
  
  }

}




















// addProduct(id:any , elimant:HTMLButtonElement):void{

//   this._Renderer2.setAttribute(elimant ,'disabled' ,'true')
//   this._CartService.addToCart(id).subscribe({
  
//     next:(reees)=>{
//   console.log(reees.message);
//   this.toastr_.success(reees.message);
//   this._Renderer2.removeAttribute(elimant ,'disabled')
//   this._CartService.cartNamber.next(r)
  
  
//     },
//     error:(errr)=>{
  
//       this._Renderer2.removeAttribute(elimant ,'disabled')
//   console.log(errr);
  
//     }
  
  
  
//   })
  
  
  
//   }