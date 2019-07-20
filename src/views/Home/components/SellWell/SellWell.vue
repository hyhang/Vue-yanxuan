<template>
  <div class="sellWellWrapper">
    <div class="sellWellHeader">
      类目热销榜
    </div>
    <div class="sellWellContent" v-if="sellwell.items">
      <div class="bigItem left">
        <span>{{sellwell.bigItemLeft.name}}</span>
        <img :src="sellwell.bigItemLeft.imgUrl" alt="">
      </div>
      <div class="bigItem right">
        <span>{{sellwell.bigItemRight.name}}</span>
        <img :src="sellwell.bigItemRight.imgUrl" alt="">
      </div>
      <div class="item" v-for="leaderBoard in sellwell.items" :key="leaderBoard.name">
        <div>{{leaderBoard.name}}</div>
        <img :src="leaderBoard.imgUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  export default {
    name: 'SellWell',
    mounted() {
      this.$store.dispatch('getSellWell')
    },
    computed: {
      ...mapState({
        sellwell: state => state.home.sellwell
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .sellWellWrapper
    width 100%
    box-sizing border-box
    padding 0 10px 15px 15px
    margin-bottom 10px
    background-color #fff
    .sellWellHeader
      height 50px
      font-size 16px  
      line-height 50px
    .sellWellContent
      display flex
      flex-wrap wrap
      .bigItem
        display flex
        align-items center
        justify-content space-between
        box-sizing border-box
        margin 0 5px 5px 0
        width 48%
        flex-grow 1
        &.left
          background-color #f9f3e4
        &.right
          background-color #ebeff6
        img 
          width 100px
          height 100px
        span
          display inline-block
          padding-left 12px
          color #333333
          font-size 14px
          span&::befaore
            display inline-block
            width 24px
            height 2px
            background-color #333
      .item
        height 90px
        width 23%
        flex-grow 1
        display flex
        flex-direction column
        justify-content space-evenly
        align-items center
        box-sizing border-box
        margin 0 5px 5px 0
        background-color #f5f5f5
        div
          font-size 12px
        img 
          width 60px
          height 60px
          vertical-align middle

</style>
