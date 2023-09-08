<template>
  <div>
    <div class="head-search">
      <div class="part-list">Partner List</div>
      <div class="search_form">
        <form class="d-flex custom_search" role="search">
          <input
            v-model="filterInput"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
    <div class="filter">
      <div class="select_section">
        <div class="category">
          <div class="left">
            <div>服务商类型</div>
          </div>
          <div class="right">
            <div class="filter-item">
              <label class="form-label">2B或2C</label>
              <select v-model="select_2b_or_2c">
                <option value="2B">2B</option>
                <option value="2C">2C</option>
                <option value="MIX">MIX</option>
              </select>
            </div>
            <div class="filter-item">
              <label class="form-label">服务商评级</label>
              <select v-model="select_tier">
                <option value="金">金</option>
                <option value="银">银</option>
                <option value="铜">铜</option>
              </select>
            </div>
            <div class="filter-item">
              <label class="form-label">Cluster</label>
              <select v-model="select_cluster">
                <option value="SH">SH</option>
                <option value="HZ">HZ</option>
                <option value="BJ">BJ</option>
              </select>
            </div>
          </div>
        </div>
        <div class="category">
          <div class="left">服务商情况</div>
          <div class="right">
            <div class="filter-item">
              <label class="form-label">POC-HZ </label>
              <select v-model="select_hz_poc">
                <option value="jinyang">jinyang</option>
                <option value="zhimaop">zhimaop</option>
                <option value="qinying">qinying</option>
                <option value="yiduc">yiduc</option>
              </select>
            </div>
            <div class="filter-item">
              <label class="form-label">POC-SH</label>
              <select v-model="select_sh_poc">
                <option value="xieyang">xieyang</option>
                <option value="fangfangf">fangfangf</option>
              </select>
            </div>
            <div class="filter-item">
              <label class="form-label"> POC-BJ</label>
              <select v-model="select_bj_poc">
                <option value="xieyang">xieyang</option>
                <option value="fangfangf">fangfangf</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="filterInput" class="row-section">
      <div class="item-wrap">
        <div
          v-for="partner in SearchData(partners, filterInput)"
          :key="partner._id"
          class="single_item col-sm-6 col-lg-3"
        >
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ partner.third_partner_name }}</h5>
              <div class="links">
                <router-link
                  v-if="userIdentity.identity == 'Super-Admin'"
                  class="btn btn-secondary"
                  style="
                    --bs-btn-padding-y: 0.25rem;
                    --bs-btn-padding-x: 0.5rem;
                    --bs-btn-font-size: 0.75rem;
                  "
                  :to="'/detials/' + partner._id"
                >
                  <div>Edit Partner</div>
                </router-link>
                <router-link
                  :to="'/single-partner/' + partner._id"
                  class="btn btn-primary"
                  style="
                    --bs-btn-padding-y: 0.25rem;
                    --bs-btn-padding-x: 0.5rem;
                    --bs-btn-font-size: 0.75rem;
                  "
                  >Partner details</router-link
                >
              </div>
            </div>
            <div class="card-body">
              <dl class="row">
                <dt class="col-5">服务商类型:</dt>
                <dd class="col-7">{{ partner.third_partner_type }}</dd>
                <dt class="col-5">Vertical:</dt>
                <dd class="col-7">{{ partner.vertical }}</dd>
                <dt class="col-5">服务商介绍:</dt>
                <dd class="col-7"></dd>
              </dl>
              <div class="footer-introduce">{{ partner.introduce }}</div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row-section">
      <div class="item-wrap">
        <div
          v-for="partner in filteredData"
          :key="partner._id"
          class="card single_item col-lg-3"
        >
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ partner.third_partner_name }}</h5>
              <div class="links">
                <router-link
                  v-if="userIdentity.identity == 'Super-Admin'"
                  class="btn btn-secondary"
                  style="
                    --bs-btn-padding-y: 0.25rem;
                    --bs-btn-padding-x: 0.5rem;
                    --bs-btn-font-size: 0.75rem;
                  "
                  :to="'/detials/' + partner._id"
                >
                  <div>Edit Partner</div>
                </router-link>
                <router-link
                  :to="'/single-partner/' + partner._id"
                  class="btn btn-primary"
                  style="
                    --bs-btn-padding-y: 0.25rem;
                    --bs-btn-padding-x: 0.5rem;
                    --bs-btn-font-size: 0.75rem;
                  "
                  >Partner details</router-link
                >
              </div>
            </div>
            <div class="card-body">
              <dl class="row">
                <dt class="col-5">服务商类型:</dt>
                <dd class="col-7">{{ partner.third_partner_type }}</dd>
                <dt class="col-5">Vertical:</dt>
                <dd class="col-7">{{ partner.vertical }}</dd>
                <dt class="col-5">服务商介绍:</dt>
                <dd class="col-7"></dd>
              </dl>
              <div class="footer-introduce">{{ partner.introduce }}</div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "../http";
