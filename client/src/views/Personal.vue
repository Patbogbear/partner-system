<template>
  <div>
    <div class="header">
      personal page 
      {{ userIdentity }}
       <div class="toast">
        <div
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <strong class="mr-auto">Bootstrap</strong>
            <small class="text-muted">just now</small>
            <button
              type="button"
              class="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body">See? Just like this.</div>
        </div>
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
                    <label class="form-label">Old Password</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="old"
                      v-model="oldPassword"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-md-6">
                  <div class="mb-3">
                    <label class="form-label">New Password</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="new"
                      v-model="newPassword"
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
                    <th>Role</th>
                    <th>Property</th>
                    <th>Comparison</th>
                    <th>Target</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select class="form-select">
                        <option value="STATUS_CODE" selected="">Role</option>
                        <option value="JSON_BODY">Admin</option>
                        <option value="HEADERS">Editor</option>
                        <option value="TEXT_BODY">contributor</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="EQUALS" selected="">Equals</option>
                        <option value="NOT_EQUALS">Not equals</option>
                        <option value="HAS_KEY">Has key</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" value="200" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select class="form-select">
                        <option value="STATUS_CODE">Status code</option>
                        <option value="JSON_BODY" selected="">JSON body</option>
                        <option value="HEADERS">Headers</option>
                        <option value="TEXT_BODY">Text body</option>
                        <option value="RESPONSE_TIME">Response time</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        value="parameters.alt.type"
                      />
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="EQUALS">Equals</option>
                        <option value="NOT_EQUALS">Not equals</option>
                        <option value="HAS_KEY">Has key</option>
                        <option value="NOT_HAS_KEY">Not has key</option>
                        <option value="HAS_VALUE" selected="">Has value</option>
                        <option value="NOT_HAS_VALUE">Not has value</option>
                        <option value="IS_EMPTY">Is empty</option>
                        <option value="NOT_EMPTY">Is not empty</option>
                        <option value="GREATER_THAN">Greater than</option>
                        <option value="LESS_THAN">Less than</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" value="string" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select class="form-select">
                        <option value="STATUS_CODE">Status code</option>
                        <option value="JSON_BODY">JSON body</option>
                        <option value="HEADERS">Headers</option>
                        <option value="TEXT_BODY">Text body</option>
                        <option value="RESPONSE_TIME" selected="">
                          Response time
                        </option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="EQUALS">Equals</option>
                        <option value="NOT_EQUALS">Not equals</option>
                        <option value="HAS_KEY">Has key</option>
                        <option value="NOT_HAS_KEY">Not has key</option>
                        <option value="HAS_VALUE">Has value</option>
                        <option value="NOT_HAS_VALUE">Not has value</option>
                        <option value="IS_EMPTY">Is empty</option>
                        <option value="NOT_EMPTY">Is not empty</option>
                        <option value="GREATER_THAN">Greater than</option>
                        <option value="LESS_THAN" selected="">Less than</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" value="500" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select class="form-select">
                        <option value="STATUS_CODE">Status code</option>
                        <option value="JSON_BODY">JSON body</option>
                        <option value="HEADERS" selected="">Headers</option>
                        <option value="TEXT_BODY">Text body</option>
                        <option value="RESPONSE_TIME">Response time</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        value="content-type"
                      />
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="EQUALS" selected="">Equals</option>
                        <option value="NOT_EQUALS">Not equals</option>
                        <option value="HAS_KEY">Has key</option>
                        <option value="NOT_HAS_KEY">Not has key</option>
                        <option value="HAS_VALUE">Has value</option>
                        <option value="NOT_HAS_VALUE">Not has value</option>
                        <option value="IS_EMPTY">Is empty</option>
                        <option value="NOT_EMPTY">Is not empty</option>
                        <option value="GREATER_THAN">Greater than</option>
                        <option value="LESS_THAN">Less than</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        value="application/json; charset=UTF-8"
                      />
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
const oldPassword = ref("");
const passwordChanged = ref(false);

const changePassword = () => {
  axios
    .post("/api/users/edit-user/password", {
      oldPassword: oldPassword.value,
      newPassword: newPassword.value,
    })
    .then((response) => {
      console.log("password update successfully ");
      passwordChanged.value = true;
    })
    .catch((error) => {
      console.log("failed to update password");
    });
};
</script>
