<template>
  <div class="giftWrapper">
    <div class="moduleTitle">— 新人专享 —</div>
    <div class="giftContent">
      <div class="left">
        <div class="title">新人专享礼包</div>
        <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
      </div>
      <div class="right">
        <div class="module module1">
          <div class="title">福利社</div>
          <div class="subTitle">今日特价</div>
          <img src="http://yanxuan.nosdn.127.net/5a0d395159cf7f51d48c45599b96df3f.png?imageView&thumbnail=200x200&quality=75" alt="">
        </div>
        <div class="module module2">
          <div class="title">新人拼团</div>
          <span class="tag">1元起包邮</span>
          <img src="http://yanxuan.nosdn.127.net/8cab8087306ee26d8ef22cf91e8ebaf9.png?imageView&thumbnail=200x200&quality=75" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .giftWrapper
    width 100%
    margin 10px 0
    background-color #fff
    padding 0 15px
    box-sizing border-box
    .moduleTitle
      color #333333
      text-align center
      font-size 16px
      height 45px
      line-height 45px
    .giftContent
      padding-bottom 15px
      display flex
      .left
        width 50%
        height 218px
        background-color #f9e9cf
        margin-right 2px
        text-align center
        border-radius 3px
        .title
          text-align left
          vertical-align top
          font-size 16px
          color #333333
          padding 15px 0 0 15px
        img 
          margin-top 25px
          width 129px
          height 129px
      .right
        width 50%
        .module
          width 100%
          height 108px
          border-radius 3px
          padding 10px 0 0 15px
          box-sizing border-box
          position relative
          img 
            width 100px
            height 100px
            position absolute
            bottom 0px
            right 0px
          .title
            color #000000
            font-size 16px
            line-height 1.5
        .module1
          background-color #FBE2D3
          .subTitle
            color #7f7f7f
            line-height 1.5
            font-size 11px
        .module2
          background-color #FFECC2
          margin-top 2px
          .tag
            display inline-block
            color #ffffff
            background-color #cbb693
            padding 0 5px  
            line-height 1.5
            border-radius 3px
            font-size 11px
</style>