import { useStore } from "vuex";

const partners = ref([]);
//here changed filterInput type into '' so as to avoid search function and filter function not working same time
const filterInput = ref("");
const store = useStore();
const userIdentity = computed(() => store.getters.user);
const select_2b_or_2c = ref(null);
const select_agent_or_partner = ref(null);
const select_tier = ref(null);
const select_first_time = ref(null);
const select_hz_poc = ref(null);
const select_sh_poc = ref(null);
const select_bj_poc = ref(null);
const searchData = ref([]);

onMounted(async () => {
  await getData();
});

const getData = async () => {
  try {
    let { data } = await axios.get("/api/partners");
    partners.value = data;
  } catch (error) {}
};
const filteredData = computed(() => {
  const value = {
    select_2b_or_2c: select_2b_or_2c.value,
    select_tier: select_tier.value,
    select_first_time: select_first_time.value,
    select_hz_poc: select_hz_poc.value,
    select_sh_poc: select_sh_poc.value,
    select_bj_poc: select_bj_poc.value,
  };
  return filterData(partners.value, value);
});

const filterData = (data, value) => {
  let result = data;
  if (value.select_2b_or_2c) {
    result = result.filter(
      (partner) => partner.b2b_or_b2c === value.select_2b_or_2c
    );
  }
  if (value.select_tier) {
    result = result.filter((partner) => partner.tier === value.select_tier);
  }

  if (value.select_hz_poc) {
    result = result.filter((partner) => partner.POC_HZ === value.select_hz_poc);
  }
  if (value.select_sh_poc) {
    result = result.filter((partner) => partner.POC_SH === value.select_sh_poc);
  }
  if (value.select_bj_poc) {
    result = result.filter((partner) => partner.POC_BJ === value.select_bj_poc);
  }
  return result;
};

const SearchData = (partners, value) => {
  console.log(value);
  const regex = new RegExp(value, "i");
  return partners.filter((partner) =>
    Object.values(partner).some(
      (field) => typeof field === "string" && regex.test(field)
    )
  );
};
</script>

<style scoped>
.head-search {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.filter {
  left: calc(50% - 817px / 2 + 91.5px);
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-bottom: 30px;
}
.select_section .category {
  display: flex;
  align-items: flex-start;
}
.select_section .category:last-child {
  padding-bottom: 0;
}
.category .left {
  flex: 0.2;
  border-bottom: 1px solid white;
  padding: 20px;
  background-color: #0d6efd;
  color: white;
}
.category:last-child .left {
  border-bottom: 0;
}
.category .right {
  flex: 0.8;
  margin-right: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
.filter-item {
  margin: 16px;
}
.filter-item .form-label {
  margin-right: 10px;
}

.item-wrap {
  display: flex;
  flex-wrap: wrap;
}
.single_item {
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 1px 4px 4px 1px;
  flex: 0 0 calc(50% - 10px);
  margin-right: 10px;
  margin-bottom: 10px;
}
.single_item:nth-child(2n) {
  margin-right: 0;
}

.row-deck > .col .card,
.row-deck > [class*="col-"] .card {
  flex: 1 1 auto;
}
.card {
  box-shadow: rgba(35, 46, 60, 0.04) 0 2px 4px 0;
  border: 1px solid rgba(101, 109, 119, 0.16);
}
.card .card-header {
  display: flex;
  justify-content: space-between;
  border-bottom:#6c757d
}
.card .card-body {
  text-align: left;
}
.card-body .col-5 {
  color: #2d3d50;
  font-weight: 400;
}

.card-body .col-7 {
  color: #2d3d50;
  font-weight: 500;
  font-size: 1rem;
}
.card-body .footer-introduce{
  font-weight: 400;
  font-size: 0.9rem;
}
</style>