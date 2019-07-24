<template>
  <div class="topicExpertHeader">
    <div class="headerContent">
      <router-link to="/" class="home" replace></router-link>
      <div class="nav">
        <span class="active" @click="$router.push('/topic/0')">发现</span>
        <span @click="$router.push('/expert')">甄选家</span>
      </div>
      <div class="right">
        <router-link to="/" class="search"></router-link>
        <router-link to="/cart" class="cart"></router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/mixin.stylus'
  .topicExpertHeader
    width 100%
    bottom-border-1px(#ddd)
    position fixed
    top 0
    left 0
    z-index 5
    .headerContent
      padding 0 12px  
      height 50px
      box-sizing border-box
      background-color #FAFAFA
      vertical-align middle
      display flex
      align-items center
      position relative
      display flex
      justify-content space-between
      a
        display inline-block
        width 24px
        height 22px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png)
        background-size 86px 210px
        background-position 0 -37px
      .nav
        width 160px
        height 50px
        position absolute
        margin auto
        left 0
        right 0
        background-position 0 -63px
        display flex
        justify-content center
        align-items center
        span
          color #7F7F7F
          padding 0 8px  
          font-size 14px
        span.active
          color #b4282d
          font-size 20px
          font-weight bold
      .search
        width 30px
        height 30px
        background-position 0 -178px
        margin-right 10px
      .cart
        width 30px
        height 30px
        background-position 0 0px
    
 
</style>
