import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css';
import axios from 'axios'
import tree from 'vue-table-with-tree-grid'

// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'

//require styles 导入富文本编辑器的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//注册全局使用
Vue.use(VueQuillEditor)

Vue.component('tree', tree)

//配置请求路径
Vue.prototype.$http =axios
//配置请求的根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
//配置请求的拦截器
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem("token")
  return config;
})
Vue.config.productionTip = false
//使用ElementUI插件
Vue.use(ElementUI)

Vue.filter('dateFormat',function(originVal) {
 const dt =  new Date(originVal)
 const y = dt.getFullYear();
 const m = (dt.getMonth() + 1 + "").padStart(2,'0');
 const dd = (dt.getDate() + '').padStart(2,'0');
 const hh = (dt.getHours() + '').padStart(2,'0');
 const mm = (dt.getMinutes() + '').padStart(2,'0')
 const ss = (dt.getSeconds() + '').padStart(2,'0')

 return `${y}-${m}-${dd} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
