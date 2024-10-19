import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdactsService } from 'src/app/core/services/prodacts.service';
import { categoriesIN, productIN } from 'src/app/core/interface/product';
import { CutTextPipe } from 'src/app/core/pipe/cut-text.pipe';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { HomePipe } from 'src/app/core/pipe/home.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CutTextPipe ,CarouselModule , RouterLink ,HomePipe ,FormsModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

Products:productIN[] = [] ;

categoriesAray:categoriesIN[] = [] ;


term:string = '';

  constructor(
    private _ProdactsService:ProdactsService ,
    private _CartService:CartService ,
    private toastr_: ToastrService ,
    private _Renderer2:Renderer2
  
  ){}

ngOnInit(): void {
    

  this._ProdactsService.getProdacts().subscribe({

next:(respons)=>{
  this.Products = respons.data ;
},

error:(errr)=>{

  console.log(errr);
  

}
  }) ,

  this._ProdactsService.getcategories().subscribe({

    next:(respons)=>{

this.categoriesAray =respons.data





    },

error:(err)=>{
  console.log(err);
  
}

  })



}

addProduct(id:any , elimant:HTMLButtonElement):void{

this._Renderer2.setAttribute(elimant ,'disabled' ,'true')
this._CartService.addToCart(id).subscribe({

  next:(reees)=>{
console.log(reees.message);
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

categoriesOptions: OwlOptions = {
  loop: true,
  autoplay:true,
  autoplayTimeout:2000,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 2
    },
    400: {
      items: 3
    },
    740: {
      items: 4
    },
    940: {
      items: 5
    }
  },
  nav: true
}

mianslidOptions: OwlOptions = {
  loop: true,
  autoplay:true,
  autoplayTimeout:2000,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
 items:1 ,
  nav: true
}
}
