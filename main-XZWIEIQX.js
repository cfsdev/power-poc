import{a as G,b as O,e as q}from"./chunk-F2TJ5YBN.js";import{a as K,b as Q,e as $,f as ee,g as te,k as re,l as oe,m as ne,n as ae}from"./chunk-33CKQYJO.js";import{a as L,b as j,d as k,e as g,g as V,h as B,ha as Y,ja as J,k as U,la as ie,m as z,o as Z,p as H,q as W,s as X}from"./chunk-I3V4X5JJ.js";import{d as D,l as P,o as T}from"./chunk-KLTJM4C3.js";import{$ as b,Ca as _,Fb as x,Ra as p,S as C,Sa as y,Sb as m,Ta as E,V as M,Va as I,Xa as A,Za as S,Zb as h,da as f,ha as w,jb as R,jc as N,lb as u,ua as F,vb as s,wb as a,xb as d}from"./chunk-MUK5C3BT.js";import"./chunk-VOSPIT4N.js";function fe(i,e){i&1&&(s(0,"mat-error"),m(1," Email is required "),a())}function he(i,e){i&1&&(s(0,"mat-error"),m(1," Invalid email address "),a())}var se=(()=>{class i{_fb;_router;loginFormGroup;constructor(t,r){this._fb=t,this._router=r,this.loginFormGroup=this._fb.group({email:["",[g.required,g.email]],password:["",[g.required]]})}hasError(t,r){return this.loginFormGroup.controls[t].hasError(r)}login(){this._router.navigate(["shell/dashboard"])}static \u0275fac=function(r){return new(r||i)(y(W),y(O))};static \u0275cmp=f({type:i,selectors:[["poc-login"]],standalone:!0,features:[h],decls:22,vars:4,consts:[[1,"h-screen","w-full","bg-cover","justify-center","items-center","flex"],[1,"w-full","h-full","bg-gradient-to-l","from-[#d7e3ff]","from-50%","flex","justify-center"],[1,"flex","items-center"],[1,"w-full","sm:max-w-sm","md:max-w-md","m-auto","!bg-white"],[1,"!p-9"],[1,"text-center"],["src","https://mma.prnewswire.com/media/2416748/Fuji_Electric_Logo.jpg","alt","logo"],[1,"mt-8",3,"formGroup"],["appearance","outline",1,"w-full","mb-3"],["matInput","","formControlName","email","required",""],[4,"ngIf"],["matInput","","formControlName","password","required",""],["mat-flat-button","",1,"w-full",3,"click","disabled"]],template:function(r,o){r&1&&(s(0,"main",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-content",4)(5,"div",5),d(6,"img",6),a(),s(7,"form",7)(8,"mat-form-field",8)(9,"mat-label"),m(10,"Email"),a(),d(11,"input",9),R(12,fe,2,0,"mat-error",10)(13,he,2,0,"mat-error",10),a(),s(14,"mat-form-field",8)(15,"mat-label"),m(16,"Password"),a(),d(17,"input",11),s(18,"mat-error"),m(19," Password is required "),a()(),s(20,"button",12),x("click",function(){return o.login()}),m(21," Login "),a()()()()()()()),r&2&&(p(7),u("formGroup",o.loginFormGroup),p(5),u("ngIf",o.hasError("email","required")),p(),u("ngIf",o.hasError("email","email")),p(7),u("disabled",o.loginFormGroup.invalid))},dependencies:[$,K,Q,J,Y,ae,ne,re,ee,te,X,U,k,V,B,H,z,Z,oe,T,P,ie]})}return i})();var me=[{path:"login",component:se},{path:"shell",loadChildren:()=>import("./chunk-AXWRQUS5.js").then(i=>i.SHELL_ROUTES)},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}];var ge="@",ye=(()=>{let e=class e{constructor(r,o,n,l,c){this.doc=r,this.delegate=o,this.zone=n,this.animationType=l,this.moduleImpl=c,this._rendererFactoryPromise=null,this.scheduler=b(I,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-HJQI7RZO.js").then(o=>o)).catch(o=>{throw new C(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:n})=>{this._engine=o(this.animationType,this.doc);let l=new n(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(r,o){let n=this.delegate.createRenderer(r,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let l=new v(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(c=>{let ce=c.createRenderer(r,o);l.use(ce),this.scheduler?.notify(9)}).catch(c=>{l.use(n)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){E()},e.\u0275prov=M({token:e,factory:e.\u0275fac});let i=e;return i})(),v=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(ge)}};function de(i="animations"){return S("NgAsyncAnimations"),w([{provide:A,useFactory:(e,t,r)=>new ye(e,t,r,i),deps:[D,L,F]},{provide:_,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var pe={providers:[N({eventCoalescing:!0}),q(me),de()]};var ue=(()=>{class i{title="power-poc";static \u0275fac=function(r){return new(r||i)};static \u0275cmp=f({type:i,selectors:[["app-root"]],standalone:!0,features:[h],decls:1,vars:0,template:function(r,o){r&1&&d(0,"router-outlet")},dependencies:[G]})}return i})();j(ue,pe).catch(i=>console.error(i));
