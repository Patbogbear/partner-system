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
              2B或2C<select v-model="select_category">
                <option value="是">是</option>
                <option value="是">否</option>
              </select>
            </div>
            <div class="item_one">
              是否是谷歌代理商/渠道Partner
              <select v-model="select_category">
                <option value="是">是</option>
                <option value="是">否</option>
              </select>
            </div>
            <div class="item_one">
              <label class="form-label">选择级别</label>
              <select v-model="filterInput" required>
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
              <select v-model="select_category">
                <option value="是">是</option>
                <option value="是">否</option>
              </select>
            </div>
            <div class="item_one">
              POC-HZ
              <select v-model="filterInput">
                <option value="jinyang">jinyang</option>
                <option value="mingliangh">mingliangh</option>
                <option value="zhimaop">zhimaop</option>
                <option value="qinying">qinying</option>
                <option value="yiduc">yiduc</option>
              </select>
            </div>
            <div class="item_one">POC-SH</div>
            <select v-model="filterInput">
              <option value="xieyang">xieyang</option>
              <option value="fangfangf">fangfangf</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div
        class="card single_item col-lg-3"
        v-for="partner in filteredData(partners, filterInput)"
        :key="partner._id"
        style="width: 50%"
      >
        <div class="card-body">
          <h5 class="card-title">{{ partner.thrid_party_name }}</h5>
          <p class="card-text">
            {{ partner.introduce }}
            {{ partner.service_introduce }}
          </p>
          <router-link
            :to="{ name: 'single-partner', params: { id: partner._id } }"
            class="btn btn-primary"
            >Partner details</router-link
          >
          <router-link
            v-if="userIdentity.identity == 'Admin'"
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

const select_category = ref([]);
const partners = ref([]);
const filterInput = ref([]);
const store = useStore();
const userIdentity = store.getters.user;

computed(() => {
  return store.getters.user;
});

const getData = async () => {
  try {
    let { data } = await axios.get("/api/parties");
    partners.value = data;
  } catch (error) {}
};
const filterCategory = (partners, value) => {
  return partners.filter(() => {});
};
const filteredData = (partners, value) => {
  const regex = new RegExp(value, "i");
  return partners.filter((partner) =>
    Object.values(partner).some(
      (field) => typeof field === "string" && regex.test(field)
    )
  );
};
getData();
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: 250px;
  margin-right: 180px;
}
.card{
  
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
.select_section{
  margin-bottom: 30px;
}
@media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 auto;
    width: 50%;
  }
}
.custom_search {
  margin-left: 250px;
  margin-right: 250px;
  margin-top: 80px;
}
</style>