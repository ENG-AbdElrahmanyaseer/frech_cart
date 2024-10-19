import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-regaster',
  standalone: true,
  imports: [CommonModule ,RouterLink,RouterLinkActive , ReactiveFormsModule ,  ],
  templateUrl: './regaster.component.html',
  styleUrls: ['./regaster.component.scss']
})
export class RegasterComponent {

  constructor (private _AuthService:AuthService , private _Router:Router){}

  errmsg:string = '' ;
  isLoding:boolean =false ;

RegesterForme:FormGroup = new FormGroup({

    name:new FormControl('' , [Validators.required , Validators.minLength(3) ,Validators.maxLength(20)]) ,
    email:new FormControl('' , [ Validators.required ,  Validators.email]),
    password:new FormControl('' , [Validators.required , Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('' , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),

},
{validators:[this.confirmePassword] } as FormControlOptions

)

confirmePassword( group:FormGroup):void{
  const password = group.get('password');
  const rePassword = group.get('rePassword') ;  
  if ( password?.value == '' ) {
    rePassword?.setErrors({required:true })
  }
  else if ( password?.value != rePassword?.value ) {
    rePassword?.setErrors({mismatch:true })
  }
}  

handelForme ():void{

const userData = this.RegesterForme.value ;

this.isLoding = true ;

if (this.RegesterForme.valid == true ) {

  this._AuthService.regester(userData).subscribe({
    next:(respons)=>{
      this.isLoding = false ;
      if (respons.message == "success") {
        this._Router.navigate(['/login'])
      }
    },
error:(eror)=>{
  this.isLoding = false ;
  this.errmsg = eror.error.message
}
  })
  
}







console.log(this.RegesterForme.value);



}















}
