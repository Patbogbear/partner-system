import { createApp,VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import axios from './http'


createApp(App).use(store).use(router).mount('#app')
