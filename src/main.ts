import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import "@/config/axiosConfig"
import piniaConfig from "@/config/piniaConfig"

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

piniaConfig(pinia)

if (import.meta.env.DEV) {
    import('@/mock/index')
    console.info("Mock enabled.");
}