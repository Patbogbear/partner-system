"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[791],{5791:function(a,e,s){s.r(e),s.d(e,{default:function(){return wa}});s(7658);var t=s(821),r=s(4465),_=s(3907),d=s(1120);const i=a=>((0,t.dD)("data-v-6afa47c4"),a=a(),(0,t.Cn)(),a),l={class:"body"},n={class:"content"},c={class:"first_part"},o={class:"first_left"},v={class:"header"},p={class:"partner_name"},u={class:"first_middle"},y={class:"first_middle_layout above"},h={class:"header"},b={class:"partner_type"},m={class:"header"},w={class:"partner_2b_or_2c"},f={class:"header"},g={class:"partner_tier"},k={class:"first_middle_layout middle_above"},z={class:"header_partner_score"},P={class:"body"},U={class:"header_first_time_cooperate"},C={class:"body"},H={class:"first_middle_layout middle_bottom"},S={class:"header_partner_location"},Z={class:"body"},O={class:"first_middle_layout bottom"},j={class:"header_partner_website"},A={class:"body"},D={href:""},q={class:"first_right"},x={class:"first_right_layout header_partner_scope"},I={class:"partner_scope"},E={class:"first_right_layout header_partner_poc"},F={class:"partner_poc"},R={class:"first_right_layout header_hz_tracking_process"},B={class:"body"},G={class:"body"},J={class:"first_right_layout header_demonds"},K={class:"demonds"},L={class:"second_part"},M={class:"second_layout header_marketing_data"},N=i((()=>(0,t._)("span",null," Partner 市场活动数据: ",-1))),Q={class:"marketing_data"},T={class:"second_layout header_transfer_data"},V=i((()=>(0,t._)("span",null,"Partner 转介绍数据:",-1))),W={class:"body"},X={class:"second_layout header_channel_categroy_activate_data"},Y=i((()=>(0,t._)("span",null," Partner 渠道类别活动数据:",-1))),$={class:"body"},aa={class:"third_part"},ea={class:"third_part_layout header_introduce"},sa=i((()=>(0,t._)("div",{class:"head"},"Partner 公司介绍:",-1))),ta={class:"body"},ra={class:"third_part_layout header_service_introduce"},_a=i((()=>(0,t._)("div",{class:"head"},"Partner 服务介绍:",-1))),da={class:"body"},ia={class:"third_part_layout header_advantage_features_introduce"},la=i((()=>(0,t._)("div",{class:"head"},"Partner 优势和特色介绍:",-1))),na={class:"body"},ca={class:"third_part_layout header_major_cliens_or_case"},oa=i((()=>(0,t._)("div",{class:"head"},"Partner 主要客户/成功案例:",-1))),va={class:"body"},pa={class:"edit"},ua={class:"dropdown"},ya=i((()=>(0,t._)("div",null,"Edit Partner",-1)));var ha={__name:"Single_Partner",props:{id:String},setup(a){const e=a,s=(0,_.oR)(),i=s.getters.user;(0,t.Fl)((()=>s.getters.user));const ha=(0,t.iH)({}),ba=a=>{r.Z["delete"]("/api/parties/delete/"+a).then((a=>{console.log(333),d.Z.push({path:"/partner-list"})}))},ma=async a=>{try{let{data:e}=await r.Z.get("/api/parties/"+a);ha.value=e}catch(e){console.log("error from API",e)}};return ma(e.id),(a,e)=>{const s=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("div",n,[(0,t._)("div",c,[(0,t._)("div",o,[(0,t._)("div",v,[(0,t._)("div",p,(0,t.zw)(ha.value.thrid_party_name),1)])]),(0,t._)("div",u,[(0,t._)("div",y,[(0,t._)("div",h,[(0,t._)("div",b,(0,t.zw)(ha.value.thrid_party_type),1)]),(0,t._)("div",m,[(0,t._)("div",w,(0,t.zw)(ha.value.b2b_or_b2c),1)]),(0,t._)("div",f,[(0,t._)("div",g,(0,t.zw)(ha.value.tier),1)])]),(0,t._)("div",k,[(0,t._)("div",z,[(0,t.Uk)(" 合作评分: "),(0,t._)("span",P,(0,t.zw)(ha.value.coorprate_score),1)]),(0,t._)("div",U,[(0,t.Uk)(" 首次合作: "),(0,t._)("span",C,(0,t.zw)(ha.value.first_time_cooperate),1)])]),(0,t._)("div",H,[(0,t._)("div",S,[(0,t.Uk)(" 所在地: "),(0,t._)("span",Z,(0,t.zw)(ha.value.party_location),1)])]),(0,t._)("div",O,[(0,t._)("div",j,[(0,t.Uk)(" Partner 网址: "),(0,t._)("span",A,[(0,t._)("a",D,(0,t.zw)(ha.value.website),1)])])])]),(0,t._)("div",q,[(0,t._)("div",x,[(0,t.Uk)(" Partner 服务覆盖范围: "),(0,t._)("span",I,(0,t.zw)(ha.value.party_scope),1)]),(0,t._)("div",E,[(0,t._)("span",F," HZ POC:"+(0,t.zw)(ha.value.POC_HZ)+" SH POC:"+(0,t.zw)(ha.value.POC_SH),1)]),(0,t._)("div",R,[(0,t.Uk)(" 跟进情况: "),(0,t._)("div",B,"杭州:"+(0,t.zw)(ha.value.HZ_tracking_process),1),(0,t._)("div",G,"上海:"+(0,t.zw)(ha.value.SH_tracking_process),1)]),(0,t._)("div",J,[(0,t.Uk)(" Partner 需求: "),(0,t._)("div",K,(0,t.zw)(ha.value.demonds),1)])])]),(0,t._)("div",L,[(0,t._)("div",M,[N,(0,t._)("span",Q,(0,t.zw)(ha.value.marketing_data),1)]),(0,t._)("div",T,[V,(0,t._)("span",W,(0,t.zw)(ha.value.transfer_data),1)]),(0,t._)("div",X,[Y,(0,t._)("span",$,(0,t.zw)(ha.value.channel_categroy_activate_data),1)])]),(0,t._)("div",aa,[(0,t._)("div",ea,[sa,(0,t._)("div",ta,(0,t.zw)(ha.value.introduce),1)]),(0,t._)("div",ra,[_a,(0,t._)("div",da,(0,t.zw)(ha.value.service_introduce),1)]),(0,t._)("div",ia,[la,(0,t._)("div",na,(0,t.zw)(ha.value.advantage_features_introduce),1)]),(0,t._)("div",ca,[oa,(0,t._)("div",va,(0,t.zw)(ha.value.major_cliens_or_case),1)])])]),(0,t._)("div",pa,[(0,t._)("div",ua,["Admin"==(0,t.SU)(i).identity?((0,t.wg)(),(0,t.iD)("button",{key:0,class:"btn btn-dark",style:{"--bs-btn-padding-y":"0.25rem","--bs-btn-padding-x":"0.5rem","--bs-btn-font-size":"0.75rem"},"data-bs-toggle":"dropdown",onClick:e[0]||(e[0]=a=>ba(ha.value._id))}," delete ")):(0,t.kq)("",!0),"Admin"==(0,t.SU)(i).identity?((0,t.wg)(),(0,t.j4)(s,{key:1,class:"btn btn-primary",style:{"--bs-btn-padding-y":"0.25rem","--bs-btn-padding-x":"0.5rem","--bs-btn-font-size":"0.75rem"},to:"/detials/"+ha.value._id},{default:(0,t.w5)((()=>[ya])),_:1},8,["to"])):(0,t.kq)("",!0)])])])}}},ba=s(3744);const ma=(0,ba.Z)(ha,[["__scopeId","data-v-6afa47c4"]]);var wa=ma}}]);
//# sourceMappingURL=791.b95e00c1.js.map