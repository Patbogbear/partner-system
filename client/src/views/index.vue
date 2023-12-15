<template>
  <div class="home">
    <div class="page-wrapper">
      <div class="page-header d-print-none">
        <div class="container-xl">
          <div class="row g-2 align-items-center">
            <div class="col">
              <!-- Page pre-title -->
              <div class="page-pretitle">Overview</div>
              <h2 class="page-title">Dashboard</h2>
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
                        {{ currentData }}
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
                    <div class="subheader">Vertical</div>
                  </div>
                  <div class="d-flex align-items-baseline">
                    <div
                      class="h1 mb-3 me-2"
                      style="width: 250px; height: 120px"
                    >
                      <canvas
                        ref="verticalChart"
                        width="220"
                        height="130"
                      ></canvas>
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
                    <div class="subheader">New Partners</div>
                    <div class="ms-auto lh-1">
                      <div class="dropdown">
                        <a
                          class="text-secondary"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          >Last {{ selectedDays }} days</a
                        >
                        <div class="dropdown-menu dropdown-menu-end">
                          <!-- <a class="dropdown-item active" @click="selectedDays=7">Last 7 days</a>
                          <a class="dropdown-item" @click="selectedDays=30">Last 30 days</a>
                          <a class="dropdown-item" @click="selectedDays=90">Last 90 days</a> -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-baseline">
                    <div class="me-auto">
                      <canvas
                        ref="newPartnersChart"
                        width="220"
                        height="130"
                      ></canvas>
                    </div>
                  </div>
                  <div id="chart-active-users" class="chart-sm"></div>
                </div>
              </div>
            </div>

            <div
              class="col-lg-6"
              v-if="
                user.identity == 'Super-Admin' ||
                user.identity == 'PM' ||
                user.identity == 'Team-Leader'
              "
            >
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Partner Marketing Data</h4>
                  <div class="ms-auto lh-1">
                    <a
                      class="dropdown-toggle text-secondary"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >{{ dashboardCity }}</a
                    >
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item active"
                        @click="dashboardCity = 'SH'"
                        >SH</a
                      >
                      <a class="dropdown-item" @click="dashboardCity = 'HZ'"
                        >HZ</a
                      >
                      <a class="dropdown-item" @click="dashboardCity = 'BJ'"
                        >BJ</a
                      >
                    </div>
                  </div>
                  <div id="chart-mentions" class="chart-lg">
                    <canvas ref="dashboardOnePartnerType"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6"
              v-if="
                user.identity == 'Super-Admin' ||
                user.identity == 'PM' ||
                user.identity == 'Team-Leader'
              "
            >
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">
                    {{ dashboardCity }} cluster {{ dashboardSelectType }}
                  </h5>
                  <div class="ratio ratio-21x9">
                    <div>
                      <div id="map-world" class="w-100 h-100">
                        <canvas ref="dashboardTwoPartnerData"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              v-if="user.identity === 'Super-Admin' || user.identity === 'BA'"
              class="btn btn-outline-success"
              @click="exportToCSV()"
            >
              export marketing data
            </button>
            <!-- <span v-if="user.identity === 'DB' || user.identity ==='Super-Admin'"> upload marketing data
                  <input type="file" @change="uploadFile" />
                </span> -->
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
                            @click="() => showDeleteDialog(partner._id)"
                            v-if="
                              user.identity == 'Super-Admin' ||
                              user.identity == 'PM'
                            "
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
  <DeleteDialog ref="ConfirmDeleteDialogRef" @confirm="deleteData()">
  </DeleteDialog>
</template>
<script setup>
import { useRouter } from "vue-router";
import axios from "../http";
import { ref, computed, onMounted, watch, nextTick } from "vue";
import {
  Chart,
  DoughnutController,
  BarController,
  ArcElement,
  CategoryScale,
  Tooltip,
  LinearScale,
  BarElement,
  LineController,
  PointElement,
  LineElement,
  elements,
} from "chart.js";
import { useStore } from "vuex";

Chart.register(
  DoughnutController,
  BarController,
  ArcElement,
  CategoryScale,
  Tooltip,
  LinearScale,
  BarElement,
  LineController,
  PointElement,
  LineElement
);

import DeleteDialog from "./DeleteDialog.vue";

const ConfirmDeleteDialogRef = ref(null);
const deleteDialogId = ref("");

