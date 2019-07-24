import { reqTopicTabs, reqRecommendTopic, reqAutoTopic } from '../../api/'

const state = {
  tabs: [],
  recommend: [],
  autotopic: []
}

const mutations = {
  'receive_tabs'(state, tabs) {
    state.tabs = tabs
  },
  'receive_recommend'(state, recommend) {
    state.recommend = recommend
  },
  'receive_autotopic'(state, autotopic) {
    state.autotopic.push(autotopic)
  }
}

const actions = {
  async getTopicTabs ({commit}) {
    const result = await reqTopicTabs()
    const tabs = result.data
    commit('receive_tabs', tabs)
  },
  async getRecommend ({commit}) {
    const result = await reqRecommendTopic()
    const recommend = result.data
    commit('receive_recommend', recommend)
  },
  async getAutoTopic({commit}, page) {
    const result = await reqAutoTopic(page)
    const autoTopic = result.data
    commit('receive_autotopic', autoTopic)
  }
}

export default {
  state,
  mutations,
  actions
}