<!-- MyToast.vue -->
<template>
  <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
  <!-- Position it -->
  <div style="position: absolute; top: 0; right: 0;">

    <!-- Then put toasts within -->
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
       
        <strong class="mr-auto">{{message}}</strong>
        <small class="text-muted">just now</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" @click="closeToast" aria-label="Close">
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
import { ref, defineProps } from 'vue';

const props = defineProps({
  message: {
    type: String,
    default: ''
  }
});

const show = () => {
  let toastElement = document.querySelector(".toast");
  let toastInstance = new bootstrap.Toast(toastElement);
  toastInstance.show();
};
const closeToast = () => {
    let toastElement = document.querySelector(".toast");
    let toastInstance = new bootstrap.Toast(toastElement);
    toastInstance.hide();
};

defineExpose({ show})
</script>

<style scoped>
.toast {
    position: fixed;
    top: 5%;
    right: 5%;
    z-index: 99999; 
    padding: 1rem;
}

</style>