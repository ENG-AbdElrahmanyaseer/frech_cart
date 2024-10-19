import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';


const routes: Routes = [

// blank//
{path:'',
  canActivate:[authGuard]
  ,
  
  loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),

  children:[
{path:"" , redirectTo:'home' , pathMatch:'full'} ,

{path:'home' ,loadComponent:()=>import('./components/home/home.component').then( (m)=>m.HomeComponent) ,title:'Home'},

{path:'cart' ,loadComponent:()=>import('./components/cart/cart.component').then( (m)=>m.CartComponent) ,title:'Cart'},

{path:'paymant/:id' ,loadComponent:()=>import('./components/paymant/paymant.component').then( (m)=>m.PaymantComponent) ,title:'paymant'},

{path:'product' ,loadComponent:()=>import('./components/product/product.component').then( (m)=>m.ProductComponent) ,title:'Product'},

{path:'brands' ,loadComponent:()=>import('./components/brands/brands.component').then( (m)=>m.BrandsComponent) ,title:'Brands'},

{path:'categores' ,loadComponent:()=>import('./components/categores/categores.component').then( (m)=>m.CategoresComponent) ,title:'categores'},

{path:'allorders' ,loadComponent:()=>import('./components/allorders/allorders.component').then( (m)=>m.AllordersComponent) ,title:'allorders'},



{path:'poroductDetalse/:id' ,loadComponent:()=>import('./components/detals/detals.component').then( (m)=>m.DetalsComponent) ,title:'poroductDetalse'},









  ]


},

// auth//
{path:'', loadComponent:()=>import('./layouts/outh-layout/outh-layout.component').then((m)=>m.OuthLayoutComponent), 

children:[


  {path:'login' ,loadComponent:()=>import('./components/login/login.component').then( (m)=>m.LoginComponent) ,title:'login'},

  {path:'regaster' ,loadComponent:()=>import('./components/regaster/regaster.component').then( (m)=>m.RegasterComponent) ,title:'regeste'},

  {path:'ForgotPassword' ,loadComponent:()=>import('./components/forgot-password/forgot-password.component').then( (m)=>m.ForgotPasswordComponent) ,title:'ForgotPassword'},





]





},

// notfound //
{ path:'**' ,loadComponent:()=>import('./components/notfound/notfound.component').then( (m)=>m.NotfoundComponent) ,title:'login'},









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
