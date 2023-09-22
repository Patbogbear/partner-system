<template>
  <div class="container-xl">
    <div class="page-body">
      <form method="post" class="card" @submit.prevent="addData()">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3>Add New Partner</h3>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-xl-4">
                  <div class="row">
                    <div class="col-md-6 col-xl-12">
                      <div class="mb-3">
                        <label class="form-label">Cluster</label>
                        <select
                          class="form-control form-select"
                          v-model="partner.cluster"
                        >
                          <option value="SH">SH</option>
                          <option value="HZ">HZ</option>
                          <option value="BJ">BJ</option>
                        </select>
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
                        <label class="form-label">公司所在地</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="公司所在地"
                          v-model="partner.partner_location"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="row">
                    <div class="mb-3">
                      <label class="form-label">Vertical</label>
                      <select
                        class="form-control form-select"
                        aria-label="With textarea"
                        v-model="partner.vertical"
                      >
                        <option value="TMT">TMT</option>
                        <option value="Outdoor">Outdoor</option>
                        <option value="home">Home</option>
                        <option value="A&A">A&A</option>
                        <option value="BIM">BIM</option>
                        <option value="Medical">Medical</option>
                        <option value="Mechinery">Mechinery</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Chemical">Chemical</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <div>
                        <label class="form-label">2B or 2C</label>
                        <div>
                          <select
                            class="form-control form-select"
                            v-model="partner.b2b_or_b2c"
                          >
                            <option value="2B">2B</option>
                            <option value="2C">2C</option>
                            <option value="MIX">MIX</option>
                          </select>
                        </div>
                      </div>
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
                      <label for="basic-url" class="form-label">网站网址</label>
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
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="row">
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
                      <label class="form-label">公司介绍 </label>
                      <textarea
                        class="form-control"
                        name="example-textarea-input"
                        rows="6"
                        placeholder="partner introduce.."
                        v-model="partner.introduce"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-xl-4">
                  <div class="row">
                    <div class="col-md-6 col-xl-12">
                      <div class="mb-3">
                        <label class="form-label">HZ-POC</label>
                        <select
                          class="form-control form-select"
                          v-model="partner.POC_HZ"
                        >
                          <option value="hz-pod-lead-a@google.com">
                            hz-pod-lead-a@google.com
                          </option>
                          <option value="chenlong@google.com">
                            chenlong@google.com
                          </option>
                          <option value="chjie@google.com">
                            chjie@google.com
                          </option>
                          <option value="congp@google.com">
                            congp@google.com
                          </option>
                          <option value="herong@google.com">
                            herong@google.com
                          </option>
                          <option value="jianlian@google.com">
                            jianlian@google.com
                          </option>
                          <option value="jieyin@google.com">
                            jieyin@google.com
                          </option>
                          <option value="jinyangz@google.com">
                            jinyangz@google.com
                          </option>
                          <option value="qinying@google.com">
                            qinying@google.com
                          </option>
                          <option value="suxin@google.com">
                            suxin@google.com
                          </option>
                          <option value="xincchen@google.com">
                            xincchen@google.com
                          </option>
                          <option value="yiduc@google.com">
                            yiduc@google.com
                          </option>
                          <option value="zhimaop@google.com">
                            zhimaop@google.com
                          </option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <fieldset class="form-fieldset">
                          <div class="mb-3">
                            <label class="form-label required"
                              >渠道联系人</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.hz_contact.channel_contact"
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >渠道方对接职位</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              autocomplete="off"
                              v-model="
                                partner.hz_contact.channel_contact_position
                              "
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >渠道方联系方式</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="
                                partner.hz_contact.channel_contact_information
                              "
                            />
                          </div>
                        </fieldset>
                      </div>
                      <div class="mb-3">
                        <fieldset class="form-fieldset">
                          <div class="mb-3">
                            <label class="form-label required"
                              >HZ合作评级</label
                            >
                            <select
                              type="text"
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.hz_tier"
                            >
                              <option value="金牌">金牌</option>
                              <option value="银牌">银牌</option>
                              <option value="铜牌">铜牌</option>
                            </select>
                          </div>
                        </fieldset>
                      </div>
                      <div class="mb-3">
                        <fieldset class="form-fieldset">
                          <div class="mb-3">
                            <label class="form-label required">合作状态</label>
                            <select
                              type="text"
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.HZ_tracking_process"
                            >
                              <option value="A. 待合作">A. 待合作</option>
                              <option value="B. 合作暂停">B. 合作暂停</option>
                              <option value="C. 合作中">C. 合作中</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >合作状态细分</label
                            >
                            <select
                              class="form-control"
                              v-model="partner.HZ_tracking_process_segment"
                            >
                              <option
                                v-for="segment in filteredSegmentsHZ"
                                :key="segment"
                                :value="segment"
                              >
                                {{ segment }}
                              </option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >市场活动数据 leads</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.hz_marketing_data_leads"
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >市场活动数据 CW%</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.hz_marketing_data"
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >转介绍数据 leads</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.hz_transfer_data_leads"
                            />
                          </div>
                           <div class="mb-3">
                            <label class="form-label required"
                              >转介绍数据 CW%</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.hz_transfer_data"
                            />
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="row">
                    <div class="col-md-6 col-xl-12">
                      <div class="mb-3">
                        <label class="form-label">SH-POC</label>
                        <select
                          class="form-control form-select"
                          v-model="partner.POC_SH"
                        >
                          <option value="sh-pod-leader-a@google.com">
                            sh-pod-leader-a
                          </option>
                          <option value="sh-pod-leader-b@google.com">
                            sh-pod-leader-b
                          </option>
                          <option value="sh-pod-leader-c@google.com">
                            sh-pod-leader-c
                          </option>
                          <option value="sh-pod-leader-c@google.com">
                            sh-pod-leader-c
                          </option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <fieldset class="form-fieldset">
                          <div class="mb-3">
                            <label class="form-label required"
                              >渠道联系人</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.sh_contact.channel_contact"
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >渠道方对接职位</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              autocomplete="off"
                              v-model="
                                partner.sh_contact.channel_contact_position
                              "
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >渠道方联系方式</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="
                                partner.sh_contact.channel_contact_information
                              "
                            />
                          </div>
                        </fieldset>
                      </div>
                      <div class="mb-3">
                        <fieldset class="form-fieldset">
                          <div class="mb-3">
                            <label class="form-label required"
                              >SH合作评级</label
                            >
                            <select
                              type="text"
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.sh_tier"
                            >
                              <option value="金牌">金牌</option>
                              <option value="银牌">银牌</option>
                              <option value="铜牌">铜牌</option>
                            </select>
                          </div>
                        </fieldset>
                      </div>
                      <div class="mb-3">
                        <fieldset class="form-fieldset">
                          <div class="mb-3">
                            <label class="form-label required">合作状态</label>
                            <select
                              type="text"
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.SH_tracking_process"
                            >
                              <option value="A. 待合作">A. 待合作</option>
                              <option value="B. 合作暂停">B. 合作暂停</option>
                              <option value="C. 合作中">C. 合作中</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >合作状态细分</label
                            >
                            <select
                              class="form-control"
                              v-model="partner.SH_tracking_process_segment"
                            >
                              <option
                                v-for="segment in filteredSegmentsSH"
                                :key="segment"
                                :value="segment"
                              >
                                {{ segment }}
                              </option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >市场活动数据 leads</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.sh_marketing_data_leads"
                            />
                          </div>
                           <div class="mb-3">
                            <label class="form-label required"
                              >市场活动数据 CW%</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.sh_marketing_data"
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >转介绍数据 leads</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.sh_transfer_data_leads"
                            />
                          </div>
                           <div class="mb-3">
                            <label class="form-label required"
                              >转介绍数据 CW%</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.sh_transfer_data"
                            />
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="row">
                    <div class="col-md-6 col-xl-12">
                      <div class="mb-3">
                        <label class="form-label">BJ-POC</label>
                        <select
                          class="form-control form-select"
                          v-model="partner.POC_BJ"
                        >
                          <option value="zhibinzheng@google.com">
                            zhibinzheng@google.com
                          </option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <fieldset class="form-fieldset">
                          <div class="mb-3">
                            <label class="form-label required"
                              >渠道联系人</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.bj_contact.channel_contact"
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >渠道方对接职位</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              autocomplete="off"
                              v-model="
                                partner.bj_contact.channel_contact_position
                              "
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >渠道方联系方式</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="
                                partner.bj_contact.channel_contact_information
                              "
                            />
                          </div>
                        </fieldset>
                      </div>
                      <div class="mb-3">
                        <fieldset class="form-fieldset">
                          <div class="mb-3">
                            <label class="form-label required"
                              >BJ合作评级</label
                            >
                            <select
                              type="text"
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.bj_tier"
                            >
                              <option value="金牌">金牌</option>
                              <option value="银牌">银牌</option>
                              <option value="铜牌">铜牌</option>
                            </select>
                          </div>
                        </fieldset>
                      </div>
                      <div class="mb-3">
                        <fieldset class="form-fieldset">
                          <div class="mb-3">
                            <label class="form-label required">合作状态</label>
                            <select
                              type="text"
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.BJ_tracking_process"
                            >
                              <option value="A. 待合作">A. 待合作</option>
                              <option value="B. 合作暂停">B. 合作暂停</option>
                              <option value="C. 合作中">C. 合作中</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >合作状态细分</label
                            >
                            <select
                              class="form-control"
                              v-model="partner.BJ_tracking_process_segment"
                            >
                              <option
                                v-for="segment in filteredSegmentsBJ"
                                :key="segment"
                                :value="segment"
                              >
                                {{ segment }}
                              </option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >市场活动数据 leads</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.bj_marketing_data_leads"
                            />
                          </div>
                           <div class="mb-3">
                            <label class="form-label required"
                              >市场活动数据 CW%</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.bj_marketing_data"
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >转介绍数据 leads</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.bj_transfer_data_leads"
                            />
                          </div>
                           <div class="mb-3">
                            <label class="form-label required"
                              >转介绍数据 CW%</label
                            >
                            <input
                              class="form-control"
                              autocomplete="off"
                              v-model="partner.bj_transfer_data"
                            />
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer text-end">
              <div class="d-flex">
                <a href="#" class="btn btn-link" @click="gotoHome()">Cancel</a>
                <button type="submit" class="btn btn-primary ms-auto">
                  Send data
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
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
        coverage_province: "",
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
        hz_marketing_data_leads: "",
        sh_marketing_data: "",
        sh_marketing_data_leads: "",
        bj_marketing_data: "",
        bj_marketing_data_leads: "",
        hz_transfer_data: "",
        hz_transfer_data_leads:"",
        sh_transfer_data: "",
        sh_transfer_data_leads:"",
        bj_transfer_data: "",
        bj_transfer_data_leads: "",
      },
      segments: {
        A: [
          "A. 还未找到KP",
          "A. 已对接KP，已详细聊过，客户画像匹配度低，需找其他合作点",
          "A. 已对接KP，还未详谈",
          "A. 已对接KP，已详细聊过，可以共同邀约客户，目前还没有找到合作",
        ],
        B: [
          "B. 活动效果不好，需找其他KP或者重新谈合作",
          "B. 对方邀约能力差，转化率低",
          "B. 动效果OK, 目前还没有 找合作时机",
        ],
        C: [
          "C. 已对接KP, 客户转介绍中",
          "C. 已对接KP，活动推进中",
          "C. 已对接KP, 客户转介绍+活动推进中",
        ],
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
  computed: {
    filteredSegmentsHZ() {
      const selected = this.partner.HZ_tracking_process[0];
      return this.segments[selected] || [];
    },
    filteredSegmentsSH() {
      const selected = this.partner.SH_tracking_process[0];
      return this.segments[selected] || [];
    },
    filteredSegmentsBJ() {
      const selected = this.partner.BJ_tracking_process[0];
      return this.segments[selected] || [];
    },
  },
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
.form-fieldset {
  padding: 1rem;
  margin-bottom: 1rem;
  background: rgba(35, 46, 60, 0.024);
  border: 1px solid #e6e8e9;
  border-radius: 4px;
}
.form-label {
  display: block;
}

.form-label {
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
}
</style>