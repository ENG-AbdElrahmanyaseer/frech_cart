"use strict";(self.webpackChunkfrech_cart=self.webpackChunkfrech_cart||[]).push([[290],{5290:(v,d,o)=>{o.r(d),o.d(d,{CartComponent:()=>f});var u=o(6814),p=o(7444),h=o(1120),t=o(4769),_=o(6286);function b(c,C){if(1&c){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10),t._UZ(2,"img",11),t.qZA(),t.TgZ(3,"div",12)(4,"div")(5,"h3",13),t._uU(6),t.ALo(7,"cutText"),t.qZA(),t.TgZ(8,"p",14),t._uU(9),t.ALo(10,"currency"),t.qZA(),t.TgZ(11,"button",15,16),t.NdJ("click",function(){const n=t.CHM(e).$implicit,a=t.MAs(12),l=t.oxw(2);return t.KtG(l.RemoveCartItem(n.product._id,a))}),t._UZ(13,"i",17),t._uU(14,"Remove"),t.qZA()(),t.TgZ(15,"div")(16,"button",18,19),t.NdJ("click",function(){const n=t.CHM(e).$implicit,a=t.MAs(17),l=t.MAs(22),g=t.oxw(2);return t.KtG(g.updateQuantity(n.count-1,n.product._id,a,l))}),t._uU(18," - "),t.qZA(),t.TgZ(19,"span"),t._uU(20),t.qZA(),t.TgZ(21,"button",18,20),t.NdJ("click",function(){const n=t.CHM(e).$implicit,a=t.MAs(17),l=t.MAs(22),g=t.oxw(2);return t.KtG(g.updateQuantity(n.count+1,n.product._id,a,l))}),t._uU(23," + "),t.qZA()()()()}if(2&c){const e=C.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.hij(" ",t.xi3(7,5,e.product.title,7),""),t.xp6(3),t.hij(" price :",t.xi3(10,8,e.price,"EGP"),""),t.xp6(11),t.hij(" ",e.count," ")}}const i=function(c){return["/paymant",c]};function m(c,C){if(1&c){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"h1"),t._uU(3,"Shop Cart"),t.qZA(),t.TgZ(4,"button",4),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.deletAllCart())}),t._uU(5," Clear cart "),t.qZA()(),t.TgZ(6,"p",5),t._uU(7),t.qZA(),t.YNc(8,b,24,11,"div",6),t.TgZ(9,"button",7),t._uU(10,"OnlinePayMant "),t._UZ(11,"img",8),t.qZA()()}if(2&c){const e=t.oxw();t.xp6(7),t.hij(" Total Price : ",e.cartDetals.totalCartPrice,""),t.xp6(1),t.Q6J("ngForOf",e.cartDetals.products),t.xp6(1),t.Q6J("routerLink",t.VKq(3,i,e.cartDetals._id))}}function x(c,C){1&c&&(t.TgZ(0,"h2",21),t._uU(1," Your Cart Is Empaty... "),t.qZA())}let f=(()=>{class c{constructor(e,s,r){this._CartService=e,this._Renderer2=s,this._Router=r,this.cartDetals={}}ngOnInit(){this._CartService.GetLoggedUserCart().subscribe({next:e=>{this.cartDetals=e.data},error:e=>{console.log(e)}})}RemoveCartItem(e,s){this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.RemoveSpecificCartItem(e).subscribe({next:r=>{this.cartDetals=r.data,this._Renderer2.removeAttribute(s,"disabled"),this._CartService.cartNamber.next(r.numOfCartItems)},error:r=>{console.log(r)}})}updateQuantity(e,s,r,n){e>=1&&(this._Renderer2.setAttribute(r,"disabled","true"),this._Renderer2.setAttribute(n,"disabled","true"),this._CartService.Updatecartproductquantity(s,e).subscribe({next:a=>{this.cartDetals=a.data,this._Renderer2.removeAttribute(r,"disabled"),this._Renderer2.removeAttribute(n,"disabled")},error:a=>{console.log(a)}}))}deletAllCart(){this._CartService.clearUserCart().subscribe({next:e=>{"success"===e.message&&(this.cartDetals=null),this.cartDetals=e,this._CartService.cartNamber.next(e.numOfCartItems)},error:e=>{console.log(e)}})}static#t=this.\u0275fac=function(s){return new(s||c)(t.Y36(_.N),t.Y36(t.Qsj),t.Y36(h.F0))};static#e=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","w-75 mx-auto rounded shadow bg-mian-light p-3 ",4,"ngIf","ngIfElse"],["msg",""],[1,"w-75","mx-auto","rounded","shadow","bg-mian-light","p-3"],[1,"d-flex","align-items-center","justify-content-between"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"text-main"],["class","row border-bottom py-2",4,"ngFor","ngForOf"],[1,"main-btn","mt-4",3,"routerLink"],["src","./assets/images/visa-1.svg","alt","visa logo"],[1,"row","border-bottom","py-2"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","justify-content-between","align-items-center"],[1,"h6"],[1,"text-main","mb-0"],[1,"btn","m-0","p-0","text-main",3,"click"],["btnRemove",""],[1,"fa-solid","fa-trash-can"],[1,"btn","btn-sm","border-success",3,"click"],["btn1",""],["btn2",""],[1,"text-main","text-center"]],template:function(s,r){if(1&s&&(t.YNc(0,m,12,5,"section",0),t.YNc(1,x,2,0,"ng-template",null,1,t.W1O)),2&s){const n=t.MAs(2);t.Q6J("ngIf",r.cartDetals)("ngIfElse",n)}},dependencies:[u.ez,u.sg,u.O5,u.H9,p.Q,h.rH]})}return c})()},6286:(v,d,o)=>{o.d(d,{N:()=>t});var u=o(5619),p=o(4769),h=o(9862);let t=(()=>{class _{constructor(i){this._HttpClient=i,this.basUrl="https://ecommerce.routemisr.com",this.myHedars={token:localStorage.getItem("etoken")},this.cartNamber=new u.X(0)}addToCart(i){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:i},{headers:this.myHedars})}GetLoggedUserCart(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart",{headers:this.myHedars})}RemoveSpecificCartItem(i){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${i}`,{headers:this.myHedars})}Updatecartproductquantity(i,m){return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${i}`,{count:m},{headers:this.myHedars})}clearUserCart(){return this._HttpClient.delete("https://ecommerce.routemisr.com/api/v1/cart",{headers:this.myHedars})}getAllOrders(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/orders/")}Sheckout(i,m){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${i}?url=http://localhost:4200`,{shippingAddress:m},{headers:this.myHedars})}static#t=this.\u0275fac=function(m){return new(m||_)(p.LFG(h.eN))};static#e=this.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);