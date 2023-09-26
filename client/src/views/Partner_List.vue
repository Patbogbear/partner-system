<template>
  <div class="container-xl">
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
              <label class="form-label">具体类型</label>
              <select v-model="select_third_partner_type">
                <option value="支付">支付</option>
                <option value="物流">物流</option>
                <option value="建站&代运营">建站&代运营</option>
                <option value="ERP&CRM">ERP&CRM</option>
                <option value="KOL内容营销">KOL内容营销</option>
                <option value="培训机构">培训机构</option>
                <option value="媒体">媒体</option>
                <option value="保险">保险</option>
                <option value="出口认证">出口认证</option>
                <option value="财税&VAT">财税&VAT</option>
                <option value="展会">展会</option>
                <option value="代理商&谷歌代运营">代理商&谷歌代运营</option>
                <option value="商会">商会</option>
                <option value="协会">协会</option>
                <option value="服务平台">服务平台</option>
                <option value="服务中心">服务中心</option>
                <option value="政府/产业园">政府/产业园</option>
                <option value="VC">VC</option>
                <option value="其他">其他</option>
                <option value="all">All</option>
              </select>
            </div>
            <div class="filter-item">
              <label class="form-label">服务商评级</label>
              <select v-model="select_tier">
                <option value="金">金</option>
                <option value="银">银</option>
                <option value="铜">铜</option>
                <option value="all">All</option>
              </select>
            </div>
          </div>
        </div>
        <div class="category">
          <div class="left">服务商情况</div>
          <div class="right">
            <div class="filter-item">
              <label class="form-label">2B或2C</label>
              <select v-model="select_2b_or_2c">
                <option value="B2B">2B</option>
                <option value="B2C">2C</option>
                <option value="Mix">MIX</option>
                <option value="all">All</option>
              </select>
            </div>
            <div class="filter-item">
              <label class="form-label">Cluster</label>
              <select v-model="select_cluster">
                <option value="SH">SH</option>
                <option value="HZ">HZ</option>
                <option value="BJ">BJ</option>
                <option value="all">ALl</option>
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
const select_cluster = ref(null);
const select_tier = ref(null);
const select_third_partner_type = ref(null);
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
    select_cluster: select_cluster.value,
    select_third_partner_type: select_third_partner_type.value,
  };
  return filterData(partners.value, value);
});

const filterData = (data, value) => {
  let result = data;
  if (value.select_2b_or_2c && value.select_2b_or_2c !== "all") {
    result = result.filter(
      (partner) => partner.b2b_or_b2c === value.select_2b_or_2c
    );
  }
  if (value.select_tier && value.select_tier !== "all") {
    const selectedTiers = ["金牌", "银牌", "铜牌"];
    result = result.filter((partner) =>
      selectedTiers.some((tier) => {
        return (
          partner.hz_tier === tier ||
          partner.sh_tier === tier ||
          partner.bj_tier === tier
        );
      })
    );
  }
  if (value.select_cluster && value.select_cluster !== "all") {
    result = result.filter(
      (partner) => partner.cluster === value.select_cluster
    );
  }
  if (
    value.select_third_partner_type &&
    value.select_third_partner_type !== "all"
  ) {
    result = result.filter(
      (partner) =>
        partner.third_partner_type === value.select_third_partner_type
    );
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
@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1199px;
  }
}
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
  border-bottom: #6c757d;
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
.card-body .footer-introduce {
  font-weight: 400;
  font-size: 0.9rem;
}
</style>