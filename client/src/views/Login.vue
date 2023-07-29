<template>
  <div class="col-md-12 login">
    <form class="card" @submit.prevent="logUser()">
      <div class="card-header">
        <h3 class="card-title">Login</h3>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label class="form-label required">Email address</label>
          <div>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="loginUser.email"
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
              v-model="loginUser.password"
            />
            <small class="form-hint">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </small>
          </div>
        </div>
      </div>
      <div class="card-footer text-end">
        <span class="go_login" @click="gotoLogin()">
          Does't have a account yet? <span class="p-1 text-primary-emphasis bs-primary-bg-subtle ">Register here</span> 
        </span>
        <button type="submit" class="btn btn-primary" @onclick="logUser()">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "../http";
import jwt_decode from "jwt-decode";

export default {
  name: "register",
  components: {},
  data() {
    return {
      loginUser: {
        name: "",
        email: "",
        password: "",
        identity: "",
      },
    };
  },
  methods: {
    logUser() {
      const res = axios.post("/api/users/login", this.loginUser).then((res) => {
        console.log("success");
        //token
        const { token } = res.data;
        localStorage.setItem("userToken", token);

        //decode token
        const decoded = jwt_decode(token);
        console.log(token);

        //store token into vuex
        this.$store.dispatch("setAuthenticated", !this.isEmpty(decoded));
        this.$store.dispatch("setUser", decoded);

        this.$router.push({ path: "/" });
      });
    },
    gotoLogin() {
      this.$router.push({path:'/register'})
    },
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    },
  },
};
</script>

<style scope>
.login{
   display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}

</style>