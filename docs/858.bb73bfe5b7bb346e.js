"use strict";(self.webpackChunkfrech_cart=self.webpackChunkfrech_cart||[]).push([[858],{6858:(K,b,c)=>{c.r(b),c.d(b,{ProductComponent:()=>j});var u=c(6814),v=c(1120),L=c(756),I=c(7444),e=c(4769);function k(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.previous())})("click",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.previous())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function T(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function A(i,a){if(1&i&&(e.TgZ(0,"li",9),e.YNc(1,k,4,2,"a",10),e.YNc(2,T,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function y(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const r=e.oxw().$implicit;e.oxw(2);const s=e.MAs(1);return e.KtG(s.setCurrent(r.value))})("click",function(){e.CHM(t);const r=e.oxw().$implicit;e.oxw(2);const s=e.MAs(1);return e.KtG(s.setCurrent(r.value))}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(2),e.hij("",n.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function w(i,a){if(1&i&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(3),e.hij("",n.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function Z(i,a){if(1&i&&(e.TgZ(0,"li"),e.YNc(1,y,6,5,"a",10),e.YNc(2,w,7,5,"ng-container",15),e.qZA()),2&i){const t=a.$implicit;e.oxw(2);const n=e.MAs(1);e.ekj("current",n.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",n.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",n.getCurrent()===t.value)}}function M(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.next())})("click",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.next())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function S(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function N(i,a){if(1&i&&(e.TgZ(0,"li",17),e.YNc(1,M,4,2,"a",10),e.YNc(2,S,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function D(i,a){if(1&i&&(e.TgZ(0,"ul",4),e.YNc(1,A,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,Z,3,6,"li",7),e.YNc(5,N,3,4,"li",8),e.qZA()),2&i){const t=e.oxw(),n=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",n.getCurrent()," / ",n.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",n.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class f{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(a){return null==a.id&&(a.id=this.DEFAULT_ID),this.instances[a.id]?this.updateInstance(a):(this.instances[a.id]=a,!0)}updateInstance(a){let t=!1;for(let n in this.instances[a.id])a[n]!==this.instances[a.id][n]&&(this.instances[a.id][n]=a[n],t=!0);return t}getCurrentPage(a){return this.instances[a]?this.instances[a].currentPage:1}setCurrentPage(a,t){if(this.instances[a]){let n=this.instances[a];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[a].currentPage=t,this.change.emit(a))}}setTotalItems(a,t){this.instances[a]&&0<=t&&(this.instances[a].totalItems=t,this.change.emit(a))}setItemsPerPage(a,t){this.instances[a]&&(this.instances[a].itemsPerPage=t,this.change.emit(a))}getInstance(a=this.DEFAULT_ID){return this.instances[a]?this.clone(this.instances[a]):{}}clone(a){var t={};for(var n in a)a.hasOwnProperty(n)&&(t[n]=a[n]);return t}}const F=Number.MAX_SAFE_INTEGER;let B=(()=>{class i{constructor(t){this.service=t,this.state={}}transform(t,n){if(!(t instanceof Array)){let d=n.id||this.service.defaultId();return this.state[d]?this.state[d].slice:t}let l,g,r=n.totalItems&&n.totalItems!==t.length,s=this.createInstance(t,n),o=s.id,p=s.itemsPerPage,_=this.service.register(s);if(!r&&t instanceof Array){if(p=+p||F,l=(s.currentPage-1)*p,g=l+p,this.stateIsIdentical(o,t,l,g))return this.state[o].slice;{let m=t.slice(l,g);return this.saveState(o,t,m,l,g),this.service.change.emit(o),m}}return _&&this.service.change.emit(o),this.saveState(o,t,t,l,g),t}createInstance(t,n){return this.checkConfig(n),{id:null!=n.id?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||t.length}}checkConfig(t){const r=["itemsPerPage","currentPage"].filter(s=>!(s in t));if(0<r.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${r.join(", ")}`)}saveState(t,n,r,s,o){this.state[t]={collection:n,size:n.length,slice:r,start:s,end:o}}stateIsIdentical(t,n,r,s){let o=this.state[t];return!(!o||o.size!==n.length||o.start!==r||o.end!==s)&&o.slice.every((g,p)=>g===n[r+p])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f,16))},i.\u0275pipe=e.Yjl({name:"paginate",type:i,pure:!1}),i})(),U=(()=>{class i{constructor(t,n){this.service=t,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(r=>{this.id===r&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(n),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const n=Math.ceil(t.totalItems/t.itemsPerPage);return n<t.currentPage&&0<n?n:t.currentPage<1?1:t.currentPage}createPageArray(t,n,r,s){s=+s;let o=[];const l=Math.max(Math.ceil(r/n),1),g=Math.ceil(s/2),p=t<=g,_=l-g<t,d=!p&&!_;let m=s<l,h=1;for(;h<=l&&h<=s;){let P,C=this.calculatePageNumber(h,t,s,l);P=m&&(2===h&&(d||_)||h===s-1&&(d||p))?"...":C,o.push({label:P,value:C}),h++}return o}calculatePageNumber(t,n,r,s){let o=Math.ceil(r/2);return t===r?s:1===t?t:r<s?s-o<n?s-r+t:o<n?n-o+t:t:t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f),e.Y36(e.sBO))},i.\u0275dir=e.lG2({type:i,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),i})();function x(i){return!!i&&"false"!==i}let E=(()=>{class i{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=x(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=x(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=x(t)}trackByIndex(t){return t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,n){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(s){return n.pageChange.emit(s)})("pageBoundsCorrection",function(s){return n.pageBoundsCorrection.emit(s)}),e.TgZ(2,"nav",2),e.YNc(3,D,6,8,"ul",3),e.qZA()()),2&t){const r=e.MAs(1);e.Q6J("id",n.id)("maxSize",n.maxSize),e.xp6(2),e.uIk("aria-label",n.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(n.autoHide&&r.pages.length<=1))}},dependencies:[U,u.O5,u.sg,u.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),i})(),R=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[f],imports:[[u.ez]]}),i})();var q=c(1240),z=c(6286),J=c(2425);const O=function(i){return["/poroductDetalse",i]};function H(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"header",9),e._UZ(3,"img",10),e.TgZ(4,"h3",11),e._uU(5),e.ALo(6,"cutText"),e.qZA(),e.TgZ(7,"h4",12),e._uU(8),e.qZA(),e.TgZ(9,"div",13)(10,"span",14),e._uU(11),e.ALo(12,"currency"),e.qZA(),e.TgZ(13,"span"),e._UZ(14,"i",15),e._uU(15),e.qZA()()(),e.TgZ(16,"footer")(17,"button",16,17),e.NdJ("click",function(){const s=e.CHM(t).$implicit,o=e.MAs(18),l=e.oxw(2);return e.KtG(l.addProduct(s._id,o))}),e._uU(19," +Add To Cart "),e.qZA()()()()}if(2&i){const t=a.$implicit;e.xp6(2),e.Q6J("routerLink",e.VKq(14,O,t._id)),e.xp6(1),e.Q6J("src",t.imageCover,e.LSH)("title",t.title)("alt",t.title),e.xp6(2),e.Oqu(e.xi3(6,8,t.title,3)),e.xp6(3),e.Oqu(t.category.name),e.xp6(3),e.Oqu(e.xi3(12,11,t.price,"EGP")),e.xp6(4),e.hij(" ",t.ratingsAverage," ")}}const Y=function(i,a,t){return{id:"productPagenat",itemsPerPage:i,currentPage:a,totalItems:t}};function Q(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"section",1)(1,"h2",2),e._uU(2,"All Product"),e.qZA(),e.TgZ(3,"div",3),e.YNc(4,H,20,16,"div",4),e.ALo(5,"paginate"),e.qZA(),e.TgZ(6,"div",5)(7,"pagination-controls",6),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.pageChanged(r))})("pageBoundsCorrection",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.pageChanged(r))}),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",e.xi3(5,5,t.Products,e.kEZ(8,Y,t.pageSize,t.currentPage,t.total))),e.xp6(3),e.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0)}}let j=(()=>{class i{constructor(t,n,r,s){this._ProdactsService=t,this._CartService=n,this.toastr_=r,this._Renderer2=s,this.Products=[],this.pageSize=0,this.currentPage=1,this.total=0}ngOnInit(){this._ProdactsService.getProdacts().subscribe({next:t=>{this.Products=t.data,this.pageSize=t.metadata.limit,this.currentPage=t.metadata.currentPage,this.total=t.results},error:t=>{console.log(t)}})}pageChanged(t){this._ProdactsService.getProdacts(t).subscribe({next:n=>{this.Products=n.data,this.pageSize=n.metadata.limit,this.currentPage=n.metadata.currentPage,this.total=n.results},error:n=>{console.log(n)}})}addProduct(t,n){this._Renderer2.setAttribute(n,"disabled","true"),this._CartService.addToCart(t).subscribe({next:r=>{this.toastr_.success(r.message),this._Renderer2.removeAttribute(n,"disabled"),this._CartService.cartNamber.next(r.numOfCartItems)},error:r=>{this._Renderer2.removeAttribute(n,"disabled"),console.log(r)}})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(q.F),e.Y36(z.N),e.Y36(J._W),e.Y36(e.Qsj))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-product"]],standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","py-4",4,"ngIf"],[1,"py-4"],[1,"text-center","mb-5"],[1,"row","justify-content-center","g-4"],["class","col-sm-6 col-md-4 col-lg-3- col-xl-2",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","my-4"],["id","productPagenat","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"col-sm-6","col-md-4","col-lg-3-","col-xl-2"],[1,"product","h-100"],["role","button",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"small"],[1,"text-main","h6"],[1,"d-flex","align-items-center","justify-content-between","small"],[1,""],[1,"fas","fa-star","rating-color"],[1,"main-btn","w-100","py-2",3,"click"],["btnAdd",""]],template:function(n,r){1&n&&e.YNc(0,Q,8,12,"section",0),2&n&&e.Q6J("ngIf",r.Products.length>0)},dependencies:[u.ez,u.sg,u.O5,u.H9,I.Q,L.bB,v.rH,R,B,E]})}return i})()}}]);