const router = useRouter();
const store = useStore();
const partners = ref([]);
const filterInput = ref([]);
const user = computed(() => store.getters.user);

const exportsData = ref([]);
const currentPage = ref(1);
const pageWindowStart = ref(1); // Start page for sliding window
const windowSize = ref(3); // Number of pages to display in the sliding window

const itemsPerPage = ref(10);
const chart = ref(null);
const verticalChart = ref(null);
const labels = ref([
  "collaborating",
  "pending collaboration",
  "collaboration paused",
]);
const backgroundColors = ref(["#0d6efd", "#3d8bfd", "#9ec5fe"]);
const selectedCity = ref("SH");
const chartInstance = ref(null); // 存储图表实例
const verticalChartInstance = ref(null);

const selectedDays = ref(90);
const newPartnersChart = ref(null);
let newPartnersChartInstance = ref(null);

const dashboardOnePartnerType = ref(null);
let dashboardOnePartnerTypeInstance = ref(null);
const dashboardCity = ref("SH");

const dashboardTwoPartnerData = ref(null);
let dashboardTwoPartnerDataInstance = ref(null);
const dashboardSelectType = ref("");

const getData = async () => {
  try {
    const response = await axios.get("api/partners");
    partners.value = response.data;
    console.log(partners.value);
  } catch (err) {
    console.error(err);
  }
};

const goto_add = () => {
  router.push({ path: "/add" });
};

const logOut = () => {
  localStorage.removeItem("userToken");
  //config vuex store
  store.dispatch("clearCurrentState");
  router.push({ path: "/login" });
};

const showDeleteDialog = async (value) => {
  deleteDialogId.value = value;
  ConfirmDeleteDialogRef.value.show();
};

const deleteData = () => {
  const deleteID = deleteDialogId.value;
  axios.delete("api/partners/delete/" + deleteID);
  getData();
};

//分页
const visiblePages = computed(() => {
  let end = pageWindowStart.value + windowSize.value;
  if (end > totalPages.value) end = totalPages.value;
  return Array.from(
    { length: end - pageWindowStart.value },
    (_, i) => i + pageWindowStart.value
  );
});

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

//筛选器
const filteredData = (partners, value) => {
  const regex = new RegExp(value, "i");
  return partners.filter((partner) =>
    Object.values(partner).some(
      (field) => typeof field === "string" && regex.test(field)
    )
  );
};

//chart 1 数据处理
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

//chart 2 数据处理
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

//chart 1
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
//verical chart
const createChart = () => {
  const frequencyMap = new Map();

  for (const partner of partners.value) {
    if (partner && partner.vertical) {
      const count = frequencyMap.get(partner.vertical) || 0;
      frequencyMap.set(partner.vertical, count + 1);
    }
  }

  const verticalLabels = Array.from(frequencyMap.keys());
  const verticalData = Array.from(frequencyMap.values());

  if (verticalChartInstance.value) {
    verticalChartInstance.value.destroy();
  }
  const ctx2 = verticalChart.value.getContext("2d");
  verticalChartInstance.value = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: verticalLabels,
      datasets: [
        {
          label: "Count",
          data: verticalData,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: false,
      scales: {
        x: {
          type: "category",
          maxBarThickness: 10,
        },
        y: {
          type: "linear",
          title: {
            display: true,
            text: "Count",
          },
          beginAtZero: true,
        },
      },
    },
  });
};
//chart 4
const updateChart = () => {
  if (newPartnersChartInstance && newPartnersChartInstance.value) {
    // 根据 selectedDays 计算数据
    const newData = countNewPartners(selectedDays);
    // 更新图表实例的数据
    newPartnersChartInstance.value.data.datasets[0].data = newData;

    // 重绘图表以显示新数据
    newPartnersChartInstance.value.update();
  }
};

//chart 4
const countNewPartners = (days) => {
  const now = new Date();
  // 创建 UTC 时间的 cutoffDate
  const cutoffDate = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() - days,
      0,
      0,
      0
    )
  );
  const filteredPartners = partners.value.filter(
    (partner) => new Date(partner.date) >= cutoffDate
  );
  return filteredPartners.length;
};

