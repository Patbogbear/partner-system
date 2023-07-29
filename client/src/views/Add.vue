<template>
  <div class="add">
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
                  <div class="col-xl-4">
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
                            <label class="form-label">业务类型</label>
                            <div>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="party.b2b_or_b2c"
                                  value="2B"
                                />
                                <span class="form-check-label">2B</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="party.b2b_or_b2c"
                                  value="2C"
                                />
                                <span class="form-check-label">2C</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="party.b2b_or_b2c"
                                  value="mix"
                                />
                                <span class="form-check-label">MIX</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <div>
                            <label class="form-label">选择级别</label>
                            <div>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="party.tier"
                                  value="A1"
                                />
                                <span class="form-check-label">A1</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="party.tier"
                                  value="A2"
                                />
                                <span class="form-check-label">A2</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="party.tier"
                                  value="B1"
                                />
                                <span class="form-check-label">B1</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="party.tier"
                                  value="B2"
                                />
                                <span class="form-check-label">B2</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <div>
                            <label class="row">
                              <span class="col">是否第一次合作</span>
                              <span class="col-auto">
                                <label
                                  class="form-check form-check-single form-switch"
                                >
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    checked
                                    v-model="party.first_time_cooperate"
                                  />
                                </label>
                              </span>
                            </label>
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
                          <label class="form-label">公司介绍 </label>
                          <textarea
                            class="form-control"
                            name="example-textarea-input"
                            rows="6"
                            placeholder="partner introduce.."
                            v-model="party.introduce"
                          ></textarea>
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
                              >https://</span
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="basic-url"
                              aria-describedby="basic-addon3"
                              v-model="party.website"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="row">
                      <div class="col-md-6 col-xl-12">
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
                          <label class="form-label">渠道联系人</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="party.channel_contact"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">渠道方对接职位</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="party.channel_contact_position"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">渠道方对接联系方式</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="party.channel_contact_information"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="row">
                      <div class="col-md-6 col-xl-12">
                        <div class="mb-3">
                          <label class="form-label">HZ-POC</label>
                          <select
                            class="form-control form-select"
                            v-model="party.POC_HZ"
                          >
                            <option value="jinyang">jinyangz</option>
                            <option value="yiduc">bingyangw</option>
                            <option value="mingliangh">hajiang</option>
                            <option value="zhimaop">zhimaop</option>
                            <option value="qinying">qinying</option>
                            <option value="yiduc">yiduc</option>
                            <option value="yiduc">mingliangh</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <div class="input-group">
                            <span class="input-group-text">HZ-Vertical</span>
                            <input
                              class="form-control"
                              aria-label="With textarea"
                              v-model="party.HZ_vertical"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <div class="input-group">
                            <span class="input-group-text">HZ合作状态</span>
                            <input
                              class="form-control"
                              aria-label="With textarea"
                              v-model="party.HZ_tracking_process"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">HZ合作状态细分</label>
                          <input
                            type="text"
                            name="input-mask"
                            class="form-control"
                            data-mask="0"
                            data-mask-visible="true"
                            placeholder=""
                            autocomplete="off"
                            v-model="party.HZ_tracking_process_segment"
                          />
                        </div>
                        <div class="mb-3">
                          <div class="input-group">
                            <span class="input-group-text">HZ渠道来源</span>
                            <input
                              class="form-control"
                              aria-label="With textarea"
                              v-model="party.HZ_channel_source"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">SH-POC</label>
                          <select
                            class="form-control form-select"
                            v-model="party.POC_SH"
                          >
                            <option value="xieyang">xieyang</option>
                            <option value="fangfangf">wuyuanyuan</option>
                            <option value="fangfangf">zhangtao</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <div class="input-group">
                            <span class="input-group-text">SH-Vertical</span>
                            <input
                              class="form-control"
                              aria-label="With textarea"
                              v-model="party.SH_vertical"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <div class="input-group">
                            <span class="input-group-text">SH合作状态</span>
                            <input
                              class="form-control"
                              aria-label="With textarea"
                              v-model="party.SH_tracking_process"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <span class="input-group-text">SH合作状态细分</span>
                          <input
                            class="form-control"
                            aria-label="With textarea"
                            v-model="party.SH_tracking_process_segment"
                          />
                        </div>
                        <div class="mb-3">
                          <div class="input-group">
                            <span class="input-group-text">SH渠道来源</span>
                            <input
                              class="form-control"
                              aria-label="With textarea"
                              v-model="party.SH_channel_source"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">BJ-POC</label>
                          <select
                            class="form-control form-select"
                            v-model="party.POC_BJ"
                          >
                            <option value="xieyang">AAA</option>
                            <option value="fangfangf">BBB</option>
                          </select>
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
        major_cliens_or_case: "",
        website: "",
        tier: "",
        first_time_cooperate: "",
        channel_contact: "",
        channel_contact_position: "",
        channel_contact_information: "",
        marketing_data: "",
        transfer_data: "",
        channel_categroy_activate_data: "",
        coorprate_score: "",
        POC_HZ: "",
        POC_SH: "",
        POC_BJ: "",
        HZ_vertical: "",
        HZ_tracking_process: "",
        HZ_tracking_process_segment: "",
        HZ_channel_source: "",
        SH_vertical: "",
        SH_tracking_process: "",
        SH_tracking_process_segment: "",
        SH_channel_source: "",
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