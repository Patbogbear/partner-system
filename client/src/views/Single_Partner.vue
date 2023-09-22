<template>
  <div class="body">
    <div class="row row-cards outer-div">
      <div class="col-md-6 col-xl-3">
        <div class="row row-cards">
          <div class="card card-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span class="bg-primary text-white avatar"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M12 21l0 .01" />
                      <path d="M3 9l0 .01" />
                      <path d="M21 9l0 .01" />
                      <path d="M8 20.1a9 9 0 0 1 -5 -7.1" />
                      <path d="M16 20.1a9 9 0 0 0 5 -7.1" />
                      <path d="M6.2 5a9 9 0 0 1 11.4 0" />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">服务商类型</div>
                  <div>
                    {{ partner.third_partner_type }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span class="bg-light text-white avatar"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#0b6efd"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                      <path d="M8 9h1l3 3l3 -3h1"></path>
                      <line x1="8" y1="15" x2="10" y2="15"></line>
                      <line x1="14" y1="15" x2="16" y2="15"></line>
                      <line x1="9" y1="9" x2="9" y2="15"></line>
                      <line x1="15" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">服务商名称</div>
                  <div>
                    {{ partner.third_partner_name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span
                    class="text-white avatar"
                    style="background-color: #79dfc1"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="9.5" cy="9.5" r="6.5"></circle>
                      <rect x="10" y="10" width="11" height="11" rx="2"></rect>
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">2B/2C</div>
                  <div>{{ partner.b2b_or_b2c }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-3">
        <div class="row row-cards">
          <div class="card card-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span
                    class="text-white avatar"
                    style="background-color: #198754"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/current-location -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="12" r="3" />
                      <circle cx="12" cy="12" r="8" />
                      <line x1="12" y1="2" x2="12" y2="4" />
                      <line x1="12" y1="20" x2="12" y2="22" />
                      <line x1="20" y1="12" x2="22" y2="12" />
                      <line x1="2" y1="12" x2="4" y2="12" />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">所在地</div>
                  <div>
                    {{ partner.partner_location }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span class="bg-light text-white avatar"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/flag -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#198754"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="#198754" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="5" x2="5" y2="21" />
                      <line x1="19" y1="5" x2="19" y2="14" />
                      <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
                      <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">服务覆盖范围</div>
                  <div>{{ partner.partner_scope }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span
                    class="text-white avatar"
                    style="background-color: #e35d6a"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/location -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"
                      />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">重点覆盖城市</div>
                  <div>
                    {{ partner.coverage_province }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-3">
        <div class="row row-cards">
          <div class="card card-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span
                    class="text-white avatar"
                    style="background-color: #fd7e14"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/letter-case-upper -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
                      <path d="M3 13h7" />
                      <path d="M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
                      <path d="M14 13h7" />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">主要客户/成功案例</div>
                  <div>
                    {{ partner.major_clients_or_case }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span
                    class="text-white avatar"
                    style="background-color: #f1aeb5"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/link -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#dc3545"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="#dc3545" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"
                      />
                      <path
                        d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"
                      />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">网址</div>
                  <div>{{ partner.website }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span
                    class="text-white avatar"
                    style="background-color: #1b8654"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/flip-vertical -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="12" y1="3" x2="12" y2="21" />
                      <polyline points="16 7 16 17 21 17 16 7" />
                      <polyline points="8 7 8 17 3 17 8 7" />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">Vertical</div>
                  <div>{{ partner.vertical }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-3 fourth-column-card">
        <div class="row row-cards">
          <div class="card card-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">
                  <div class="font-weight-medium">公司介绍</div>
                  <div>{{ partner.introduce }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="outer-div">
      <div class="col-12">
        <div class="table-container">
          <div class="card-header">
            <h4 class="card-title">上海区域</h4>
          </div>
          <div class="table-responsive">
            <table class="table table-vcenter card-table table-striped">
              <thead>
                <tr>
                  <th>POC-SH</th>
                  <th>渠道联系人</th>
                  <th>渠道方对接职位</th>
                  <th>渠道方对接联系方式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ partner.POC_SH }}</td>
                  <td>
                    {{
                      partner.sh_contact && partner.sh_contact.channel_contact
                        ? partner.sh_contact.channel_contact
                        : "尚未获取查看权限"
                    }}
                  </td>
                  <td>
                    <span href="#" class="text-reset">{{
                      partner.sh_contact &&
                      partner.sh_contact.channel_contact_position
                        ? partner.sh_contact.channel_contact_position
                        : "尚未获取查看权限"
                    }}</span>
                  </td>
                  <td>
                    {{
                      partner.sh_contact &&
                      partner.sh_contact.channel_contact_information
                        ? partner.sh_contact.channel_contact_information
                        : "尚未获取查看权限"
                    }}
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>合作状态</th>
                  <th>合作状态细分</th>
                  <th>上海区域评级</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ partner.SH_tracking_process }}</td>
                  <td>
                    {{ partner.SH_tracking_process_segment }}
                  </td>
                  <td>
                    {{ partner.sh_tier }}
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>市场活动数据 leads</th>
                  <th>市场活动数据 CW%</th>
                  <th>转介绍数据 leads</th>
                  <th>转介绍数据 CW%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span href="#" class="text-reset">{{
                      partner.sh_marketing_data_leads
                    }}</span>
                  </td>
                  <td>
                    <span href="#" class="text-reset">{{
                      partner.sh_marketing_data
                    }}</span>
                  </td>
                  <td>{{ partner.sh_transfer_data_leads }}</td>
                  <td>{{ partner.sh_transfer_data }}</td>
                </tr>
              </tbody>
            </table>
            <button
              v-if="userIdentity.identity !== 'Super-Admin'"
              @click="requestData('sh_contact')"
              class="btn btn-primary btn-sm"
            >
              request SH contact
            </button>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="table-container">
          <div class="card-header">
            <h4 class="card-title">杭州区域</h4>
          </div>
          <div class="table-responsive">
            <table class="table table-vcenter card-table table-striped">
              <thead>
                <tr>
                  <th>POC-HZ</th>
                  <th>渠道联系人</th>
                  <th>渠道方对接职位</th>
                  <th>渠道方对接联系方式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ partner.POC_HZ }}</td>
                  <td>
                    {{
                      partner.hz_contact && partner.hz_contact.channel_contact
                        ? partner.hz_contact.channel_contact
                        : "尚未获取查看权限"
                    }}
                  </td>
                  <td>
                    <span href="#" class="text-reset">
                      {{
                        partner.hz_contact &&
                        partner.hz_contact.channel_contact_position
                          ? partner.hz_contact.channel_contact_position
                          : "尚未获取查看权限"
                      }}
                    </span>
                  </td>
                  <td>
                    <span href="#" class="text-reset">
                      {{
                        partner.hz_contact &&
                        partner.hz_contact.channel_contact_information
                          ? partner.hz_contact.channel_contact_information
                          : "尚未获取查看权限"
                      }}
                    </span>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>合作状态</th>
                  <th>合作状态细分</th>
                  <th>上海区域评级</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ partner.HZ_tracking_process }}</td>
                  <td>
                    {{ partner.HZ_tracking_process_segment }}
                  </td>
                  <td>{{ partner.hz_tier }}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>市场活动数据 leads</th>
                  <th>市场活动数据 CW%</th>
                  <th>转介绍数据 leads</th>
                  <th>转介绍数据 CW%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span href="#" class="text-reset">{{
                      partner.hz_marketing_data_leads
                    }}</span>
                  </td>
                  <td>
                    <span href="#" class="text-reset">{{
                      partner.hz_marketing_data
                    }}</span>
                  </td>
                  <td>{{ partner.hz_transfer_data_leads }}</td>
                  <td>{{ partner.hz_transfer_data }}</td>
                </tr>
              </tbody>
            </table>
            <button
              v-if="userIdentity.identity !== 'Super-Admin'"
              @click="requestData('hz_contact')"
              class="btn btn-primary btn-sm"
            >
              request HZ contact
            </button>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="table-container">
          <div class="card-header">
            <h4 class="card-title">北京区域</h4>
          </div>
          <div class="table-responsive">
            <table class="table table-vcenter card-table table-striped">
              <thead>
                <tr>
                  <th>POC-BJ</th>
                  <th>渠道联系人</th>
                  <th>渠道方对接职位</th>
                  <th>渠道方对接联系方式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ partner.POC_BJ }}</td>
                  <td>
                    {{
                      partner.bj_contact && partner.bj_contact.channel_contact
                        ? partner.bj_contact.channel_contact
                        : "尚未获取查看权限"
                    }}
                  </td>
                  <td>
                    {{
                      partner.bj_contact &&
                      partner.bj_contact.channel_contact_position
                        ? partner.bj_contact.channel_contact_position
                        : "尚未获取查看权限"
                    }}
                  </td>
                  <td>
                    {{
                      partner.bj_contact &&
                      partner.bj_contact.channel_contact_information
                        ? partner.bj_contact.channel_contact_information
                        : "尚未获取查看权限"
                    }}
                  </td>
                  
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>合作状态</th>
                  <th>合作状态细分</th>
                  <th>北京区域评级</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ partner.BJ_tracking_process }}</td>
                  <td>
                    {{ partner.BJ_tracking_process_segment }}
                  </td>
                  <td>{{ partner.bj_tier }}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>市场活动数据 leads</th>
                  <th>市场活动数据 CW%</th>
                  <th>转介绍数据 leads</th>
                  <th>转介绍数据 CW%</th>
                </tr>
              </thead>
              <tbody>
                <td>
                  <span href="#" class="text-reset">{{
                    partner.bj_marketing_data_leads
                  }}</span>
                </td>
                <td>
                  <span href="#" class="text-reset">{{
                    partner.bj_marketing_data
                  }}</span>
                </td>
                <td>{{ partner.bj_transfer_data_leads }}</td>
                <td>{{ partner.bj_transfer_data }}</td>
              </tbody>
            </table>
            <button
              v-if="userIdentity.identity !== 'Super-Admin'"
              @click="requestData('bj_contact')"
              class="btn btn-primary btn-sm"
            >
              request BJ contact
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="edit">
    <div class="dropdown">
      <button
        class="btn btn-dark"
        data-bs-toggle="dropdown"
        @click="deleteData(partner._id)"
        v-if="
          userIdentity.identity == 'Super-Admin' ||
          userIdentity.identity == 'PM' ||
          userIdentity.identity == 'Team-Leader'
        "
      >
        delete
      </button>
      <router-link
        v-if="userIdentity.identity !== 'Sales'"
        class="btn btn-primary"
        :to="'/detials/' + partner._id"
      >
        <div>Edit Partner</div>
      </router-link>
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
const requestLocation = ref("");
const partner = ref({
  cluster: "",
  third_partner_type: "",
  third_partner_name: "",
  b2b_or_b2c: "",
  partner_location: "",
  partner_scope: "",
  introduce: "",
  major_clients_or_case: "",
  website: "",
  coverage_province: "",
  sh_tier: "",
  hz_tier: "",
  bj_tier: "",
  sh_contact: {
    channel_contact_information: "",
    channel_contact: "",
    channel_contact_position: "",
  },
  hz_contact: {
    channel_contact: "",
    channel_contact_position: "",
    channel_contact_information: "",
  },
  bj_contact: {
    channel_contact: "",
    channel_contact_position: "",
    channel_contact_information: "",
  },
  vertical: "",
  POC_HZ: "",
  POC_SH: "",
  POC_BJ: "",
  HZ_tracking_process: "",
  HZ_tracking_process_segment: "",
  SH_tracking_process: "",
  SH_tracking_process_segment: "",
  BJ_tracking_process: "",
  BJ_tracking_process_segment: "",
  hz_marketing_data: "",
  sh_marketing_data: "",
  bj_marketing_data: "",
  hz_transfer_data: "",
  sh_transfer_data: "",
  bj_transfer_data: "",
});
computed(() => {
  return store.getters.user;
});

