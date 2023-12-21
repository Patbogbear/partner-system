<template>
  <div class="container-xl">
    <div class="header">
      <div class="row">
        <div class="col-xl-4 px-3">
          <div class="row">
            <div class="card">
              <div class="card-body text-center">
                <div class="mb-3">
                  <span class="avatar avatar-xl rounded">default</span>
                </div>
                <div class="card-title mb-1">{{ userIdentity.name }}</div>
                <div class="text-muted">{{ userIdentity.identity }}</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 px-3 d-flex align-items-center">
          <div class="row">
            <a
              class="btn btn-secondary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#modal-team"
            >
              Change Password
            </a>
            <div
              class="modal modal-blur fade"
              id="modal-team"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    <form>
                      <fieldset class="form-fieldset">
                        <div class="card-header">
                          <h3 class="card-title">Change Password</h3>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">New Password</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="new password"
                            v-model="newPassword"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Confrim New Password</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="confrim new password"
                            v-model="confirmNewPassword"
                          />
                        </div>
                      </fieldset>
                      <div class="card-footer text-end">
                        <button
                          type="submit"
                          class="btn btn-primary"
                          @click="changePassword()"
                        >
                          Change Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="btn btn-secondary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#addUser"
            >
              Add User
            </a>
            <div
              class="modal modal-blur fade"
              id="addUser"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    <form
                      @submit.prevent="addUser"
                      v-if="
                        userIdentity.identity === 'Super-Admin' ||
                        userIdentity.identity === 'PM'
                      "
                    >
                      <fieldset class="form-fieldset">
                        <div class="card-header">
                          <h3 class="card-title">Add user</h3>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="card-body">
                          <div class="mb-3">
                            <label class="form-label required">User name</label>
                            <div>
                              <input
                                type="name"
                                class="form-control"
                                placeholder="Enter name"
                                v-model="addUserName"
                                required
                              />
                            </div>
                          </div>
                          <div class="mb-3">
                            <label class="form-label required"
                              >Email address</label
                            >
                            <div>
                              <input
                                type="email"
                                class="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                v-model="addUserEmail"
                                required
                              />
                            </div>
                          </div>
                          <div class="mb-3">
                            <label class="form-label required">Password</label>
                            <div>
                              <input
                                type="password"
                                class="form-control"
                                placeholder="Password"
                                v-model="addUserPassword"
                                required
                              />
                            </div>
                          </div>

                          <div class="mb-3">
                            <label class="form-label"
                              >Sales Poc or Team-Leader</label
                            >
                            <div>
                              <select
                                class="form-select"
                                v-model="addUserIdentity"
                                required
                              >
                                <option>Sales</option>
                                <option>Pod-Leader</option>
                                <option>Team-Leader</option>
                              </select>
                            </div>
                          </div>

                          <div class="mb-3">
                            <label class="form-label">Cluster</label>
                            <div>
                              <select
                                class="form-select"
                                v-model="addUserCluster"
                                required
                              >
                                <option>SH</option>
                                <option>HZ</option>
                                <option>BJ</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer text-end">
                          <button
                            type="submit"
                            class="btn btn-primary"
                            @onclick="addUser"
                          >
                            Add User
                          </button>
                        </div>
                      </fieldset>
                      <div class="card-footer text-end"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 px-3 d-flex align-items-center">
          <div class="row">
            <div class="row">
              <a
                class="btn btn-secondary btn-sm custom-btn"
                data-bs-toggle="modal"
                data-bs-target="#deleteUser"
              >
                Delete User
              </a>
              <div
                class="modal modal-blur fade"
                id="deleteUser"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-body">
                      <form
                        @submit.prevent="deleteUser"
                        v-if="
                          userIdentity.identity === 'Super-Admin' ||
                          userIdentity.identity === 'PM'
                        "
                      >
                        <fieldset class="form-fieldset">
                          <div class="card-header">
                            <h3 class="card-title">Delete user</h3>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="card-body">
                            <div class="mb-3">
                              <label class="form-label">Select Users </label>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                              <div>
                                <select
                                  class="form-select"
                                  v-model="selectedDeleteUser"
                                >
                                  <option disabled>Select User</option>
                                  <option
                                    v-for="user in allUsers"
                                    :key="user.id"
                                    :value="user.email"
                                  >
                                    {{ user.email }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="card-footer text-end">
                            <button
                              type="submit"
                              class="btn btn-primary"
                              @onclick="deleteUser"
                            >
                              Delete User
                            </button>
                          </div>
                        </fieldset>
                        <div class="card-footer text-end"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="btn btn-secondary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#userAuthenticate"
              >
                User authenticate
              </a>
              <div
                class="modal modal-blur fade"
                id="userAuthenticate"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-body">
                      <form
                        @submit.prevent="updateUserRole"
                        v-if="
                          userIdentity.identity === 'Super-Admin' ||
                          userIdentity.identity === 'PM'
                        "
                      >
                        <fieldset class="form-fieldset">
                          <div class="card-header">
                            <h3 class="card-title">User authenticate</h3>
                          </div>
                          <div class="card-body">
                            <div class="mb-3">
                              <label class="form-label">Select Users </label>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                              <div>
                                <select
                                  class="form-select"
                                  v-model="selectedEmail"
                                >
                                  <option disabled>Select User</option>
                                  <option
                                    v-for="user in allUsers"
                                    :key="user.id"
                                    :value="user.email"
                                  >
                                    {{ user.email }}
                                  </option>
                                </select>
                              </div>
                              <label class="form-label">Select Role</label>
                              <div>
                                <select
                                  class="form-select"
                                  v-model="selectedRole"
                                >
                                  <option value="Sales">Sales</option>
                                  <option value="Pod-Leader">
                                    Pod-Leader/POC
                                  </option>
                                  <option value="Team-Leader">
                                    Team-Leader
                                  </option>
                                  <option value="Marketing_Specialist">
                                    Marketing_Specialist
                                  </option>
                                  <option value="BA">BA</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="card-footer text-end">
                            <button
                              type="submit"
                              class="btn btn-primary"
                              @onclick="updateUserRole"
                            >
                              Change Role
                            </button>
                          </div>
                        </fieldset>
                        <div class="card-footer text-end"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-xl-12"
            v-if="
              userIdentity.identity === 'Super-Admin' ||
              userIdentity.identity === 'Team-Leader' ||
              userIdentity.identity === 'PM'
            "
          >
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Recently Requests</h3>
              </div>
              <div class="card-table table-responsive">
                <table class="table table-vcenter">
                  <thead>
                    <tr>
                      <th>Request User Name</th>
                      <th>Request User Cluster & Title</th>
                      <th>Request Data Description</th>
                      <th colspan="2">Actions</th>
                    </tr>
                  </thead>
                  <tr
                    v-for="request in requestList"
                    :key="request._id + new Date()"
                  >
                    <td>
                      {{
                        request.userId && request.userId.email
                          ? request.userId.email
                          : "user has been delete"
                      }}
                    </td>
                    <td class="text-secondary">
                      {{
                        request.userId && request.userId.cluster
                          ? request.userId.cluster
                          : "user has been delete"
                      }}&{{
                        request.userId && request.userId.identity
                          ? request.userId.identity
                          : "user has been delete"
                      }}
                    </td>
                    <td class="text-secondary">
                      {{
                        request.userId && request.userId.name
                          ? request.userId.name
                          : "user has been delete"
                      }}申请了解{{
                        request.partnerId
                          ? request.partnerId.third_partner_name
                          : "unknown partner"
                      }}的{{ request.requestedContactField }}区域联系人信息
                    </td>
                    <td class="text-secondary">
                      <button
                        class="btn btn-primary btn-sm"
                        style="
                          --bs-btn-padding-y: 0.25rem;
                          --bs-btn-padding-x: 0.5rem;
                          --bs-btn-font-size: 0.75rem;
                        "
                        @click="approveRequest(request._id)"
                      >
                        approve request
                      </button>

                      <button
                        class="btn btn-warning"
                        style="
                          --bs-btn-padding-y: 0.25rem;
                          --bs-btn-padding-x: 0.5rem;
                          --bs-btn-font-size: 0.75rem;
                        "
                        @click="denyRequest(request._id)"
                      >
                        deny request
                      </button>
                    </td>
                    <td class="text-end w-1">
                      <div
                        class="chart-sparkline chart-sparkline-sm"
                        id="sparkline-bounce-rate-1"
                      ></div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div
            class="col-xl-12"
            v-if="
              userIdentity.identity === 'Sales' ||
              userIdentity.identity === 'Team-Leader' ||
              userIdentity.identity === 'POC'
            "
          >
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Requests Feedback</h3>
              </div>
              <div class="card-table table-responsive">
                <table class="table table-vcenter">
                  <thead>
                    <tr>
                      <th>Request Partner Name</th>
                      <th>Request Time</th>
                      <th>Request Partner Description</th>
                      <th colspan="2">Actions</th>
                    </tr>
                  </thead>
                  <tr
                    v-for="request in requestList"
                    :key="request._id + new Date()"
                  >
                    <td>
                      {{
                        request.partnerId
                          ? request.partnerId.third_partner_name
                          : "partner has been deleted"
                      }}
                    </td>
                    <td class="text-secondary">
                      {{ request.requestedAt }}
                    </td>
                    <td class="text-secondary">
                      您申请了解的{{
                        request.requestedContactField
                      }}的区域联系人信息，目前已被{{ request.status }}
                    </td>
                    <td class="text-secondary">
                      <button
                        class="btn btn-warning btn-sm"
                        style="
                          --bs-btn-padding-y: 0.25rem;
                          --bs-btn-padding-x: 0.5rem;
                          --bs-btn-font-size: 0.75rem;
                        "
                        v-if="request.status === 'DENIED'"
                      >
                        delete request
                      </button>
                      <router-link
                        v-if="
                          request.status === 'APPROVED' && request.partnerId
                        "
                        class="btn btn-primary"
                        :to="'/single-partner/' + request.partnerId._id"
                        style="
                          --bs-btn-padding-y: 0.25rem;
                          --bs-btn-padding-x: 0.5rem;
                          --bs-btn-font-size: 0.75rem;
                        "
                      >
                        view detail
                      </router-link>
                    </td>
                    <td class="text-end w-1">
                      <div
                        class="chart-sparkline chart-sparkline-sm"
                        id="sparkline-bounce-rate-1"
                      ></div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12" v-if="userIdentity.identity === 'Super-Admin'">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Logs</h3>
              </div>
              <div class="card-table table-responsive">
                <table class="table table-vcenter">
                  <thead>
                    <tr>
                      <th>User</th>

                      <th>Actions</th>
                      <th>Date</th>
                      <th>Descriptions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="log in logList" :key="log._id + new Date()">
                      <td class="w-1">
                        {{
                          log.userId && log.userId.name
                            ? log.userId.name
                            : "user has been delete"
                        }}
                      </td>
                      <td class="td-truncate">
                        {{ log.action }}
                      </td>
                      <td class="text-nowrap text-secondary">
                        {{ log.date }}
                      </td>
                      <td class="td-truncate">
                        {{ log.description }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

const store = useStore();
const userIdentity = computed(() => store.getters.user);
const newPassword = ref("");
const confirmNewPassword = ref("");
const allUsers = ref([]);
const selectedEmail = ref("");
const selectedRole = ref("");
const selectedDeleteUser = ref("");
const updatedUserRole = ref("");
const addUserEmail = ref("");
const addUserPassword = ref("");
const addUserIdentity = ref("");
const addUserName = ref("");
const addUserCluster = ref("");
const requestList = ref([]);
const logList = ref([]);

onMounted(async () => {
  await getUsers();
  await requestLists(userIdentity);
  await getLogs();
});

const getUsers = async () => {
  try {
    let { data } = await axios.get("/api/users");
    allUsers.value = data;
  } catch (error) {}
};
const getLogs = async () => {
  try {
    let { data } = await axios.get("/api/logs");
    logList.value = data;
    console.log(logList.value);
  } catch (error) {}
};
const changePassword = () => {
  if (newPassword.value !== confirmNewPassword.value) {
    alert("password not match");
    return;
  }
  axios
    .post("/api/users/edit-user/password", {
      newPassword: newPassword.value,
    })
    .then((response) => {
      console.log("password update successfully ");
    })
    .catch((error) => {
      console.log("failed to update password");
    });
};
//需要完善计算属性或重新刷新页面的问题
const deleteUser = async () => {
  try {
    await axios.delete("/api/users/delete/user", {
      data: { email: selectedDeleteUser.value },
    });
    await getUsers();
    selectedDeleteUser = null;
  } catch (error) {
    console.log("error deleting user:", error);
  }
};
const updateUserRole = async () => {
  try {
    await axios.put("/api/users/edit/role", {
      email: selectedEmail.value,
      updatedUserRole: selectedRole.value,
    });

    await getUsers();
  } catch (error) {
    console.log("error editor user role:", error);
  }
};

const addUser = async () => {
  try {
    await axios.post("/api/users/register", {
      name: addUserName.value,
      email: addUserEmail.value,
      password: addUserPassword.value,
      cluster: addUserCluster.value,
      identity: addUserIdentity.value,
    });

    await getUsers();
  } catch (error) {
    console.log("error add user ", error);
  }
};

const requestLists = async (userIdentity) => {
  try {
    if (userIdentity.value.identity === "Super-Admin") {
      let { data } = await axios.get("/api/accessQuests/all-requests", {
        params: { status: "PENDING" },
      });
      requestList.value = data;
    } else if (userIdentity.value.identity === "PM") {
      let { data } = await axios.get("/api/accessQuests/all-requests", {
        params: { status: "PENDING" },
      });
      requestList.value = data;
    } else if (
      userIdentity.value.identity === "Sales" ||
      userIdentity.value.identity === "Team-Leader"
    ) {
      let { data } = await axios.get(
        `/api/accessQuests/user-requests/${userIdentity.value.id}`
      );

      requestList.value = data;
    }
  } catch (error) {
    console.log("error get request list", error);
  }
};

const approveRequest = async (value) => {
  try {
    await axios.put("/api/accessQuests/all-requests/" + value, {
      status: "APPROVED",
    });
  } catch (error) {
    console.log("error approve request", error);
  }
};
const denyRequest = async (value) => {
  try {
    await axios.put("/api/accessQuests/all-requests/" + value, {
      status: "DENIED",
    });
  } catch (error) {
    console.log("error approve request", error);
  }
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
.table th {
  text-align: left; /* 左对齐 */
  font-weight: bold; /* 文字加粗 */
}

/* 表格单元格样式 */
.table td {
  text-align: left; /* 左对齐 */
  vertical-align: middle; /* 垂直居中 */
}

.row {
  padding: 0;
}
.col-xl-4 {
  text-align: center;
}
.modal-content .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  width: 3.5rem;
  height: 3.5rem;
  margin: 0;
  padding: 0;
  z-index: 10;
}
.btn {
  margin: 10px;
}
.btn-primary {
  background-color: #216bc4;
}
.btn-warning {
  background-color: #ffc107;
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
.card {
  box-shadow: rgba(35, 46, 60, 0.04) 0 2px 4px 0;
  border: 1px solid rgba(101, 109, 119, 0.16);
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(101, 109, 119, 0.16);
  border-radius: 4px;
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
.mb-3 {
  margin-bottom: 1rem !important;
}
.card-title {
  display: block;
  margin: 0 0 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
}
.text-muted {
  color: #656d77 !important;
}
.avatar-xl {
  --tblr-avatar-size: 7rem;
}
.avatar-rounded {
  border-radius: 100rem;
}
.avatar {
  position: relative;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #656d77;
  text-align: center;
  text-transform: uppercase;
  vertical-align: bottom;
  background: #f0f2f6 no-repeat center/cover;
  border-radius: 4px;
}
</style>
