"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[965],{2965:function(e,l,a){a.r(l),a.d(l,{default:function(){return we}});var s=a(821),t=a(4465),r=a(3907);const o={class:"header"},d={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"passwordToast"},i=(0,s.uE)('<div class="toast-header"><strong class="mr-auto">Notification</strong><button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true"></span></button></div><div class="toast-body">Password updated successfully!</div>',2),c=[i],n={class:"change-password"},u={class:"col-12"},_={class:"card"},v={class:"card-body"},p=(0,s._)("h3",{class:"card-title"},"Change Password",-1),m={class:"row row-cards"},w={class:"col-sm-6 col-md-6"},b={class:"mb-3"},y=(0,s._)("label",{class:"form-label"},"New Password",-1),h={class:"col-sm-6 col-md-6"},g={class:"mb-3"},f=(0,s._)("label",{class:"form-label"},"Confrim New Password",-1),k={class:"card-footer text-end"},q={class:"col-md-12 col-lg-12"},D={class:"card"},U=(0,s._)("div",{class:"card-header"},[(0,s._)("h3",{class:"card-title"},"Recently Requests")],-1),E={class:"card-table table-responsive"},C={class:"table table-vcenter"},H=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Request User Name"),(0,s._)("th",null,"Request User Cluster & Title"),(0,s._)("th",null,"Request Data Description"),(0,s._)("th",{colspan:"2"},"Actions")])],-1),R={class:"text-secondary"},P={class:"text-secondary"},S={class:"text-secondary"},x=["onClick"],z=["onClick"],A=(0,s._)("td",{class:"text-end w-1"},[(0,s._)("div",{class:"chart-sparkline chart-sparkline-sm",id:"sparkline-bounce-rate-1"})],-1),V={class:"user-authentication"},N={class:"card"},Z=(0,s._)("div",{class:"card-header"},[(0,s._)("h3",{class:"card-title"},"user-authenticate")],-1),I={class:"card-body"},T={class:"table-responsive"},M={class:"table mb-0"},O=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"User"),(0,s._)("th",null,"Role"),(0,s._)("th",null,"Action")])],-1),Y=(0,s._)("option",{value:"",disabled:""},"Select User",-1),K=["value"],Q=(0,s._)("option",{value:"Reader"},"Reader",-1),B=(0,s._)("option",{value:"Editor"},"Editor",-1),F=(0,s._)("option",{value:"Admin"},"Admin",-1),G=[Q,B,F],J=["value"],X={key:1},j=(0,s._)("td",null,[(0,s._)("select",{class:"form-select"},[(0,s._)("option",{value:"STATUS_CODE",selected:""},"Reader"),(0,s._)("option",{value:"JSON_BODY"},"Editor"),(0,s._)("option",{value:"HEADERS"},"Admin"),(0,s._)("option",{value:"TEXT_BODY"},"Text body")])],-1),L=(0,s._)("div",{class:"card-footer text-end"},[(0,s._)("button",{type:"submit",class:"btn btn-primary"},"Make request")],-1),W=["onSubmit"],$=(0,s._)("div",{class:"card-header"},[(0,s._)("h3",{class:"card-title"},"Add user")],-1),ee={class:"card-body"},le={class:"mb-3"},ae=(0,s._)("label",{class:"form-label required"},"User name",-1),se={class:"mb-3"},te=(0,s._)("label",{class:"form-label required"},"Email address",-1),re={class:"mb-3"},oe=(0,s._)("label",{class:"form-label required"},"Password",-1),de={class:"mb-3"},ie=(0,s._)("label",{class:"form-label"},"Select Reader or Editor ",-1),ce=(0,s._)("option",null,"Reader",-1),ne=(0,s._)("option",null,"Editor",-1),ue=(0,s._)("option",null,"Admin",-1),_e=[ce,ne,ue],ve={class:"card-footer text-end"};var pe={__name:"Personal",setup(e){const l=(0,r.oR)(),a=(0,s.Fl)((()=>l.getters.user)),i=(0,s.iH)(""),Q=(0,s.iH)(""),B=(0,s.iH)([]),F=(0,s.iH)(""),ce=(0,s.iH)(""),ne=((0,s.iH)(""),(0,s.iH)("")),ue=(0,s.iH)(""),pe=(0,s.iH)(""),me=(0,s.iH)(""),we=(0,s.iH)([]);(0,s.bv)((async()=>{await be(),await ke()}));const be=async()=>{try{let{data:e}=await t.Z.get("/api/users");B.value=e,console.log(B)}catch(e){}},ye=()=>{i.value===Q.value?t.Z.post("/api/users/edit-user/password",{newPassword:i.value}).then((e=>{console.log("password update successfully ")})).catch((e=>{console.log("failed to update password")})):alert("password not match")},he=async()=>{try{await t.Z["delete"]("/api/users/delete/user",{data:{email:F.value}}),await be(),F=null}catch(e){console.log("error deleting user:",e)}},ge=async()=>{try{await t.Z.put("/api/users/edit/role",{email:F.value,updatedUserRole:ce.value}),await be()}catch(e){console.log("error editor user role:",e)}},fe=async()=>{try{await t.Z.post("/api/users/register",{name:me.value,email:ne.value,password:ue.value,identity:pe.value}),await be()}catch(e){console.log("error add user ",e)}},ke=async()=>{try{let{data:e}=await t.Z.get("/api/accessQuests/all-requests",{params:{status:"PENDING"}});we.value=e,console.log(we.value)}catch(e){console.log("error get request list",e)}},qe=async e=>{try{await t.Z.put("/api/accessQuests/all-requests/"+e,{status:"APPROVED"})}catch(l){console.log("error approve request",l)}},De=async e=>{try{await t.Z.put("/api/accessQuests/all-requests/"+e,{status:"DENIED"})}catch(l){console.log("error approve request",l)}};return(e,l)=>((0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",o,[(0,s._)("div",null," personal page "+(0,s.zw)((0,s.SU)(a))+(0,s.zw)((0,s.SU)(a).email),1),(0,s._)("div",d,c,512),(0,s._)("div",n,[(0,s.Uk)(" password form "),(0,s._)("div",u,[(0,s._)("form",_,[(0,s._)("div",v,[p,(0,s._)("div",m,[(0,s._)("div",w,[(0,s._)("div",b,[y,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"new password","onUpdate:modelValue":l[0]||(l[0]=e=>i.value=e)},null,512),[[s.nr,i.value]])])]),(0,s._)("div",h,[(0,s._)("div",g,[f,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"confrim new password","onUpdate:modelValue":l[1]||(l[1]=e=>Q.value=e)},null,512),[[s.nr,Q.value]])])])])]),(0,s._)("div",k,[(0,s._)("button",{type:"submit",class:"btn btn-primary",onClick:l[2]||(l[2]=e=>ye())}," Change Password ")])])])]),(0,s._)("div",q,[(0,s._)("div",D,[U,(0,s._)("div",E,[(0,s._)("table",C,[H,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(we.value,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e._id},[(0,s._)("td",null,(0,s.zw)(e.userId.email),1),(0,s._)("td",R,(0,s.zw)(e.userId.cluster)+"&"+(0,s.zw)(e.userId.identity),1),(0,s._)("td",P,(0,s.zw)(e.userId.name)+"申请了解"+(0,s.zw)(e.partnerId.third_partner_name)+"的"+(0,s.zw)(e.requestedContactField)+"区域联系人信息 ",1),(0,s._)("td",S,[(0,s._)("button",{onClick:l=>qe(e._id)}," approve request ",8,x),(0,s._)("button",{onClick:l=>De(e._id)}," deny request ",8,z)]),A])))),128))])])])]),(0,s._)("div",V,[(0,s.Uk)(" user-settings "),(0,s._)("div",N,[Z,(0,s._)("div",I,[(0,s._)("div",T,[(0,s._)("table",M,[O,(0,s._)("tbody",null,[(0,s._)("tr",null,[(0,s._)("td",null,[(0,s.wy)((0,s._)("select",{class:"form-select","onUpdate:modelValue":l[3]||(l[3]=e=>F.value=e)},[Y,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(B.value,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e.id,value:e.email},(0,s.zw)(e.email),9,K)))),128))],512),[[s.bM,F.value]])]),(0,s._)("td",null,[(0,s.wy)((0,s._)("select",{class:"form-select","onUpdate:modelValue":l[4]||(l[4]=e=>ce.value=e)},G,512),[[s.bM,ce.value]])]),(0,s._)("td",null,[F.value&&ce.value?((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:ge}," change Role ")):(0,s.kq)("",!0)])]),(0,s._)("tr",null,[(0,s._)("td",null,[B.value.length>0?(0,s.wy)(((0,s.wg)(),(0,s.iD)("select",{key:0,"onUpdate:modelValue":l[5]||(l[5]=e=>F.value=e),class:"form-select"},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(B.value,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e.id,value:e.email},(0,s.zw)(e.email),9,J)))),128))],512)),[[s.bM,F.value]]):((0,s.wg)(),(0,s.iD)("div",X,"没有用户数据"))]),j,(0,s._)("td",null,[F.value?((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:he}," delete user ")):(0,s.kq)("",!0)])])])])])]),L])]),(0,s._)("form",{class:"card",onSubmit:(0,s.iM)(fe,["prevent"])},[$,(0,s._)("div",ee,[(0,s._)("div",le,[ae,(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"name",class:"form-control",placeholder:"Enter name","onUpdate:modelValue":l[6]||(l[6]=e=>me.value=e),required:""},null,512),[[s.nr,me.value]])])]),(0,s._)("div",se,[te,(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"email",class:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":l[7]||(l[7]=e=>ne.value=e),required:""},null,512),[[s.nr,ne.value]])])]),(0,s._)("div",re,[oe,(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":l[8]||(l[8]=e=>ue.value=e),required:""},null,512),[[s.nr,ue.value]])])]),(0,s._)("div",de,[ie,(0,s._)("div",null,[(0,s.wy)((0,s._)("select",{class:"form-select","onUpdate:modelValue":l[9]||(l[9]=e=>pe.value=e),required:""},_e,512),[[s.bM,pe.value]])])])]),(0,s._)("div",ve,[(0,s._)("button",{type:"submit",class:"btn btn-primary",onOnclick:fe}," Submit ",32)])],40,W)])]))}};const me=pe;var we=me}}]);
//# sourceMappingURL=965.32a896c2.js.map