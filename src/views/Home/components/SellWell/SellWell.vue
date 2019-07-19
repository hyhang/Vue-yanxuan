<template>
  <div class="sellWellWrapper">
    <div class="sellWellHeader">
      类目热销榜
    </div>
    <div class="sellWellContent">
      <div class="bigItem left">
        <span>热销榜</span>
        <img src="http://yanxuan.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
      </div>
      <div class="bigItem right">
        <span>好评榜</span>
        <img src="http://yanxuan.nosdn.127.net/7dd208d4eb386ca3fc0f794963a0d70e.png?imageView&quality=65&thumbnail=200x200" alt="">
      </div>
      <div class="item">
        <div>居家生活榜</div>
        <img src="http://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
      </div>
      <div class="item">
        <div>居家生活榜</div>
        <img src="http://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
      </div>
      <div class="item">
        <div>居家生活榜</div>
        <img src="http://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
      </div>
      <div class="item">
        <div>居家生活榜</div>
        <img src="http://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
      </div>
      <div class="item">
        <div>居家生活榜</div>
        <img src="http://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
      </div>
      <div class="item">
        <div>居家生活榜</div>
        <img src="http://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
      </div>
      <div class="item">
        <div>居家生活榜</div>
        <img src="http://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
      </div>
      <div class="item">
        <div>居家生活榜</div>
        <img src="http://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'SellWell'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .sellWellWrapper
    width 100%
    box-sizing border-box
    padding 0 15px 15px 15px
    margin-bottom 20px
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
        img 
          width 60px
          height 60px
          vertical-align middle

</style>
