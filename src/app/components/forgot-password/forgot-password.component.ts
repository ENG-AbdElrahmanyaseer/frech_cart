import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgotService } from 'src/app/core/services/forgot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

step1:boolean = true ;

step2:boolean = false ;

step3:boolean = false ;

email:string = '' ;

maseg:string = '';

constructor(private _ForgotService:ForgotService , private _Router:Router ){}

forgetForm:FormGroup = new FormGroup({

  email:new FormControl ('')


})

VerifyResetCode:FormGroup = new FormGroup({

  resetCode:new FormControl ('',Validators.required  )





})


ResetPassword:FormGroup = new FormGroup({

  newPassword:new FormControl ( ''  )





})

forgetpasowrd(){

  let useremal = this.forgetForm.value;

  this.email = useremal.email


this._ForgotService.forgetpasowrd(useremal).subscribe({

next:(respons)=>{


  console.log(respons);

  this.maseg =  respons.message;
  
  this.step1 = false ;
this.step2 =true ;
},


error:(erro)=>{


  console.log(erro);

  this.maseg =  erro.error.message


}

})



}

VerifyCode(){

let restCode = this.VerifyResetCode.value ;

this._ForgotService.resstcoood(restCode).subscribe({


next:( respoo)=>{



this.maseg = respoo.status ;

this.step2 = false ;

this.step3 = true ;

},

error:( eroor)=>{

 
  
  this.maseg =  eroor.error.message
  
  
  
  
  
  
  
  
  
  }


})

}

ResetPassworddd(){

 let restForme = this.ResetPassword.value ;

 restForme.email = this.email ;

this._ForgotService.resatPasword(restForme).subscribe({

next:(reespons)=>{

  if (reespons.token) {
    
localStorage.setItem('_token' ,reespons.token)

this._Router.navigate([`/home`])

  }

},

error:(errrrr)=>{


  
this.maseg = errrrr.error.message;


}

})


}

}
