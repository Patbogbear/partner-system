"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[965],{2965:function(e,l,a){a.r(l),a.d(l,{default:function(){return ie}});var s=a(821),t=a(4465),o=a(3907);const r={class:"header"},i=["onClick"],u=["onClick"],d={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"passwordToast"},n=(0,s.uE)('<div class="toast-header"><strong class="mr-auto">Notification</strong><button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true"></span></button></div><div class="toast-body">Password updated successfully!</div>',2),c=[n],v={class:"change-password"},p={class:"col-12"},_={class:"card"},m={class:"card-body"},w=(0,s._)("h3",{class:"card-title"},"Change Password",-1),b={class:"row row-cards"},y={class:"col-sm-6 col-md-6"},h={class:"mb-3"},g=(0,s._)("label",{class:"form-label"},"New Password",-1),f={class:"col-sm-6 col-md-6"},k={class:"mb-3"},q=(0,s._)("label",{class:"form-label"},"Confrim New Password",-1),U={class:"card-footer text-end"},D={class:"user-authentication"},E={class:"card"},H=(0,s._)("div",{class:"card-header"},[(0,s._)("h3",{class:"card-title"},"user-authenticate")],-1),C={class:"card-body"},P={class:"table-responsive"},R={class:"table mb-0"},S=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"User"),(0,s._)("th",null,"Role"),(0,s._)("th",null,"Action")])],-1),V=(0,s._)("option",{value:"",disabled:""},"Select User",-1),A=["value"],Z=(0,s._)("option",{value:"Reader"},"Reader",-1),N=(0,s._)("option",{value:"Editor"},"Editor",-1),x=(0,s._)("option",{value:"Admin"},"Admin",-1),M=[Z,N,x],O=["value"],T={key:1},z=(0,s._)("td",null,[(0,s._)("select",{class:"form-select"},[(0,s._)("option",{value:"STATUS_CODE",selected:""},"Reader"),(0,s._)("option",{value:"JSON_BODY"},"Editor"),(0,s._)("option",{value:"HEADERS"},"Admin"),(0,s._)("option",{value:"TEXT_BODY"},"Text body")])],-1),Y=(0,s._)("div",{class:"card-footer text-end"},[(0,s._)("button",{type:"submit",class:"btn btn-primary"},"Make request")],-1),K=["onSubmit"],Q=(0,s._)("div",{class:"card-header"},[(0,s._)("h3",{class:"card-title"},"Add user")],-1),B={class:"card-body"},I={class:"mb-3"},F=(0,s._)("label",{class:"form-label required"},"User name",-1),G={class:"mb-3"},J=(0,s._)("label",{class:"form-label required"},"Email address",-1),L={class:"mb-3"},X=(0,s._)("label",{class:"form-label required"},"Password",-1),j={class:"mb-3"},W=(0,s._)("label",{class:"form-label"},"Select Reader or Editor ",-1),$=(0,s._)("option",null,"Reader",-1),ee=(0,s._)("option",null,"Editor",-1),le=(0,s._)("option",null,"Admin",-1),ae=[$,ee,le],se={class:"card-footer text-end"},te=(0,s._)("button",null,"get list",-1);var oe={__name:"Personal",setup(e){const l=(0,o.oR)(),a=(0,s.Fl)((()=>l.getters.user)),n=(0,s.iH)(""),Z=(0,s.iH)(""),N=(0,s.iH)([]),x=(0,s.iH)(""),$=(0,s.iH)(""),ee=((0,s.iH)(""),(0,s.iH)("")),le=(0,s.iH)(""),oe=(0,s.iH)(""),re=(0,s.iH)(""),ie=(0,s.iH)([]);(0,s.bv)((async()=>{await ue(),await pe()}));const ue=async()=>{try{let{data:e}=await t.Z.get("/api/users");N.value=e,console.log(N)}catch(e){}},de=()=>{n.value===Z.value?t.Z.post("/api/users/edit-user/password",{newPassword:n.value}).then((e=>{console.log("password update successfully ")})).catch((e=>{console.log("failed to update password")})):alert("password not match")},ne=async()=>{try{await t.Z["delete"]("/api/users/delete/user",{data:{email:x.value}}),await ue(),x=null}catch(e){console.log("error deleting user:",e)}},ce=async()=>{try{await t.Z.put("/api/users/edit/role",{email:x.value,updatedUserRole:$.value}),await ue()}catch(e){console.log("error editor user role:",e)}},ve=async()=>{try{await t.Z.post("/api/users/register",{name:re.value,email:ee.value,password:le.value,identity:oe.value}),await ue()}catch(e){console.log("error add user ",e)}},pe=async()=>{try{let{data:e}=await t.Z.get("/api/accessQuests/all-requests",{params:{status:"PENDING"}});ie.value=e}catch(e){console.log("error get request list",e)}},_e=async e=>{try{await t.Z.put("/api/accessQuests/all-requests/"+e,{status:"APPROVED"})}catch(l){console.log("error approve request",l)}},me=async e=>{try{await t.Z.put("/api/accessQuests/all-requests/"+e,{status:"DENIED"})}catch(l){console.log("error approve request",l)}};return(e,l)=>((0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",r,[(0,s._)("div",null," personal page "+(0,s.zw)((0,s.SU)(a))+(0,s.zw)((0,s.SU)(a).email),1),(0,s.Uk)(" request List "),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(ie.value,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e._id},[(0,s.Uk)((0,s.zw)(e)+" ",1),(0,s._)("button",{onClick:l=>_e(e._id)},"approve request",8,i),(0,s._)("button",{onClick:l=>me(e._id)},"deny request",8,u)])))),128)),(0,s._)("div",d,c,512),(0,s._)("div",v,[(0,s.Uk)(" password form "),(0,s._)("div",p,[(0,s._)("form",_,[(0,s._)("div",m,[w,(0,s._)("div",b,[(0,s._)("div",y,[(0,s._)("div",h,[g,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"new password","onUpdate:modelValue":l[0]||(l[0]=e=>n.value=e)},null,512),[[s.nr,n.value]])])]),(0,s._)("div",f,[(0,s._)("div",k,[q,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"confrim new password","onUpdate:modelValue":l[1]||(l[1]=e=>Z.value=e)},null,512),[[s.nr,Z.value]])])])])]),(0,s._)("div",U,[(0,s._)("button",{type:"submit",class:"btn btn-primary",onClick:l[2]||(l[2]=e=>de())}," Change Password ")])])])]),(0,s._)("div",D,[(0,s.Uk)(" user-settings "),(0,s._)("div",E,[H,(0,s._)("div",C,[(0,s._)("div",P,[(0,s._)("table",R,[S,(0,s._)("tbody",null,[(0,s._)("tr",null,[(0,s._)("td",null,[(0,s.wy)((0,s._)("select",{class:"form-select","onUpdate:modelValue":l[3]||(l[3]=e=>x.value=e)},[V,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(N.value,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e.id,value:e.email},(0,s.zw)(e.email),9,A)))),128))],512),[[s.bM,x.value]])]),(0,s._)("td",null,[(0,s.wy)((0,s._)("select",{class:"form-select","onUpdate:modelValue":l[4]||(l[4]=e=>$.value=e)},M,512),[[s.bM,$.value]])]),(0,s._)("td",null,[x.value&&$.value?((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:ce}," change Role ")):(0,s.kq)("",!0)])]),(0,s._)("tr",null,[(0,s._)("td",null,[N.value.length>0?(0,s.wy)(((0,s.wg)(),(0,s.iD)("select",{key:0,"onUpdate:modelValue":l[5]||(l[5]=e=>x.value=e),class:"form-select"},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(N.value,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e.id,value:e.email},(0,s.zw)(e.email),9,O)))),128))],512)),[[s.bM,x.value]]):((0,s.wg)(),(0,s.iD)("div",T,"没有用户数据"))]),z,(0,s._)("td",null,[x.value?((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:ne}," delete user ")):(0,s.kq)("",!0)])])])])])]),Y])]),(0,s._)("form",{class:"card",onSubmit:(0,s.iM)(ve,["prevent"])},[Q,(0,s._)("div",B,[(0,s._)("div",I,[F,(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"name",class:"form-control",placeholder:"Enter name","onUpdate:modelValue":l[6]||(l[6]=e=>re.value=e),required:""},null,512),[[s.nr,re.value]])])]),(0,s._)("div",G,[J,(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"email",class:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":l[7]||(l[7]=e=>ee.value=e),required:""},null,512),[[s.nr,ee.value]])])]),(0,s._)("div",L,[X,(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":l[8]||(l[8]=e=>le.value=e),required:""},null,512),[[s.nr,le.value]])])]),(0,s._)("div",j,[W,(0,s._)("div",null,[(0,s.wy)((0,s._)("select",{class:"form-select","onUpdate:modelValue":l[9]||(l[9]=e=>oe.value=e),required:""},ae,512),[[s.bM,oe.value]])])])]),(0,s._)("div",se,[(0,s._)("button",{type:"submit",class:"btn btn-primary",onOnclick:ve}," Submit ",32)])],40,K),te,(0,s._)("button",{onClick:_e},"approve request")])]))}};const re=oe;var ie=re}}]);
//# sourceMappingURL=965.d7e06812.js.map