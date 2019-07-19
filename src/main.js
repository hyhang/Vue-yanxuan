import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router/'
import './mock/mock-server'
import store from './vuex/store'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
