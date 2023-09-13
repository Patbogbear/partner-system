<template>
  <div class="home">
    <div class="page-wrapper">
      <div class="page-header d-print-none">
        <div class="container-xl">
          <div class="row g-2 align-items-center">
            <div class="col">
              <!-- Page pre-title -->
              <div class="page-pretitle">Overview</div>
              <h2 class="page-title">Dashboard{{ currentData }}</h2>
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
                <!-- <div>
                  <input type="file" @change="uploadFile">
                </div> -->
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
                  </div>
                  <div class="h1 mb-3">{{ partners.length }}</div>
                  <div class="d-flex mb-2">
                    <div>contact rate</div>
                    <div class="ms-auto">
                      <span
                        class="text-green d-inline-flex align-items-center lh-1"
                      >
                        {{ contactPercentage }}%
                      </span>
                    </div>
                  </div>
                  <div class="progress progress-sm">
                    <div
                      class="progress-bar bg-primary"
                      :style="{ width: contactPercentage + '%' }"
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
                    <div class="subheader">In collaboration</div>
                    <div class="ms-auto lh-1">
                      <a
                        class="dropdown-toggle text-secondary"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >{{ selectedCity }}</a
                      >
                      <div class="dropdown-menu dropdown-menu-end">
                        <a
                          class="dropdown-item active"
                          @click="selectCity('SH')"
                          >SH</a
                        >
                        <a class="dropdown-item" @click="selectCity('HZ')"
                          >HZ</a
                        >
                        <a class="dropdown-item" @click="selectCity('BJ')"
                          >BJ</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="d-flex" style="align-items: center">
                    <div
                      class="h1 mb-0 me-2"
                      style="width: 100px; height: 100px"
                    >
                      <canvas ref="chart"></canvas>
                    </div>
                    <div class="me-auto lh-1">
                      <span class="text-green">
                        <ul style="list-style-type: none; padding-left: 0">
                          <li
                            v-for="(label, index) in labels"
                            :key="label"
                            style="
                              display: flex;
                              align-items: center;
                              margin-bottom: 8px;
                              font-size: 12px;
                            "
                          >
                            <div
                              :style="{
                                background: backgroundColors[index],
                                width: '10px',
                                height: '10px',
                                marginRight: '10px',
                              }"
                            ></div>
                            {{ label }}
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
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
                    <div class="h1 mb-3 me-2">Demo</div>
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
                    <div class="h1 mb-3 me-2">Demo</div>
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
                  <h3 class="card-title">Data Dashboard 1</h3>
                  <div id="chart-mentions" class="chart-lg"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Data Dashboard 2</h3>
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
                    <!-- <button
                      class="btn btn-outline-success"
                      @click="exportToCSV()"
                    >
                      export
                    </button> -->
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
                        <th>Partner Type</th>
                        <th>Partner Name</th>
                        <th>2B/2C</th>
                        <th>Vertical</th>
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
                          {{ partner.third_partner_type }}
                        </td>
                        <td>
                          <span class="flag flag-country-us"></span>
                          {{ partner.third_partner_name }}
                        </td>
                        <td>{{ partner.b2b_or_b2c }}</td>
                        <td>{{ partner.vertical }}</td>
                        <td class="text-end">
                          <router-link
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
                            @click.stop="deleteData(partner._id)"
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
                        href=" "
                        @click.prevent="moveWindow(-1)"
                      >
                        <!-- SVG for 'prev' ... -->
                        prev
                      </a>
                    </li>

                    <li
                      class="page-item"
                      v-for="page in visiblePages"
                      :key="page"
                      :class="{ active: page === currentPage }"
                    >
                      <a
                        class="page-link"
                        href="#"
                        @click.prevent="setCurrentPage(page)"
                        >{{ page }}</a
                      >
                    </li>

                    <li
                      class="page-item"
                      :class="{ disabled: currentPage === totalPages }"
                    >
                      <a
                        class="page-link"
                        href=" "
                        @click.prevent="moveWindow(1)"
                      >
                        next
                        <!-- SVG for 'next' ... -->
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
<script setup>
import {useRouter} from 'vue-router';
import axios from "../http";
import { ref, computed, onMounted, watch, nextTick } from "vue";
import {
  Chart,
  DoughnutController,
  ArcElement,
  CategoryScale,
  Tooltip,
} from "chart.js";
import { useStore } from "vuex";

Chart.register(DoughnutController, ArcElement, CategoryScale, Tooltip);

const router = useRouter()
const store = useStore();
const partners = ref([]);
const filterInput = ref([]);
const exportsData = ref([]);
const currentPage = ref(1);
const itemsPerPage = ref(10);
const chart = ref(null);
const labels = ref([
  "collaborating",
  "pending collaboration",
  "collaboration paused",
]);
const backgroundColors = ref(["#0d6efd", "#3d8bfd", "#9ec5fe"]);
const selectedCity = ref("SH");
const chartInstance = ref(null); // 存储图表实例

