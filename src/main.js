import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueLazyLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg',
})
Vue.use(VueCookie)
Vue.prototype.axios = axios

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

axios.interceptors.response.use((response) => {
    const res = response.data
    if (res.status === 0) return res.data
    else if (res.status === 10) {
      if(location.hash!='#/index')
      window.location.href = '/#/login'
      return Promise.reject(res)
    }
    else {
        Message.warning(res.msg)
        return Promise.reject(res)
    }
},(err)=>{
    const res = err.response
    Message.error(res.data.message)
    return Promise.reject(res)
})

Vue.config.productionTip = false

new Vue({
    router, //=>router:router
    store,
    render: (h) => h(App),
}).$mount('#app')
