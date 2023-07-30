"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[965],{2965:function(t,o,e){e.r(o),e.d(o,{default:function(){return H}});var s=e(821),a=e(4465),l=e(3907);const n={class:"header"},i=(0,s._)("div",{class:"toast"},[(0,s._)("div",{class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true"},[(0,s._)("div",{class:"toast-header"},[(0,s._)("strong",{class:"mr-auto"},"Bootstrap"),(0,s._)("small",{class:"text-muted"},"just now"),(0,s._)("button",{type:"button",class:"ml-2 mb-1 close","data-dismiss":"toast","aria-label":"Close"},[(0,s._)("span",{"aria-hidden":"true"},"×")])]),(0,s._)("div",{class:"toast-body"},"See? Just like this.")])],-1),p={class:"change-password"},c={class:"col-12"},d={class:"card"},u={class:"card-body"},r=(0,s._)("h3",{class:"card-title"},"Change Password",-1),v={class:"row row-cards"},_={class:"col-sm-6 col-md-6"},E={class:"mb-3"},S=(0,s._)("label",{class:"form-label"},"Old Password",-1),m={class:"col-sm-6 col-md-6"},T={class:"mb-3"},y=(0,s._)("label",{class:"form-label"},"New Password",-1),A={class:"card-footer text-end"},h=(0,s.uE)('<div class="user-authentication"> user-settings <div class="card"><div class="card-header"><h3 class="card-title">user-authenticate</h3></div><div class="card-body"><div class="table-responsive"><table class="table mb-0"><thead><tr><th>Role</th><th>Property</th><th>Comparison</th><th>Target</th></tr></thead><tbody><tr><td><select class="form-select"><option value="STATUS_CODE" selected="">Role</option><option value="JSON_BODY">Admin</option><option value="HEADERS">Editor</option><option value="TEXT_BODY">contributor</option></select></td><td><input type="text" class="form-control"></td><td><select class="form-select"><option value="EQUALS" selected="">Equals</option><option value="NOT_EQUALS">Not equals</option><option value="HAS_KEY">Has key</option></select></td><td><input type="text" class="form-control" value="200"></td></tr><tr><td><select class="form-select"><option value="STATUS_CODE">Status code</option><option value="JSON_BODY" selected="">JSON body</option><option value="HEADERS">Headers</option><option value="TEXT_BODY">Text body</option><option value="RESPONSE_TIME">Response time</option></select></td><td><input type="text" class="form-control" value="parameters.alt.type"></td><td><select class="form-select"><option value="EQUALS">Equals</option><option value="NOT_EQUALS">Not equals</option><option value="HAS_KEY">Has key</option><option value="NOT_HAS_KEY">Not has key</option><option value="HAS_VALUE" selected="">Has value</option><option value="NOT_HAS_VALUE">Not has value</option><option value="IS_EMPTY">Is empty</option><option value="NOT_EMPTY">Is not empty</option><option value="GREATER_THAN">Greater than</option><option value="LESS_THAN">Less than</option></select></td><td><input type="text" class="form-control" value="string"></td></tr><tr><td><select class="form-select"><option value="STATUS_CODE">Status code</option><option value="JSON_BODY">JSON body</option><option value="HEADERS">Headers</option><option value="TEXT_BODY">Text body</option><option value="RESPONSE_TIME" selected=""> Response time </option></select></td><td><input type="text" class="form-control"></td><td><select class="form-select"><option value="EQUALS">Equals</option><option value="NOT_EQUALS">Not equals</option><option value="HAS_KEY">Has key</option><option value="NOT_HAS_KEY">Not has key</option><option value="HAS_VALUE">Has value</option><option value="NOT_HAS_VALUE">Not has value</option><option value="IS_EMPTY">Is empty</option><option value="NOT_EMPTY">Is not empty</option><option value="GREATER_THAN">Greater than</option><option value="LESS_THAN" selected="">Less than</option></select></td><td><input type="text" class="form-control" value="500"></td></tr><tr><td><select class="form-select"><option value="STATUS_CODE">Status code</option><option value="JSON_BODY">JSON body</option><option value="HEADERS" selected="">Headers</option><option value="TEXT_BODY">Text body</option><option value="RESPONSE_TIME">Response time</option></select></td><td><input type="text" class="form-control" value="content-type"></td><td><select class="form-select"><option value="EQUALS" selected="">Equals</option><option value="NOT_EQUALS">Not equals</option><option value="HAS_KEY">Has key</option><option value="NOT_HAS_KEY">Not has key</option><option value="HAS_VALUE">Has value</option><option value="NOT_HAS_VALUE">Not has value</option><option value="IS_EMPTY">Is empty</option><option value="NOT_EMPTY">Is not empty</option><option value="GREATER_THAN">Greater than</option><option value="LESS_THAN">Less than</option></select></td><td><input type="text" class="form-control" value="application/json; charset=UTF-8"></td></tr></tbody></table></div></div><div class="card-footer text-end"><button type="submit" class="btn btn-primary">Make request</button></div></div></div>',1);var N={__name:"Personal",setup(t){const o=(0,l.oR)(),e=(0,s.Fl)((()=>o.getters.user)),N=(0,s.iH)(""),b=(0,s.iH)(""),H=(0,s.iH)(!1),O=()=>{a.Z.post("/api/users/edit-user/password",{oldPassword:b.value,newPassword:N.value}).then((t=>{console.log("password update successfully "),H.value=!0})).catch((t=>{console.log("failed to update password")}))};return(t,o)=>((0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",n,[(0,s.Uk)(" personal page "+(0,s.zw)((0,s.SU)(e))+" ",1),i,(0,s._)("div",p,[(0,s.Uk)(" password form "),(0,s._)("div",c,[(0,s._)("form",d,[(0,s._)("div",u,[r,(0,s._)("div",v,[(0,s._)("div",_,[(0,s._)("div",E,[S,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"old","onUpdate:modelValue":o[0]||(o[0]=t=>b.value=t)},null,512),[[s.nr,b.value]])])]),(0,s._)("div",m,[(0,s._)("div",T,[y,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"new","onUpdate:modelValue":o[1]||(o[1]=t=>N.value=t)},null,512),[[s.nr,N.value]])])])])]),(0,s._)("div",A,[(0,s._)("button",{type:"submit",class:"btn btn-primary",onClick:o[2]||(o[2]=t=>O())}," Change Password ")])])])]),h])]))}};const b=N;var H=b}}]);
//# sourceMappingURL=965.03f525d3.js.map