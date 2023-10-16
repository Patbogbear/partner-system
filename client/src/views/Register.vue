<template>
  <div class="col-md-12 register">
    <form class="card" @submit.prevent="registerUser()">
      <div class="card-header">
        <h3 class="card-title">Register</h3>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label class="form-label required">User name</label>
          <div>
            <input
              type="name"
              class="form-control"
              placeholder="Enter name"
              v-model="users.name"
              required
            />
            <small class="form-hint"
              >We'll never share your email with anyone else.</small
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Cluster</label>
          <div>
            <select class="form-select" v-model="users.cluster" required>
              <option>SH</option>
              <option>HZ</option>
              <option>BJ</option>
            </select>
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
              v-model="users.email"
              required
            />
            <small class="form-hint"
              >We'll never share your email with anyone else.</small
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label required">Password</label>
          <div>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="users.password"
              required
            />
            <small class="form-hint">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </small>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label required">Double Check Password</label>
          <div>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="users.confirmPassword"
              required
            />
            <small class="form-hint">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </small>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Select Role</label>
          <div>
            <select class="form-select" v-model="users.identity" required>
              <option>Sales</option>
              <option value="POC">Pod-Leader/POC</option>
              <option>Team-Leader</option>
              <!-- only for PM and VPM above lever -->
               <!-- <option>PM</option> -->
              <!-- <option>Super-Admin</option> -->
            </select>
          </div>
        </div>
      </div>
      <div class="card-footer text-end">
        <span class="go_login" @click="gotoLogin()">
          Does't have a account yet? <span class="p-1 text-primary-emphasis bs-primary-bg-subtle ">Login here</span> 
        </span>
        <button type="submit" class="btn btn-primary" @onclick="registerUser()">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
<script >
import axios from "../http";

export default {
  name: "register",
  components: {},
  data() {
    return {
      users: {
        name: "",
        cluster:"",
        email: "",
        password: "",
        identity: "",
        confirmPassword:"",
      },
    };
  },
  methods: {
    registerUser() {
      // 检查邮箱是否以 "@google" 结尾
      if (!this.users.email.endsWith("@google.com")) {
        alert("please use google account ");
        return;
      }
      if(this.users.password !== this.users.confirmPassword){
        alert("password not match")
      }

      const res = axios
        .post("/api/users/register", this.users)
        .then((res) => {
          console.log(this.users);
          this.$router.push({ path: "/login" });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    gotoLogin(){
      this.$router.push("/login")
    }
  },
};
</script>
<style scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}
</style>
