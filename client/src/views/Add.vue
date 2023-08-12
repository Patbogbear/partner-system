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
                          <label class="form-label">Cluster</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="partner.cluster"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">服务商类型</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="partner.third_partner_type"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">服务商名称</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商名称"
                            v-model="partner.third_partner_name"
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
                                  v-model="partner.b2b_or_b2c"
                                  value="2B"
                                />
                                <span class="form-check-label">2B</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.b2b_or_b2c"
                                  value="2C"
                                />
                                <span class="form-check-label">2C</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.b2b_or_b2c"
                                  value="mix"
                                />
                                <span class="form-check-label">MIX</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">公司所在地</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="公司所在地"
                            v-model="partner.partner_location"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">服务覆盖范围</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务覆盖范围"
                            v-model="partner.partner_scope"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">公司介绍 </label>
                          <textarea
                            class="form-control"
                            name="example-textarea-input"
                            rows="6"
                            placeholder="partner introduce.."
                            v-model="partner.introduce"
                          ></textarea>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">主要客户/成功案例</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="主要客户/成功案例"
                            v-model="partner.major_clients_or_case"
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
                              v-model="partner.website"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <div>
                            <label class="form-label">服务商评级(SH)</label>
                            <div>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.tier"
                                  value="A1"
                                />
                                <span class="form-check-label">A1</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.tier"
                                  value="A2"
                                />
                                <span class="form-check-label">A2</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.tier"
                                  value="B1"
                                />
                                <span class="form-check-label">B1</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.tier"
                                  value="B2"
                                />
                                <span class="form-check-label">B2</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <div>
                            <label class="form-label">服务商评级(SH)</label>
                            <div>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.sh_tier"
                                  value="A1"
                                />
                                <span class="form-check-label">A1</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.sh_tier"
                                  value="A2"
                                />
                                <span class="form-check-label">A2</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.sh_tier"
                                  value="B1"
                                />
                                <span class="form-check-label">B1</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.sh_tier"
                                  value="B2"
                                />
                                <span class="form-check-label">B2</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <div>
                            <label class="form-label">服务商评级(HZ)</label>
                            <div>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.hz_tier"
                                  value="A1"
                                />
                                <span class="form-check-label">A1</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.hz_tier"
                                  value="A2"
                                />
                                <span class="form-check-label">A2</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.hz_tier"
                                  value="B1"
                                />
                                <span class="form-check-label">B1</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.hz_tier"
                                  value="B2"
                                />
                                <span class="form-check-label">B2</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <div>
                            <label class="form-label">服务商评级(BJ)</label>
                            <div>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.bj_tier"
                                  value="A1"
                                />
                                <span class="form-check-label">A1</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.bj_tier"
                                  value="A2"
                                />
                                <span class="form-check-label">A2</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.bj_tier"
                                  value="B1"
                                />
                                <span class="form-check-label">B1</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  v-model="partner.hz_tier"
                                  value="B2"
                                />
                                <span class="form-check-label">B2</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="row">
                      <div class="col-md-6 col-xl-12">
                        <div class="mb-3">
                          <label class="form-label">渠道联系人(SH)</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="partner.sh_contact.channel_contact"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">渠道方对接职位(SH)</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="partner.sh_contact.channel_contact_position"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label"
                            >渠道方对接联系方式(SH)</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="partner.sh_contact.channel_contact_information"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">渠道联系人(HZ)</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="partner.hz_contact.channel_contact"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">渠道方对接职位(HZ)</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="partner.hz_contact.channel_contact_position"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label"
                            >渠道方对接联系方式(HZ)</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="partner.hz_contact.channel_contact_information"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">渠道联系人(BJ)</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="partner.bj_contact.channel_contact"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">渠道方对接职位(BJ)</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="partner.bj_contact.channel_contact_position"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label"
                            >渠道方对接联系方式(BJ)</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            placeholder="服务商类型"
                            v-model="partner.bj_contact.channel_contact_information"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <div class="input-group">
                            <span class="input-group-text">Vertical</span>
                            <input
                              class="form-control"
                              aria-label="With textarea"
                              v-model="partner.vertical"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">市场活动数据(HZ)</label>
                          <input
                            class="form-control"
                            data-bs-toggle="autosize"
                            name="example-textarea-input"
                            rows="6"
                            placeholder="市场活动数据"
                            v-model="partner.hz_marketing_data"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">转介绍数据(HZ)</label>
                          <input
                            class="form-control"
                            data-bs-toggle="autosize"
                            name="example-textarea-input"
                            rows="6"
                            placeholder="转介绍数据"
                            v-model="partner.hz_transfer_data"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">市场活动数据(SH)</label>
                          <input
                            class="form-control"
                            data-bs-toggle="autosize"
                            name="example-textarea-input"
                            rows="6"
                            placeholder="市场活动数据"
                            v-model="partner.sh_marketing_data"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">转介绍数据(SH)</label>
                          <input
                            class="form-control"
                            data-bs-toggle="autosize"
                            name="example-textarea-input"
                            rows="6"
                            placeholder="转介绍数据"
                            v-model="partner.sh_transfer_data"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">市场活动数据(BJ)</label>
                          <input
                            class="form-control"
                            data-bs-toggle="autosize"
                            name="example-textarea-input"
                            rows="6"
                            placeholder="市场活动数据"
                            v-model="partner.bj_marketing_data"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">转介绍数据(BJ)</label>
                          <input
                            class="form-control"
                            data-bs-toggle="autosize"
                            name="example-textarea-input"
                            rows="6"
                            placeholder="转介绍数据"
                            v-model="partner.bj_transfer_data"
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
                            v-model="partner.POC_HZ"
                          >
                            <option value="jinyang">jinyangz@google.com</option>
                            <option value="zhimaop">zhimaop@google.com</option>
                            <option value="qinying">qinying@google.com</option>
                            <option value="yiduc">yiduc@google.com</option>
                      
                          </select>
                        </div>

                        <div class="mb-3">
                          <div class="input-group">
                            <span class="input-group-text">HZ合作状态</span>
                            <input
                              class="form-control"
                              aria-label="With textarea"
                              v-model="partner.HZ_tracking_process"
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
                            v-model="partner.HZ_tracking_process_segment"
                          />
                        </div>

                        <div class="mb-3">
                          <label class="form-label">SH-POC</label>
                          <select
                            class="form-control form-select"
                            v-model="partner.POC_SH"
                          >
                            <option value="xieyang">xieyang@google.com</option>
                            <option value="fangfangf">wuyuanyuan@google.com</option>
                            <option value="fangfangf">zhangtao@google.com</option>
                            <option value="n@google.com">n@google.com</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <div class="input-group">
                            <span class="input-group-text">SH合作状态</span>
                            <input
                              class="form-control"
                              aria-label="With textarea"
                              v-model="partner.SH_tracking_process"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <span class="input-group-text">SH合作状态细分</span>
                          <input
                            class="form-control"
                            aria-label="With textarea"
                            v-model="partner.SH_tracking_process_segment"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">BJ-POC</label>
                          <select
                            class="form-control form-select"
                            v-model="partner.POC_BJ"
                          >
                            <option value="xieyang">AAA</option>
                            <option value="fangfangf">BBB</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <div class="input-group">
                            <span class="input-group-text">BJ合作状态</span>
                            <input
                              class="form-control"
                              aria-label="With textarea"
                              v-model="partner.BJ_tracking_process"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <span class="input-group-text">BJ合作状态细分</span>
                          <input
                            class="form-control"
                            aria-label="With textarea"
                            v-model="partner.BJ_tracking_process_segment"
                          />
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
      partner: {
        cluster: "",
        third_partner_type: "",
        third_partner_name: "",
        b2b_or_b2c: "",
        partner_location: "",
        partner_scope: "",
        introduce: "",
        major_clients_or_case: "",
        website: "",
        sh_tier: "",
        hz_tier: "",
        bj_tier: "",
        sh_contact: {
          channel_contact_information: "",
          channel_contact: "",
          channel_contact_position: "",
        },
        hz_contact: {
          channel_contact: "",
          channel_contact_position: "",
          channel_contact_information: "",
        },
        bj_contact: {
          channel_contact: "",
          channel_contact_position: "",
          channel_contact_information: "",
        },
        vertical: "",
        POC_HZ: "",
        POC_SH: "",
        POC_BJ: "",
        HZ_tracking_process: "",
        HZ_tracking_process_segment: "",
        SH_tracking_process: "",
        SH_tracking_process_segment: "",
        BJ_tracking_process: "",
        BJ_tracking_process_segment: "",
        hz_marketing_data: "",
        sh_marketing_data: "",
        bj_marketing_data: "",
        hz_transfer_data: "",
        sh_transfer_data: "",
        bj_transfer_data: "",
      },
    };
  },
  methods: {
    addData() {
      const res = axios.post("/api/partners/add", this.partner).then((res) => {
        console.log(this.partner);
        this.$router.push({ path: "/" });
      });
    },
    gotoHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>