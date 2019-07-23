import { reqTopicTabs, reqRecommendTopic } from '../../api/'

const state = {
  tabs: [],
  recommend: []
}

const mutations = {
  'receive_tabs'(state, tabs) {
    state.tabs = tabs
  },
  'receive_recommend'(state, recommend) {
    state.recommend = recommend
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
  }
}

export default {
  state,
  mutations,
  actions
}