import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule ,RouterLink,RouterLinkActive , ReactiveFormsModule ,  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor (private _AuthService:AuthService , private _Router:Router){}

  errmsg:string = '' ;
  isLoding:boolean =false ;

loginForme:FormGroup = new FormGroup({
    email:new FormControl('' , [ Validators.required ,  Validators.email]),
    password:new FormControl('' , [Validators.required , Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
},
)

handelForme ():void{

const userData = this.loginForme.value ;

this.isLoding = true ;

if (this.loginForme.valid == true ) {
  this._AuthService.login(userData).subscribe({
    next:(respons)=>{

      localStorage.setItem('etoken' ,respons.token)
      this._AuthService.decodeUoser();
      this.isLoding = false ;



      if (respons.message == "success") {
        this._Router.navigate(['/home'])
      }
    },
error:(eror)=>{
  this.isLoding = false ;
  this.errmsg = eror.error.message
}
  })
}










}







  
}
