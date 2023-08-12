<template>
  <div>
    <div class="header">
      <div>
        personal page
        {{ userIdentity }}{{ userIdentity.email }}
      </div>

      request List
      <div v-for="request in requestList" :key="request._id">
        {{ request }}
        <button @click="approveRequest(request._id)">approve request</button>
        <button @click="denyRequest(request._id)">deny request</button>
      </div>
      <div
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        ref="passwordToast"
      >
        <div class="toast-header">
          <strong class="mr-auto">Notification</strong>
          <button
            type="button"
            class="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="toast-body">Password updated successfully!</div>
      </div>
      <div class="change-password">
        password form
        <div class="col-12">
          <form class="card">
            <div class="card-body">
              <h3 class="card-title">Change Password</h3>
              <div class="row row-cards">
                <div class="col-sm-6 col-md-6">
                  <div class="mb-3">
                    <label class="form-label">New Password</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="new password"
                      v-model="newPassword"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Confrim New Password</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="confrim new password"
                      v-model="confirmNewPassword"
                    />
                  </div>
                </div>
              </div>
            </div>
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
      <div class="user-authentication">
        user-settings
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">user-authenticate</h3>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select class="form-select" v-model="selectedEmail">
                        <option value="" disabled>Select User</option>
                        <option
                          v-for="user in allUsers"
                          :key="user.id"
                          :value="user.email"
                        >
                          {{ user.email }}
                        </option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select" v-model="selectedRole">
                        <option value="Reader">Reader</option>
                        <option value="Editor">Editor</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </td>
                    <td>
                      <button
                        v-if="selectedEmail && selectedRole"
                        @click="updateUserRole"
                      >
                        change Role
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        v-if="allUsers.length > 0"
                        v-model="selectedEmail"
                        class="form-select"
                      >
                        <option
                          v-for="user in allUsers"
                          :key="user.id"
                          :value="user.email"
                        >
                          {{ user.email }}
                        </option>
                      </select>
                      <div v-else>没有用户数据</div>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="STATUS_CODE" selected="">Reader</option>
                        <option value="JSON_BODY">Editor</option>
                        <option value="HEADERS">Admin</option>
                        <option value="TEXT_BODY">Text body</option>
                      </select>
                    </td>
                    <td>
                      <button v-if="selectedEmail" @click="deleteUser">
                        delete user
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer text-end">
            <button type="submit" class="btn btn-primary">Make request</button>
          </div>
        </div>
      </div>
      <form class="card" @submit.prevent="addUser">
        <div class="card-header">
          <h3 class="card-title">Add user</h3>
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
            <label class="form-label required">Email address</label>
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
            <label class="form-label">Select Reader or Editor </label>
            <div>
              <select class="form-select" v-model="addUserIdentity" required>
                <option>Reader</option>
                <option>Editor</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card-footer text-end">
          <button type="submit" class="btn btn-primary" @onclick="addUser">
            Submit
          </button>
        </div>
      </form>
      <button>get list</button>
      <button @click="approveRequest">approve request</button>
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
const updatedUserRole = ref("");
const addUserEmail = ref("");
const addUserPassword = ref("");
const addUserIdentity = ref("");
const addUserName = ref("");

const requestList = ref([]);

onMounted(async () => {
  await getUsers();
  await requestLists();
});

const getUsers = async () => {
  try {
    let { data } = await axios.get("/api/users");
    allUsers.value = data;
    console.log(allUsers);
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
      data: { email: selectedEmail.value },
    });
    await getUsers();
    selectedEmail = null;
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
      identity: addUserIdentity.value,
    });
    await getUsers();
  } catch (error) {
    console.log("error add user ", error);
  }
};

const requestLists = async () => {
  try {
    let { data } = await axios.get("/api/accessQuests/all-requests", {
      params: { status: "PENDING" },
    });
    requestList.value = data;
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
