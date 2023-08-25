"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[965],{2965:function(e,a,l){l.r(a),l.d(a,{default:function(){return He}});var t=l(821),s=l(4465),r=l(3907);const i={class:"header"},d={class:"row"},o={class:"col-xl-4"},n={class:"row"},c={class:"card"},u={class:"card-body text-center"},_=(0,t._)("div",{class:"mb-3"},[(0,t._)("span",{class:"avatar avatar-xl rounded"})],-1),v={class:"card-title mb-1"},p={class:"text-secondary"},m={class:"form-fieldset"},w=(0,t._)("div",{class:"card-header"},[(0,t._)("h3",{class:"card-title"},"Change Password")],-1),b={class:"mb-3"},y=(0,t._)("label",{class:"form-label"},"New Password",-1),h={class:"mb-3"},g=(0,t._)("label",{class:"form-label"},"Confrim New Password",-1),k={class:"card-footer text-end"},f=["onSubmit"],q={class:"form-fieldset"},D=(0,t._)("div",{class:"card-header"},[(0,t._)("h3",{class:"card-title"},"Add user")],-1),U={class:"card-body"},x={class:"mb-3"},R=(0,t._)("label",{class:"form-label required"},"User name",-1),S={class:"mb-3"},E=(0,t._)("label",{class:"form-label required"},"Email address",-1),A={class:"mb-3"},C=(0,t._)("label",{class:"form-label required"},"Password",-1),H={class:"mb-3"},P=(0,t._)("label",{class:"form-label"},"Select Reader or Editor ",-1),z=(0,t._)("option",null,"Reader",-1),V=(0,t._)("option",null,"Editor",-1),N=(0,t._)("option",null,"Admin",-1),I=[z,V,N],T={class:"card-footer text-end"},Z=(0,t._)("div",{class:"card-footer text-end"},null,-1),O={key:0,class:"col-xl-8"},M={class:"card"},Y=(0,t._)("div",{class:"card-header"},[(0,t._)("h3",{class:"card-title"},"Recently Requests")],-1),F={class:"card-table table-responsive"},K={class:"table table-vcenter"},Q=(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Request User Name"),(0,t._)("th",null,"Request User Cluster & Title"),(0,t._)("th",null,"Request Data Description"),(0,t._)("th",{colspan:"2"},"Actions")])],-1),B={class:"text-secondary"},G={class:"text-secondary"},J={class:"text-secondary"},L=["onClick"],X=["onClick"],$=(0,t._)("td",{class:"text-end w-1"},[(0,t._)("div",{class:"chart-sparkline chart-sparkline-sm",id:"sparkline-bounce-rate-1"})],-1),j={key:1,class:"col-xl-8"},W={class:"card"},ee=(0,t._)("div",{class:"card-header"},[(0,t._)("h3",{class:"card-title"},"Requests Feedback")],-1),ae={class:"card-table table-responsive"},le={class:"table table-vcenter"},te=(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Request Partner Name"),(0,t._)("th",null,"Request Time "),(0,t._)("th",null,"Request Partner Description"),(0,t._)("th",{colspan:"2"},"Actions")])],-1),se={class:"text-secondary"},re={class:"text-secondary"},ie={class:"text-secondary"},de={key:0},oe={key:1},ne=(0,t._)("td",{class:"text-end w-1"},[(0,t._)("div",{class:"chart-sparkline chart-sparkline-sm",id:"sparkline-bounce-rate-1"})],-1),ce={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"passwordToast"},ue=(0,t.uE)('<div class="toast-header"><strong class="mr-auto">Notification</strong><button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true"></span></button></div><div class="toast-body">Password updated successfully!</div>',2),_e=[ue],ve={key:0,class:"user-authentication"},pe={class:"card"},me=(0,t._)("div",{class:"card-header"},[(0,t._)("h3",{class:"card-title"},"user-authenticate")],-1),we={class:"card-body"},be={class:"table-responsive"},ye={class:"table mb-0"},he=(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"User"),(0,t._)("th",null,"Role"),(0,t._)("th",null,"Action")])],-1),ge=(0,t._)("option",{value:"",disabled:""},"Select User",-1),ke=["value"],fe=(0,t._)("option",{value:"Reader"},"Reader",-1),qe=(0,t._)("option",{value:"Editor"},"Editor",-1),De=(0,t._)("option",{value:"Admin"},"Admin",-1),Ue=[fe,qe,De],xe=["value"],Re={key:1},Se=(0,t._)("td",null,[(0,t._)("select",{class:"form-select"},[(0,t._)("option",{value:"STATUS_CODE",selected:""},"Reader"),(0,t._)("option",{value:"JSON_BODY"},"Editor"),(0,t._)("option",{value:"HEADERS"},"Admin"),(0,t._)("option",{value:"TEXT_BODY"},"Text body")])],-1),Ee=(0,t._)("div",{class:"card-footer text-end"},[(0,t._)("button",{type:"submit",class:"btn btn-primary"},"Make request")],-1);var Ae={__name:"Personal",setup(e){const a=(0,r.oR)(),l=(0,t.Fl)((()=>a.getters.user)),z=(0,t.iH)(""),V=(0,t.iH)(""),N=(0,t.iH)([]),ue=(0,t.iH)(""),fe=(0,t.iH)(""),qe=((0,t.iH)(""),(0,t.iH)("")),De=(0,t.iH)(""),Ae=(0,t.iH)(""),Ce=(0,t.iH)(""),He=(0,t.iH)([]);(0,t.bv)((async()=>{await Pe(),await Te(l)}));const Pe=async()=>{try{let{data:e}=await s.Z.get("/api/users");N.value=e}catch(e){}},ze=()=>{z.value===V.value?s.Z.post("/api/users/edit-user/password",{newPassword:z.value}).then((e=>{console.log("password update successfully ")})).catch((e=>{console.log("failed to update password")})):alert("password not match")},Ve=async()=>{try{await s.Z["delete"]("/api/users/delete/user",{data:{email:ue.value}}),await Pe(),ue=null}catch(e){console.log("error deleting user:",e)}},Ne=async()=>{try{await s.Z.put("/api/users/edit/role",{email:ue.value,updatedUserRole:fe.value}),await Pe()}catch(e){console.log("error editor user role:",e)}},Ie=async()=>{try{await s.Z.post("/api/users/register",{name:Ce.value,email:qe.value,password:De.value,identity:Ae.value}),await Pe()}catch(e){console.log("error add user ",e)}},Te=async e=>{try{if(console.log(e),"Super-Admin"===e.value.identity){console.log(111);let{data:e}=await s.Z.get("/api/accessQuests/all-requests",{params:{status:"PENDING"}});He.value=e}else if("Sales"===e.value.identity||"Team-Leader"===e.value.identity){let{data:a}=await s.Z.get(`/api/accessQuests/user-requests/${e.value.id}`);console.log(111),He.value=a}console.log(He.value)}catch(a){console.log("error get request list",a)}},Ze=async e=>{try{await s.Z.put("/api/accessQuests/all-requests/"+e,{status:"APPROVED"})}catch(a){console.log("error approve request",a)}},Oe=async e=>{try{await s.Z.put("/api/accessQuests/all-requests/"+e,{status:"DENIED"})}catch(a){console.log("error approve request",a)}};return(e,a)=>((0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",i,[(0,t._)("div",d,[(0,t._)("div",o,[(0,t._)("div",n,[(0,t._)("div",c,[(0,t._)("div",u,[_,(0,t._)("div",v,(0,t.zw)((0,t.SU)(l).name),1),(0,t._)("div",p,(0,t.zw)((0,t.SU)(l).identity),1)])])]),(0,t._)("form",null,[(0,t._)("fieldset",m,[w,(0,t._)("div",b,[y,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",placeholder:"new password","onUpdate:modelValue":a[0]||(a[0]=e=>z.value=e)},null,512),[[t.nr,z.value]])]),(0,t._)("div",h,[g,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",placeholder:"confrim new password","onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e)},null,512),[[t.nr,V.value]])])]),(0,t._)("div",k,[(0,t._)("button",{type:"submit",class:"btn btn-primary",onClick:a[2]||(a[2]=e=>ze())}," Change Password ")])]),"Super-Admin"===(0,t.SU)(l).identity?((0,t.wg)(),(0,t.iD)("form",{key:0,onSubmit:(0,t.iM)(Ie,["prevent"])},[(0,t._)("fieldset",q,[D,(0,t._)("div",U,[(0,t._)("div",x,[R,(0,t._)("div",null,[(0,t.wy)((0,t._)("input",{type:"name",class:"form-control",placeholder:"Enter name","onUpdate:modelValue":a[3]||(a[3]=e=>Ce.value=e),required:""},null,512),[[t.nr,Ce.value]])])]),(0,t._)("div",S,[E,(0,t._)("div",null,[(0,t.wy)((0,t._)("input",{type:"email",class:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":a[4]||(a[4]=e=>qe.value=e),required:""},null,512),[[t.nr,qe.value]])])]),(0,t._)("div",A,[C,(0,t._)("div",null,[(0,t.wy)((0,t._)("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":a[5]||(a[5]=e=>De.value=e),required:""},null,512),[[t.nr,De.value]])])]),(0,t._)("div",H,[P,(0,t._)("div",null,[(0,t.wy)((0,t._)("select",{class:"form-select","onUpdate:modelValue":a[6]||(a[6]=e=>Ae.value=e),required:""},I,512),[[t.bM,Ae.value]])])])]),(0,t._)("div",T,[(0,t._)("button",{type:"submit",class:"btn btn-primary",onOnclick:Ie}," Submit ",32)])]),Z],40,f)):(0,t.kq)("",!0)]),"Super-Admin"===(0,t.SU)(l).identity?((0,t.wg)(),(0,t.iD)("div",O,[(0,t._)("div",M,[Y,(0,t._)("div",F,[(0,t._)("table",K,[Q,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(He.value,(e=>((0,t.wg)(),(0,t.iD)("tr",{key:e._id},[(0,t._)("td",null,(0,t.zw)(e.userId.email),1),(0,t._)("td",B,(0,t.zw)(e.userId.cluster)+"&"+(0,t.zw)(e.userId.identity),1),(0,t._)("td",G,(0,t.zw)(e.userId.name)+"申请了解"+(0,t.zw)(e.partnerId.third_partner_name)+"的"+(0,t.zw)(e.requestedContactField)+"区域联系人信息 ",1),(0,t._)("td",J,[(0,t._)("button",{onClick:a=>Ze(e._id)}," approve request ",8,L),(0,t._)("button",{onClick:a=>Oe(e._id)}," deny request ",8,X)]),$])))),128))])])])])):(0,t.kq)("",!0),"Sales"===(0,t.SU)(l).identity?((0,t.wg)(),(0,t.iD)("div",j,[(0,t._)("div",W,[ee,(0,t._)("div",ae,[(0,t._)("table",le,[te,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(He.value,(e=>((0,t.wg)(),(0,t.iD)("tr",{key:e._id},[(0,t._)("td",null,(0,t.zw)(e.partnerId.third_partner_name),1),(0,t._)("td",se,(0,t.zw)(e.requestedAt),1),(0,t._)("td",re," 您申请了解的"+(0,t.zw)(e.requestedContactField)+"的区域联系人信息，目前已被"+(0,t.zw)(e.status),1),(0,t._)("td",ie,["DENIED"===e.status?((0,t.wg)(),(0,t.iD)("button",de," delete request ")):(0,t.kq)("",!0),"APPROVED"===e.status?((0,t.wg)(),(0,t.iD)("button",oe," view detail ")):(0,t.kq)("",!0)]),ne])))),128))])])])])):(0,t.kq)("",!0)]),(0,t._)("div",ce,_e,512),"Super-Admin"===(0,t.SU)(l).identity?((0,t.wg)(),(0,t.iD)("div",ve,[(0,t.Uk)(" user-settings "),(0,t._)("div",pe,[me,(0,t._)("div",we,[(0,t._)("div",be,[(0,t._)("table",ye,[he,(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t.wy)((0,t._)("select",{class:"form-select","onUpdate:modelValue":a[7]||(a[7]=e=>ue.value=e)},[ge,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(N.value,(e=>((0,t.wg)(),(0,t.iD)("option",{key:e.id,value:e.email},(0,t.zw)(e.email),9,ke)))),128))],512),[[t.bM,ue.value]])]),(0,t._)("td",null,[(0,t.wy)((0,t._)("select",{class:"form-select","onUpdate:modelValue":a[8]||(a[8]=e=>fe.value=e)},Ue,512),[[t.bM,fe.value]])]),(0,t._)("td",null,[ue.value&&fe.value?((0,t.wg)(),(0,t.iD)("button",{key:0,onClick:Ne}," change Role ")):(0,t.kq)("",!0)])]),(0,t._)("tr",null,[(0,t._)("td",null,[N.value.length>0?(0,t.wy)(((0,t.wg)(),(0,t.iD)("select",{key:0,"onUpdate:modelValue":a[9]||(a[9]=e=>ue.value=e),class:"form-select"},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(N.value,(e=>((0,t.wg)(),(0,t.iD)("option",{key:e.id,value:e.email},(0,t.zw)(e.email),9,xe)))),128))],512)),[[t.bM,ue.value]]):((0,t.wg)(),(0,t.iD)("div",Re,"没有用户数据"))]),Se,(0,t._)("td",null,[ue.value?((0,t.wg)(),(0,t.iD)("button",{key:0,onClick:Ve}," delete user ")):(0,t.kq)("",!0)])])])])])]),Ee])])):(0,t.kq)("",!0)])]))}};const Ce=Ae;var He=Ce}}]);
//# sourceMappingURL=965.934bfb4f.js.map