//chart 4
const createNewPartnersChart = () => {
  const ctx = newPartnersChart.value.getContext("2d");
  newPartnersChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Last 7 Days", "Last 30 Days", "Last 90 Days"],
      datasets: [
        {
          label: "New Partners",
          data: [
            countNewPartners(7),
            countNewPartners(30),
            countNewPartners(90),
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

//dashboard 1
const prepareChartData = (dashboardCity) => {
  const leadsField = `${dashboardCity.toLowerCase()}_marketing_data_leads`;
  const dataField = `${dashboardCity.toLowerCase()}_marketing_data`;

  const groupedData = partners.value.reduce((acc, partner) => {
    const type = partner.third_partner_type;
    if (!acc[type]) {
      acc[type] = { totalLeads: 0, weightedDataSum: 0 };
    }

    const leads = Number(partner[leadsField]) || 0;
    const dataFieldValue = partner[dataField];
    const dataPercentage = dataFieldValue
      ? parseFloat(dataFieldValue.replace("%", ""))
      : 0;

    acc[type].totalLeads += leads;
    acc[type].weightedDataSum += (leads * dataPercentage) / 100;

    return acc;
  }, {});

  const chartData = Object.entries(groupedData).map(([type, data]) => ({
    type: type,
    leads: data.totalLeads,
    dataPercentage:
      data.totalLeads > 0 ? (data.weightedDataSum / data.totalLeads) * 100 : 0,
  }));

  chartData.sort((a, b) => b.leads - a.leads);
  return chartData;
};

const updateDashboardChart = (value) => {
  if (
    !dashboardOnePartnerTypeInstance ||
    !dashboardOnePartnerTypeInstance.data
  ) {
    console.error("Chart instance or chart data is undefined");
    return;
  }

  let chartData = prepareChartData(value);
  dashboardOnePartnerTypeInstance.data.labels = chartData.map(
    (item) => item.type
  );
  dashboardOnePartnerTypeInstance.data.datasets[0].data = chartData.map(
    (item) => item.leads
  );
  dashboardOnePartnerTypeInstance.data.datasets[1].data = chartData.map(
    (item) => item.dataPercentage
  );
  dashboardOnePartnerTypeInstance.update();
};

const createMixedChart = () => {
  const ctx = dashboardOnePartnerType.value.getContext("2d");
  dashboardOnePartnerTypeInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [], // 初始化时标签为空
      datasets: [
        {
          label: "Leads",
          data: [], // 初始化时数据为空
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          yAxisID: "y-axis-1",
        },
        {
          label: "Data Percentage",
          data: [], // 初始化时数据为空
          type: "line",
          borderColor: "rgba(255, 99, 132, 1)",
          yAxisID: "y-axis-2",
        },
      ],
    },
    options: {
      scales: {
        "y-axis-1": {
          type: "linear",
          display: true,
          position: "left",
        },
        "y-axis-2": {
          type: "linear",
          display: true,
          position: "right",
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            callback: function (value) {
              return value + "%";
            },
          },
        },
      },
      onClick: (event, activeElements) => {
        if (activeElements.length > 0) {
          const dataIndex = activeElements[0].index;
          const type = dashboardOnePartnerTypeInstance.data.labels[dataIndex];
          dashboardSelectType.value = type;
          updateSecondChart(dashboardSelectType.value);
        }
      },
    },
  });
  nextTick(() => {
    console.log(dashboardOnePartnerTypeInstance.data);
  });
};
//对图表二的初始化数据的处理
const getInitialDataForDashboardTwo = (dashboardCity) => {
  const leadsField = `${dashboardCity.toLowerCase()}_marketing_data_leads`;

  // 累加每个类型的 leads
  const typeLeadsSum = partners.reduce((acc, partner) => {
    const type = partner.thrid_partner_type;
    const leads = Number(partner[leadsField]) || 0;
    acc[type] = (acc[type] || 0) + leads;
    return acc;
  }, {});

  // 找出 leads 最高的类型
  const highestLeadsType = Object.entries(typeLeadsSum).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

  // 根据找到的类型，筛选并排序 partners
  const filteredPartners = partners
    .filter((partner) => partner.thrid_partner_type === highestLeadsType)
    .sort((a, b) => b[leadsField] - a[leadsField]);

  // 提取用于图表显示的数据
  const labels = filteredPartners.map((partner) => partner.third_partner_name);
  const leads = filteredPartners.map((partner) => partner[leadsField]);
  const percentages = filteredPartners.map((partner) => {
    const percentageValue = partner[`${city.toLowerCase()}_marketing_data`];
    return percentageValue ? parseFloat(percentageValue.replace("%", "")) : 0;
  });
  console.log(labels,leads,percentages)

  return { labels, leads, percentages, type: highestLeadsType };
};

