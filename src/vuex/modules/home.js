import {reqHomeData} from '../../api/'
import { RECEIVE_CATEGORIES } from '../mutation-types'

const state = {
  homeData: {},
  categories: []
}

const mutations = {
  [RECEIVE_CATEGORIES](state, categories){
    state.categories = categories
  }
}

const actions = {
  async getHomeData({commit}) {
    let result = await reqHomeData()
    let categories = result.data
    commit(RECEIVE_CATEGORIES, categories.kingKongModule.kingKongList)
  }
}

export default {
  state,
  mutations,
  actions
}