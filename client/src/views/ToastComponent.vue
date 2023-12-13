<!-- MyToast.vue -->
<template>
  <div
    aria-live="polite"
    aria-atomic="true"
    style="position: relative; min-height: 200px"
  >
    <!-- Position it -->
    <div style="position: absolute; top: 0; right: 0">
      <!-- Then put toasts within -->
      <div
        class="toast alert"
        :class="alertClass"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <strong class="mr-auto">{{ message }}</strong>
          <small class="text-muted">just now</small>
          <button
            type="button"
            class="ml-2 mb-1 close"
            data-dismiss="toast"
            @click="closeToast"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- <div class="toast-body">
        See? Just like this.
      </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed, nextTick } from "vue";

const isToastShowing = ref(false);

const props = defineProps({
  message: {
    type: String,
    default: "",
  },
  statusCode: {
    type: Number,
    default: 200,
  },
});

const alertClass = computed(() => {
  switch (props.statusCode) {
    case 200:
      return "alert-success";
    case 400:
      return "alert-warning"; // 或者你可以定义自己的灰色 alert 样式
    case 403:
      return "alert-secondary";
    case 404:
      return "alert-danger";
    case 500:
      return "alert-danger";
    default:
      return "alert-primary"; // 默认颜色
  }
});
const show = () => {
  nextTick(() => {
    let toastElement = document.querySelector(".toast");
    let toastInstance = new bootstrap.Toast(toastElement);
    toastInstance.show();
    isToastShowing.value = true;
  });
};
const closeToast = () => {
  let toastElement = document.querySelector(".toast");
  let toastInstance = new bootstrap.Toast(toastElement);
  toastInstance.hide();
  isToastShowing.value = false;
};

defineExpose({ show, closeToast });
</script>

<style scoped>
.toast {
  position: fixed;
  top: 5%;
  right: 5%;
  z-index: 99999;
  padding: 1rem;
}
div.toast.alert-success {
  color: var(--bs-success-text);
  background-color: var(--bs-success-bg-subtle);
  border-color: var(--bs-success-border-subtle);
}
div.toast.alert-warning {
  color: var(--bs-warning-text);
  background-color: var(--bs-warning-bg-subtle);
  border-color: var(--bs-warning-border-subtle);
}
div.toast.alert-secondary {
  color: var(--bs-dark-text);
  background-color: var(--bs-dark-bg-subtle);
  border-color: var(--bs-dark-border-subtle);
}
div.toast.alert-danger {
  color: var(--bs-danger-text);
  background-color: var(--bs-danger-bg-subtle);
  border-color: var(--bs-danger-border-subtle);
}
</style>