<template>
  <div class="add">
    <h1>This is an Add page</h1>
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-cards">
          <div class="col-12">
            <form method="post" class="card" @submit.prevent="addData()">
              <div class="card-header">
                <h4 class="card-title">Add Partner</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-xl-6">
                    <div class="row">
                      <div class="col-md-6 col-xl-12">
                        <div class="mb-3">
                          <label class="form-label">服务商类型</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="party.thrid_party_type"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">服务商名称</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商名称"
                            v-model="party.thrid_party_name"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <div>
                            <label class="form-label">2B or 2C</label>
                            <select
                              class="form-select form-select-sm"
                              aria-label=".form-select-sm example"
                              v-model="party.b2b_or_b2c"
                            >
                              <option value="2B">2B</option>
                              <option value="2C">2C</option>
                            </select>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">公司所在地</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="公司所在地"
                            v-model="party.party_location"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">服务覆盖范围</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务覆盖范围"
                            v-model="party.party_scope"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">公司介绍</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="公司介绍"
                            v-model="party.introduce"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">服务介绍</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务介绍"
                            v-model="party.service_introduce"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">优势和特色介绍</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="优势和特色介绍"
                            v-model="party.advantage_features_introduce"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">主要客户/成功案例</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="主要客户/成功案例"
                            v-model="party.major_cliens_or_case"
                          />
                        </div>

                        <div class="mb-3">
                          <label for="basic-url" class="form-label"
                            >网站网址</label
                          >
                          <div class="input-group">
                            <span class="input-group-text" id="basic-addon3"
                              >https://example.com/users/</span
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="basic-url"
                              aria-describedby="basic-addon3"
                              v-model="party.website"
                            />
                          </div>
                          <div class="form-text">
                            Example help text goes outside the input group.
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label"
                            >是否是谷歌代理商/渠道Partner</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务覆盖范围"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="row">
                      <div class="col-md-6 col-xl-12">
                        <div class="mb-3">
                          <label class="form-label">选择级别</label>
                          <select
                            class="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            v-model="party.tier"
                          >
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">是否第一次合作</label>
                          <select
                            class="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            v-model="party.first_time_cooperate"
                          >
                            <option value="是">是第一次合作</option>
                            <option value="否">非第一次合作</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">市场活动数据</label>
                          <input
                            class="form-control"
                            data-bs-toggle="autosize"
                            name="example-textarea-input"
                            rows="6"
                            placeholder="市场活动数据"
                            v-model="party.marketing_data"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">转介绍数据</label>
                          <input
                            class="form-control"
                            data-bs-toggle="autosize"
                            name="example-textarea-input"
                            rows="6"
                            placeholder="转介绍数据"
                            v-model="party.transfer_data"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">渠道类别活动数据</label>
                          <input
                            class="form-control"
                            data-bs-toggle="autosize"
                            name="example-textarea-input"
                            rows="6"
                            placeholder="渠道类别活动数据"
                            v-model="party.channel_categroy_activate_data"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">合作评分</label>
                          <input
                            class="form-control"
                            data-bs-toggle="autosize"
                            name="example-textarea-input"
                            rows="6"
                            placeholder="合作评分"
                            v-model="party.coorprate_score"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">HZ-POC</label>
                          <select
                            class="form-control form-select"
                            v-model="party.POC_HZ"
                          >
                            <option value="jinyang">jinyang</option>
                            <option value="mingliangh">mingliangh</option>
                            <option value="zhimaop">zhimaop</option>
                            <option value="qinying">qinying</option>
                            <option value="yiduc">yiduc</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <div class="input-group">
                            <span class="input-group-text">杭州追踪数据</span>
                            <textarea
                              class="form-control"
                              aria-label="With textarea"
                              v-model="party.HZ_tracking_process"
                            ></textarea>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">SH-POC</label>
                          <select
                            class="form-control form-select"
                            v-model="party.POC_SH"
                          >
                            <option value="xieyang">xieyang</option>
                            <option value="fangfangf">fangfangf</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <div class="input-group">
                            <span class="input-group-text">上海追踪数据</span>
                            <textarea
                              class="form-control"
                              aria-label="With textarea"
                              v-model="party.SH_tracking_process"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="mb-3 mb-0">
                            <label class="form-label">需求</label>
                            <textarea
                              rows="5"
                              class="form-control"
                              placeholder="Here can be your description"
                              v-model="party.demonds"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer text-end">
                <div class="d-flex">
                  <a href="#" class="btn btn-link" @click="gotoHome()"
                    >Cancel</a
                  >
                  <button type="submit" class="btn btn-primary ms-auto">
                    Send data
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../http";
export default {
  data() {
    return {
      party: {
        thrid_party_type: "",
        thrid_party_name: "",
        b2b_or_b2c: "",
        party_location: "",
        party_scope: "",
        introduce: "",
        service_introduce: "",
        advantage_features_introduce: "",
        major_cliens_or_case: "",
        website: "",
        tier: "",
        first_time_cooperate: "",
        marketing_data: "",
        transfer_data: "",
        channel_categroy_activate_data: "",
        coorprate_score: "",
        POC_HZ: "",
        POC_SH: "",
        HZ_tracking_process: "",
        SH_tracking_process: "",
        demonds: "",
      },
    };
  },
  methods: {
    addData() {
      const res = axios.post("/api/parties/add", this.party).then((res) => {
        //console.log(this.party);
        this.$router.push({ path: "/" });
      });
    },
    gotoHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>