import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-paymant',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './paymant.component.html',
  styleUrls: ['./paymant.component.scss']
})
export class PaymantComponent implements OnInit {

  constructor(
    
    private _ActivatedRoute:ActivatedRoute ,
    private _CartService:CartService ,
  ){}

cartId:any ;



orderForme:FormGroup = new FormGroup({

details: new FormControl(''),

phone: new FormControl(''),

city: new FormControl(''),
  



})


paymantForm(){

console.log( 'hiooo', this.orderForme.value);

const dataOrdar:any = this.orderForme.value

this._CartService.Sheckout(this.cartId ,dataOrdar).subscribe({


next:(respons)=>{

if (respons.status === 'success') {
  
window.open(respons.session.url , '_salf')

}
console.log(respons);




},


error:(errrr)=>{

  console.log(errrr);
  
}





})


}










ngOnInit(): void {
    
this._ActivatedRoute.paramMap.subscribe({

next:(params)=>{


  this.cartId =   params.get('id')
console.log( 'cartId', this.cartId);


}
})



}



}
