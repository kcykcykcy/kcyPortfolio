import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import 'fomantic-ui/dist/semantic.min.css'
import './assets/css/arrLoad.css'


const app = createApp(App)
app.config.globalProperties.$axios = axios
createApp(App).use(router).use(createPinia()).mount('#app')
