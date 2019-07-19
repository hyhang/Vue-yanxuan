import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router/'
import './mock/mock-server'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
