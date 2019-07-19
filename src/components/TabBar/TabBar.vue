<template>
  <div id="tabbar">
    <div class="nav">
      <router-link to="/" class="home active">
        <i></i>
        <span>首页</span>
      </router-link>
      <router-link to="/cateList" class="cateList">
        <i></i>
        <span>分类</span>
      </router-link>
      <router-link to="/topic" class="topic">
        <i></i>
        <span>识物</span>
      </router-link>
      <router-link to="/cart" class="cart">
        <i></i>
        <span>购物车</span>
      </router-link>
      <router-link to="/login" class="login">
        <i></i>
        <span>我的</span>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'TabBar'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/mixin.stylus';
  #tabbar
    width 100%
    height 49px
    .nav
      top-border-1px(#ddd)
      position fixed
      left 0
      bottom 0
      width 100%
      height 49px
      display flex
      background-color #fff
      z-index 5
      a
        display block
        width 20%
        height 100%
        text-align center
        display flex
        flex-direction column
        justify-content space-evenly
        &.cateList i
          background-position 0 -75px
        &.topic i
          background-position 0 -175px
        &.cart i
          background-position 0 -25px
        &.login i
          background-position 0 -225px
        &.active span
          color #b4282d
        &.active.home i
          background-position 0 -100px
        &.active.cateList i
          background-position 0 -50px
        &.active.topic i
          background-position 0 -150px
        &.active.cart i
          background-position 0 0
        &.active.login i
          background-position 0 -200px
        i 
          display block
          margin 0 auto
          width 20px
          height 20px
          text-align center
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png)
          background-repeat no-repeat
          background-size 20px 245px
          background-position 0 -125px
        span 
          margin-top -5px
          color #666
          font-size 12px
</style>
