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
          <button class="btn btn-outline-success" @click="exportToCSV()">
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
          <th scope="col">服务商类型</th>
          <th scope="col">服务商名称</th>
          <th scope="col">2B/2C</th>
          <th scope="col">公司所在地</th>
          <!-- <th scope="col">服务覆盖范围</th> -->
          <!-- <th scope="col">公司介绍</th> -->
          <!-- <th scope="col">主要客户/成功案例</th> -->
          <!-- <th scope="col">网址</th> -->
          <th scope="col">A1/A2/B1/B2</th>
          <th scope="col">是否第一次合作</th>
          <!-- <th scope="col">渠道方对接人</th> -->
          <!-- <th scope="col">渠道方对接职位</th> -->
          <!-- <th scope="col">渠道方对接联系方式</th> -->
          <!-- <th scope="col">市场活动数据</th> -->
          <!-- <th scope="col">转介绍数据</th> -->
          <!-- <th scope="col">渠道类别活动数据</th> -->
          <th scope="col">合作评分</th>
          <th scope="col">POC-HZ</th>
          <th scope="col">POC-SH</th>
          <th scope="col">POC-BJ</th>
          <th scope="col">杭州Vertical</th>
          <!-- <th scope="col">HZ跟进情况</th> -->
          <!-- <th scope="col">杭州合作状态细分</th> -->
          <!-- <th scope="col">杭州渠道来源</th> -->
          <th scope="col">上海Vertical</th>
          <!-- <th scope="col">SH跟进情况</th> -->
          <!-- <th scope="col">上海合作状态细分</th> -->
          <th>编辑</th>
        </tr>
      </thead>
      <tbody v-if="user">
        <!-- v-if helps avoid uncatched promise when you delete vuex user,but still computed is working on get vuex user state-->
        <tr
          v-for="party in filteredData(parties, filterInput)"
          :key="party._id"
        >
          <th scope="row">{{ party.thrid_party_type }}</th>
          <td>{{ party.thrid_party_name }}</td>
          <td>{{ party.b2b_or_b2c }}</td>
          <td>{{ party.party_location }}</td>
          <!-- <td>{{ party.party_scope }}</td> -->
          <!-- <td>{{ party.introduce }}</td> -->
          <!-- <td>{{ party.major_cliens_or_case }}</td> -->
          <!-- <td>{{ party.website }}</td> -->
          <td>{{ party.tier }}</td>
          <td>{{ party.first_time_cooperate }}</td>
          <!-- <td>{{ party.channel_contact }}</td> -->
          <!-- <td>{{ party.channel_contact_position }}</td> -->
          <!-- <td>{{ party.channel_contact_information }}</td> -->
          <!-- <td>{{ party.marketing_data }}</td> -->
          <!-- <td>{{ party.transfer_data }}</td> -->
          <!-- <td>{{ party.channel_categroy_activate_data }}</td> -->
          <td>{{ party.coorprate_score }}</td>
          <td>{{ party.POC_HZ }}</td>
          <td>{{ party.POC_SH }}</td>
          <td>{{ party.POC_BJ }}</td>
          <td>{{ party.HZ_vertical }}</td>
          <!-- <td>{{ party.HZ_tracking_process }}</td> -->
          <!-- <td>{{ party.HZ_tracking_process_segment }}</td> -->
          <!-- <td>{{ party.HZ_channel_source }}</td> -->
          <td>{{ party.SH_vertical }}</td>
          <!-- <td>{{ party.SH_tracking_process }}</td> -->
          <!-- <td>{{ party.SH_tracking_process_segment }}</td> -->
          <td>
            <router-link
              v-if="user.identity == 'Admin'"
              class="single-partner"
              :to="'/single-partner/' + party._id"
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
                @click="deleteData(party._id)"
                v-if="user.identity == 'Admin'"
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
      parties: [],
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
    filteredData(parties, value) {
      const regex = new RegExp(value, "i");
      return parties.filter((party) =>
        Object.values(party).some(
          (field) => typeof field === "string" && regex.test(field)
        )
      );
    },
    getData() {
      //get data
      axios
        .get("api/parties")
        .then((res) => {
          //console.log(res.data)
          this.parties = res.data;
          console.log(this.parties);
        })
        .catch((err) => console.log(err));
    },
    deleteData(value) {
      axios.delete("api/parties/delete/" + value).then((res) => {
        console.log(333);
        this.getData();
      });
    },
    exportToCSV() {
      axios.get("api/parties/export").then((res) => {
       console.log(res.data)
        this.exportsData = res.data;
        const csv = [];
        const headers = Object.keys(this.exportsData[0]);
        csv.push(headers.join(",")); // 添加表头行

        for (const partner of this.exportsData) {
          const row = [];
          for (const header of headers) {
            const value = partner[header] !== undefined ? partner[header] : ""; // 如果值为 undefined，则使用空字符串
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