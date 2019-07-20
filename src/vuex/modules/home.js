import {reqHomeData} from '../../api/'
import { 
  RECEIVE_CATEGORIES,
  RECEIVE_TAB,
  RECEIVE_SWIPER,
  RECEIVE_BANNERSLIDE,
  RECEIVE_CUTDOWN,
  RECEIVE_RECOMMEND,
  RECEIVE_SERVICE,
  RECEIVE_SELLWELL
} from '../mutation-types'

const state = {
  categories: [],
  tab:[],
  swiper: [],
  banner: {},
  cutdown: [],
  recommend: {},
  service:[],
  sellwell:{}
}

const mutations = {
  [RECEIVE_CATEGORIES](state, categories){
    state.categories = categories
  },
  [RECEIVE_TAB](state, tab) {
    state.tab = tab
  },
  [RECEIVE_BANNERSLIDE](state, banner) {
    state.banner = banner
  },
  [RECEIVE_SWIPER](state, swiper) {
    state.swiper = swiper
  },
  [RECEIVE_CUTDOWN](state, cutdown) {
    state.cutdown = cutdown
  },
  [RECEIVE_RECOMMEND](state, recommend) {
    state.recommend = recommend
  },
  [RECEIVE_SERVICE](state, service) {
    state.service = service
  },
  [RECEIVE_SELLWELL](state, sellwell) {
    state.sellwell = sellwell
  }
}

const actions = {
  async getCategories({commit}) {
    let result = await reqHomeData()
    let data = result.data
    commit(RECEIVE_CATEGORIES, data.kingKongModule.kingKongList)
  },
  async getTabData({commit}) {
    let result = await reqHomeData()
    let data = result.data
    commit(RECEIVE_TAB, data.Tab)
  },
  async getSwiper({commit}) {
    let result = await reqHomeData()
    let data = result.data
    commit(RECEIVE_SWIPER, data.swiperImg)
  },
  async getBannerSlide({commit}) {
    let result = await reqHomeData()
    let data = result.data
    commit(RECEIVE_BANNERSLIDE, data.BannerSlide)
  },
  async getCutDown({commit}) {
    let result = await reqHomeData()
    let data = result.data
    commit(RECEIVE_CUTDOWN, data.cutdown)
  },
  async getReCommend({commit}) {
    let result = await reqHomeData()
    let data = result.data
    commit(RECEIVE_RECOMMEND, data.recommend)
  },
  async getService({commit}) {
    let result = await reqHomeData()
    let data = result.data
    commit(RECEIVE_SERVICE, data.policyDescList)
  },
  async getSellWell({commit}) {
    let result = await reqHomeData()
    let data = result.data
    commit(RECEIVE_SELLWELL, data.SellWell)
  }
}

export default {
  state,
  mutations,
  actions
}