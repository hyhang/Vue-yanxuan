import { reqCategories } from '../../api/'

const state = {
  categoryList: []
}

const actions = {
  async getCategories({commit}) {
    let result = await reqCategories()
    let categoryList = result.data.categoryL1List
    commit('receiveCategoryList', categoryList)
  }
}

const mutations = {
  'receiveCategoryList'(state, categoryList) {
    state.categoryList = categoryList
  }
}

export default {
  state,
  actions,
  mutations
}