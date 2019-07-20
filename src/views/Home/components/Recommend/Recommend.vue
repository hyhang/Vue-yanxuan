<template>
  <div class="recommendWrapper">
    <div class="moduleHeader">
      <div class="moduleTitle">人气推荐</div>
      <div class="more">
        更多
        <i></i>
      </div>
    </div>
    <div class="recommendContent">
      <div class="spitem" v-if="recommend.spitem">
        <img :src="recommend.spitem.imgUrl" alt="">
        <div class="spitemContent">
          <span class="statusTag">{{recommend.spitem.statusTag}}</span>
          <div class="name">{{recommend.spitem.name}}</div>
          <div class="desc">{{recommend.spitem.desc}}</div>
          <span class="price">￥{{recommend.spitem.price}}</span>
        </div>
      </div>
      <ul v-if="recommend.item">
        <li v-for="(good, index) in recommend.item" :key="index">
          <img :src="good.imgUrl" alt="">
          <span class="name">{{good.name}}</span>
          <span class="price">￥{{good.price}}</span>
          <div class="tagWrapper" v-if="good.status">
            <p class="statusGradientPrice">{{good.status}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  export default {
    name: 'Recommend',
    mounted() {
      this.$store.dispatch('getReCommend')
    },
    computed: {
      ...mapState({
        recommend: state => state.home.recommend
      }),
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommendWrapper
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
    .recommendContent
      display flex
      flex-wrap wrap
      .spitem
        width 100%
        background-color #fef0df
        display flex
        align-items center
        margin-bottom 10px
        img 
          width 140px
          height 140px
        .spitemContent
          box-sizing border-box
          padding-left 15px
          .statusTag
            color #b4282d
            padding 0 7px
            line-height 1.4
            font-size 11px
            background-color rgba(255,255,255,0.9)
            background-image url(//yanxuan.nosdn.127.net/ed89ab4f5ad97ad23257f635a9c2fdbb.png),url(//yanxuan.nosdn.127.net/344655c651a5cf17b7d6096b69be7aba.png),url(//yanxuan.nosdn.127.net/6dcff693a2be08725c1313c7e2390840.png)
            background-repeat no-repeat,no-repeat,repeat-x
            background-position left center, right center, right center
            background-size auto 100%, auto 100%, auto 100%
            margin-bottom 4px
          .name
            width 170px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            font-size 14px
            color #333
            margin 8px 0 4px
          .desc
            color #7f7f7f
            margin 4px 0 8px
            font-size 12px
          .price
            color #b4282d
            font-size 14px
      ul
        width 100%
        display flex
        justify-content space-between
        li
          width 108px
          line-height 1.5
          img 
            width 108px
            height 108px
            background-color #f5f5f5
          .name
            color #333
            font-size 12px
          .price
            color #b4282d
            font-size 12px
          .tagWrapper
            margin-top 4px
            .statusGradientPrice
              display inline-block
              border 1px solid #b4282d
              padding 0 6px
              line-height 1.2
              font-size 11px
              border-radius 20px
              color #b4282d


</style>
