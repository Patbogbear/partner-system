<template>
  <div class="body">
    <div class="title">{{ partner.third_partner_name }}</div>
    <div class="row row-cards">
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
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
                      />
                      <path d="M12 3v3m0 12v3" />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">服务商类型</div>
                  <div class="text-secondary">
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
                  <span class="bg-primary text-white avatar"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
                      />
                      <path d="M12 3v3m0 12v3" />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">服务商名称</div>
                  <div class="text-secondary">
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
                  <span class="bg-primary text-white avatar"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
                      />
                      <path d="M12 3v3m0 12v3" />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">2B/2C</div>
                  <div class="text-secondary">{{ partner.b2b_or_b2c }}</div>
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
                  <span class="bg-primary text-white avatar"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
                      />
                      <path d="M12 3v3m0 12v3" />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">上传Cluster</div>
                  <div class="text-secondary">{{ partner.cluster }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span class="bg-primary text-white avatar"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
                      />
                      <path d="M12 3v3m0 12v3" />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">服务覆盖范围</div>
                  <div class="text-secondary">{{ partner.partner_scope }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span class="bg-primary text-white avatar"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
                      />
                      <path d="M12 3v3m0 12v3" />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">重点覆盖城市</div>
                  <div class="text-secondary">
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
                  <span class="bg-primary text-white avatar"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
                      />
                      <path d="M12 3v3m0 12v3" />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">主要客户/成功案例</div>
                  <div class="text-secondary">
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
                  <span class="bg-primary text-white avatar"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
                      />
                      <path d="M12 3v3m0 12v3" />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">网址</div>
                  <div class="text-secondary">{{ partner.website }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span class="bg-primary text-white avatar"
                    ><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
                      />
                      <path d="M12 3v3m0 12v3" />
                    </svg>
                  </span>
                </div>
                <div class="col">
                  <div class="font-weight-medium">Vertical</div>
                  <div class="text-secondary">{{ partner.vertical }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-3 d-flex align-items-stretch">
        <div class="card card-sm">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-auto">
                <span class="bg-primary text-white avatar"
                  ><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
                    />
                    <path d="M12 3v3m0 12v3" />
                  </svg>
                </span>
              </div>
              <div class="col">
                <div class="font-weight-medium">公司介绍</div>
                <div class="text-secondary">{{ partner.introduce }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-cards">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">上海</h4>
          </div>
          <div class="table-responsive">
            <table class="table table-vcenter card-table">
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
                  <td class="text-secondary">
                    {{ partner.sh_contact && partner.sh_contact.channel_contact ? partner.sh_contact.channel_contact : '尚未获取查看权限' }}
                  </td>
                  <td class="text-secondary">
                    <span href="#" class="text-reset">{{ partner.sh_contact && partner.sh_contact.channel_contact_position ? partner.sh_contact.channel_contact_position : '尚未获取查看权限' }}</span>
                  </td>
                  <td class="text-secondary">
                    {{ partner.sh_contact && partner.sh_contact.channel_contact_information ? partner.sh_contact.channel_contact_information : '尚未获取查看权限' }}
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>合作状态</th>
                  <th>合作状态细分</th>
                  <th>市场活动数据</th>
                  <th>转介绍数据</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ partner.SH_tracking_process }}</td>
                  <td class="text-secondary">
                    {{ partner.SH_tracking_process_segment }}
                  </td>
                  <td class="text-secondary">
                    <span href="#" class="text-reset">{{
                      partner.sh_marketing_data
                    }}</span>
                  </td>
                  <td class="text-secondary">{{ partner.sh_transfer_data }}</td>
                </tr>
              </tbody>
            </table>
            <button @click="requestData('sh_contact')">
              request SH contact
            </button>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">杭州</h4>
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
                  <td class="text-secondary">
                    {{ partner.hz_contact && partner.hz_contact.channel_contact ? partner.hz_contact.channel_contact : '尚未获取查看权限' }}
                  </td>
                  <td class="text-secondary">
                    <span href="#" class="text-reset">
                    {{ partner.hz_contact && partner.hz_contact.channel_contact_position ? partner.hz_contact.channel_contact_position : '尚未获取查看权限' }}
                    </span>
                  </td>
                  <td class="text-secondary">
                   <span href="#" class="text-reset">
                    {{ partner.hz_contact && partner.hz_contact.channel_contact_information ? partner.hz_contact.channel_contact_information : '尚未获取查看权限' }}
                    </span>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>合作状态</th>
                  <th>合作状态细分</th>
                  <th>市场活动数据</th>
                  <th>转介绍数据</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ partner.HZ_tracking_process }}</td>
                  <td class="text-secondary">
                    {{ partner.HZ_tracking_process_segment }}
                  </td>
                  <td class="text-secondary">
                    <span href="#" class="text-reset">{{
                      partner.hz_marketing_data
                    }}</span>
                  </td>
                  <td class="text-secondary">{{ partner.hz_transfer_data }}</td>
                </tr>
              </tbody>
            </table>
            <button @click="requestData('hz_contact')">
              request HZ contact
            </button>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">北京</h4>
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
                  <td class="text-secondary">
                      {{ partner.bj_contact && partner.bj_contact.channel_contact ? partner.bj_contact.channel_contact : '尚未获取查看权限' }}
                  </td>
                  <td class="text-secondary">
                    {{ partner.bj_contact && partner.bj_contact.channel_contact_position ? partner.bj_contact.channel_contact_position : '尚未获取查看权限' }}
                  </td>
                  <td class="text-secondary">
                     {{ partner.bj_contact && partner.bj_contact.channel_contact_information ? partner.bj_contact.channel_contact_information : '尚未获取查看权限' }}
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>合作状态</th>
                  <th>合作状态细分</th>
                  <th>市场活动数据</th>
                  <th>转介绍数据</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ partner.BJ_tracking_process }}</td>
                  <td class="text-secondary">
                    {{ partner.BJ_tracking_process_segment }}
                  </td>
                  <td class="text-secondary">
                    <span href="#" class="text-reset">{{
                      partner.bj_marketing_data
                    }}</span>
                  </td>
                  <td class="text-secondary">{{ partner.bj_transfer_data }}</td>
                </tr>
              </tbody>
            </table>
            <button @click="requestData('bj_contact')">
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
        style="
          --bs-btn-padding-y: 0.25rem;
          --bs-btn-padding-x: 0.5rem;
          --bs-btn-font-size: 0.75rem;
        "
        data-bs-toggle="dropdown"
        @click="deleteData(partner._id)"
        v-if="userIdentity.identity == 'Super-Admin'"
      >
        delete
      </button>
      <router-link
        v-if="userIdentity.identity == 'Super-Admin'"
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
    console.log(id)
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
    width: 25%;
  }
}
.card {
  box-shadow: rgba(35, 46, 60, 0.04) 0 2px 4px 0;
  border: 1px solid rgba(101, 109, 119, 0.16);
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(101, 109, 119, 0.16);
  border-radius: 4px;
}
.card-sm > .card-body {
  padding: 0.75rem;
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
</style>
