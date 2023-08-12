<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" @click="goto_add()"
                >Add New</a
              >
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              v-model="filterInput"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button class="btn btn-outline-success" @click="exportToCSV()" >
            export
          </button>
          <div @click="logOut()">logout</div>
        </div>
      </div>
    </nav>

    <alert v-if="alert" :message="alert" />

    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">地区</th>
          <th scope="col">服务商类型</th>
          <th scope="col">服务商名称</th>
          <th scope="col">2B/2C</th>
          <th scope="col">公司所在地</th>
          <!-- <th scope="col">服务覆盖范围</th> -->
          <!-- <th scope="col">公司介绍</th> -->
          <!-- <th scope="col">主要客户/成功案例</th> -->
          <!-- <th scope="col">网址</th> -->
          <!-- <th scope="col">服务商评级(SH)</th> -->
          <!-- <th scope="col">服务商评级(HZ)</th> -->
          <!-- <th scope="col">服务商评级(BJ)</th> -->
          <!-- <th scope="col">SH渠道方对接人</th> -->
          <!-- <th scope="col">SH渠道方对接职位</th> -->
          <!-- <th scope="col">SH渠道方对接联系方式</th> -->
          <!-- <th scope="col">HZ渠道方对接人</th> -->
          <!-- <th scope="col">HZ渠道方对接职位</th> -->
          <!-- <th scope="col">HZ渠道方对接联系方式</th> -->
          <!-- <th scope="col">BJ渠道方对接人</th> -->
          <!-- <th scope="col">BJ渠道方对接职位</th> -->
          <!-- <th scope="col">BJ渠道方对接联系方式</th> -->
          <th scope="col">Vertical</th>
          <th scope="col">POC-HZ</th>
          <th scope="col">POC-SH</th>
          <th scope="col">POC-BJ</th>
          <!-- <th scope="col">HZ跟进情况</th> -->
          <!-- <th scope="col">杭州合作状态细分</th> -->
          <!-- <th scope="col">SH跟进情况</th> -->
          <!-- <th scope="col">上海合作状态细分</th> -->
          <!-- <th scope="col">BJ跟进情况</th> -->
          <!-- <th scope="col">北京合作状态细分</th> -->
          <!-- <th scope="col">市场活动数据(HZ)</th> -->
          <!-- <th scope="col">转介绍数据(HZ)</th> -->
          <!-- <th scope="col">市场活动数据(SH)</th> -->
          <!-- <th scope="col">转介绍数据(SH)</th> -->
          <!-- <th scope="col">市场活动数据(BJ)</th> -->
          <!-- <th scope="col">转介绍数据(BJ)</th> -->
          <th>编辑</th>
        </tr>
      </thead>
      <tbody v-if="user">
        <!-- v-if helps avoid uncatched promise when you delete vuex user,but still computed is working on get vuex user state-->
        <tr
          v-for="partner in filteredData(partners, filterInput)"
          :key="partner._id"
        >
          <th scope="row">{{ partner.cluster }}</th>
          <td>{{ partner.third_partner_type }}</td>
          <td>{{ partner.third_partner_name }}</td>
          <td>{{ partner.b2b_or_b2c }}</td>
          <td>{{ partner.partner_location }}</td>
          <!-- <td>{{ partner.partner_scope }}</td> -->
          <!-- <td>{{ partner.introduce }}</td> -->
          <!-- <td>{{ partner.major_cliens_or_case }}</td> -->
          <!-- <td>{{ partner.website }}</td> -->
          <!-- <td>{{ partner.sh_tier }}</td> -->
          <!-- <td>{{ partner.hz_tier }}</td> -->
          <!-- <td>{{ partner.bj_tier }}</td> -->
          <!-- <td>{{ partner.sh_channel_contact }}</td> -->
          <!-- <td>{{ partner.sh_channel_contact_position }}</td> -->
          <!-- <td>{{ partner.sh_channel_contact_information }}</td> -->
          <!-- <td>{{ partner.hz_channel_contact }}</td> -->
          <!-- <td>{{ partner.hz_channel_contact_position }}</td> -->
          <!-- <td>{{ partner.hz_channel_contact_information }}</td> -->
          <!-- <td>{{ partner.bj_channel_contact }}</td> -->
          <!-- <td>{{ partner.bj_channel_contact_position }}</td> -->
          <!-- <td>{{ partner.bj_channel_contact_information }}</td> -->
          <td>{{ partner.vertical }}</td>
          <td>{{ partner.POC_HZ }}</td>
          <td>{{ partner.POC_SH }}</td>
          <td>{{ partner.POC_BJ }}</td>
          <!-- <td>{{ partner.HZ_tracking_process }}</td> -->
          <!-- <td>{{ partner.HZ_tracking_process_segment }}</td> -->
          <!-- <td>{{ partner.SH_tracking_process }}</td> -->
          <!-- <td>{{ partner.SH_tracking_process_segment }}</td> -->
          <!-- <td>{{ partner.BJ_tracking_process }}</td> -->
          <!-- <td>{{ partner.BJ_tracking_process_segment }}</td> -->
          <!-- <td>{{ partner.hz_marketing_data }}</td> -->
          <!-- <td>{{ partner.sh_marketing_data }}</td> -->
          <!-- <td>{{ partner.bj_marketing_data }}</td> -->
          <!-- <td>{{ partner.sh_transfer_data }}</td> -->
          <!-- <td>{{ partner.hz_transfer_data }}</td> -->
          <!-- <td>{{ partner.bj_transfer_data }}</td> -->
          <td>
            <router-link
              v-if="user.identity == 'Super-Admin'"
              class="single-partner"
              :to="'/single-partner/' + partner._id"
            >
              <button
                class="btn btn-primary"
                style="
                  --bs-btn-padding-y: 0.25rem;
                  --bs-btn-padding-x: 0.5rem;
                  --bs-btn-font-size: 0.75rem;
                "
              >
                detials
              </button>
            </router-link>
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
                v-if="user.identity == 'Super-Admin'"
              >
                delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "../http";
