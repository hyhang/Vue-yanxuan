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
    <div class="img">
      <span class="text">去添加点什么吧</span>
    </div>
    <div class="nocart" @click="$router.push('/login')">登录</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'Cart'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cartWrapper
    width 100%
    height 666px
    background-color #F4F4F4
    line-height 43px
    position relative
    .cartHeader
      box-sizing border-box
      background-color #ffffff
      padding 0 15px
      width 100%
      .logo
        font-size 18px
        color #333333
      .text
        float right
        width 45px
        height 43px
        font-size 15px
        color #b4282d
    .servicePolicy 
      background-color #F4F4F4
      height 35px
      line-height 35px
      ul
        display flex
        align-items center
        justify-content space-between
        background-color #eee
        padding 0 15px
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
    .img
      width 124px
      height 124px
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
      background-size 100% 100%
      .text
        position absolute
        left 0
        right 0
        bottom -25px
        text-align center
        color #999999
        font-size 14px
    .nocart
      color #ffffff
      background-color #b4282D
      width 240px
      text-align center
      font-size 15px
      position absolute
      bottom 180px
      left 50%
      transform translateX(-50%)
</style>
