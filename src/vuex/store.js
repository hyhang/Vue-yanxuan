import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import home from './modules/home'
import categoryList from './modules/categoryList'
import topic from './modules/topic'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    home,
    categoryList,
    topic
  }
})