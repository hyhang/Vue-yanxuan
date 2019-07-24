import { reqSearchKeyword, autoComplete } from '../../api/'

const state = {
  keywords: {},
  autoCompleteWord: ''
}

const mutations = {
  'receive_keywords'(state, keywords) {
    state.keywords = keywords
  },
  'receive_word'(state, word) {
    state.autoCompleteWord = word
  }
}

const actions = {
  async getKeywords ({commit}) {
    const result = await reqSearchKeyword()
    if(result.code === '200') {
      commit('receive_keywords', result.data)
    }
  },
  async getCompleteWord({commit}, keywordPrefix) {
    const result = await autoComplete(keywordPrefix)
    if(result.code === '200') {
      commit('receive_word', result.data)
    }
  }
}

export default {
  state,
  mutations,
  actions
}