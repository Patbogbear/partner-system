<template>
  <div>
    <h3>Reset Password</h3>
    <form @submit.prevent="submitNewPassword">
      <div>
        <label for="password" class="form-label required" >New Password:</label>
        <input type="password" id="password" v-model="newPassword" required>
      </div>
    
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <p v-if="message">{{ message }}</p >
  </div>
</template>

<script setup>
import axios from "../http";
import {ref,onMounted} from 'vue'
import {useRoute} from "vue-router"

const newPassword=ref("")
const confrimNewPassword=ref("")
const token = ref('');
const route = useRoute();
let emailValue =ref('')


onMounted(() => {
  token.value = route.params.token;
  emailValue=decodeURIComponent(route.params.email) 
});

const submitNewPassword = () => {
  // 使用 token 和 email 提交新密码
  console.log("sending token:",token.value);
  console.log("sending email:",emailValue)
  axios.post(`/api/users/reset-password/${token.value}`, { token: token.value, email: emailValue, newPassword:newPassword.value })

    .then(response => {
      // 处理成功响应
    })
    .catch(error => {
      // 处理错误
    });
};

</script>
