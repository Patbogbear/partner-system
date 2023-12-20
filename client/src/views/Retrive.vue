<template>
  <div class="col-md-12 login">
    <div class="login-image"></div>
    <form class="card" @submit.prevent="Retrive()">
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
              v-model="email"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Click Reset Password
        </button>
        <small
          >You should finish reset password in 30 mins After link been sent to
          your google account</small
        >
        <div v-if="notices" @click="gotoLogin" style="color:red">{{ notices }},click here to login</div>
      </div>
      <div class="card-footer text-end">
        <span class="go_register" @click="gotoRegister()">
          Does't have a account yet?
          <span class="p-1 text-primary-emphasis bs-primary-bg-subtle"
            >Register here</span
          >
        </span>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "../http";

export default {
  name: "retrive",
  components: {},
  data() {
    return {
      email: "",
      notices: "",
    };
  },
  methods: {
    Retrive() {
      const requestData = { email: this.email };
      axios
        .post("/api/users/reset-password", requestData)
        .then((response) => {
          // 成功响应的处理
          console.log("响应:", response.data);
          this.notices = "Reset Password Email has been sent!";
          // 可以根据需要显示一个成功消息，例如：
          // this.successMessage = '重置密码链接已发送到您的邮箱。';
        })
        .catch((error) => {
          // 错误处理
          console.error("错误:", error.response.data);
          // 可以根据需要显示一个错误消息，例如：
          // this.errorMessage = '重置密码请求失败，请稍后再试。';
        });
    },
    gotoRegister() {
      this.$router.push({ path: "/register" });
    },
    gotoLogin() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped>
.login {
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
.login .login-image {
  flex: 3;
  background: url("~@/assets/login-register.jpg") no-repeat center center;
  background-size: cover;
  min-height: 400px; /* 这里设置了一个最小高度 */
  width: 100%; /* 设置宽度为100% */
}

.card {
  flex: 1.5;
  width: 100%;
  max-width: 400px; /* Adjust width as per design in image */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add some shadow to the card */
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-label {
  margin-bottom: 0.15rem;
  font-size: 16px;
  color: #495057;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem; /* Rounded borders for inputs */
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  appearance: none;
}

.btn-primary {
  color: #fff;
  background-color: #007bff; /* Blue color for the button */
  border-color: #007bff;
  border-radius: 0.25rem;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.go_login {
  display: block;
  text-align: right;
  margin-top: 0.5rem;
}

.text-primary-emphasis {
  color: #007bff;
  font-weight: bold;
}

.bs-primary-bg-subtle {
  background-color: rgba(0, 123, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.card-footer {
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 4px;
}
</style>