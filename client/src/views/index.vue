<template>
  <div class="home">
    <div class="page-wrapper">
      <div class="page-header d-print-none">
        <div class="container-xl">
          <div class="row g-2 align-items-center">
            <div class="col">
              <!-- Page pre-title -->
              <div class="page-pretitle">Overview</div>
              <h2 class="page-title">Dash Board</h2>
            </div>
            <!-- Page title actions -->
            <div class="col-auto ms-auto d-print-none">
              <div class="btn-list">
                <a
                  @click="goto_add()"
                  class="btn btn-primary d-none d-sm-inline-block add-new-partner"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-report"
                >
                  <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
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
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                  Add new partner
                </a>
                <span class="d-none d-sm-inline">
                  <a href="#" class="btn logout" @click="logOut()"> Logout </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-body">
        <div class="container-xl">
          <div class="row row-deck row-cards">
            <div class="col-sm-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="subheader">Total Partners</div>
                    <div class="ms-auto lh-1">
                      <div class="dropdown">
                        <a
                          class="dropdown-toggle text-secondary"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          >Last 7 days</a
                        >
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item active" href="#"
                            >Last 7 days</a
                          >
                          <a class="dropdown-item" href="#">Last 30 days</a>
                          <a class="dropdown-item" href="#">Last 3 months</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="h1 mb-3">75%</div>
                  <div class="d-flex mb-2">
                    <div>Conversion rate</div>
                    <div class="ms-auto">
                      <span
                        class="text-green d-inline-flex align-items-center lh-1"
                      >
                        7%
                        <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon ms-1"
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
                          <path d="M3 17l6 -6l4 4l8 -8" />
                          <path d="M14 7l7 0l0 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div class="progress progress-sm">
                    <div
                      class="progress-bar bg-primary"
                      style="width: 75%"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="75% Complete"
                    >
                      <span class="visually-hidden">75% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="subheader">In Cooperation</div>
                    <div class="ms-auto lh-1">
                      <div class="dropdown">
                        <a
                          class="dropdown-toggle text-secondary"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          >Last 7 days</a
                        >
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item active" href="#"
                            >Last 7 days</a
                          >
                          <a class="dropdown-item" href="#">Last 30 days</a>
                          <a class="dropdown-item" href="#">Last 3 months</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-baseline">
                    <div class="h1 mb-0 me-2">$4,300</div>
                    <div class="me-auto">
                      <span
                        class="text-green d-inline-flex align-items-center lh-1"
                      >
                        8%
                        <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon ms-1"
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
                          <path d="M3 17l6 -6l4 4l8 -8" />
                          <path d="M14 7l7 0l0 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div id="chart-revenue-bg" class="chart-sm"></div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="subheader">Missing Contact</div>
                    <div class="ms-auto lh-1">
                      <div class="dropdown">
                        <a
                          class="dropdown-toggle text-secondary"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          >Last 7 days</a
                        >
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item active" href="#"
                            >Last 7 days</a
                          >
                          <a class="dropdown-item" href="#">Last 30 days</a>
                          <a class="dropdown-item" href="#">Last 3 months</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-baseline">
                    <div class="h1 mb-3 me-2">6,782</div>
                    <div class="me-auto">
                      <span
                        class="text-yellow d-inline-flex align-items-center lh-1"
                      >
                        0%
                        <!-- Download SVG icon from http://tabler-icons.io/i/minus -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon ms-1"
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
                          <path d="M5 12l14 0" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div id="chart-new-clients" class="chart-sm"></div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="subheader">Active Partners</div>
                    <div class="ms-auto lh-1">
                      <div class="dropdown">
                        <a
                          class="dropdown-toggle text-secondary"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          >Last 7 days</a
                        >
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item active" href="#"
                            >Last 7 days</a
                          >
                          <a class="dropdown-item" href="#">Last 30 days</a>
                          <a class="dropdown-item" href="#">Last 3 months</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-baseline">
                    <div class="h1 mb-3 me-2">2,986</div>
                    <div class="me-auto">
                      <span
                        class="text-green d-inline-flex align-items-center lh-1"
                      >
                        4%
                        <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon ms-1"
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
                          <path d="M3 17l6 -6l4 4l8 -8" />
                          <path d="M14 7l7 0l0 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div id="chart-active-users" class="chart-sm"></div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Traffic summary</h3>
                  <div id="chart-mentions" class="chart-lg"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Locations</h3>
                  <div class="ratio ratio-21x9">
                    <div>
                      <div id="map-world" class="w-100 h-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Partner list</h3>
                </div>
                <div class="card-body border-bottom py-3">
                  <div class="d-flex">
                    <div class="text-secondary">
                      Show
                      <div class="mx-2 d-inline-block">
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          value="8"
                          size="3"
                          aria-label="Invoices count"
                        />
                      </div>
                      entries
                    </div>

                    <div class="ms-auto text-secondary">
                      Search:
                      <div class="ms-2 d-inline-block">
                        <input
                          v-model="filterInput"
                          type="text"
                          class="form-control form-control-sm"
                          aria-label="Search invoice"
                        />
                      </div>
                    </div>
                    <button
                      class="btn btn-outline-success"
                      @click="exportToCSV()"
                    >
                      export
                    </button>
                  </div>
                </div>
                <div class="table-responsive">
                  <table
                    class="table card-table table-vcenter text-nowrap datatable"
                  >
                    <thead>
                      <tr>
                        <th class="w-1">
                          <input
                            class="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select all invoices"
                          />
                        </th>
                        <th class="w-1">Cluster</th>
                        <th>Partner Type</th>
                        <th>Partner Name</th>
                        <th>2B/2C</th>
                        <!-- <th scope="col">公司所在地</th> -->
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
                        <th>Vertical</th>
                        <!-- <th scope="col">POC-HZ</th> -->
                        <!-- <th scope="col">POC-SH</th> -->
                        <!-- <th scope="col">POC-BJ</th> -->
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
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody v-if="user">
                      <tr v-for="partner in paginatedData" :key="partner._id">
                        <td>
                          <input
                            class="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span class="text-secondary">{{
                            partner.cluster
                          }}</span>
                        </td>
                        <td>
                          <!-- <a
                            href=" "
                            class="text-reset"
                            tabindex="-1"
                            >Design Works</a
                          > -->
                          {{ partner.third_partner_type }}
                        </td>
                        <td>
                          <span class="flag flag-country-us"></span>
                          {{ partner.third_partner_name }}
                        </td>
                        <td>{{ partner.b2b_or_b2c }}</td>
                        <!-- <td>{{ partner.partner_location }}</td> -->
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
                        <!-- <td>{{ partner.POC_HZ }}</td> -->
                        <!-- <td>{{ partner.POC_SH }}</td> -->
                        <!-- <td>{{ partner.POC_BJ }}</td> -->
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
                        <td class="text-end">
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
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="card-footer d-flex align-items-center">
                  <p class="m-0 text-secondary">
                    Showing <span>1</span> to <span>8</span> of
                    <span>16</span> entries
                  </p>

                  <ul class="pagination m-0 ms-auto">
                    <li
                      class="page-item"
                      :class="{ disabled: currentPage === 1 }"
                    >
                      <a
                        class="page-link"
                        href="#"
                        @click.prevent="currentPage--"
                      >
                        <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
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
                          <path d="M15 6l-6 6l6 6" />
                        </svg>
                        prev
                      </a>
                    </li>
                    <li
                      class="page-item"
                      v-for="page in totalPages"
                      :key="page"
                      :class="{ active: page === currentPage }"
                    >
                      <a
                        class="page-link"
                        href="#"
                        @click.prevent="currentPage = page"
                        >{{ page }}</a
                      >
                    </li>

                    <li
                      class="page-item"
                      :class="{ disabled: currentPage === totalPages }"
                    >
                      <a
                        class="page-link"
                        href="#"
                        @click.prevent="currentPage++"
                      >
                        next
                        <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
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
                          <path d="M9 6l6 6l-6 6" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    user() {
      console.log(this.$store.getters.user);
      return this.$store.getters.user;
    },
    paginatedData() {
      const filtered = this.filteredData(this.partners, this.filterInput);
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      return filtered.slice(start, end);
    },
    // 计算总页数
    totalPages() {
      return Math.ceil(
        this.filteredData(this.partners, this.filterInput).length /
          this.itemsPerPage
      );
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
        })
        .catch((err) => console.log(err));
    },
    deleteData(value) {
      axios.delete("api/partners/delete/" + value).then((res) => {
        this.getData();
      });
    },
    exportToCSV() {
      axios
        .get("api/partners/export")
        .then((res) => {
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
<style scoped>
.page-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.page-body {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}
@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1199px;
  }
}
.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  width: 100%;
  padding-right: var(--tblr-gutter-x, 0.5rem);
  padding-left: var(--tblr-gutter-x, 0.5rem);
  margin-right: auto;
  margin-left: auto;
}
.row-deck > .col,
.row-deck > [class*="col-"] {
  display: flex;
  align-items: stretch;
}
.row > * {
  min-width: 0;
}
.row-deck > .col .card,
.row-deck > [class*="col-"] .card {
  flex: 1 1 auto;
}
.card {
  box-shadow: rgba(35, 46, 60, 0.04) 0 2px 4px 0;
  border: 1px solid rgba(101, 109, 119, 0.16);
}
@media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
}
@media (min-width: 992px) {
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}
.row-cards .row-cards {
  flex: 1;
}
.row-cards {
  --tblr-gutter-x: 1rem;
  --tblr-gutter-y: 1rem;
}
.row > * {
  max-width: 100%;
  padding-right: calc(var(--tblr-gutter-x) / 2);
  padding-left: calc(var(--tblr-gutter-x) / 2);
  margin-top: var(--tblr-gutter-y);
}
.card-header:first-child {
  border-radius: 3px 3px 0 0;
}
.position-relative {
  position: relative !important;
}
.page-pretitle {
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.6;
  color: #656d77;
  display: flex;
}
.page-title {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 500;
  color: inherit;
  display: flex;
  align-items: center;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-color: rgba(101, 109, 119, 0.24);
  white-space: nowrap;
}
.btn-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -0.5rem !important;
  margin-right: -0.5rem;
}
.btn-list > * {
  margin: 0 0.5rem 0.5rem 0 !important;
}
.logout {
  background-color: #fff;
  color: #216bc4;
}
.add-new-partner {
  background-color: #216bc4;
  color: #f4f6fa;
}
.btn .icon {
  width: 1.25rem;
  height: 1.25rem;
  min-width: 1.25rem;
  margin: 0 0.5rem 0 -0.25rem;
  vertical-align: middle;
}
@media (min-width: 576px) {
  .d-sm-inline {
    display: inline !important;
  }
}
</style>