<template>
  <div class="about">
    <div class="filter">
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
      <div class="select_section">
        <div class="category">
          <div class="left">
            <div>服务商类型</div>
          </div>
          <div class="right">
            <div class="item_one">
              <label class="form-label">2B或2C</label>
              <select v-model="select_2b_or_2c">
                <option value="2B">2B</option>
                <option value="2C">2C</option>
              </select>
            </div>
            <div class="item_one">
              <label class="form-label">选择级别</label>
              <select v-model="select_tier">
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
              </select>
            </div>
          </div>
        </div>
        <div class="category">
          <div class="left">服务商情况</div>
          <div class="right">
            <div class="item_one">
              是否第一次合作
              <select v-model="select_first_time">
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </div>
            <div class="item_one">
              POC-HZ
              <select v-model="select_hz_poc">
                <option value="jinyang">jinyang</option>
                <option value="zhimaop">zhimaop</option>
                <option value="qinying">qinying</option>
                <option value="yiduc">yiduc</option>
              </select>
            </div>
            <div class="item_one">
              POC-SH<select v-model="select_sh_poc">
                <option value="xieyang">xieyang</option>
                <option value="fangfangf">fangfangf</option>
              </select>
            </div>
            <div class="item_one">
              POC-BJ<select v-model="select_bj_poc">
                <option value="xieyang">xieyang</option>
                <option value="fangfangf">fangfangf</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="filterInput" class="row">
      <div
        v-for="partner in SearchData(partners, filterInput)"
        :key="partner._id"
        class="card single_item col-lg-3"
        
      >
        <div class="card-body">
          <h5 class="card-title">{{ partner.third_partner_name }}</h5>
          <p class="card-text">
            {{ partner.introduce }}
            {{ partner.service_introduce }}
          </p>
          <router-link
            :to="'/single-partner/' + partner._id"
            class="btn btn-primary"
            >Partner details</router-link
          >
          <router-link
            v-if="userIdentity.identity == 'Super-Admin'"
            class="btn btn-primary"
            :to="'/detials/' + partner._id"
          >
            <div>Edit Partner</div>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <div
        v-for="partner in filteredData"
        :key="partner._id"
        class="card single_item col-lg-3"
      >
        <div class="card-body">
          <h5 class="card-title">{{ partner.third_partner_name }}</h5>
          <p class="card-text">
            {{ partner.introduce }}
            {{ partner.service_introduce }}
          </p>
          <router-link
            :to="'/single-partner/' + partner._id"
            class="btn btn-primary"
            >Partner details</router-link
          >
          <router-link
            v-if="userIdentity.identity == 'Super-Admin'"
            class="btn btn-primary"
            :to="'/detials/' + partner._id"
          >
            <div>Edit Partner</div>
          </router-link>
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
    select_agent_or_partner: select_agent_or_partner.value,
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
  if (value.select_agent_or_partner) {
    result = result.filter(
      (partner) => partner.thrid_partner_type === value.select_agent_or_partner
    );
  }
  if (value.select_tier) {
    result = result.filter((partner) => partner.tier === value.select_tier);
  }
  if (value.select_first_time) {
    result = result.filter(
      (partner) => partner.first_time_cooperate === value.select_first_time
    );
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
.filter{
  margin-top: 50px;
  height: 185px;
  left: calc(50% - 817px / 2 + 91.5px);
  top: 210px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1px 4px 4px 1px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 50px;
}
.category {
  display: flex;
  padding-left: 250px;
  padding-top: 30px;
}
.right {
  display: flex;
  margin-left: 50px;
}
.select_section {
  margin-bottom: 30px;
}
.single_item {
  width: 45%;
  margin: 5px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 1px 4px 4px 1px;
}
/* @media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 auto;
    width: 50%;
  }
} */
.custom_search {
  margin-left: 250px;
  margin-right: 250px;
  margin-top: 80px;
}
.item_one {
  padding-right: 20px;
}
</style>