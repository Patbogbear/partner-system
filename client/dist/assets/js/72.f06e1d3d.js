"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[72],{9330:function(e,s,l){l.r(s),l.d(s,{default:function(){return R}});var r=l(821);const a=e=>((0,r.dD)("data-v-3c909281"),e=e(),(0,r.Cn)(),e),o={class:"col-md-12 register"},t=a((()=>(0,r._)("div",{class:"register-image"},null,-1))),i=a((()=>(0,r._)("div",{class:"card-header"},[(0,r._)("h3",{class:"card-title"},"Register")],-1))),n={class:"card-body"},d={class:"mb-3"},u=a((()=>(0,r._)("label",{class:"form-label required"},"User name",-1))),c={class:"mb-3"},m=a((()=>(0,r._)("label",{class:"form-label"},"Cluster",-1))),p=a((()=>(0,r._)("option",null,"SH",-1))),_=a((()=>(0,r._)("option",null,"HZ",-1))),b=a((()=>(0,r._)("option",null,"BJ",-1))),h=[p,_,b],f={class:"mb-3"},g=a((()=>(0,r._)("label",{class:"form-label required"},"Email address",-1))),v={class:"mb-3"},w=a((()=>(0,r._)("label",{class:"form-label required"},"Password",-1))),y={class:"mb-3"},P=a((()=>(0,r._)("label",{class:"form-label required"},"Double Check Password",-1))),U=a((()=>(0,r._)("small",{class:"form-hint"},null,-1))),q={class:"mb-3"},k=a((()=>(0,r._)("label",{class:"form-label"},"Select Role",-1))),C=a((()=>(0,r._)("option",null,"Sales",-1))),L=a((()=>(0,r._)("option",{value:"POC"},"Pod-Leader/POC",-1))),V=a((()=>(0,r._)("option",null,"Team-Leader",-1))),S=[C,L,V],D={class:"card-footer text-end"},E=a((()=>(0,r._)("span",{class:"p-1 text-primary-emphasis bs-primary-bg-subtle"},"Login here",-1)));function H(e,s,l,a,p,_){return(0,r.wg)(),(0,r.iD)("div",o,[t,(0,r._)("form",{class:"card",onSubmit:s[8]||(s[8]=(0,r.iM)((e=>_.registerUser()),["prevent"]))},[i,(0,r._)("div",n,[(0,r._)("div",d,[u,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"name",class:"form-control",placeholder:"Enter name","onUpdate:modelValue":s[0]||(s[0]=e=>p.users.name=e),required:""},null,512),[[r.nr,p.users.name]])])]),(0,r._)("div",c,[m,(0,r._)("div",null,[(0,r.wy)((0,r._)("select",{class:"form-select","onUpdate:modelValue":s[1]||(s[1]=e=>p.users.cluster=e)},h,512),[[r.bM,p.users.cluster]])])]),(0,r._)("div",f,[g,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"email",class:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":s[2]||(s[2]=e=>p.users.email=e),required:""},null,512),[[r.nr,p.users.email]])])]),(0,r._)("div",v,[w,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":s[3]||(s[3]=e=>p.users.password=e),required:""},null,512),[[r.nr,p.users.password]])])]),(0,r._)("div",y,[P,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":s[4]||(s[4]=e=>p.users.confirmPassword=e),required:""},null,512),[[r.nr,p.users.confirmPassword]]),U])]),(0,r._)("div",q,[k,(0,r._)("div",null,[(0,r.wy)((0,r._)("select",{class:"form-select","onUpdate:modelValue":s[5]||(s[5]=e=>p.users.identity=e),required:""},S,512),[[r.bM,p.users.identity]])])])]),(0,r._)("div",D,[(0,r._)("span",{class:"go_login",onClick:s[6]||(s[6]=e=>_.gotoLogin())},[(0,r.Uk)(" Login here? "),E]),(0,r._)("button",{type:"submit",class:"btn btn-primary",onOnclick:s[7]||(s[7]=e=>_.registerUser())}," Submit ",32)])],32)])}l(7658);var M=l(1146),O={name:"register",components:{},data(){return{users:{name:"",cluster:"",email:"",password:"",identity:"",confirmPassword:""}}},methods:{registerUser(){if(!this.users.email.endsWith("@google.com"))return void alert("please use google account ");this.users.password!==this.users.confirmPassword&&alert("password not match");M.Z.post("/api/users/register",this.users).then((e=>{console.log(this.users),this.$router.push({path:"/login"})})).catch((e=>{console.error(e)}))},gotoLogin(){this.$router.push("/login")}}},Z=l(3744);const x=(0,Z.Z)(O,[["render",H],["__scopeId","data-v-3c909281"]]);var R=x}}]);
//# sourceMappingURL=72.f06e1d3d.js.map