export default {
  name: "index",
  components: {},
  data() {
    return {
      partners: [],
      filterInput: [],
      exportsData: [],
    };
  },
  computed: {
    user() {
      console.log(this.$store.getters.user);
      return this.$store.getters.user;
    },
  },
  created() {
    this.getData();
  },
  methods: {
    filteredData(partners, value) {
      const regex = new RegExp(value, "i");
      return partners.filter((partner) =>
        Object.values(partner).some(
          (field) => typeof field === "string" && regex.test(field)
        )
      );
    },
    getData() {
      //get data
      axios
        .get("api/partners")
        .then((res) => {
          //console.log(res.data)
          this.partners = res.data;
          console.log(this.partners);
        })
        .catch((err) => console.log(err));
    },
    deleteData(value) {
      axios.delete("api/partners/delete/" + value).then((res) => {
        console.log(333);
        this.getData();
      });
    },
    exportToCSV() {
      axios
        .get("api/partners/export")
        .then((res) => {
          console.log(res.data);
          this.exportsData = res.data;
          const csv = [];
          const headers = Object.keys(this.exportsData[0]);
          csv.push(headers.join(",")); // 添加表头行

          for (const partner of this.exportsData) {
            const row = [];
            for (const header of headers) {
              const value =
                partner[header] !== undefined ? partner[header] : ""; // 如果值为 undefined，则使用空字符串
              row.push(value);
            }
            csv.push(row.join(",")); // 添加每条数据的行
          }

          const csvContent = csv.join("\n");
          const blob = new Blob([csvContent], {
            type: "text/csv;charset=utf-8;",
          });

          const downloadLink = document.createElement("a");
          const url = URL.createObjectURL(blob);

          downloadLink.href = url;
          downloadLink.download = "data.csv";
          downloadLink.click();

          URL.revokeObjectURL(url);
        })
        .catch((err) => console.log(err));
    },
    logOut() {
      //clear token
      localStorage.removeItem("userToken");
      //config vuex store
      this.$store.dispatch("clearCurrentState");
      this.$router.push({ path: "/login" });
    },
    goto_add() {
      this.$router.push({ path: "/add" });
    },
  },
};
</script>