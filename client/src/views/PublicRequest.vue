<template>
  <div>
    {{ statusMessage }}
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const statusMessage = ref("Loading...");

onMounted(async () => {
  try {
    const queryParams = new URLSearchParams(window.location.search);
    const status = queryParams.get("status");
    const requestId = route.params.requestId;
    const token = route.params.token;

    // 注意：这里假设后端是通过GET请求处理状态更新
    const response = await axios.put(
      `/api/accessQuests/public-access-requests/${requestId}/${token}?status=${status}`
    );
    // 处理响应，更新用户界面
    statusMessage.value = "Status updated: " + response.data.message;
  } catch (error) {
    // 错误处理
    statusMessage.value = "Error updating status: " + error.message;
  }
});
</script>