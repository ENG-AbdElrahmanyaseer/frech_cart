"use strict";(self.webpackChunkfrech_cart=self.webpackChunkfrech_cart||[]).push([[932],{6666:(w,g,l)=>{l.r(g),l.d(g,{LoginComponent:()=>L});var _=l(6814),p=l(1120),i=l(95),e=l(4769),u=l(9410);function d(n,a){1&n&&(e.TgZ(0,"p",16),e._uU(1,"email is Required"),e.qZA())}function c(n,a){1&n&&(e.TgZ(0,"p",16),e._uU(1,"email InValid Format "),e.qZA())}function f(n,a){if(1&n&&(e.TgZ(0,"div",14),e.YNc(1,d,2,0,"p",15),e.YNc(2,c,2,0,"p",15),e.qZA()),2&n){const r=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=r.loginForme.get("email"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=r.loginForme.get("email"))?null:t.getError("email"))}}function h(n,a){1&n&&(e.TgZ(0,"p",16),e._uU(1,"password is Required"),e.qZA())}function Z(n,a){1&n&&(e.TgZ(0,"p",16),e._uU(1,"must be at least 6 chars "),e.qZA())}function v(n,a){if(1&n&&(e.TgZ(0,"div",14),e.YNc(1,h,2,0,"p",15),e.YNc(2,Z,2,0,"p",15),e.qZA()),2&n){const r=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=r.loginForme.get("password"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=r.loginForme.get("password"))?null:t.getError("pattern"))}}function T(n,a){1&n&&e._UZ(0,"span",17)}function I(n,a){if(1&n&&(e.TgZ(0,"p",18),e._uU(1),e.qZA()),2&n){const r=e.oxw();e.xp6(1),e.Oqu(r.errmsg)}}let L=(()=>{class n{constructor(r,o){this._AuthService=r,this._Router=o,this.errmsg="",this.isLoding=!1,this.loginForme=new i.cw({email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)])})}handelForme(){const r=this.loginForme.value;this.isLoding=!0,1==this.loginForme.valid&&this._AuthService.login(r).subscribe({next:o=>{localStorage.setItem("etoken",o.token),this._AuthService.decodeUoser(),this.isLoding=!1,"success"==o.message&&this._Router.navigate(["/home"])},error:o=>{this.isLoding=!1,this.errmsg=o.error.message}})}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(u.e),e.Y36(p.F0))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:21,vars:6,consts:[[1,"w-75","mx-auto","shadow","rounded","p-4","my-3","bg-main-light"],[1,"my-3"],[3,"formGroup","ngSubmit"],[1,"form-Item"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["class","alert alert-danger p-1 small w-25 mx-auto",4,"ngIf"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],[1,"d-flex","justify-content-between","align-items-center"],[1,"main-btn","mt-2",3,"disabled"],["class","fas fa-spin fa-spinner",4,"ngIf"],["routerLink","/ForgotPassword",1,"link-primary"],["class","alert alert-danger p-1 w-25 mx-auto mb-0 ",4,"ngIf"],[1,"alert","alert-danger","p-1","small","w-25","mx-auto"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fas","fa-spin","fa-spinner"],[1,"alert","alert-danger","p-1","w-25","mx-auto","mb-0"]],template:function(o,t){if(1&o&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Login Now"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return t.handelForme()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"email :"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,f,3,2,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"label",7),e._uU(11,"password :"),e.qZA(),e._UZ(12,"input",8),e.YNc(13,v,3,2,"div",6),e.qZA(),e.TgZ(14,"div",9)(15,"button",10),e._uU(16,"Login "),e.YNc(17,T,1,0,"span",11),e.qZA(),e.TgZ(18,"a",12),e._uU(19,"Forgot Password"),e.qZA()()(),e.YNc(20,I,2,1,"p",13),e.qZA()),2&o){let s,m;e.xp6(3),e.Q6J("formGroup",t.loginForme),e.xp6(5),e.Q6J("ngIf",(null==(s=t.loginForme.get("email"))?null:s.errors)&&(null==(s=t.loginForme.get("email"))?null:s.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=t.loginForme.get("password"))?null:m.errors)&&(null==(m=t.loginForme.get("password"))?null:m.touched)),e.xp6(2),e.Q6J("disabled",t.loginForme.invalid),e.xp6(2),e.Q6J("ngIf",t.isLoding),e.xp6(3),e.Q6J("ngIf",t.errmsg)}},dependencies:[_.ez,_.O5,p.rH,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]})}return n})()}}]);