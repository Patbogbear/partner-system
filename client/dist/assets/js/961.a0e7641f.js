"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[961],{419:function(e,s,t){t.r(s),t.d(s,{default:function(){return k}});var l=t(821);const r=e=>((0,l.dD)("data-v-cc4cdd72"),e=e(),(0,l.Cn)(),e),a={class:"col-md-12 login"},o=r((()=>(0,l._)("div",{class:"login-image"},null,-1))),i=r((()=>(0,l._)("div",{class:"card-header"},[(0,l._)("h3",{class:"card-title"},"Login")],-1))),n={class:"card-body"},c={class:"mb-3"},d=r((()=>(0,l._)("label",{class:"form-label required"},"Email address",-1))),u=r((()=>(0,l._)("small",{class:"form-hint"},"We'll never share your email with anyone else.",-1))),p={class:"mb-3"},m=r((()=>(0,l._)("label",{class:"form-label required"},"Password",-1))),g=r((()=>(0,l._)("small",{class:"form-hint"}," Your password must be 8-20 characters long ",-1))),h={class:"card-footer text-end"},b=r((()=>(0,l._)("span",{class:"p-1 text-primary-emphasis bs-primary-bg-subtle"},"Register here",-1)));function _(e,s,t,r,_,y){return(0,l.wg)(),(0,l.iD)("div",a,[o,(0,l._)("form",{class:"card",onSubmit:s[4]||(s[4]=(0,l.iM)((e=>y.logUser()),["prevent"]))},[i,(0,l._)("div",n,[(0,l._)("div",c,[d,(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{type:"email",class:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":s[0]||(s[0]=e=>_.loginUser.email=e)},null,512),[[l.nr,_.loginUser.email]]),u])]),(0,l._)("div",p,[m,(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=e=>_.loginUser.password=e)},null,512),[[l.nr,_.loginUser.password]]),g])])]),(0,l._)("div",h,[(0,l._)("span",{class:"go_register",onClick:s[2]||(s[2]=e=>y.gotoRegister())},[(0,l.Uk)(" Does't have a account yet? "),b]),(0,l._)("button",{type:"submit",class:"btn btn-primary",onOnclick:s[3]||(s[3]=e=>y.logUser())}," Submit ",32)])],32)])}t(7658);var y=t(1146),v=t(6245),f={name:"register",components:{},data(){return{loginUser:{name:"",email:"",password:"",identity:""}}},methods:{logUser(){y.Z.post("/api/users/login",this.loginUser).then((e=>{console.log("success");const{token:s}=e.data;localStorage.setItem("userToken",s);const t=(0,v.Z)(s);console.log(s),this.$store.dispatch("setAuthenticated",!this.isEmpty(t)),this.$store.dispatch("setUser",t),this.$router.push({path:"/"})}))},gotoRegister(){this.$router.push({path:"/register"})},isEmpty(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}}},w=t(3744);const U=(0,w.Z)(f,[["render",_],["__scopeId","data-v-cc4cdd72"]]);var k=U}}]);
//# sourceMappingURL=961.a0e7641f.js.map