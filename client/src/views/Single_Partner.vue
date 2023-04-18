<template>
  <div>
     <div class="header">
       Partner 类型:
       <span class="body">
         {{partner.thrid_party_type}}
       </span>
     </div>
    <div class="header">
      Partner 名称:
      <span class="body">
        {{ partner.thrid_party_name }}
      </span>
    </div>
    <div class="header">
      Partner 2B或2C:
      <span class="body">
        {{ partner.b2b_or_b2c }}
      </span>
    </div>
    <div class="header">
      Partner 所在地:
      <span class="body">
        {{ partner.party_location }}
      </span>
    </div>
    <div class="header">
      Partner 服务覆盖范围:
      <span class="body">
        {{ partner.party_scope }}
      </span>
    </div>
    <div class="header">
      Partner 公司介绍:
      <span class="body">
        {{ partner.introduce }}
      </span>
    </div>
    <div class="header">
      Partner 服务介绍:
      <span class="body">
        {{ partner.service_introduce }}
      </span>
    </div>
    <div class="header">
      Partner 优势和特色介绍:
      <span class="body">
        {{ partner.advantage_features_introduce }}
      </span>
    </div>
    <div class="header">
      Partner 主要客户/成功案例:
      <span class="body">
        {{ partner.major_cliens_or_case }}
      </span>
    </div>
    <div class="header">
      Partner 网址:
      <span class="body">
        {{ partner.website }}
      </span>
    </div>
    <div class="header">
      Partner A1/A2/B1/B2:
      <span class="body">
        {{ partner.tier }}
      </span>
    </div>
    <div class="header">
      Partner 是否第一次合作:
      <span class="body">
        {{ partner.first_time_cooperate }}
      </span>
    </div>
    <div class="header">
      Partner 市场活动数据:
      <span class="body">
        {{ partner.marketing_data }}
      </span>
    </div>
    <div class="header">
      Partner 转介绍数据:
      <span class="body">
        {{ partner.transfer_data }}
      </span>
    </div>
    <div class="header">
      Partner 渠道类别活动数据:
      <span class="body">
        {{ partner.channel_categroy_activate_data }}
      </span>
    </div>
    <div class="header">
      Partner 合作评分:
      <span class="body">
        {{ partner.coorprate_score }}
      </span>
    </div>
    <div class="header">
      Partner POC:
      <span class="body">
        {{ partner.party_location }}
      </span>
    </div>
    <div class="header">
      Partner 跟进情况:
      <span class="body">
        {{ partner.party_location }}
      </span>
    </div>
    <div class="header">
      Partner 需求:
      <span class="body">
        {{ partner.demonds }}
      </span>
    </div>

    
    
  </div>
</template>

<script setup>
import axios from "../http";
import { ref, onMounted, defineProps } from "vue";

const props = defineProps({
  id: String,
});

const partner = ref({});

const getDetail = async (id) => {
  try {
    let { data } = await axios.get("/api/parties/" + id);
    partner.value = data;
  } catch (error) {
    console.log("error from API", error);
  }
};
getDetail(props.id);
</script>

<style scoped>
.header{
 
}
.body{
  
}
</style>