<template>
  <div id="home">
    <HomeHeader/>
    <Tab/>
    <Swiper/>
    <div class="ServicePolicy">
      <ul>
        <li class="item">
          <i></i><span>网易自营品牌</span>
        </li>
        <li class="item">
          <i></i><span>30天无忧退货</span>
        </li>
        <li class="item">
          <i></i><span>48小时快速退款</span>
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
    mounted() {
      this.$store.dispatch('getHomeData')
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
          i:nth-child(1)
            background-image:url(http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png)
</style>
