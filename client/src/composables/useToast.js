import { createApp } from 'vue';
import Toast from '../views/ToastComponent.vue';

function useToast() {
    const showToast = (message, statusCode) => {
        console.log("Inside showToast function");

        // 创建一个新的 div 元素作为挂载点
        const mountPoint = document.createElement('div');
        document.body.appendChild(mountPoint);

        // 使用 createApp 创建一个新的 Vue app 实例，并将 Toast 组件挂载到 mountPoint 上
        const toastApp = createApp(Toast, { message, statusCode }); // 注意这里增加了statusCode
        const toastInstance = toastApp.mount(mountPoint);

        console.log("Toast added to body");

        // 如果 Toast 组件有 show 方法，则调用它
        if (toastInstance && typeof toastInstance.show === 'function') {
            toastInstance.show();
        }

        setTimeout(() => {
            toastApp.unmount(); // 使用 toastApp 卸载组件
            document.body.removeChild(mountPoint);
            console.log("Toast removed from body");
        }, 30000);  
    };

    return {
        showToast
    };
}

export default useToast;