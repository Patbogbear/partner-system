<template>
  <div class="container-xl">
    <h2>Update Partner</h2>
    <div class="page-body">
      <form method="post" class="card" @submit.prevent="updateData()">
        <div class="col-12">
          <div class="card">
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
                        <select
                          class="form-control form-select"
                          v-model="partner.third_partner_type"
                        >
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
                          <option value="代理商&谷歌代运营">
                            代理商&谷歌代运营
                          </option>
                          <option value="商会">商会</option>
                          <option value="协会">协会</option>
                          <option value="服务平台">服务平台</option>
                          <option value="服务中心">服务中心</option>
                          <option value="政府/产业园">政府/产业园</option>
                          <option value="VC">VC</option>
                          <option value="其他">其他</option>
                          <option value="品牌营销">品牌营销</option>
                          <option value="AI">AI</option>
                          <option value="云服务">云服务</option>
                          <option value="学院">学院</option>
                        </select>
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
                          <option
                            v-for="email in hz_poc"
                            :value="email"
                            :key="email"
                          >
                            {{ email }}
                          </option>
                          <option value="手动输入">手动输入</option>
                        </select>

                        <input
                          v-if="partner.POC_HZ === '手动输入'"
                          type="text"
                          class="form-control"
                          autocomplete="off"
                          v-model="manualPOC_HZ"
                          @blur="updatePOC_HZ"
                        />
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
                              class="form-control form-select"
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
                              class="form-control form-select"
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
                          <option
                            v-for="email in sh_poc"
                            :value="email"
                            :key="email"
                          >
                            {{ email }}
                          </option>
                          <option value="手动输入">手动输入</option>
                        </select>
                        <input
                          v-if="partner.POC_SH === '手动输入'"
                          type="text"
                          class="form-control"
                          autocomplete="off"
                          v-model="manualPOC_SH"
                          @blur="updatePOC_SH"
                        />
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
                              class="form-control form-select"
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
                              class="form-control form-select"
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
                          <option
                            v-for="email in bj_poc"
                            :value="email"
                            :key="email"
                          >
                            {{ email }}
                          </option>
                          <option value="手动输入">手动输入</option>
                        </select>

                        <input
                          v-if="partner.POC_BJ === '手动输入'"
                          type="text"
                          class="form-control"
                          autocomplete="off"
                          v-model="manualPOC_BJ"
                          @blur="updatePOC_BJ"
                        />
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
                              class="form-control form-select"
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
                              class="form-control form-select"
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
                              >转介绍数据</label
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
                <a class="btn btn-link" @click="gotoHome()">Cancel</a>
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
  created() {
    this.getDetail();
    this.getPartners();
    //console.log(this.partner)
  },
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
        hz_transfer_data_leads: "",
        sh_transfer_data: "",
        sh_transfer_data_leads: "",
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
      allPartners: [],
      hz_poc: [],
      sh_poc: [],
      bj_poc: [],
      manualPOC_HZ: "",
      manualPOC_SH: "",
      manualPOC_BJ: "",
    };
  },

  methods: {
    getDetail() {
      const res = axios
        .get("/api/partners/" + this.$route.params.id)
        .then((res) => {
          this.partner = res.data;
        });
    },
    updateData() {
      if (this.partner.POC_BJ === "手动输入") {
        this.partner.POC_BJ =
          this.manualPOC_BJ.trim() === "" ? null : this.manualPOC_BJ.trim();
      }
      if (this.partner.POC_HZ === "手动输入") {
        this.partner.POC_HZ =
          this.manualPOC_HZ.trim() === "" ? null : this.manualPOC_HZ.trim();
      }
      if (this.partner.POC_SH === "手动输入") {
        this.partner.POC_SH =
          this.manualPOC_SH.trim() === "" ? null : this.manualPOC_SH.trim();
      }
      axios
        .post("/api/partners/edit/" + this.$route.params.id, this.partner)
        .then((res) => {
          this.$router.push({
            path: "/single-partner/" + res.data.partners._id,
          });
        });
    },
    updatePOC_HZ() {
      this.partner.POC_HZ = this.manualPOC_HZ;
    },
    updatePOC_SH() {
      this.partner.POC_SH = this.manualPOC_SH;
    },
    updatePOC_BJ() {
      this.partner.POC_BJ = this.manualPOC_BJ;
    },
    getPartners() {
      axios.get("/api/partners").then((res) => {
        this.allPartners = res.data;
        this.allPartners.forEach((partner) => {
          if (partner.POC_HZ && !this.hz_poc.includes(partner.POC_HZ)) {
            this.hz_poc.push(partner.POC_HZ);
          }
          if (partner.POC_SH && !this.sh_poc.includes(partner.POC_SH)) {
            this.sh_poc.push(partner.POC_SH);
          }
          if (partner.POC_BJ && !this.bj_poc.includes(partner.POC_BJ)) {
            this.bj_poc.push(partner.POC_BJ);
          }
        });
      });
    },
    gotoHome() {
      this.$router.go(-1);
    },
  },
  computed: {
    filteredSegmentsHZ() {
      if (!this.partner.HZ_tracking_process) {
        return [];
      }
      const selected = this.partner.HZ_tracking_process[0];
      return this.segments[selected] || [];
    },

    filteredSegmentsSH() {
      if (!this.partner.SH_tracking_process) {
        return [];
      }
      const selected = this.partner.SH_tracking_process[0];
      return this.segments[selected] || [];
    },
    filteredSegmentsBJ() {
      if (!this.partner.BJ_tracking_process) {
        return [];
      }
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
</style>