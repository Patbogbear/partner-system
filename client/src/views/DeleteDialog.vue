<template>
  <div v-if="visible" class="confirm-dialog-overlay">
    <div class="confrim-dialog">
      <h3 class="context">请问是否确认删除此Partner</h3>
      <button @click="confirm" class="btn btn-primary btn-sm">确定</button>
      <button class="btn btn-secondary" @click="cancel">取消</button>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, defineProps, defineEmits } from "vue";


const emit = defineEmits(["confirm"]);

const visible = ref(false);

const show = () => {
  visible.value = true;
};

const confirm = () => {
  emit("confirm");
  visible.value = false;
};

const cancel = () => {
  visible.value = false;
};

defineExpose({ show });
</script>
<style scoped>
.confirm-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.context{
    color: black;

}
.confrim-dialog {
  background-color: white; /* 添加背景色 */
  padding: 20px; /* 添加内边距 */
  border-radius: 10px; /* 圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

button {
  margin: 10px; /* 增加边距 */
  border: none; /* 移除边框 */
  padding: 10px 20px; /* 增加填充 */
  border-radius: 5px; /* 圆角按钮 */
  cursor: pointer; /* 手型光标 */
}

.btn-primary {
  background-color: #007bff; /* 主题蓝色 */
  color: white; /* 文字颜色 */
}

.btn-primary:hover {
  background-color: #0056b3; /* 悬停时颜色加深 */
}

button:hover {
  opacity: 0.8; /* 所有按钮悬停时透明度降低 */
}
</style>