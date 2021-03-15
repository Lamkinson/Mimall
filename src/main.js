import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'


Vue.prototype.axios = axios

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

axios.interceptors.response.use((response)=>{
  const res = response.data
  if(res.status === 0) return res.data
  else if (res.status === 10) window.location.href = '/#/login'
  else alert(res.msg)
})

Vue.config.productionTip = false

new Vue({
  router,     //=>router:router 
  store,
  render: h => h(App)
}).$mount('#app')
