import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule ,RouterLink ,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit{

constructor( private _Router:Router ,private _CartService:CartService  , private _Renderer2:Renderer2){}
@ViewChild('navbar') navElment!:ElementRef;


@HostListener('window:scroll')

onscoroll():void{

  if (scrollY > 500) {
  
    this._Renderer2.addClass(this.navElment.nativeElement,'px-5')

    this._Renderer2.addClass(this.navElment.nativeElement,'shadow')
  
  }else {
  
    this._Renderer2.removeClass(this.navElment.nativeElement,'px-5')

    this._Renderer2.removeClass(this.navElment.nativeElement,'shadow')
}





}




 cartNum :number = 0 ;

ngOnInit(): void {
    this._CartService.cartNamber.subscribe({

      next:(response)=>{




this.cartNum = response ;

      }
    })

    this._CartService.GetLoggedUserCart().subscribe({

      next:(respons)=>{



this.cartNum =respons.numOfCartItems ;

      }
    })


}





SignOut():void{

localStorage.removeItem('etoken');

this._Router.navigate(['/login'])




}










}