const user = computed(() => store.getters.user);

const pageWindowStart = ref(1); // Start page for sliding window
const windowSize = ref(3);     // Number of pages to display in the sliding window

const visiblePages = computed(() => {
    let end = pageWindowStart.value + windowSize.value;
    if (end > totalPages.value) end = totalPages.value;
    return Array.from({ length: end - pageWindowStart.value }, (_, i) => i + pageWindowStart.value);
});


const getData = () => {
  axios
    .get("api/partners")
    .then((res) => {
      partners.value = res.data;
    })
    .catch((err) => console.log(err));
};

const goto_add = () => {
  router.push({ path: "/add" });
};

const logOut = () =>{
  localStorage.removeItem("userToken");
      //config vuex store
      store.dispatch("clearCurrentState");
      router.push({ path: "/login" });
}

const deleteData = (id) => {
  axios.delete("api/partners/delete/" + id);
  getData();
};


const paginatedData = computed(() => {
    const filtered = filteredData(partners.value, filterInput.value);
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = currentPage.value * itemsPerPage.value;
    return filtered.slice(start, end);
});


function setCurrentPage(page) {
    currentPage.value = page;
}

function moveWindow(direction) {
    const newStart = pageWindowStart.value + direction * windowSize.value;
    if (newStart >= 1 && newStart + windowSize.value <= totalPages.value + 1) {
        pageWindowStart.value = newStart;
    }
}


const totalPages = computed(() => {
    return Math.ceil(
        filteredData(partners.value, filterInput.value).length / itemsPerPage.value
    );
});



const filteredData = (partners, value) => {
  const regex = new RegExp(value, "i");
  return partners.filter((partner) =>
    Object.values(partner).some(
      (field) => typeof field === "string" && regex.test(field)
    )
  );
};

const contactPercentage = computed(() => {
  const partnersWithContact = partners.value.filter((partner) => {
    const hasSHContact =
      partner.sh_contact && Object.keys(partner.sh_contact).length > 0;
    const hasHZContact =
      partner.hz_contact && Object.keys(partner.hz_contact).length > 0;
    const hasBJContact =
      partner.bj_contact && Object.keys(partner.bj_contact).length > 0;
    return hasSHContact || hasHZContact || hasBJContact;
  }).length;

  if (partners.value.length === 0) return 0;
  const percentage = (partnersWithContact / partners.value.length) * 100;
  return parseFloat(percentage.toFixed(2));
});

const selectCity = (city) => {
  selectedCity.value = city;
};

const currentData = computed(() => {
  if (!partners.value || partners.value.length === 0) return [0, 0, 0];

  const statusMapping = {
    "A. 待合作": "待合作",
    "C. 合作中": "合作中",
    "B. 合作暂停": "暂停合作",
  };
  const counts = {
    合作中: 0,
    待合作: 0,
    暂停合作: 0,
  };

  partners.value.forEach((partner) => {
    let trackingProcess;

    switch (selectedCity.value) {
      case "SH":
        trackingProcess = partner.SH_tracking_process || null;
        break;
      case "HZ":
        trackingProcess = partner.HZ_tracking_process || null;
        break;
      case "BJ":
        trackingProcess = partner.BJ_tracking_process || null;
        break;
      default:
        trackingProcess = null;
    }

    if (trackingProcess && statusMapping[trackingProcess]) {
      const key = statusMapping[trackingProcess];
      if (counts[key] !== undefined) {
        counts[key]++;
      }
    }
  });
  return [counts["合作中"], counts["待合作"], counts["暂停合作"]];
});

const initChart = () => {
  const ctx = chart.value.getContext("2d");
  chartInstance.value = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labels.value,
      datasets: [
        {
          data: currentData.value, // 注意这里使用 `.value` 获取计算属性的值
          backgroundColor: backgroundColors.value,
        },
      ],
    },
    options: {
      cutout: "80%",
      responsive: true,
      maintainAspectRatio: false,
    },
  });
};

onMounted(() => {
  const fetchDataAndInitChart = async () => {
    await getData();
    initChart();
  };
  fetchDataAndInitChart();
});

watch(currentData, (newData) => {
  if (chartInstance.value) {
    chartInstance.value.destroy(); // 销毁旧实例
    // 重新实例化新图表
    const ctx = chart.value.getContext("2d");
    chartInstance.value = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels.value,
        datasets: [{ data: newData, backgroundColor: backgroundColors.value }],
      },
      options: {
        cutout: "80%",
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
});

const uploadFile = async (event) => {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append("csv", file);
  try {
    await axios.post("api/partners/upload", formData);
    alert("上传成功！");
  } catch (err) {
    alert("上传失败：" + err.message);
  }
};

const exportToCSV = ()=> {
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
    }
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