const createDashboardTwoChart = () => {
  const ctx = dashboardTwoPartnerData.value.getContext("2d");
  dashboardTwoPartnerDataInstance = new Chart(ctx, {
    type: "bar", // 主类型设置为柱状图
    data: {
      labels: [],
      datasets: [
        {
          label: "Leads",
          data: [],
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          yAxisID: "y-axis-1", // 指定使用左侧的 y 轴
        },
        {
          label: "Data Percentage",
          data: [],
          type: "line", // 设置此数据集为折线图类型
          borderColor: "rgba(255, 99, 132, 1)",
          yAxisID: "y-axis-2", // 指定使用右侧的 y 轴
        },
      ],
    },
    options: {
      scales: {
        "y-axis-1": {
          type: "linear",
          display: true,
          position: "left",
        },
        "y-axis-2": {
          type: "linear",
          display: true,
          position: "right",
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            callback: function (value) {
              return value + "%";
            },
            beginAtZero: true, // 确保百分比轴从 0% 开始
          },
        },
      },
    },
  });
};

const updateSecondChart = (type) => {
  // 根据label获取新的数据
  const newData = getNewDataForSecondChart(dashboardCity.value, type);

  // 更新第二个图表的数据
  dashboardTwoPartnerDataInstance.data.labels = newData.labels;
  dashboardTwoPartnerDataInstance.data.datasets[0].data = newData.leads;
  dashboardTwoPartnerDataInstance.data.datasets[1].data = newData.percentages;
  dashboardTwoPartnerDataInstance.update();
};

const getNewDataForSecondChart = (dashboardCity, type) => {
  const leadsField = `${dashboardCity.toLowerCase()}_marketing_data_leads`;
  const dataField = `${dashboardCity.toLowerCase()}_marketing_data`;

  // 过滤出匹配的 partners 并按照 leads 数量排序
  const filteredPartners = partners.value
    .filter((partner) => partner.third_partner_type === type)
    .sort((a, b) => b[leadsField] - a[leadsField])
    .slice(0, 10); // 取前十名

  // 提取数据用于图表显示
  const labels = filteredPartners.map((partner) => partner.third_partner_name);
  const leads = filteredPartners.map((partner) => partner[leadsField]);
  const percentages = filteredPartners.map((partner) => {
    const percentageValue = partner[dataField];
    return percentageValue ? parseFloat(percentageValue.replace("%", "")) : 0;
  });

  return { labels, leads, percentages };
};



onMounted(async () => {
  const fetchDataAndInitChart = async () => {
    await getData();
    countNewPartners(selectedDays.value);
    initChart();
    createNewPartnersChart();
    updateChart();
    createMixedChart();
    nextTick(() => {
      updateDashboardChart(dashboardCity.value);
    });
    createDashboardTwoChart();
    getInitialDataForDashboardTwo();
  };
  fetchDataAndInitChart();
});

watch(
  dashboardCity,
  (newValue) => {
    if (
      dashboardOnePartnerTypeInstance &&
      dashboardOnePartnerTypeInstance.data
    ) {
      updateDashboardChart(newValue);
    }
  },
  { immediate: true }
);

watch(selectedDays, () => {
  updateChart();
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
watch(
  partners,
  (newVal) => {
    if (newVal && newVal.length > 0) {
      createChart();
    }
  },
  { deep: true }
);

//upload function
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

const exportToCSV = () => {
  axios
    .get("api/partners/export")
    .then((res) => {
      exportsData.value = res.data;
      const csv = [];
      const headers = Object.keys(exportsData.value[0]);
      csv.push(headers.join(",")); // 添加表头行

      for (const partner of exportsData.value) {
        const row = [];
        for (const header of headers) {
          let value = partner[header];
          if (value !== null && value !== undefined) {
            value = value.toString().replace(/"/g, '""'); // 转换为字符串并处理双引号
            if (value.indexOf(",") >= 0 || value.indexOf("\n") >= 0) {
              value = `"${value}"`; // 包含逗号或换行符的字段用双引号包围
            }
          } else {
            value = ""; // 如果值为 null 或 undefined，使用空字符串
          }
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