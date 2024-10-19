import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdactsService } from 'src/app/core/services/prodacts.service';
import { categoriesIN } from 'src/app/core/interface/product';

@Component({
  selector: 'app-categores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categores.component.html',
  styleUrls: ['./categores.component.scss']
})
export class CategoresComponent implements OnInit {

constructor(private _ProdactsService:ProdactsService){}

categoreData:categoriesIN[] =[]

ngOnInit(): void {
    
this._ProdactsService.getCategore().subscribe({

next:(respons)=>{


this.categoreData = respons.data ;

},

error:(error)=>{

console.log(error);



}




})






}






}
