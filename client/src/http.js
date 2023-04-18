import axios from 'axios';
import router from './router'

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
        return response
    }, error => {
        const { status } = error.response;ß
        if (status == 401) {
            console.log("token invalid,please login again")
            //clear token
            localStorage.removeItem("userToken")
            // jump to login page
            router.push('/login')
        }

        return Promise.reject(error)
    })

export default axios