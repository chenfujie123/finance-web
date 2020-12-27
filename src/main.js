import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import globalV from './config/globalV.js';
import Qs from 'qs'


Vue.use(globalV);


Vue.prototype.$http = axios;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = '/api';
axios.interceptors.request.use(config => {
  // 表示在配置中的设置头消息的字段Authorization为从本地获取的token值
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
  return config
})
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
