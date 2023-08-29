import { createApp } from 'vue';
import Toast from '../views/ToastComponent.vue';

function useToast() {
    const showToast = (message, type) => {
        console.log("Inside showToast function");

        // 创建一个 Toast Vue 实例并挂载到一个新的 div 元素
        const mountPoint = document.createElement('div');
        const toastInstance = createApp(Toast,{message}).mount(mountPoint);
        
        // 将新创建的 div 元素添加到 body
        document.body.appendChild(mountPoint);
        console.log("Toast added to body");

        // 使用 Toast 实例中的 show 方法显示 toast
        if (toastInstance && typeof toastInstance.show === 'function') {
            toastInstance.show();
        }

        setTimeout(() => {
            app.unmount(); // 卸载 Vue 实例
            document.body.removeChild(mountPoint);
            console.log("Toast removed from body");
        }, 3000);  
    };

    return {
        showToast
    };
}

export default useToast;