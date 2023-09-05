<template>
  <div>
    <div class="header">
      <div class="row">
        <div class="col-xl-4">
          <div class="row">
            <div class="card">
              <div class="card-body text-center">
                <div class="mb-3">
                  <span class="avatar avatar-xl rounded"></span>
                </div>
                <div class="card-title mb-1">{{ userIdentity.name }}</div>
                <div class="text-secondary">{{ userIdentity.identity }}</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="row">
            <a
              href="#"
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
              href="#"
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
                      v-if="userIdentity.identity === 'Super-Admin'"
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
            <div class="row">
              <a
                href="#"
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
                        v-if="userIdentity.identity === 'Super-Admin'"
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
                href="#"
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
                        v-if="userIdentity.identity === 'Super-Admin'"
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
                                  <option value="Pod-Leader">Pod-Leader</option>
                                  <option value="Team-Leader">
                                    Team-Leader
                                  </option>
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

        <div class="col-xl-12" v-if="userIdentity.identity === 'Super-Admin' || userIdentity.identity === 'Team-Leader'">
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
                      request.userId && request.userId.Cluster
                        ? request.userId.Cluster
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
                      class="btn"
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
                      class="btn"
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
        <div class="col-xl-12" v-if="userIdentity.identity === 'Sales' ||userIdentity.identity === 'Team-Leader'">
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
                      request.userId && request.userId.email
                        ? request.userId.email
                        : "N/A"
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
                    <button v-if="request.status === 'DENIED'">
                      delete request
                    </button>
                    <button v-if="request.status === 'APPROVED'">
                      view detail
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

onMounted(async () => {
  await getUsers();
  await requestLists(userIdentity);
});

const getUsers = async () => {
  try {
    let { data } = await axios.get("/api/users");
    allUsers.value = data;
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
      console.log(requestList);
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
.btn-ghost-primary,
.btn-outline-primary,
.btn-primary {
  --tblr-btn-color: 32, 107, 196;
  --tblr-btn-color-darker: 29, 96, 176;
  --tblr-btn-color-text: #f4f6fa;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-color: rgba(101, 109, 119, 0.24);
  white-space: nowrap;
}
.btn-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -0.5rem !important;
  margin-right: -0.5rem;
}
.btn-list > * {
  margin: 0 0.5rem 0.5rem 0 !important;
}
.logout {
  background-color: #fff;
  color: #216bc4;
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
</style>
