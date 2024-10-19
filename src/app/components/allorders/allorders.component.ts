import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit {

constructor( private _CartService:CartService){}

backforPaymant:any ;


ngOnInit(): void {
  this._CartService.getAllOrders().subscribe({

    next:(reeeees)=>{

      console.log(reeeees.data);

      this.backforPaymant = reeeees.data ;
      
    },


    error:(errrror)=>{

      console.log(errrror);
      
    }


  })
}




}
