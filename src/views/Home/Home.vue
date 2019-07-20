<template>
  <div id="home">
    <HomeHeader/>
    <Tab/>
    <Swiper/>
    <div class="ServicePolicy">
      <ul>
        <li class="item" v-for="(item,index) in service" :key="index">
          <i :style="'background-image:url('+ item.icon +')'"></i><span>{{item.desc}}</span>
        </li>
      </ul>
    </div>
    <Categories/>
    <Gift/>
    <Brand/>
    <SellWell/>
    <Recommend/>
    <Showcase/>
    <BannerSlide/>
  </div>
</template>

<script>
  import HomeHeader from '../../components/HomeHeader/HomeHeader'
  import Categories from './components/Categories/Categories'
  import Swiper from './components/Swiper/Swiper.vue'
  import Gift from './components/Gift/Gift'
  import Tab from './components/Tab/Tab'
  import Brand from './components/Brand/Brand'
  import SellWell from './components/SellWell/SellWell'
  import Recommend from './components/Recommend/Recommend'
  import BannerSlide from './components/BannerSlide/BannerSlide'
  import Showcase from './components/Showcase/ShowCase'
  import { mapState } from 'vuex'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      Swiper,
      Categories,
      Gift,
      Tab,
      Brand,
      SellWell,
      Recommend,
      BannerSlide,
      Showcase
    },
    computed: {
      ...mapState({
        service: state => state.home.service
      })
    },
    mounted() {
      this.$store.dispatch('getCategories'),
      this.$store.dispatch('getService')
    }
  }
</script>

<style lang="stylus" scoped>
  #home
    padding-top 75px
    padding-bottom 50px
    width 100%
    .ServicePolicy
      background-color #fff
      padding 0 15px  
      height 36px
      ul
        display flex
        justify-content space-between
        .item
          display flex
          line-height 36px
          align-items center
          span 
            font-size 12px
            color #333333
            margin-left 4px
          i 
            width 16px
            height 16px
            background-repeat no-repeat
            background-size 100% 100%
</style>
