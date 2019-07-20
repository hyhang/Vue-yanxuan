<template>
  <div class="showCaseWrapper">
    <div class="moduleHeader">
      <div class="titleWrapper">
        <div class="moduleTitle">限时购</div>
        <div class="cutdown">
          <span class="hour">00</span>:
          <span class="mins">00</span>:
          <span class="secs">00</span>
        </div>
      </div>
      <div class="more">
        更多
        <i></i>
      </div>
    </div>
    <ul class="moduleContent">
      <li v-for="(good,index) in cutdown" :key="index">
        <img :src="good.imgURL" alt="">
        <span class="price">￥{{good.price}}</span>
        <span class="oldPrice" v-if="good.oldPrice"><s>￥{{good.oldPrice}}</s></span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  export default {
    name: 'ShowCase',
    mounted() {
      this.$store.dispatch('getCutDown')
    },
    computed: {
      ...mapState({
        cutdown: state => state.home.cutdown
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .showCaseWrapper
    background-color #fff
    width 100%
    box-sizing border-box
    padding 0 15px 15px 15px
    margin-bottom 10px
    .moduleHeader
      height 50px
      display flex
      align-items center
      justify-content space-between
      font-size 16px
      color #333333
      .titleWrapper
        display flex
        align-items center
        .cutdown
          margin-left 10px
          font-size 14px
          span
            background-color #333
            color #ffffff
            padding 0 1px
            border-radius 3px
            margin-right 3px
      .more
        margin-right 3px
        font-size 14px
        i
          display inline-block
          width 6px
          height 11px
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png)
          background-repeat no-repeat
          background-size 100% 100%
    .moduleContent
      display flex
      flex-wrap wrap
      flex-grow 1
      justify-content space-between
      li
        width 108px
        padding-bottom 15px
        line-height 1.5
        img 
          width 108px
          height 108px
          background-color #f5f5f5
        .price
          font-size 14px
          color #b4282d
          margin-left 10px
        .oldPrice
          font-size 12px
          color #999
          margin-left 3px

</style>
