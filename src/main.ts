import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import moment from 'moment'

const app = createApp(App)

app.config.globalProperties.$moment = moment

app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.use(router)

app.mount('#app')
