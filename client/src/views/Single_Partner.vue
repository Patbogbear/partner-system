<template>
  <div class="body">
    <div class="content">
      <div class="first_part">
        <div class="first_left">
          <div class="header">
            <div class="partner_name">
              {{ partner.thrid_party_name }}
            </div>
          </div>
        </div>
        <div class="first_middle">
          <div class="first_middle_layout above">
            <div class="header">
              <div class="partner_type">
                {{ partner.thrid_party_type }}
              </div>
            </div>
            <div class="header">
              <div class="partner_2b_or_2c">
                {{ partner.b2b_or_b2c }}
              </div>
            </div>
            <div class="header">
              <div class="partner_tier">
                {{ partner.tier }}
              </div>
            </div>
          </div>
          <div class="first_middle_layout middle_above">
            <div class="header_partner_score">
              合作评分:
              <span class="body">
                {{ partner.coorprate_score }}
              </span>
            </div>
            <div class="header_first_time_cooperate">
              首次合作:
              <span class="body">
                {{ partner.first_time_cooperate }}
              </span>
            </div>
          </div>
          <div class="first_middle_layout middle_bottom">
            <div class="header_partner_location">
              所在地:
              <span class="body">
                {{ partner.party_location }}
              </span>
            </div>
          </div>
          <div class="first_middle_layout bottom">
            <div class="header_partner_website">
              Partner 网址:
              <span class="body">
                <a href="">{{ partner.website }}</a>
              </span>
            </div>
          </div>
        </div>
        <div class="first_right">
          <div class="first_right_layout header_partner_scope">
            Partner 服务覆盖范围:
            <span class="partner_scope">
              {{ partner.party_scope }}
            </span>
          </div>
          <div class="first_right_layout header_partner_poc">
            <span class="partner_poc">
              HZ POC:{{ partner.POC_HZ }} SH POC:{{ partner.POC_SH }}
            </span>
          </div>
          <div class="first_right_layout header_hz_tracking_process">
            跟进情况:
            <div class="body">杭州:{{ partner.HZ_tracking_process }}</div>
            <div class="body">上海:{{ partner.SH_tracking_process }}</div>
          </div>
          <div class="first_right_layout header_demonds">
            Partner 需求:
            <div class="demonds">
              {{ partner.demonds }}
            </div>
          </div>
        </div>
      </div>
      <div class="second_part">
        <div class="second_layout header_marketing_data">
          <span> Partner 市场活动数据: </span>
          <span class="marketing_data">
            {{ partner.marketing_data }}
          </span>
        </div>
        <div class="second_layout header_transfer_data">
          <span>Partner 转介绍数据:</span>

          <span class="body">
            {{ partner.transfer_data }}
          </span>
        </div>
        <div class="second_layout header_channel_categroy_activate_data">
          <span> Partner 渠道类别活动数据:</span>
          <span class="body">
            {{ partner.channel_categroy_activate_data }}
          </span>
        </div>
      </div>
      <div class="third_part">
        <div class="third_part_layout header_introduce">
          <div class="head">Partner 公司介绍:</div>
          <div class="body">
            {{ partner.introduce }}
          </div>
        </div>
        <div class="third_part_layout header_service_introduce">
          <div class="head">Partner 服务介绍:</div>
          <div class="body">
            {{ partner.service_introduce }}
          </div>
        </div>
        <div class="third_part_layout header_advantage_features_introduce">
          <div class="head">Partner 优势和特色介绍:</div>
          <div class="body">
            {{ partner.advantage_features_introduce }}
          </div>
        </div>
        <div class="third_part_layout header_major_cliens_or_case">
          <div class="head">Partner 主要客户/成功案例:</div>
          <div class="body">
            {{ partner.major_cliens_or_case }}
          </div>
        </div>
      </div>
    </div>
    <div class="edit">
      <div class="dropdown">
        <button
          class="btn btn-dark"
          style="
            --bs-btn-padding-y: 0.25rem;
            --bs-btn-padding-x: 0.5rem;
            --bs-btn-font-size: 0.75rem;
          "
          data-bs-toggle="dropdown"
          @click="deleteData(partner._id)"
          v-if="userIdentity.identity == 'Admin'"
        >
          delete
        </button>
        <router-link
          v-if="userIdentity.identity == 'Admin'"
          class="btn btn-primary"
          style="
            --bs-btn-padding-y: 0.25rem;
            --bs-btn-padding-x: 0.5rem;
            --bs-btn-font-size: 0.75rem;
          "
          :to="'/detials/' + partner._id"
        >
          <div>Edit Partner</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "../http";
import { ref, onMounted, defineProps, computed } from "vue";
import { useStore } from "vuex";
import router from "../router";
const store = useStore();
const userIdentity = store.getters.user;

computed(() => {
  return store.getters.user;
});

const props = defineProps({
  id: String,
});

const partner = ref({});

const deleteData = (value) => {
  axios.delete("/api/parties/delete/" + value).then((res) => {
    console.log(333);
    router.push({ path: "/partner-list" });
  });
};

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
.body {
  font-family: "Inter";
  font-style: normal;
  padding-left: 50px;
  padding-right: 50px;
}
.first_part {
  margin-top: 50px;
  height: 185px;
  left: calc(50% - 817px / 2 + 91.5px);
  top: 210px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1px 4px 4px 1px;
  display: flex;
}
.first_part .first_left {
  flex: 0.3;
  background: #0d6efd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
  border-radius: 4px 0px 0px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.first_part .first_left .header {
  font-weight: 700;
  font-size: 32px;
  /* identical to box height */
  color: #ffffff;
}
.first_part .first_middle {
  flex: 0.5;
  margin-left: 30px;
}
.first_part .first_middle .first_middle_layout {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 15px;
}

.first_part .first_middle .above .header {
  color: #0d6efd;
  border: 1px solid #0d6efd;
  margin: 5px;
  padding: 2px;
}
.first_part .first_right .first_right_layout {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 15px;
}

.second_part {
  height: 210px;
  left: calc(50% - 817px / 2 + 91.5px);
  margin-top: 50px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
}
.second_part .second_layout {
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
}
.second_part .second_layout span {
  flex: 0.3;
  justify-content: left;
}
.third_part {
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
}
.third_part .third_part_layout {
  background: #ffffff;
  box-shadow: 0px 2px 6px 4px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  width: 239px;
  height: 249px;
  margin: 10px;
  flex:0.25;
}
.third_part .third_part_layout .head {
  margin-top: 5px;
  font-weight: 700;
  font-size: 20px;
}
.third_part .third_part_layout .body {
  margin-top: 5px;
  font-weight: 400;
  font-size: 14px;
}
</style>
