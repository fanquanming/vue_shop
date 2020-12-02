import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css';
import axios from 'axios'
Vue.prototype.$http =axios
//配置请求的根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
Vue.config.productionTip = false
//使用ElementUI插件
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
