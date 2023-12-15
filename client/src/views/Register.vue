<template>
  <div class="col-md-12 register">
    <div class="register-image">

    </div>
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
           
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Cluster</label>
          <div>
            <select class="form-select" v-model="users.cluster" >
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
               <!-- <option>PM</option>
              <option>Super-Admin</option> -->
            </select>
          </div>
        </div>
      </div>
      <div class="card-footer text-end">
        <span class="go_login" @click="gotoLogin()">
          Login here? <span class="p-1 text-primary-emphasis bs-primary-bg-subtle ">Login here</span> 
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
  align-items: stretch;
  padding-top: 30px;
  margin: 0 auto;
  max-width: 960px;
  max-height: 650px;
  height: 100vh; /* Make sure the register form is centered vertically in the viewport */
  background-color: #f0f2f5; /* This is an assumed background color as per the image */
}
.register .register-image {
  flex: 3;
  background: url('~@/assets/login-register.jpg') no-repeat center center;
  background-size: cover;
  min-height: 400px; /* 这里设置了一个最小高度 */
  width: 100%; /* 设置宽度为100% */
}


.card {
  flex:1.5;
  width: 100%;
  max-width: 400px; /* Adjust width as per design in image */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Add some shadow to the card */
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  padding: 4px;
}

.card-title {
  margin: 0;
  font-size: 24px; /* Larger font size for the title */
  font-weight: bold;
}

.card-body {
  padding: 4px;
}

.form-label {
  margin-bottom: .15rem;
  font-size: 16px;
  color: #495057;
}
.m-3{
  width: 100%;
}

.form-control {
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem; /* Rounded borders for inputs */
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.form-select {
  display: block;
  width: 100%;
  padding: .375rem 1.75rem .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  appearance: none;
}

.btn-primary {
  color: #fff;
  background-color: #007bff; /* Blue color for the button */
  border-color: #007bff;
  border-radius: .25rem;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.go_login {
  display: block;
  text-align: right;
  margin-top: .5rem;
}

.text-primary-emphasis {
  color: #007bff;
  font-weight: bold;
}

.bs-primary-bg-subtle {
  background-color: rgba(0, 123, 255, .1);
  padding: .25rem .5rem;
  border-radius: .25rem;
}

.card-footer {
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 4px;
}
</style>