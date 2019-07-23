<template>
  <div class="homeHeader">
    <router-link to="/" class="logo"></router-link>
    <Input/>
    <router-link to="/login" class="loginBtn">登录</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import Input from '../../../../components/Input/Input'
  export default {
    name: 'HomeHeader',
    components: {
      Input
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../../assets/css/mixin.stylus';
  .homeHeader
    position fixed
    top 0px
    left 0px
    width 100%
    height 44px
    background-color #ffffff
    padding 8px 15px
    display flex
    align-items center
    box-sizing border-box
    z-index 5
    clearfix()
    .logo
      width 69px
      height 20px
      margin 0 10px 0 0
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
      background-size 69px 20px
      background-position center
    .loginBtn
      width 37px
      height 20px
      line-height 20px
      border 1px solid #B4282D
      border-radius 3px
      color #B4282D
      font-size 12px
      margin 0 0 0 8px
      text-align center
</style>
