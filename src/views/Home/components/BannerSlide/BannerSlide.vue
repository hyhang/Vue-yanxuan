<template>
  <div class="bannerSlideWrapper">
    <div v-if="banner" class="banner" :style="'background-image: url('+ banner.bannerUrl +')'"></div>
    <div class="slide">
      <ul v-if="banner.item">
        <li v-for="(good, index) in banner.item" :key="index">
          <img :src="good.imgUrl" alt="">
          <span class="name">{{good.name}}</span>
          <div class="priceWrapper">
            <span class="price">￥{{good.price}}</span>
            <span class="oldPrice" v-if="good.oldPrice"><s>￥{{good.oldPrice}}</s></span>
          </div>
          <div class="tagWrapper">
            <span class="tag"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import BS from 'better-scroll'
  export default {
    name: 'BannerSlide',
    mounted() {
      this.$store.dispatch('getBannerSlide')
    },
    computed: {
      ...mapState({
        banner: state => state.home.banner
      })
    },
    watch: {
      banner() {
        this.$nextTick(() => {
          new BS('.slide', {
            click: true,
            scrollX: true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .bannerSlideWrapper
    background-color #fff
    width 100%
    margin-bottom 10px
    .banner
      width 100%
      height 185px
      background-size 100% 100%
      margin-bottom 10px
    .slide
      overflow hidden
      display flex
      ul 
        display flex
        padding-left 15px
        li
          width 100px
          line-height 1.5
          margin-right 10px
          img 
            width 100px
            height 100px
            background-color #f4f4f4
          .name
            font-size 12px
          .priceWrapper
            .price
              font-size 12px
              color #b4282d
            .oldPrice
              font-size 12px
              color #999
              margin-left 4px
</style>
