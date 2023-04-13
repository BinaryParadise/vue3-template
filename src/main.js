import Vue from 'vue'
import App from './App.vue'

// import '@/assets/main.css'
// import '@/assets/dark.css'
// import '@/assets/light.css'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import router from './router';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
