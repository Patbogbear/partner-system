"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[213],{3213:function(t,e,a){a.r(e),a.d(e,{default:function(){return D}});var o=a(821);const l={class:"home"},s={class:"navbar navbar-expand-lg bg-body-tertiary"},n={class:"container-fluid"},r=(0,o._)("a",{class:"navbar-brand",href:"#"},"Navbar",-1),c=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d={class:"navbar-nav me-auto mb-2 mb-lg-0"},p={class:"nav-item"},u={class:"d-flex",role:"search"},_=(0,o._)("button",{class:"btn btn-outline-success",type:"submit"}," Search ",-1),b={class:"table table-bordered table-hover"},h=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{scope:"col"},"服务商类型"),(0,o._)("th",{scope:"col"},"服务商名称"),(0,o._)("th",{scope:"col"},"2B/2C"),(0,o._)("th",{scope:"col"},"公司所在地"),(0,o._)("th",{scope:"col"},"服务覆盖范围"),(0,o._)("th",{scope:"col"},"主要客户/成功案例"),(0,o._)("th",{scope:"col"},"网址"),(0,o._)("th",{scope:"col"},"A1/A2/B1/B2"),(0,o._)("th",{scope:"col"},"是否第一次合作"),(0,o._)("th",{scope:"col"},"合作评分"),(0,o._)("th",{scope:"col"},"POC-HZ"),(0,o._)("th",{scope:"col"},"POC-SH"),(0,o._)("th",null,"编辑")])],-1),g={key:0},m={scope:"row"},f=(0,o._)("button",{class:"btn btn-primary",style:{"--bs-btn-padding-y":"0.25rem","--bs-btn-padding-x":"0.5rem","--bs-btn-font-size":"0.75rem"}}," detials ",-1),v={class:"dropdown"},w=["onClick"];function y(t,e,a,y,k,C){const z=(0,o.up)("alert"),x=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("nav",s,[(0,o._)("div",n,[r,c,(0,o._)("div",i,[(0,o._)("ul",d,[(0,o._)("li",p,[(0,o._)("a",{class:"nav-link active","aria-current":"page",onClick:e[0]||(e[0]=t=>C.goto_add())},"Add New")])]),(0,o._)("form",u,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>k.filterInput=t),class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"},null,512),[[o.nr,k.filterInput]]),_]),(0,o._)("button",{class:"btn btn-outline-success",onClick:e[2]||(e[2]=t=>C.exportToCSV())}," export "),(0,o._)("div",{onClick:e[3]||(e[3]=t=>C.logOut())},"logout")])])]),t.alert?((0,o.wg)(),(0,o.j4)(z,{key:0,message:t.alert},null,8,["message"])):(0,o.kq)("",!0),(0,o._)("table",b,[h,C.user?((0,o.wg)(),(0,o.iD)("tbody",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(C.filteredData(k.parties,k.filterInput),(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t._id},[(0,o._)("th",m,(0,o.zw)(t.thrid_party_type),1),(0,o._)("td",null,(0,o.zw)(t.thrid_party_name),1),(0,o._)("td",null,(0,o.zw)(t.b2b_or_b2c),1),(0,o._)("td",null,(0,o.zw)(t.party_location),1),(0,o._)("td",null,(0,o.zw)(t.party_scope),1),(0,o._)("td",null,(0,o.zw)(t.major_cliens_or_case),1),(0,o._)("td",null,(0,o.zw)(t.website),1),(0,o._)("td",null,(0,o.zw)(t.tier),1),(0,o._)("td",null,(0,o.zw)(t.first_time_cooperate),1),(0,o._)("td",null,(0,o.zw)(t.coorprate_score),1),(0,o._)("td",null,(0,o.zw)(t.POC_HZ),1),(0,o._)("td",null,(0,o.zw)(t.POC_SH),1),(0,o._)("td",null,["Admin"==C.user.identity?((0,o.wg)(),(0,o.j4)(x,{key:0,class:"single-partner",to:"/single-partner/"+t._id},{default:(0,o.w5)((()=>[f])),_:2},1032,["to"])):(0,o.kq)("",!0),(0,o._)("div",v,["Admin"==C.user.identity?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"btn btn-dark",style:{"--bs-btn-padding-y":"0.25rem","--bs-btn-padding-x":"0.5rem","--bs-btn-font-size":"0.75rem"},"data-bs-toggle":"dropdown",onClick:e=>C.deleteData(t._id)}," delete ",8,w)):(0,o.kq)("",!0)])])])))),128))])):(0,o.kq)("",!0)])])}a(7658);var k=a(4465),C={name:"index",components:{},data(){return{parties:[],filterInput:[]}},computed:{user(){return console.log(this.$store.getters.user),this.$store.getters.user}},created(){this.getData()},methods:{filterBy(t,e){return t.filter((t=>t.thrid_party_name.match(e)))},filteredData(t,e){const a=new RegExp(e,"i");return t.filter((t=>Object.values(t).some((t=>"string"===typeof t&&a.test(t)))))},getData(){k.Z.get("api/parties").then((t=>{this.parties=t.data,console.log(this.parties)})).catch((t=>console.log(t)))},deleteData(t){k.Z["delete"]("api/parties/delete/"+t).then((t=>{console.log(333),this.getData()}))},exportToCSV(){if(0===this.parties.length)return void console.log("No data available for export.");const t=[],e=Object.keys(this.parties[0]);t.push(e.join(","));for(const n of this.parties){const a=[];for(const t of e){const e=void 0!==n[t]?n[t]:"";a.push(e)}t.push(a.join(","))}const a=t.join("\n"),o=new Blob([a],{type:"text/csv;charset=utf-8;"}),l=document.createElement("a"),s=URL.createObjectURL(o);l.href=s,l.download="data.csv",l.click(),URL.revokeObjectURL(s)},logOut(){localStorage.removeItem("userToken"),this.$store.dispatch("clearCurrentState"),this.$router.push({path:"/login"})},goto_add(){this.$router.push({path:"/add"})}}},z=a(3744);const x=(0,z.Z)(C,[["render",y]]);var D=x}}]);
//# sourceMappingURL=213.995af6d7.js.map