"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[624],{2624:function(t,a,e){e.r(a),e.d(a,{default:function(){return f}});var n=e(821);const r={class:"update"},s=(0,n._)("h1",null,"This is an update page",-1),c={class:"page-body"},i={class:"container-xl"},_={class:"row row-cards"},o={class:"col-12"},p=(0,n._)("div",{class:"card-header"},[(0,n._)("h4",{class:"card-title"},"update Partner")],-1),d={class:"card-footer text-end"},l={class:"d-flex"},h=(0,n._)("button",{type:"submit",class:"btn btn-primary ms-auto"}," Send data ",-1);function u(t,a,e,u,m,g){return(0,n.wg)(),(0,n.iD)("div",r,[s,(0,n._)("div",c,[(0,n._)("div",i,[(0,n._)("div",_,[(0,n._)("div",o,[(0,n._)("form",{method:"post",class:"card",onSubmit:a[1]||(a[1]=(0,n.iM)((t=>g.updateData()),["prevent"]))},[p,(0,n.Uk)(" "+(0,n.zw)(m.partner)+" ",1),(0,n._)("div",d,[(0,n._)("div",l,[(0,n._)("a",{href:"#",class:"btn btn-link",onClick:a[0]||(a[0]=t=>g.jumpBack())},"Cancel"),h])])],32)])])])])])}e(7658);var m=e(4465),g={created(){this.getDetail()},data(){return{partner:{cluster:"",thrid_partner_type:"",thrid_partner_name:"",b2b_or_b2c:"",partner_location:"",partner_scope:"",introduce:"",major_cliens_or_case:"",website:"",sh_tier:"",hz_tier:"",bj_tier:"",SH:{channel_contact_information:"",channel_contact:"",channel_contact_position:""},HZ:{channel_contact:"",channel_contact_position:"",channel_contact_information:""},BJ:{channel_contact:"",channel_contact_position:"",channel_contact_information:""},vertical:"",POC_HZ:"",POC_SH:"",POC_BJ:"",HZ_tracking_process:"",HZ_tracking_process_segment:"",SH_tracking_process:"",SH_tracking_process_segment:"",BJ_tracking_process:"",BJ_tracking_process_segment:"",hz_marketing_data:"",sh_marketing_data:"",bj_marketing_data:"",hz_transfer_data:"",sh_transfer_data:"",bj_transfer_data:""}}},methods:{getDetail(){m.Z.get("/api/partners/"+this.$route.params.id).then((t=>{this.partner=t.data}))},updateData(){console.log(this.partner),m.Z.post("/api/partners/edit/"+this.$route.params.id,this.partner).then((t=>{this.$router.push({path:"/"})}))},jumpBack(){this.$router.push({path:"/"})}}},k=e(3744);const b=(0,k.Z)(g,[["render",u]]);var f=b}}]);
//# sourceMappingURL=624.47b6f81e.js.map