const props = defineProps({
  id: String,
});

const deleteData = (value) => {
  axios.delete("/api/partners/delete/" + value).then((res) => {
    router.push({ path: "/partner-list" });
  });
};

const requestData = (value) => {
  const data = {
    userId: userIdentity.id,
    partnerId: props.id,
    requestedContactField: value,
  };
  axios.post("/api/accessQuests/access-requests", data).then((res) => {});
};

const getDetail = async (id) => {
  try {
    console.log(id);
    let { data } = await axios.get("/api/partners/" + id);
    partner.value = data;
    console.log(partner);
  } catch (error) {
    console.log("error from API", error);
  }
};
getDetail(props.id);
</script>

<style scoped>
.row > * {
  min-width: 0;
}
@media (min-width: 1200px) {
  .col-xl-3 {
    flex: 0 0 auto;
    width: 23%;
  }
}
.outer-div {
  width: 1400px;
  margin: 0 auto;
}
.row-cards {
  display: flex;
  justify-content: center;
  gap: 10px; /* 卡片之间的间距 */
}

.card {
  box-shadow: rgba(35, 46, 60, 0.04) 0 2px 4px 0;
  border: 1px solid rgba(101, 109, 119, 0.16);
  width: 100%;
  height: 130px; /* 卡片的固定高度 */
  position: relative;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 4px;
}

.card-sm > .card-body {
  padding: 0.75rem;
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
.fourth-column-card .card {
  height: calc(
    (130px + 20px) * 3 - 40px
  ); /* 这里考虑到每个卡片的底部间距，所以使用 20px */
}
span.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px; /* 确保宽度与SVG一致 */
  height: 60px; /* 确保高度与SVG一致 */
  overflow: visible; /* 确保SVG的任何部分都不会被裁切 */
}
.table-container {
  background-color: white;
  margin: 20px;
  padding: 20px;
}
.table-container .card-title {
  margin-bottom: 20px;
  font-weight: 400;
}
/* 调整表头文字的大小和颜色 */
.table thead th {
  /* font-size: 14px;           */
  /* color: #888;             
  font-weight: normal;      */
  padding: 8px;
}
</style>
