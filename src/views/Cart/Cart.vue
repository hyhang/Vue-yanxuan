<template>
  <div class="cartWrapper">
    <div class="cartHeader">
      <span class="logo">购物车</span>
      <span class="text">领券</span>
    </div>
    <div class="servicePolicy">
      <ul>
        <li>
          <i></i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i></i>
          <span>48小时快速退款</span>
        </li>
        <li>
          <i></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cartWrapper
    width 100%
    height 44px
    background-color #ffffff
    box-sizing border-box
    padding 0 15px
    line-height 44px
    .cartHeader
      width 100%
      .logo
        font-size 18px
        color #333333
      .text
        float right
        width 45px
        height 44px
        font-size 15px
        color #b4282d
    .servicePolicy ul
      display flex
      align-items center
      justify-content space-between
      background-color #eee
      i
        display inline-block
        width 5px
        height 5px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png)
        background-position center
        background-repeat no-repeat
        background-size 100% 100%
        margin-right 3px
        vertical-align middle
      span 
        color #666666
        vertical-align middle

</style>
