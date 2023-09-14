import axios from 'axios';
import router from './router'
import useToast from './composables/useToast'


axios.interceptors.request.use(
    config => {
        if (localStorage.userToken) {
            config.headers.Authorization = localStorage.userToken;
        }
        return config;
    }, error => {
        return Promise.reject(error)
    }
)


axios.interceptors.response.use(
    response => {
        
        const { showToast } = useToast();

        // 判断是否存在 message 并显示 toast
        if (response.data && response.data.message) {
            showToast(response.data.message, response.status);
        }
        return response
    },
    async error => {
        const { showToast } = useToast()
        console.log("error response:", error.response)
        if (error.response) {
            const { status, data } = error.response;

            // 使用后端返回的 message 或默认信息
            const errorMessage = data.message || data.error || 'An error occurred.';

            // 为特定的状态码设置特殊处理
            if (status === 401) {
                showToast('Token invalid. Please login again.', status,'error');
                localStorage.removeItem('userToken');
                router.push('/login');
            } else {
                // 对于其他状态码，直接显示后端返回的错误信息
                showToast(errorMessage, status);
            }
        } else {
            // 如果没有 error.response，可能是网络问题或其他问题
            showToast('Network error. Please try again.', 'error');
        }

        return Promise.reject(error);
    }
);


export default axios